declare type QueryHistoricalTradesOptions = Omit<QueryHistoricalTradesParameters, 'symbol'>;
declare type QueryAggTradesOptions = Omit<QueryAggTradesParameters, 'symbol'>;
declare type QueryOrderOptions = Omit<QueryOrderParameters, 'symbol'>;
declare type QueryKlinesOptions = Omit<QueryKlinesParameters, 'symbol' | 'interval'>;
declare type CreateLimitOrderOptions = Omit<LimitOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'price'>;
declare type CreateMarketOrderOptions = Omit<MarketOrderParameters, 'symbol' | 'side' | 'type'>;
declare type CreateStopLossOrderOptions = Omit<StopLossOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'stopPrice'>;
declare type CreateStopLossLimitOrderOptions = Omit<StopLossLimitOrderParameters, 'symbol' | 'side' | 'type'>;
declare type TakeProfitOrderOptions = Omit<TakeProfitOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'stopPrice'>;
declare type TakeProfitLimitOrderOptions = Omit<TakeProfitLimitOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'price' | 'stopPrice'>;
declare type LimitMakerOrderOptions = Omit<LimitMakerOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'price'>;
declare type CancelOrderOptions = Omit<CancelOrderParameters, 'symbol'>;
declare type CancelOpenOrdersOptions = Omit<CancelOpenOrdersParameters, 'symbol'>;
declare type QueryOpenOrdersOptions = Omit<QueryOpenOrdersParameters, 'symbol'>;
declare type QueryAllOpenOrdersOptions = Omit<QueryOpenOrdersParameters, 'symbol'>;
declare type QueryAllOrdersOptions = Omit<QueryAllOrdersParameters, 'symbol'>;
declare type CreateOCOOrderOptions = Omit<CreateOCOOrderParameters, 'symbol' | 'quantity' | 'price' | 'stopPrice'>;
declare type CancelOCOOrderOptions = Omit<CancelOCOOrderParameters, 'symbol'>;
declare type QueryOCOOrderOptions = Partial<QueryOCOOrderParameters>;
declare type QueryAllOCOOrdersOptions = Partial<QueryAllOCOOrdersParameters>;
declare type QueryOpenOCOOrdersOptions = Partial<QueryOpenOCOOrdersParameters>;
declare type QueryAccountInformationOptions = Partial<QueryAccountInformationParameters>;
declare type QueryMyTradesOptions = Partial<QueryMyTradesParameters>;
declare type BinanceRESTOptions = {
    /** API Key from binance */
    apiKey: string;
    /** API Secret from binance */
    apiSecret: string;
    baseUrl: string;
    /** Optional, defaults to 15000, is the request time out in milliseconds */
    timeout?: number;
    /**
     * Optional, is the amount of time the request
     * needs to be received within or else it will be discarded.
     */
    recvWindow?: number;
    handleDrift?: boolean;
};
//# sourceMappingURL=binance-rest.d.ts.map