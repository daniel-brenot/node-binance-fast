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
    private key;
    private secret;
    private recvWindow;
    private timeout;
    private disableBeautification;
    private handleDrift;
    private baseUrl;
    private requestOptions;
    private beautifier;
    private drift;
    private syncInterval;
    private binance;
    constructor({ key, secret, recvWindow, timeout, disableBeautification, handleDrift, baseUrl, requestOptions }: BinanceRestOptions);
    getBaseUrl(): string;
    private setTimestamp;
    /** Gets the time value in miliseconds */
    private getTime;
    /**
     *
     */
    calculateDrift(): Promise<void>;
    /**
     *
     * @param interval
     * @param onRecalculateDriftCb
     */
    startTimeSync(interval: number | undefined, onRecalculateDriftCb: (value: Promise<void>) => void): Promise<void>;
    /**
     * Clears the interval to keep the API connector synced with the
     * server time.
     */
    endTimeSync(): void;
    /**
     * Test connectivity to the REST API.
     * Weight: 1
     * Reference:
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     * @param callback
     */
    ping(callback?: undefined): Promise<void>;
    ping(callback: PingCallback): void;
    /**
     * Test connectivity to the REST API and get the current server time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     * @param callback
     */
    time(callback?: undefined): Promise<QueryTimeResponse>;
    time(callback: TimeCallback): void;
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
    /**
     * Get recent trades.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     * @param query
     * @param callback
     */
    trades(query: QueryTradesParameters | string, callback?: undefined): Promise<QueryTradesResponse>;
    trades(query: QueryTradesParameters | string, callback: TradesCallback): void;
    /**
     * Get older trades.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     * @param query
     * @param callback
     */
    historicalTrades(query: QueryHistoricalTradesParameters | string, callback?: undefined): Promise<QueryHistoricalTradesResponse>;
    historicalTrades(query: QueryHistoricalTradesParameters | string, callback: HistoricalTradesCallback): void;
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
    /**
     * Current exchange trading rules and symbol information.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     * @param callback
     */
    exchangeInfo(callback?: undefined): Promise<QueryAggTradesResponse>;
    exchangeInfo(callback: ExchangeInfoCallback): void;
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
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 1 or 40
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     * @param query
     * @param callback
     */
    ticker24Hr(query: QueryTicker24hrParameters, callback?: undefined): Promise<QueryTicker24HrResponse>;
    ticker24Hr(query?: {}, callback?: undefined): Promise<QueryTicker24HrResponse[]>;
    ticker24Hr(query: QueryTicker24hrParameters, callback: (err: Error, value: QueryTicker24HrResponse) => void): void;
    ticker24Hr(query: {}, callback: (err: Error, value: QueryTicker24HrResponse[]) => void): void;
    /**
     * Latest price for a symbol.
     * Weight: 1 or 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     * @param query
     * @param callback
     */
    tickerPrice(query: QueryTickerPriceParameters, callback?: undefined): Promise<QueryTickerPriceResponse>;
    tickerPrice(query: QueryTickerPriceParameters, callback: TickerPriceCallback): void;
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
    /**
     * Returns the best price/qty on the order book for all symbols.
     * This route appears on an old API document, but does not appear in the most recent set of docs.
     * You should probably use bookTicker() instead as it utilizes a route with a newer version.
     * @param callback
     * @deprecated
     */
    allBookTickers(callback?: undefined): Promise<QueryBookTickerResponse[]>;
    allBookTickers(callback: AllBookTickersCallback): void;
    /**
     * Returns the latest price for all symbols.
     * This route appears on the old API document, but does not appear in the most recent set of docs.
     * You should probably use tickerPrice() instead as it utilizes a route with a newer version.
     * @param callback
     * @deprecated
     */
    allPrices(callback?: undefined): Promise<QueryTickerPriceResponse[]>;
    allPrices(callback: AllPricesCallback): void;
    /**
     * Send in a new order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     * @param query
     * @param callback
     */
    newOrder(query: CreateOrderParameters, callback?: undefined): Promise<OrderFULLResponse>;
    newOrder(query: CreateOrderParameters, callback: (err: Error, value: OrderFULLResponse) => void): void;
    /**
     * Test new order creation and signature/recvWindow long.
     * Creates and validates a new order but does not send it into the matching engine.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade
     */
    testOrder(query: CreateOrderParameters & {
        newOrderRespType: 'ACK';
    }, callback?: undefined): Promise<OrderACKResponse>;
    testOrder(query: CreateOrderParameters & {
        newOrderRespType: 'RESULT';
    }, callback?: undefined): Promise<OrderRESULTResponse>;
    testOrder(query: CreateOrderParameters & {
        newOrderRespType: 'FULL';
    }, callback?: undefined): Promise<OrderFULLResponse>;
    testOrder(query: CreateOrderParameters & {
        newOrderRespType: 'ACK';
    }, callback: (err: Error, value: OrderACKResponse) => void): void;
    testOrder(query: CreateOrderParameters & {
        newOrderRespType: 'RESULT';
    }, callback: (err: Error, value: OrderRESULTResponse) => void): void;
    testOrder(query: CreateOrderParameters & {
        newOrderRespType: 'FULL';
    }, callback: (err: Error, value: OrderFULLResponse) => void): void;
    /**
     * Check an order's status.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     * @param query
     * @param callback
     */
    queryOrder(query: QueryOrderParameters, callback?: undefined): Promise<QueryOrderResponse>;
    queryOrder(query: QueryOrderParameters, callback: QueryOrderCallback): void;
    /**
     * Cancel an active order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     * @param query
     * @param callback
     */
    cancelOrder(query: CancelOrderParameters, callback?: undefined): Promise<CancelOrderResponse>;
    cancelOrder(query: CancelOrderParameters, callback: CancelOrderCallback): void;
}
export {};
//# sourceMappingURL=binance-rest.d.ts.map