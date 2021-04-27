import { RESTAPI } from '../base';
import RequestHandler from '../base/util/request-handler';
import DriftRequestHandler from './util/drift-request-handler';

const DEFAULT_BASE_URL = 'https://api.binance.com/';

/**
 * Binance REST API for executing common tasks.
 */
export default class BinanceREST {

    protected rest: RESTAPI;
    protected syncInterval?: NodeJS.Timeout;
    protected handler: RequestHandler;
    protected drift = 0;
    protected options?: Required<BinanceRESTOptions>

    constructor(options: BinanceRESTOptions) {
        const DEFAULT_OPTIONS = {
            baseURL: DEFAULT_BASE_URL,
            timeout: 15000,
            recvWindow: 10000,
            handleDrift: false
        };
        this.options = { ...DEFAULT_OPTIONS, ...options};
        if(options.handleDrift) {
            this.handler = new DriftRequestHandler(options.apiKey, options.apiSecret, this.options.baseURL, this.fixDrift.bind(this));
        } else {
            this.handler = new RequestHandler(options.apiKey, options.apiSecret, this.options.baseURL);
        }
        this.rest = new RESTAPI(this.handler);
    }

    protected async fixDrift(){
        this.drift = await this.calculateDrift();
        return this.drift;
    }

    protected get timestamp (){ return Date.now() + this.drift; }

    /**
     * Starts an interval that automatically calculates drift between the server and client,
     * and updates the request handler accordingly.
     * @param interval The time in milliseconds between the requests to sync time. 
     * Note: A lower interval will use more weight and can potentially overuse request weight allowance.
     */
    async startTimeSync(interval = 30000) {
        // If there's already an interval running, clear it and reset values
        if (!!this.syncInterval) { this.endTimeSync(); }

        // Calculate initial drift value and setup interval to periodically update it
        await this.fixDrift();
        this.syncInterval = setInterval(async () => {
            this.drift = await this.calculateDrift();
        }, interval);
    }

    /**
     * Clears the interval for syncing server time with local time for requests.
     */
    endTimeSync() {
        if(!this.syncInterval) { return };
        clearInterval(this.syncInterval);
        this.drift = 0;
        this.syncInterval = undefined;
    }

    /**
     * Test connectivity to the REST API.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     */
    async ping() {
        try {
            return await this.rest.queryPing();
        } catch (err) { throw err; }
    }

    /**
     * Test connectivity to the REST API and get the current server time.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    async getTime() {
        return this.rest.queryTime();
    }

    /**
     * Test connectivity to the REST API and get the difference in milliseconds
     * between the current server time and the local time.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    async calculateDrift() {
        const systemTime = Date.now();
        const serverTime = (await this.getTime()).serverTime;
        const transitTime = Math.round((Date.now() - systemTime) / 2);
        return (serverTime - (systemTime + transitTime));
    }

    /**
     * Current exchange trading rules and symbol information.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     */
    async getExchangeInfo() {
        return this.rest.queryExchangeInfo();
    }

    /**
     * Gets the order book depth.  
     * Weight: Adjusted based on the limit:  
     * 5-100: 1  
     * 500:   5  
     * 1000   10  
     * 5000   50  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
     */
    async queryDepth(symbol: string, limit?: Limit) {
        return this.rest.queryDepth({ symbol, limit });
    }

    /**
     * Get recent trades.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     */
    async queryTrades(symbol: string, limit?: Omit<Limit, 5000>) {
        return this.rest.queryTrades({ symbol, limit });
    }

    /**
     * Get older trades.  
     * Weight: 5  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     */
    async queryHistoricalTrades(symbol: string, options?: QueryHistoricalTradesOptions) {
        return this.rest.queryHistoricalTrades({ ...options, symbol });
    }

    /**
     * Get compressed, aggregate trades.  
     * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
     */
    async queryAggTrades(symbol: string, options?: QueryAggTradesOptions) {
        return this.rest.queryAggTrades({ ...options, symbol });
    }

    /**
     * Kline/candlestick bars for a symbol.  
     * Klines are uniquely identified by their open time.  
     * If startTime and endTime are not sent, the most recent klines are returned.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
     */
    async queryKlines(symbol: string, interval: ChartInterval, options?: QueryKlinesOptions) {
        return this.rest.queryKlines({ ...options, symbol, interval });
    }

    /**
     * Current average price for a symbol.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
     */
    async queryAvgPrice(symbol: string) {
        return this.rest.queryAvgPrice({ symbol });
    }

    /**
     * 24 hour rolling window price change statistics.  
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    async queryTicker24hr(symbol: string) {
        return this.rest.queryTicker24hr({ symbol });
    }

    /**
     * 24 hour rolling window price change statistics.
     * Weight: 40  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    async queryAllTicker24hr() {
        return this.rest.queryTicker24hr({});
    }

    /**
     * Latest price for a symbol.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    async queryTickerPrice(symbol: string) {
        return this.rest.queryTickerPrice({ symbol });
    }

    /**
     * Latest price for all symbols.  
     * Weight: 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    async queryAllTickersPrice() {
        return this.rest.queryTickerPrice({});
    }

    /**
     * Best price/qty on the order book for a symbol.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    async queryBookTicker(symbol: string) {
        return this.rest.queryBookTicker({ symbol });
    }

    /**
     * Best price/qty on the order book for all symbols.
     * Weight: 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    async queryAllBookTickers() {
        return this.rest.queryBookTicker({});
    }

    /**
     * Send in a new limit buy order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createLimitBuyOrder(
        symbol: string, quantity: string, price: string,
        options = {
            timeInForce: 'GTC',
            newOrderRespType: 'ACK'
        } as CreateLimitOrderOptions) {
        const type = 'LIMIT';
        const side = 'BUY';
        return this.rest.createOrder({ ...options, type, side, symbol, quantity, price });
    }

    /**
     * Send in a new limit sell order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createLimitSellOrder(
        symbol: string, quantity: string, price: string,
        options:  CreateLimitOrderOptions) {
        const type = 'LIMIT';
        const side = 'SELL';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, price });
    }

    // /**
    //  * Send in a new market buy order.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
    //  */
    // async createMarketBuyOrder(symbol: string, options?: CreateMarketOrderOptions) {
    //     const type = 'MARKET';
    //     const side = 'BUY';
    //     const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
    //     return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol } as MarketOrderParameters);
    // }

    // /**
    //  * Send in a new market sell order.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
    //  */
    // async createMarketSellOrder(symbol: string, options?: CreateMarketOrderOptions) {
    //     const type = 'MARKET';
    //     const side = 'SELL';
    //     const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' }; 
    //     return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol } as MarketOrderParameters);
    // }

    /**
     * Send in a new market buy order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createStopLossBuyOrder(symbol: string, quantity: string, stopPrice: string, options?: CreateStopLossOrderOptions) {
        const type = 'STOP_LOSS';
        const side = 'BUY';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' }
        return this.rest.createOrder({ ...options, type, side, symbol, quantity, stopPrice } as StopLossOrderParameters);
    }

    /**
     * Send in a new market sell order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createStopLossSellOrder(symbol: string, quantity: string, stopPrice: string, options?: CreateStopLossOrderOptions) {
        const type = 'STOP_LOSS';
        const side = 'SELL';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, stopPrice } as StopLossOrderParameters);
    }

    /**
     * Send in a new limit buy order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createStopLossLimitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateStopLossLimitOrderOptions) {
        const type = 'STOP_LOSS_LIMIT';
        const side = 'BUY';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, price, stopPrice } as StopLossLimitOrderParameters);
    }

    /**
     * Send in a new limit sell order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createStopLossLimitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateStopLossLimitOrderOptions) {
        const type = 'STOP_LOSS_LIMIT';
        const side = 'SELL';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, price, stopPrice } as StopLossLimitOrderParameters);
    }

    /**
     * Send in a new market buy order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createTakeProfitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitOrderOptions) {
        const type = 'TAKE_PROFIT';
        const side = 'BUY';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, price, stopPrice } as TakeProfitOrderParameters);
    }

    /**
     * Send in a new market sell order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createTakeProfitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitOrderOptions) {
        const type = 'TAKE_PROFIT';
        const side = 'SELL';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, price, stopPrice } as TakeProfitOrderParameters);
    }

    /**
     * Send in a new limit buy order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createTakeProfitLimitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitLimitOrderOptions) {
        const type = 'TAKE_PROFIT_LIMIT';
        const side = 'BUY';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, price, stopPrice } as TakeProfitLimitOrderParameters);
    }

    /**
     * Send in a new limit sell order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createTakeProfitLimitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitLimitOrderOptions) {
        const type = 'TAKE_PROFIT_LIMIT';
        const side = 'SELL';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, price, stopPrice } as TakeProfitLimitOrderParameters);
    }

    /**
     * Send in a new limit buy order that cancels if filled immediately as a taker.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createLimitMakerBuyOrder(symbol: string, quantity: string, price: string, options?: LimitMakerOrderOptions) {
        const type = 'LIMIT_MAKER';
        const side = 'BUY';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...DEFAULT_OPTIONS, ...options, type, side, symbol, quantity, price } as LimitMakerOrderParameters);
    }

    /**
     * Send in a new limit sell order that cancels if filled immediately as a taker.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createLimitMakerSellOrder(symbol: string, quantity: string, price: string, options?: LimitMakerOrderOptions) {
        const type = 'LIMIT_MAKER';
        const side = 'SELL';
        const DEFAULT_OPTIONS = { timeInForce: 'GTC', newOrderRespType: 'ACK' };
        return this.rest.createOrder({ ...options, type, side, symbol, quantity, price } as LimitMakerOrderParameters);
    }

    /**
     * Check an order's status.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     */
    async queryOrder(symbol: string, options?: QueryOrderOptions) {
        return this.rest.queryOrder({ ...options, symbol } as QueryOrderParameters);
    }

    /**
     * Cancel an active order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     */
    async cancelOrder(symbol: string, options?: CancelOrderOptions) {
        return this.rest.cancelOrder({ ...options, symbol } as CancelOrderParameters)
    }

    /**
     * Cancels all active orders on a symbol. This includes OCO orders.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
     */
    async cancelOpenOrders(symbol: string, options?: CancelOpenOrdersOptions) {
        return this.rest.cancelOpenOrders({ ...options, symbol } as CancelOpenOrdersParameters)
    }

    /**
     * Get all open orders on a symbol. Careful when accessing this with no symbol.  
     * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
     */
    async queryOpenOrders(symbol: string, options?: QueryOpenOrdersOptions) {
        return this.rest.queryOpenOrders({ timestamp: this.timestamp, ...options, symbol })
    }

    /**
     * Get all account orders; active, canceled, or filled.  
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
     */
    async queryAllOpenOrders(options?: QueryAllOpenOrdersOptions) {
        return this.rest.queryOpenOrders({ timestamp: this.timestamp, ...options })
    }

    // /**
    //  * Get all account orders; active, canceled, or filled.  
    //  * Weight: 5
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
    //  */
    // async queryAllOrders(symbol: string, options?: QueryAllOrdersOptions) {
    //     return this.rest.queryAllOrders({ timestamp: this.timestamp, ...options, symbol });
    // }

    // /**
    //  * Send in a new OCO.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
    //  */
    // async createOCOBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateOCOOrderOptions) {
    //     const side = 'BUY';
    //     return this.rest.createOCOOrder({ ...options, side, symbol, quantity, price, stopPrice });
    // }

    // /**
    //  * Send in a new OCO.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
    //  */
    //  async createOCOSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateOCOOrderOptions) {
    //     const side = 'SELL';
    //     return this.rest.createOCOOrder({ ...options, side, symbol, quantity, price, stopPrice });
    // }

    // /**
    //  * Cancel an entire Order List.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-oco-trade
    //  */
    //  async cancelOCOOrder(symbol: string, options?: CancelOCOOrderOptions) {
    //     return this.rest.cancelOCOOrder({ ...options, symbol} as CancelOCOOrderParameters);
    // }

    // /**
    //  * Retrieves a specific OCO based on provided optional parameters.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-oco-user_data
    //  */
    //  async queryOCOOrder(options?: QueryOCOOrderOptions) {
    //     return this.rest.queryOCOOrder({timestamp: this.timestamp, ...options});
    // }

    /**
     * Retrieves all OCO based on provided optional parameters.  
     * Weight: 10  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
     */
    async queryAllOCOOrders(options?: QueryAllOCOOrdersOptions) {
        return this.rest.queryAllOCOOrders({timestamp: this.timestamp, ...options});
    }

    /**
     * Retrieves all open OCO based on provided optional parameters.
     * Weight: 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
     */
     async queryOpenOCOOrders(options?: QueryOpenOCOOrdersOptions) {
        return this.rest.queryOpenOCOOrders({timestamp: this.timestamp, ...options});

    }

    /**
     * Get current account information.  
     * Weight: 5  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
     */
    async queryAccountInformation(options?: QueryAccountInformationOptions) {
        return this.rest.queryAccountInformation({timestamp: this.timestamp, ...options});
    }

    /**
     * Get trades for a specific account and symbol.  
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
     */
    async queryMyTrades(symbol: string, options?: QueryMyTradesOptions) {
        return this.rest.queryMyTrades({ timestamp: this.timestamp, ...options, symbol });
    }

}