import Beautifier from './beautifier';
import { callbackify } from 'util';
import BinanceREST from '../base/spot-api';
import RequestHandler from '../base/util/request-handler';

interface BinanceRestOptions {
    /** Get this from your account on binance.com */
    key: string;
    /** Get this from your account on binance.com */
    secret: string;
    /** Optional, defaults to 5000, increase if you're getting timestamp errors */
    recvWindow?: number;
    /** Optional, defaults to 15000, is the request time out in milliseconds */
    timeout?: number;
    /**
     * Optional, default is false. Binance's API returns objects with lots of one letter keys.  By
     * default those keys will be replaced with more descriptive, longer ones.
     */
    disableBeautification?: boolean;
    /**
     * Optional, default is false.  If turned on, the library will attempt to handle any drift of
     * your clock on it's own.  If a request fails due to drift, it'll attempt a fix by requesting
     * binance's server time, calculating the difference with your own clock, and then reattempting
     * the request.
     */
    handleDrift?: boolean;
    /**
     * Optional, default is false.  If turned on, the library will attempt to handle any drift of
     * your clock on it's own.  If a request fails due to drift, it'll attempt a fix by requesting
     * binance's server time, calculating the difference with your own clock, and then reattempting
     * the request.
     */
    baseUrl?: string;
    /**
     * Options as supported by the 'request' library
     * For a list of available options, see:
     * https://github.com/request/request
     */
    requestOptions?: {};
}

export default class BinanceRest {

    private key: string;
    private secret: string;
    private recvWindow: number;
    private timeout: number;
    private disableBeautification: boolean;
    private handleDrift: boolean;
    private baseUrl: string;
    private requestOptions: {};

    private beautifier: Beautifier;

    private drift: number;
    private syncInterval: NodeJS.Timeout | number;

    private binance: BinanceREST;

    constructor({
        key, secret, recvWindow, timeout, disableBeautification, handleDrift, baseUrl, requestOptions
    }: BinanceRestOptions) {
        this.key = key;
        this.secret = secret;
        this.recvWindow = recvWindow || 5000;
        this.timeout = timeout || 15000;
        this.disableBeautification = disableBeautification || false;
        this.handleDrift = handleDrift || false;
        this.requestOptions = requestOptions || {};
        this.beautifier = new Beautifier();
        this.baseUrl = baseUrl || 'https://api.binance.com/';
        // remove trailing slash if necessary
        if ('/' === this.baseUrl.substr(-1)) {
            this.baseUrl.slice(0,-1);
        }
        this.binance = new BinanceREST(new RequestHandler('','',''));

        this.drift = 0;
        this.syncInterval = 0;
    }

    getBaseUrl() { return this.baseUrl; }

    // private doBeautifications(response, route) {
    //     if (this.disableBeautification) {
    //         return response;
    //     }
    //     return this.beautifier.beautify(response, route);
    // }

    private setTimestamp<T extends {timestamp?: number}>(query: T): T & { timestamp: number } {
        if (!query.timestamp) {
            query.timestamp = this.getTime() + this.drift;
        }
        return query as T & { timestamp: number };
    }

    /** Gets the time value in miliseconds */
    private getTime() { return new Date().getTime(); }

    /**
     * 
     */
    async calculateDrift(): Promise<void> {
        const systemTime = this.getTime();
        return this.time().then(response => {
            // Calculate the approximate trip time from here to binance
            const transitTime = Math.round((this.getTime() - systemTime) / 2);
            this.drift = response.serverTime - (systemTime + transitTime);
        });
    }

    /**
     * 
     * @param interval 
     * @param onRecalculateDriftCb 
     */
    startTimeSync(interval = 300000, onRecalculateDriftCb: (value: Promise<void>) => void) {
        return new Promise<void>((resolve, reject) => {
            // If there's already an interval running, clear it and reset values
            if (this.syncInterval !== 0) {
                this.endTimeSync();
                return resolve();
            }

            // Calculate initial drift value and setup interval to periodically update it
            this.calculateDrift().then(resolve).catch(reject);

            this.syncInterval = setInterval(() => {
                const promise = this.calculateDrift();

                if (typeof onRecalculateDriftCb === 'function') {
                    onRecalculateDriftCb(promise);
                }
            }, interval);
        });
    }

    /**
     * Clears the interval to keep the API connector synced with the 
     * server time.
     */
    endTimeSync() {
        clearInterval(this.syncInterval as NodeJS.Timeout);
        this.drift = 0;
        this.syncInterval = 0;
    }

    /**
     * Test connectivity to the REST API.  
     * Weight: 1  
     * Reference:  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     * @param callback 
     */
    ping(callback?: undefined): Promise<void>;
    ping(callback: PingCallback): void ;
    ping(callback?: PingCallback | undefined): any {
        if(callback) {
            callbackify(this.binance.queryPing)(callback)
        } else {
            return this.binance.queryPing();
        }
    }

    /**
     * Test connectivity to the REST API and get the current server time.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     * @param callback 
     */
    time(callback?: undefined): Promise<QueryTimeResponse>;
    time(callback: TimeCallback): void;
    time(callback?: TimeCallback | undefined): any{
        if(callback) {
            callbackify(this.binance.queryTime)(callback)
        } else {
            return this.binance.queryTime();
        }
    }

    /**
     * Gets the order book depth.  
     * Weight: Adjusted based on the limit:  
     * 5-100: 1  
     * 500:   5  
     * 1000   10  
     * 5000   50  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
     * @param query 
     * @param callback 
     */
    depth(query: QueryDepthParameters | string, callback?: undefined): Promise<QueryDepthResponse>;
    depth(query: QueryDepthParameters | string, callback: DepthCallback): void;
    depth(query: QueryDepthParameters | string, callback?: DepthCallback | undefined): any {
        if(typeof query === 'string') { query = { symbol: query }; }
        if(callback) {
            callbackify(this.binance.queryDepth)(query, callback)
        } else {
            return this.binance.queryDepth(query);
        }
    }

    /**
     * Get recent trades.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     * @param query 
     * @param callback 
     */
    trades(query: QueryTradesParameters | string, callback?: undefined): Promise<QueryTradesResponse>;
    trades(query: QueryTradesParameters | string, callback: TradesCallback): void;
    trades(query: QueryTradesParameters | string, callback?: TradesCallback | undefined): any {
        if(typeof query === 'string') { query = { symbol: query }; }
        if(callback) {
            callbackify(this.binance.queryTrades)(query, callback)
        } else {
            return this.binance.queryTrades(query);
        }
    }

    /**
     * Get older trades.  
     * Weight: 5  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     * @param query 
     * @param callback 
     */
    historicalTrades(query: QueryHistoricalTradesParameters | string, callback?: undefined): Promise<QueryHistoricalTradesResponse>;
    historicalTrades(query: QueryHistoricalTradesParameters | string, callback: HistoricalTradesCallback): void;
    historicalTrades(query: QueryHistoricalTradesParameters | string, callback?: HistoricalTradesCallback | undefined): any {
        if(typeof query === 'string') { query = { symbol: query }; }
        if(callback) {
            callbackify(this.binance.queryHistoricalTrades)(query, callback)
        } else {
            return this.binance.queryHistoricalTrades(query);
        }
    }

    /**
     * Get compressed, aggregate trades.  
     * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
     * @param query 
     * @param callback 
     */
    aggTrades(query: QueryAggTradesParameters | string, callback?: undefined): Promise<QueryAggTradesResponse>;
    aggTrades(query: QueryAggTradesParameters | string, callback: AggTradesCallback): void;
    aggTrades(query: QueryAggTradesParameters | string, callback?: AggTradesCallback | undefined): any {
        if(typeof query === 'string') { query = { symbol: query }; }
        if(callback) {
            callbackify(this.binance.queryAggTrades)(query, callback)
        } else {
            return this.binance.queryAggTrades(query);
        }
    }

    /**
     * Current exchange trading rules and symbol information.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     * @param callback 
     */
    exchangeInfo(callback?: undefined): Promise<QueryAggTradesResponse>;
    exchangeInfo(callback: ExchangeInfoCallback): void;
    exchangeInfo(callback?: ExchangeInfoCallback | undefined): any {
        if(callback) {
            callbackify(this.binance.queryExchangeInfo)(callback)
        } else {
            return this.binance.queryExchangeInfo();
        }
    }

    /**
     * Kline/candlestick bars for a symbol.  
     * Klines are uniquely identified by their open time.  
     * If startTime and endTime are not sent, the most recent klines are returned.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
     * @param query 
     * @param callback 
     */
    klines(query: QueryKlinesParameters, callback?: undefined): Promise<QueryKlinesResponse>;
    klines(query: QueryKlinesParameters, callback: KlinesCallback): void;
    klines(query: QueryKlinesParameters, callback?: KlinesCallback | undefined): any {
        if(callback) {
            callbackify(this.binance.queryKlines)(query, callback)
        } else {
            return this.binance.queryKlines(query);
        }
    }

    /**
     * 24 hour rolling window price change statistics.  
     * Weight: 1 or 40
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     * @param query 
     * @param callback 
     */
    ticker24Hr(query: QueryTicker24HrParameters, callback?: undefined): Promise<QueryTicker24HrResponse>;
    ticker24Hr(query?: {}, callback?: undefined): Promise<QueryTicker24HrResponse[]>;
    ticker24Hr(query: QueryTicker24HrParameters, callback: (err: Error, value: QueryTicker24HrResponse) => void): void;
    ticker24Hr(query: {}, callback: (err: Error, value: QueryTicker24HrResponse[]) => void): void;
    ticker24Hr(query: QueryTicker24HrParameters | {}, callback?: Ticker24HrCallback | undefined): any {
        if(!query) query = {};
        if(callback) {
            callbackify(this.binance.queryTicker24hr)(query, callback)
        } else {
            return this.binance.queryTicker24hr(query);
        }
    }

    /**
     * Latest price for a symbol.  
     * Weight: 1 or 2 
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     * @param query 
     * @param callback 
     */
    tickerPrice(query: QueryTickerPriceParameters, callback?: undefined): Promise<QueryTickerPriceResponse>;
    tickerPrice(query: QueryTickerPriceParameters, callback: TickerPriceCallback): void;
    tickerPrice(query: QueryTickerPriceParameters, callback?: TickerPriceCallback | undefined): any {
        if(callback) {
            callbackify(this.binance.queryTickerPrice)(query, callback)
        } else {
            return this.binance.queryTickerPrice(query);
        }
    }

    /**
     * Best price/qty on the order book for a symbol.  
     * Weight: 1 or 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     * @param query 
     * @param callback 
     */
    bookTicker(query: QueryBookTickerParameters | string, callback: (err: Error, value: QueryBookTickerResponse) => void): void;
    bookTicker(query: Omit<QueryBookTickerParameters, 'symbol'>, callback: (err: Error, value: QueryBookTickerResponse[]) => void): void;
    bookTicker(query: QueryBookTickerParameters | string, callback?: undefined): Promise<QueryBookTickerResponse>;
    bookTicker(query: undefined, callback?: undefined): Promise<QueryBookTickerResponse[]>;
    bookTicker(query?: QueryBookTickerParameters | {} | string, callback?: BookTickerCallback | undefined): any {
        if(!query) { query = {}; }
        else if(typeof query === 'string') { query = { symbol: query }; }
        if(callback) {
            this.binance.queryBookTicker({});
            callbackify(this.binance.queryBookTicker)(query as QueryBookTickerParameters, callback); // TODO WHY?!?!
        } else {
            return this.binance.queryBookTicker(query);
        }
    }

    /**
     * Returns the best price/qty on the order book for all symbols.
     * This route appears on an old API document, but does not appear in the most recent set of docs.
     * You should probably use bookTicker() instead as it utilizes a route with a newer version.
     * @param callback 
     * @deprecated
     */
    allBookTickers(callback?: undefined): Promise<QueryBookTickerResponse[]>;
    allBookTickers(callback: AllBookTickersCallback): void;
    allBookTickers(callback?: AllBookTickersCallback | undefined): any {
         if(callback) {
             (callbackify(this.binance.queryBookTicker) as unknown as AllBookTickersCallbackify)({}, callback)
         } else {
             return this.binance.queryTime();
         }
     }

    /**
     * Returns the latest price for all symbols.
     * This route appears on the old API document, but does not appear in the most recent set of docs.
     * You should probably use tickerPrice() instead as it utilizes a route with a newer version.
     * @param callback
     * @deprecated
     */
    allPrices(callback?: undefined): Promise<QueryTickerPriceResponse[]>;
    allPrices(callback: AllPricesCallback): void;
    allPrices(callback?: AllPricesCallback | undefined): any {
        if(callback) {
            (callbackify(this.binance.queryTickerPrice))({}, callback)
        } else {
            return this.binance.queryTickerPrice({});
        }
    }

    /**
     * Send in a new order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     * @param query 
     * @param callback 
     */
    newOrder(query: CreateOrderParameters & { newOrderRespType: 'ACK' }, callback?: undefined): Promise<OrderACKResponse>;
    newOrder(query: CreateOrderParameters & { newOrderRespType: 'RESULT' }, callback?: undefined): Promise<OrderRESULTResponse>;
    newOrder(query: CreateOrderParameters & { newOrderRespType: 'FULL' }, callback?: undefined): Promise<OrderFULLResponse>;
    newOrder(query: CreateOrderParameters & { newOrderRespType: 'ACK' }, callback: (err: Error, value: OrderACKResponse) => void): void;
    newOrder(query: CreateOrderParameters & { newOrderRespType: 'RESULT' }, callback: (err: Error, value: OrderRESULTResponse) => void): void;
    newOrder(query: CreateOrderParameters & { newOrderRespType: 'FULL' }, callback: (err: Error, value: OrderFULLResponse) => void): void;
    newOrder(query: any, callback?: any): any {
        if(callback) {
            callbackify(this.binance.createOrder)(query, callback);
        } else {
            return this.binance.createOrder(query);
        }
    }

    /**
     * Test new order creation and signature/recvWindow long.
     * Creates and validates a new order but does not send it into the matching engine.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade
     */
    testOrder(query: CreateOrderParameters & { newOrderRespType: 'ACK' }, callback?: undefined): Promise<OrderACKResponse>;
    testOrder(query: CreateOrderParameters & { newOrderRespType: 'RESULT' }, callback?: undefined): Promise<OrderRESULTResponse>;
    testOrder(query: CreateOrderParameters & { newOrderRespType: 'FULL' }, callback?: undefined): Promise<OrderFULLResponse>;
    testOrder(query: CreateOrderParameters & { newOrderRespType: 'ACK' }, callback: (err: Error, value: OrderACKResponse) => void): void;
    testOrder(query: CreateOrderParameters & { newOrderRespType: 'RESULT' }, callback: (err: Error, value: OrderRESULTResponse) => void): void;
    testOrder(query: CreateOrderParameters & { newOrderRespType: 'FULL' }, callback: (err: Error, value: OrderFULLResponse) => void): void;
    testOrder(query: any, callback?: any): any {
        if(callback) {
            callbackify(this.binance.testOrder)(query, callback);
        } else {
            return this.binance.testOrder(query);
        }
    }

    /**
     * Check an order's status.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     * @param query 
     * @param callback 
     */
    queryOrder(query: QueryOrderParameters, callback?: undefined): Promise<QueryOrderResponse>;
    queryOrder(query: QueryOrderParameters, callback: QueryOrderCallback): void;
    queryOrder(query: QueryOrderParameters, callback?: QueryOrderCallback | undefined): any {
        if(callback) {
            callbackify(this.binance.queryOrder)(query, callback);
        } else {
            return this.binance.queryOrder(query);
        }
    }

    /**
     * Cancel an active order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     * @param query 
     * @param callback 
     */
    cancelOrder(query: CancelOrderParameters, callback?: undefined): Promise<CancelOrderResponse>;
    cancelOrder(query: CancelOrderParameters, callback: CancelOrderCallback): void;
    cancelOrder(query: CancelOrderParameters, callback?: CancelOrderCallback | undefined): any {
         if(callback) {
             callbackify(this.binance.cancelOrder)(query, callback);
         } else {
             return this.binance.cancelOrder(query);
         }
     }

    /**
     * Get all open orders on a symbol. Careful when accessing this with no symbol.  
     * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
     * @param query 
     * @param callback 
     */
    // openOrders(query: QueryOpenOrdersParameters | string, callback?: undefined): Promise<QueryOpenOrdersResponse>;
    // openOrders(query: Omit<QueryOpenOrdersParameters, 'symbol'>, callback?: undefined): Promise<QueryOpenOrdersResponse[]>;
    // openOrders(query: QueryOpenOrdersParameters | string, callback: (err: Error, value: QueryOpenOrdersResponse) => void): void;
    // openOrders(query: Omit<QueryOpenOrdersParameters, 'symbol'>, callback: (err: Error, value: QueryOpenOrdersResponse[]) => void): void;
    // openOrders(query: QueryOpenOrdersParameters, callback?: any | undefined): any {
    //     if(typeof query === 'string') { query = this.setTimestamp<QueryOpenOrdersParameters>({ symbol: query }) }
    //     if(callback) {
    //         callbackify(this.binance.queryOpenOrders)(query, callback);
    //     } else {
    //         return this.binance.queryOpenOrders(query);
    //     }
    //   }

    // /**
    //  * Get all account orders; active, canceled, or filled.  
    //  * Weight: 5 with symbol  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
    //  * @param query 
    //  * @param callback 
    //  */
    // allOrders(query: QueryAllOrdersParameters) {
    //     if(typeof query === 'string') { query = this.setTimestamp<QueryOpenOrdersParameters>({ symbol: query }) }
    //     if(callback) {
    //         callbackify(this.binance.queryAllOrders)(query, callback);
    //     } else {
    //         return this.binance.queryAllOrders(query);
    //     }
    // }

    // /**
    //  * 
    //  * @param query 
    //  * @param callback 
    //  */
    // account(query = {}, callback) {
    // }

    // /**
    //  * 
    //  * @param query 
    //  * @param callback 
    //  */
    // myTrades(query = {}, callback) {
    // }

    // /**
    //  * 
    //  * @param query 
    //  * @param callback 
    //  */
    // withdraw(query = {}, callback) {
    // }

    // /**
    //  * 
    //  * @param query 
    //  * @param callback 
    //  */
    // depositHistory(query = {}, callback) {
    // }

    // /**
    //  * 
    //  * @param query 
    //  * @param callback 
    //  */
    // withdrawHistory(query = {}, callback) {
    // }

    // /**
    //  * 
    //  * @param query 
    //  * @param callback 
    //  */
    // depositAddress(query = {}, callback) {
    // }

    // /**
    //  * 
    //  * @param callback 
    //  */
    // accountStatus(callback) {
    // }

    // /**
    //  * 
    //  * @param callback 
    //  */
    // startUserDataStream(callback) {
    // }

    // /**
    //  * 
    //  * @param query 
    //  * @param callback 
    //  */
    // keepAliveUserDataStream(query = {}, callback) {
    // }

    // /**
    //  * 
    //  * @param query 
    //  * @param callback 
    //  */
    // closeUserDataStream(query = {}, callback) {
        
    // }
}