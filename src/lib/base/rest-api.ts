import RequestHandler from "./util/request-handler";

/**
 * API object for accessing Binance REST API
 * 
 * Data is returned in ascending order. Oldest first, newest last.  
 * All time and timestamp related fields are in milliseconds.  
 * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md
 */
export default class RESTAPI {

    constructor(protected handler: RequestHandler) { }

    /**
     * Test connectivity to the REST API.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     */
    async queryPing() {
        const path = 'api/v3/ping';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Test connectivity to the REST API and get the current server time.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    async queryTime() {
        const path = 'api/v3/time';
        const weight = 1;
        const method = 'GET';
        try {
            return await this.handler.sendRequest<QueryTimeResponse>({ path, weight, method });
        } catch (err) { throw err; }
    }

    /**
     * Current exchange trading rules and symbol information.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     */
    async queryExchangeInfo() {
        const path = 'api/v3/exchangeInfo';
        const weight = 1;
        const method = 'GET';
        try {
            return await this.handler.sendRequest<QueryExchangeInfoResponse>({ path, weight, method });
        } catch (err) { throw err; }
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
    async queryDepth(params: QueryDepthParameters) {
        const path = 'api/v3/depth';
        const weight = params.limit || 100 / 100;
        const method = 'POST';
        try {
            return await this.handler.sendRequest<QueryDepthResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Get recent trades.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     */
    async queryTrades(params: QueryTradesParameters) {
        const path = 'api/v3/trades';
        const weight = 1;
        const method = 'POST';
        try {
            return await this.handler.sendRequest<QueryTradesResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Get older trades.  
     * Weight: 5  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     */
    async queryHistoricalTrades(params: QueryHistoricalTradesParameters) {
        const path = 'api/v3/historicalTrades';
        const weight = 5;
        const method = 'POST';
        try {
            return await this.handler.sendRequest<QueryHistoricalTradesResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Get compressed, aggregate trades.  
     * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
     */
    async queryAggTrades(params: QueryAggTradesParameters) {
        const path = 'api/v3/aggTrades';
        const weight = 1;
        const method = 'POST';
        try {
            return await this.handler.sendRequest<QueryAggTradesResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Kline/candlestick bars for a symbol.  
     * Klines are uniquely identified by their open time.  
     * If startTime and endTime are not sent, the most recent klines are returned.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
     */
    async queryKlines(params: QueryKlinesParameters) {
        const path = 'api/v3/klines';
        const weight = 1;
        const method = 'GET';
        try {
            return await this.handler.sendRequest<QueryKlinesResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Current average price for a symbol.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
     */
    async queryAvgPrice(params: { symbol: string }) {
        const path = 'api/v3/avgPrice';
        const weight = 1;
        const method = 'GET';
        try {
            return await this.handler.sendRequest<AveragePriceResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * 24 hour rolling window price change statistics.  
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    async queryTicker24hr(params: QueryTicker24hrParameters): Promise<QueryTicker24HrResponse>;
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 40  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    async queryTicker24hr(params: Omit<QueryTicker24hrParameters, 'symbol'>): Promise<QueryTicker24HrResponse[]>;
    async queryTicker24hr(params: QueryTicker24hrParameters) {
        const path = 'api/v3/ticker/24hr';
        const weight = params.symbol ? 1 : 40;
        const method = 'GET';
        try {
            return await this.handler.sendRequest<QueryTicker24HrResponse | QueryTicker24HrResponse[]>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Latest price for a symbol.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    async queryTickerPrice(params: QueryTickerPriceParameters): Promise<QueryTickerPriceResponse>;
    /**
     * Latest price for all symbols.  
     * Weight: 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    async queryTickerPrice(params: Omit<QueryTickerPriceParameters, 'symbol'>): Promise<QueryTickerPriceResponse[]>;
    async queryTickerPrice(params: { symbol?: string }) {
        const path = 'api/v3/ticker/price';
        const weight = params.symbol ? 1 : 2;
        const method = 'GET';
        try {
            return await this.handler.sendRequest<QueryTickerPriceResponse | QueryTickerPriceResponse[]>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Best price/qty on the order book for all symbols.
     * Weight: 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    async queryBookTicker(params: Omit<QueryBookTickerParameters, 'symbol'>): Promise<QueryBookTickerResponse[]>;
    /**
     * Best price/qty on the order book for a symbol.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    async queryBookTicker(params: QueryBookTickerParameters): Promise<QueryBookTickerResponse>;
    async queryBookTicker(params: any) {
        const path = 'api/v3/ticker/bookTicker';
        const weight = params.symbol ? 1 : 2;
        const method = 'GET';
        try {
            return await this.handler.sendRequest<QueryBookTickerResponse | QueryBookTickerResponse[]>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Send in a new order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createOrder(params: CreateOrderParameters): Promise<OrderFULLResponse> {
        const path = 'api/v3/order';
        const weight = 1;
        const method = 'POST';
        try {
            return await this.handler.sendSignedRequest<OrderFULLResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Test new order creation and signature/recvWindow long.
     * Creates and validates a new order but does not send it into the matching engine.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade
     */
    async testOrder(params: TestOrderParameters) {
        const path = 'api/v3/order/test';
        const weight = 1;
        const method = 'POST';
        try {
            await this.handler.sendSignedRequest<{}>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Check an order's status.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     */
    async queryOrder(params: QueryOrderParameters) {
        const path = 'api/v3/order';
        const weight = 1;
        const method = 'GET';
        try {
            return await this.handler.sendSignedRequest<QueryOrderResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Cancel an active order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     */
    async cancelOrder(params: CancelOrderParameters) {
        const path = 'api/v3/order';
        const weight = 1;
        const method = 'DELETE';
        try {
            return await this.handler.sendSignedRequest<CancelOrderResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Cancels all active orders on a symbol. This includes OCO orders.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
     */
    async cancelOpenOrders(params: CancelOpenOrdersParameters) {
        const path = 'api/v3/openOrders';
        const weight = 1;
        const method = 'DELETE';
        try {
            return await this.handler.sendSignedRequest<CancelOpenOrdersResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Get all open orders on a symbol. Careful when accessing this with no symbol.  
     * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
     */
    async queryOpenOrders(params: QueryOpenOrdersParameters): Promise<QueryOpenOrdersResponse>;
    async queryOpenOrders(params: Omit<QueryOpenOrdersParameters, 'symbol'>): Promise<QueryOpenOrdersResponse[]>;
    async queryOpenOrders(params: QueryOpenOrdersParameters) {
        const path = 'api/v3/openOrders';
        const weight = params.symbol ? 1 : 40;
        const method = 'GET';
        try {
            return await this.handler.sendSignedRequest<QueryOpenOrdersResponse | QueryOpenOrdersResponse[]>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Get all account orders; active, canceled, or filled.  
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
     */
    async queryAllOrders(params: QueryAllOrdersParameters) {
        const path = 'api/v3/allOrders';
        const weight = 5;
        const method = 'GET';
        try {
            return await this.handler.sendSignedRequest<QueryAllOrdersResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Send in a new OCO.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
     */
    async createOCOOrder(params: CreateOCOOrderParameters) {
        const path = 'api/v3/order/oco';
        const weight = 1;
        const method = 'POST';
        try {
            return await this.handler.sendSignedRequest<CreateOCOOrderResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Cancel an entire Order List.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-oco-trade
     */
    async cancelOCOOrder(params: CancelOCOOrderParameters) {
        const path = 'api/v3/orderList';
        const weight = 1;
        const method = 'DELETE';
        try {
            return await this.handler.sendSignedRequest<CancelOCOOrderResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Retrieves a specific OCO based on provided optional parameters.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-oco-user_data
     */
    async queryOCOOrder(params: QueryOCOOrderParameters) {
        const path = 'api/v3/orderList';
        const weight = 1;
        const method = 'GET';
        try {
            return await this.handler.sendSignedRequest<QueryOCOOrderResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Retrieves all OCO based on provided optional parameters.  
     * Weight: 10  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
     */
    async queryAllOCOOrders(params: QueryAllOCOOrdersParameters) {
        const path = 'api/v3/allOrderList';
        const weight = 10;
        const method = 'GET';
        try {
            return await this.handler.sendSignedRequest<QueryAllOCOOrdersResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Retrieves all open OCO based on provided optional parameters.
     * Weight: 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
     */
    async queryOpenOCOOrders(params: QueryOpenOCOOrdersParameters) {
        const path = 'api/v3/openOrderList';
        const weight = 2;
        const method = 'GET';
        try {
            return await this.handler.sendSignedRequest<QueryOpenOCOOrdersResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Get current account information.  
     * Weight: 5  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
     */
    async queryAccountInformation(params: QueryAccountInformationParameters) {
        const path = 'api/v3/account';
        const weight = 5;
        const method = 'GET';
        try {
            return await this.handler.sendSignedRequest<QueryAccountInformationResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }

    /**
     * Get trades for a specific account and symbol.  
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
     */
    async queryMyTrades(params: QueryMyTradesParameters) {
        const path = 'api/v3/myTrades';
        const weight = 5;
        const method = 'GET';
        try {
            return await this.handler.sendSignedRequest<QueryMyTradesResponse>({ path, weight, method, params });
        } catch (err) { throw err; }
    }
}