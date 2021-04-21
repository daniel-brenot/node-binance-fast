import { RequestHandler } from "./request-handler";

/**
 * API object for accessing binance REST API
 * 
 * Data is returned in ascending order. Oldest first, newest last.  
 * All time and timestamp related fields are in milliseconds.  
 * Reference:
 * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md
 */
export default class BinanceREST {
    
    constructor(private handler: RequestHandler) { }
    
    /**
     * Test connectivity to the REST API.  
     * Weight: 1  
     * Reference:  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     */
    async ping() {
        const URL = '/api/v3/ping';
        const WEIGHT = 1;
        await this.handler.sendGetRequest<{}>(URL);
    }

    /**
     * Test connectivity to the REST API and get the current server time.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    async queryTime() {
        const URL = '/api/v3/time';
        const WEIGHT = 1;
        return await this.handler.sendGetRequest<QueryTimeResponse>(URL);
    }

    /**
     * Current exchange trading rules and symbol information.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     */
    async queryExchangeInfo() {
        const URL = '/api/v3/exchangeInfo';
        const WEIGHT = 1;
        return await this.handler.sendGetRequest<QueryExchangeInfoResponse>(URL);
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
    async queryDepth(params: QueryDepthParameters){
        const URL = '/api/v3/depth';
        const WEIGHT = params.limit || 100 / 100;
        return await this.handler.sendPostRequest<QueryDepthResponse>(URL, params);
    }

    /**
     * Get recent trades.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     */
    async queryTrades(params: QueryTradesParameters){
        const URL = '/api/v3/trades';
        const WEIGHT = 1;
        return await this.handler.sendPostRequest<QueryTradesResponse>(URL, params);
    }

    /**
     * Get older trades.  
     * Weight: 5  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     */
    async queryHistoricalTrades(params: QueryHistoricalTradesParameters) {
        const URL = '/api/v3/historicalTrades';
        const WEIGHT = 5;
        return await this.handler.sendPostRequest<QueryHistoricalTradesResponse>(URL, params);
    }

    /**
     * Get compressed, aggregate trades.  
     * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
     */
    async queryAggTrades(params: QueryAggTradesParameters) {
        const URL = '/api/v3/aggTrades';
        const WEIGHT = 1;
        return await this.handler.sendPostRequest<QueryAggTradesResponse>(URL, params);
    }

    /**
     * Kline/candlestick bars for a symbol.  
     * Klines are uniquely identified by their open time.  
     * If startTime and endTime are not sent, the most recent klines are returned.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
     */
    async queryKlines(params: QueryKlinesParameters) {
        const URL = '/api/v3/klines';
        const WEIGHT = 1;
        return await this.handler.sendPostRequest<QueryKlinesResponse>(URL, params);
    }

    /**
     * Current average price for a symbol.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
     */
    async queryAvgPrice(params: { symbol: string }) {
        const URL = '/api/v3/avgPrice';
        const WEIGHT = 1;
        return await this.handler.sendPostRequest<AveragePriceResponse>(URL, params);
    }
    
    /**
     * 24 hour rolling window price change statistics.  
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    async queryTicker24hr(params: QueryTicker24HrParameters): Promise<QueryTicker24HrResponse>;
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 40  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    async queryTicker24hr(params: Omit<QueryTicker24HrParameters, 'symbol'>): Promise<QueryTicker24HrResponse[]>;
    async queryTicker24hr(params: QueryTicker24HrParameters) {
        const URL = '/api/v3/ticker/24hr';
        const WEIGHT = params.symbol ? 1: 40;
        return await this.handler.sendPostRequest<QueryTicker24HrResponse | QueryTicker24HrResponse[]>(URL, params);
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
    async queryTickerPrice(params:{symbol?: string}) {
        const URL = '/api/v3/ticker/price';
        const WEIGHT = params.symbol ? 1: 2;
        return await this.handler.sendPostRequest<QueryTickerPriceResponse | QueryTickerPriceResponse[]>(URL, params);
    }

    /**
     * Best price/qty on the order book for a symbol.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    async queryBookTicker(params: Omit<QueryBookTickerParameters, 'symbol'>): Promise<QueryBookTickerResponse[]>;
    /**
     * Best price/qty on the order book for all symbols.
     * Weight: 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    async queryBookTicker(params: QueryBookTickerParameters): Promise<QueryBookTickerResponse>;
    async queryBookTicker(params: any) {
        const URL = '/api/v3/ticker/bookTicker';
        //const WEIGHT = params.symbol  ? 1: 2;
        return await this.handler.sendGetRequest<QueryBookTickerResponse | QueryBookTickerResponse[]>(URL, params);
    }
    
    /**
     * Send in a new order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    async createOrder(params: CreateOrderParameters & { newOrderRespType: 'ACK' }): Promise<OrderACKResponse>;
    async createOrder(params: CreateOrderParameters & { newOrderRespType: 'RESULT' }): Promise<OrderRESULTResponse>;
    async createOrder(params: CreateOrderParameters & { newOrderRespType: 'FULL' }): Promise<OrderFULLResponse>;
    async createOrder(params: CreateOrderParameters) {
        const URL = '/api/v3/order';
        const WEIGHT = 1;
        return await this.handler.sendPostRequest<OrderResponse>(URL, params);
    }

    /**
     * Test new order creation and signature/recvWindow long.
     * Creates and validates a new order but does not send it into the matching engine.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade
     */
    async testOrder(params: TestOrderParameters) {
        const URL = '/api/v3/order/test';
        const WEIGHT = 1;
        await this.handler.sendPostRequest<{}>(URL, params);
    }

    /**
     * Check an order's status.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     */
    async queryOrder(params: QueryOrderParameters) {
        const URL = '/api/v3/order';
        const WEIGHT = 1;
        return await this.handler.sendGetRequest<QueryOrderResponse>(URL, params);
    }

    /**
     * Cancel an active order.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     */
    async cancelOrder(params: CancelOrderParameters) {
        const URL = '/api/v3/order';
        const WEIGHT = 1;
        return await this.handler.sendDeleteRequest<CancelOrderResponse>(URL, params);
    }

    /**
     * Cancels all active orders on a symbol. This includes OCO orders.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
     */
    async cancelOpenOrders(params: CancelOpenOrdersParameters) {
        const URL = '/api/v3/openOrders';
        const WEIGHT = 1;
        return await this.handler.sendDeleteRequest<CancelOpenOrdersResponse>(URL, params);
    }

    /**
     * Get all open orders on a symbol. Careful when accessing this with no symbol.  
     * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
     */
    async queryOpenOrders(params: Omit<QueryOpenOrdersParameters, 'symbol'>): Promise<QueryOpenOrdersResponse[]>;
    async queryOpenOrders(params: QueryOpenOrdersParameters): Promise<QueryOpenOrdersResponse>;
    async queryOpenOrders(params: QueryOpenOrdersParameters | Omit<QueryOpenOrdersParameters, 'symbol'>) {
        const URL = '/api/v3/openOrders';
        //const WEIGHT = params.symbol ? 1 : 40;
        return await this.handler.sendGetRequest<QueryOpenOrdersResponse | QueryOpenOrdersResponse[]>(URL, params);
    }

    /**
     * Get all account orders; active, canceled, or filled.  
     * Weight: 5 with symbol  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
     */
    async queryAllOrders(params: QueryAllOrdersParameters) {
        const URL = '/api/v3/allOrders';
        // TODO how much without a symbol???
        const WEIGHT = params.symbol ? 5: 0;
        return await this.handler.sendGetRequest<QueryAllOrdersResponse>(URL, params);
    }

    /**
     * Send in a new OCO.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
     */
    async createOCOOrder(params: CreateOCOOrderParameters){
        const URL = '/api/v3/order/oco';
        const WEIGHT = 1;
        return await this.handler.sendPostRequest<CreateOCOOrderResponse>(URL, params);
    }

    /**
     * Cancel an entire Order List.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-oco-trade
     */
    async cancelOCOOrder(params: CancelOCOOrderParameters) {
        const URL = '/api/v3/orderList';
        const WEIGHT = 1;
        return await this.handler.sendDeleteRequest<CancelOCOOrderResponse>(URL, params);
    }

    /**
     * Retrieves a specific OCO based on provided optional parameters.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-oco-user_data
     */
    async queryOCOOrder(params: QueryOCOOrderParameters) {
        const URL = '/api/v3/orderList';
        const WEIGHT = 1;
        return await this.handler.sendGetRequest<QueryOCOOrderResponse>(URL, params);
    }

    /**
     * Retrieves all OCO based on provided optional parameters.  
     * Weight: 10  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
     */
    async queryAllOCOOrders(params: QueryAllOCOOrdersParameters) {
        const URL = '/api/v3/allOrderList';
        const WEIGHT = 10;
        return await this.handler.sendGetRequest<QueryAllOCOOrdersResponse>(URL, params);
    }

    /**
     * Retrieves all open OCO based on provided optional parameters.
     * Weight: 2  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
     */
    async queryOpenOCOOrders(params: QueryOpenOCOOrdersParameters) {
        const URL = '/api/v3/openOrderList';
        const WEIGHT = 2;
        return await this.handler.sendGetRequest<QueryOpenOCOOrdersResponse>(URL, params);
    }

    /**
     * Get current account information.  
     * Weight: 5  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
     */
    async queryAccountInformation(params: QueryAccountInformationParameters) {
        const URL = '/api/v3/account';
        const WEIGHT = 5;
        return await this.handler.sendGetRequest<QueryAccountInformationResponse>(URL, params);
    }

    /**
     * Get trades for a specific account and symbol.  
     * Weight: 5 with symbol  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
     */
    async queryMyTrades(params: QueryMyTradesParameters) {
        const URL = '/api/v3/myTrades';
        // TODO how much without a symbol?
        const WEIGHT = 5;
        return await this.handler.sendGetRequest<QueryMyTradesResponse>(URL, params);
    }

    /**
     * Start a new user data stream.
     * The stream will close after 60 minutes unless a keepalive is sent.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#user-data-stream-endpoints
     */
    async createUserDataStream() {
        const URL = '/api/v3/userDataStream';
        const WEIGHT = 1;
        return await this.handler.sendPostRequest<CreateUserDataStreamResponse>(URL, {});
    }

    /**
     * Keepalive a user data stream to prevent a time out.
     * User data streams will close after 60 minutes.
     * It's recommended to send a ping about every 30 minutes.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#keepalive-user-data-stream-user_stream
     */
    async keepAliveUserDataStream(params: KeepAliveUserDataStreamParameters) {
        const URL = '/api/v3/userDataStream';
        const WEIGHT = 1;
        await this.handler.sendPutRequest<{}>(URL, params);
    }

    /**
     * Close out a user data stream.
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#close-user-data-stream-user_stream
     */
    async cancelUserDataStream(params: CancelUserDataStreamParameters) {
        const URL = '/api/v3/userDataStream';
        const WEIGHT = 1;
        await this.handler.sendDeleteRequest<{}>(URL, params);
    }
}