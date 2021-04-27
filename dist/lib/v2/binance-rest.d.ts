/// <reference types="node" />
import { RESTAPI } from '../base';
import RequestHandler from '../base/util/request-handler';
/**
 * Binance REST API for executing common tasks.
 */
export default class BinanceREST {
    protected rest: RESTAPI;
    protected syncInterval?: NodeJS.Timeout;
    protected handler: RequestHandler;
    protected drift: number;
    protected options?: Required<BinanceRESTOptions>;
    constructor(options: BinanceRESTOptions);
    protected fixDrift(): Promise<number>;
    protected get timestamp(): number;
    /**
     * Starts an interval that automatically calculates drift between the server and client,
     * and updates the request handler accordingly.
     * @param interval The time in milliseconds between the requests to sync time.
     * Note: A lower interval will use more weight and can potentially overuse request weight allowance.
     */
    startTimeSync(interval?: number): Promise<void>;
    /**
     * Clears the interval for syncing server time with local time for requests.
     */
    endTimeSync(): void;
    /**
     * Test connectivity to the REST API.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
     */
    ping(): Promise<void>;
    /**
     * Test connectivity to the REST API and get the current server time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    getTime(): Promise<QueryTimeResponse>;
    /**
     * Test connectivity to the REST API and get the difference in milliseconds
     * between the current server time and the local time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    calculateDrift(): Promise<number>;
    /**
     * Current exchange trading rules and symbol information.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
     */
    getExchangeInfo(): Promise<QueryExchangeInfoResponse>;
    /**
     * Gets the order book depth.
     * Weight: Adjusted based on the limit:
     * 5-100: 1
     * 500:   5
     * 1000   10
     * 5000   50
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
     */
    queryDepth(symbol: string, limit?: Limit): Promise<QueryDepthResponse>;
    /**
     * Get recent trades.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
     */
    queryTrades(symbol: string, limit?: Omit<Limit, 5000>): Promise<QueryTradesResponse>;
    /**
     * Get older trades.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
     */
    queryHistoricalTrades(symbol: string, options?: QueryHistoricalTradesOptions): Promise<QueryHistoricalTradesResponse>;
    /**
     * Get compressed, aggregate trades.
     * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
     */
    queryAggTrades(symbol: string, options?: QueryAggTradesOptions): Promise<QueryAggTradesResponse>;
    /**
     * Kline/candlestick bars for a symbol.
     * Klines are uniquely identified by their open time.
     * If startTime and endTime are not sent, the most recent klines are returned.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
     */
    queryKlines(symbol: string, interval: ChartInterval, options?: QueryKlinesOptions): Promise<QueryKlinesResponse>;
    /**
     * Current average price for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
     */
    queryAvgPrice(symbol: string): Promise<AveragePriceResponse>;
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    queryTicker24hr(symbol: string): Promise<QueryTicker24HrResponse>;
    /**
     * 24 hour rolling window price change statistics.
     * Weight: 40
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
     */
    queryAllTicker24hr(): Promise<QueryTicker24HrResponse[]>;
    /**
     * Latest price for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    queryTickerPrice(symbol: string): Promise<QueryTickerPriceResponse>;
    /**
     * Latest price for all symbols.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
     */
    queryAllTickersPrice(): Promise<QueryTickerPriceResponse[]>;
    /**
     * Best price/qty on the order book for a symbol.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    queryBookTicker(symbol: string): Promise<QueryBookTickerResponse>;
    /**
     * Best price/qty on the order book for all symbols.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
     */
    queryAllBookTickers(): Promise<QueryBookTickerResponse[]>;
    /**
     * Send in a new limit buy order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createLimitBuyOrder(symbol: string, quantity: string, price: string, options?: CreateLimitOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new limit sell order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createLimitSellOrder(symbol: string, quantity: string, price: string, options: CreateLimitOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new market buy order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createStopLossBuyOrder(symbol: string, quantity: string, stopPrice: string, options?: CreateStopLossOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new market sell order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createStopLossSellOrder(symbol: string, quantity: string, stopPrice: string, options?: CreateStopLossOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new limit buy order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createStopLossLimitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateStopLossLimitOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new limit sell order with a stop-loss.
     * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createStopLossLimitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateStopLossLimitOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new market buy order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createTakeProfitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new market sell order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createTakeProfitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new limit buy order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createTakeProfitLimitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitLimitOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new limit sell order with a take-profit.
     * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createTakeProfitLimitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitLimitOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new limit buy order that cancels if filled immediately as a taker.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createLimitMakerBuyOrder(symbol: string, quantity: string, price: string, options?: LimitMakerOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Send in a new limit sell order that cancels if filled immediately as a taker.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
     */
    createLimitMakerSellOrder(symbol: string, quantity: string, price: string, options?: LimitMakerOrderOptions): Promise<OrderFULLResponse>;
    /**
     * Check an order's status.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
     */
    queryOrder(symbol: string, options?: QueryOrderOptions): Promise<QueryOrderResponse>;
    /**
     * Cancel an active order.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
     */
    cancelOrder(symbol: string, options?: CancelOrderOptions): Promise<CancelOrderResponse>;
    /**
     * Cancels all active orders on a symbol. This includes OCO orders.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
     */
    cancelOpenOrders(symbol: string, options?: CancelOpenOrdersOptions): Promise<CancelOpenOrdersResponse>;
    /**
     * Get all open orders on a symbol. Careful when accessing this with no symbol.
     * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
     */
    queryOpenOrders(symbol: string, options?: QueryOpenOrdersOptions): Promise<QueryOpenOrdersResponse>;
    /**
     * Get all account orders; active, canceled, or filled.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
     */
    queryAllOpenOrders(options?: QueryAllOpenOrdersOptions): Promise<QueryOpenOrdersResponse[]>;
    /**
     * Retrieves all OCO based on provided optional parameters.
     * Weight: 10
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
     */
    queryAllOCOOrders(options?: QueryAllOCOOrdersOptions): Promise<QueryAllOCOOrdersResponse>;
    /**
     * Retrieves all open OCO based on provided optional parameters.
     * Weight: 2
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
     */
    queryOpenOCOOrders(options?: QueryOpenOCOOrdersOptions): Promise<QueryOpenOCOOrdersResponse>;
    /**
     * Get current account information.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
     */
    queryAccountInformation(options?: QueryAccountInformationOptions): Promise<QueryAccountInformationResponse>;
    /**
     * Get trades for a specific account and symbol.
     * Weight: 5
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
     */
    queryMyTrades(symbol: string, options?: QueryMyTradesOptions): Promise<QueryMyTradesResponse>;
}
//# sourceMappingURL=binance-rest.d.ts.map