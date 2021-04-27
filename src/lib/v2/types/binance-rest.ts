type QueryHistoricalTradesOptions = Omit<QueryHistoricalTradesParameters, 'symbol'>;
type QueryAggTradesOptions = Omit<QueryAggTradesParameters, 'symbol'>;
type QueryOrderOptions = Omit<QueryOrderParameters, 'symbol'>;
type QueryKlinesOptions = Omit<QueryKlinesParameters, 'symbol'|'interval'>;
type CreateLimitOrderOptions = Omit<LimitOrderParameters, 'symbol'|'side'|'type'|'quantity'|'price'>;
type CreateMarketOrderOptions = Omit<MarketOrderParameters, 'symbol'|'side'|'type'>;
type CreateStopLossOrderOptions = Omit<StopLossOrderParameters, 'symbol'|'side'|'type'|'quantity'|'stopPrice'>;
type CreateStopLossLimitOrderOptions = Omit<StopLossLimitOrderParameters, 'symbol'|'side'|'type'>;
type TakeProfitOrderOptions = Omit<TakeProfitOrderParameters, 'symbol'|'side'|'type'|'quantity'|'stopPrice'>;
type TakeProfitLimitOrderOptions = Omit<TakeProfitLimitOrderParameters, 'symbol'|'side'|'type'|'quantity'|'price'|'stopPrice'>;
type LimitMakerOrderOptions = Omit<LimitMakerOrderParameters, 'symbol'|'side'|'type'|'quantity'|'price'>;
type CancelOrderOptions = Omit<CancelOrderParameters, 'symbol'>;
type CancelOpenOrdersOptions = Omit<CancelOpenOrdersParameters, 'symbol'>;
type QueryOpenOrdersOptions = Omit<QueryOpenOrdersParameters, 'symbol'>;
type QueryAllOpenOrdersOptions = Omit<QueryOpenOrdersParameters, 'symbol'>;
type QueryAllOrdersOptions = Omit<QueryAllOrdersParameters, 'symbol'>;
type CreateOCOOrderOptions = Omit<CreateOCOOrderParameters, 'symbol'|'quantity'|'price'|'stopPrice'>;
type CancelOCOOrderOptions = Omit<CancelOCOOrderParameters, 'symbol'>;
type QueryOCOOrderOptions = Partial<QueryOCOOrderParameters>;
type QueryAllOCOOrdersOptions = Partial<QueryAllOCOOrdersParameters>;
type QueryOpenOCOOrdersOptions = Partial<QueryOpenOCOOrdersParameters>;
type QueryAccountInformationOptions = Partial<QueryAccountInformationParameters>;
type QueryMyTradesOptions = Partial<QueryMyTradesParameters>;


type BinanceRESTOptions = {
    /** API Key from binance */
    apiKey: string;
    /** API Secret from binance */
    apiSecret: string;
    /*
     * Optional, default is 'https://api.binance.com/'.
     * Can be useful in case default url stops working, or to use the test API.
     */
    baseUrl: string;
    /** Optional, defaults to 15000, is the request time out in milliseconds */
    timeout?: number;
    /** 
     * Optional, is the amount of time the request
     * needs to be received within or else it will be discarded.
     */
    recvWindow?: number;
    /*
     * Optional, default is false.  If turned on, the library will attempt to handle any drift of
     * your clock on it's own.  If a request fails due to drift, it'll attempt a fix by requesting
     * binance's server time, calculating the difference with your own clock, and then reattempting
     * the request.
     */
    handleDrift?: boolean;
}