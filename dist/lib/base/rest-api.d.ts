import RequestHandler from "./util/request-handler";
/**
 * API object for accessing Binance REST API
 *
 * Data is returned in ascending order. Oldest first, newest last.
 * All time and timestamp related fields are in milliseconds.
 * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md
 */
export default class RESTAPI {
    protected handler: RequestHandler;
    constructor(handler: RequestHandler);
    /**
     * Test connectivity to the REST API.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     */
    queryPing(): Promise<void>;
    /**
     * Test connectivity to the REST API and get the current server time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    queryTime(): Promise<QueryTimeResponse>;
    /**
     * Current exchange trading rules and symbol information.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     */
    queryExchangeInfo(): Promise<QueryExchangeInfoResponse>;
    /**
     * Gets the order book depth.
     * Weight: Adjusted based on the limit:
     * 5-100: 1
     * 500:   5
     * 1000   10
     * 5000   50
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
     */
    queryDepth(params: QueryDepthParameters): Promise<QueryDepthResponse>;
    /**
     * Get recent trades.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     */
    queryTrades(params: QueryTradesParameters): Promise<QueryTradesResponse>;
    /**
     * Get older trades.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     */
    queryHistoricalTrades(params: QueryHistoricalTradesParameters): Promise<QueryHistoricalTradesResponse>;
    /**
     * Get compressed, aggregate trades.
     * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
     */
    queryAggTrades(params: QueryAggTradesParameters): Promise<QueryAggTradesResponse>;
    /**
     * Kline/candlestick bars for a symbol.
     * Klines are uniquely identified by their open time.
     * If startTime and endTime are not sent, the most recent klines are returned.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
     */
    queryKlines(params: QueryKlinesParameters): Promise<QueryKlinesResponse>;
    /**
     * Current average price for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
     */
    queryAvgPrice(params: {
        symbol: string;
    }): Promise<AveragePriceResponse>;
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    queryTicker24hr(params: QueryTicker24hrParameters): Promise<QueryTicker24HrResponse>;
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 40
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    queryTicker24hr(params: Omit<QueryTicker24hrParameters, 'symbol'>): Promise<QueryTicker24HrResponse[]>;
    /**
     * Latest price for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    queryTickerPrice(params: QueryTickerPriceParameters): Promise<QueryTickerPriceResponse>;
    /**
     * Latest price for all symbols.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    queryTickerPrice(params: Omit<QueryTickerPriceParameters, 'symbol'>): Promise<QueryTickerPriceResponse[]>;
    /**
     * Best price/qty on the order book for all symbols.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    queryBookTicker(params: Omit<QueryBookTickerParameters, 'symbol'>): Promise<QueryBookTickerResponse[]>;
    /**
     * Best price/qty on the order book for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    queryBookTicker(params: QueryBookTickerParameters): Promise<QueryBookTickerResponse>;
    /**
     * Send in a new order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createOrder(params: CreateOrderParameters): Promise<OrderFULLResponse>;
    /**
     * Test new order creation and signature/recvWindow long.
     * Creates and validates a new order but does not send it into the matching engine.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade
     */
    testOrder(params: TestOrderParameters): Promise<void>;
    /**
     * Check an order's status.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     */
    queryOrder(params: QueryOrderParameters): Promise<QueryOrderResponse>;
    /**
     * Cancel an active order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     */
    cancelOrder(params: CancelOrderParameters): Promise<CancelOrderResponse>;
    /**
     * Cancels all active orders on a symbol. This includes OCO orders.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
     */
    cancelOpenOrders(params: CancelOpenOrdersParameters): Promise<CancelOpenOrdersResponse>;
    /**
     * Get all open orders on a symbol. Careful when accessing this with no symbol.
     * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
     */
    queryOpenOrders(params: QueryOpenOrdersParameters): Promise<QueryOpenOrdersResponse>;
    queryOpenOrders(params: Omit<QueryOpenOrdersParameters, 'symbol'>): Promise<QueryOpenOrdersResponse[]>;
    /**
     * Get all account orders; active, canceled, or filled.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
     */
    queryAllOrders(params: QueryAllOrdersParameters): Promise<QueryAllOrdersResponse>;
    /**
     * Send in a new OCO.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
     */
    createOCOOrder(params: CreateOCOOrderParameters): Promise<CreateOCOOrderResponse>;
    /**
     * Cancel an entire Order List.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-oco-trade
     */
    cancelOCOOrder(params: CancelOCOOrderParameters): Promise<CancelOCOOrderResponse>;
    /**
     * Retrieves a specific OCO based on provided optional parameters.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-oco-user_data
     */
    queryOCOOrder(params: QueryOCOOrderParameters): Promise<QueryOCOOrderResponse>;
    /**
     * Retrieves all OCO based on provided optional parameters.
     * Weight: 10
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
     */
    queryAllOCOOrders(params: QueryAllOCOOrdersParameters): Promise<QueryAllOCOOrdersResponse>;
    /**
     * Retrieves all open OCO based on provided optional parameters.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
     */
    queryOpenOCOOrders(params: QueryOpenOCOOrdersParameters): Promise<QueryOpenOCOOrdersResponse>;
    /**
     * Get current account information.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
     */
    queryAccountInformation(params: QueryAccountInformationParameters): Promise<QueryAccountInformationResponse>;
    /**
     * Get trades for a specific account and symbol.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
     */
    queryMyTrades(params: QueryMyTradesParameters): Promise<QueryMyTradesResponse>;
}
//# sourceMappingURL=rest-api.d.ts.map