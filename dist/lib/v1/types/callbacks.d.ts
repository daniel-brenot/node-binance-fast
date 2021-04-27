declare type PingCallback = (err: Error) => void;
declare type TimeCallback = (err: Error, value: QueryTimeResponse) => void;
declare type DepthCallback = (err: Error, value: QueryDepthResponse) => void;
declare type TradesCallback = (err: Error, value: QueryTradesResponse) => void;
declare type HistoricalTradesCallback = (err: Error, value: QueryHistoricalTradesResponse) => void;
declare type AggTradesCallback = (err: Error, value: QueryAggTradesResponse) => void;
declare type ExchangeInfoCallback = (err: Error, value: QueryExchangeInfoResponse) => void;
declare type KlinesCallback = (err: Error, value: QueryKlinesResponse) => void;
declare type Ticker24HrCallback = (err: Error, value: any) => void;
declare type TickerPriceCallback = (err: Error, value: any) => void;
declare type BookTickerCallbackify = (arg1: QueryBookTickerParameters | {}, callback: (err: Error, result: QueryBookTickerResponse[]) => void) => void;
declare type BookTickerCallback = (err: Error, value: any) => void;
declare type AllBookTickersCallbackify = (arg1: QueryBookTickerParameters | {}, callback: (err: Error, result: QueryBookTickerResponse[]) => void) => void;
declare type AllBookTickersCallback = (err: Error, value: QueryBookTickerResponse[]) => void;
declare type AllPricesCallback = (err: Error, value: QueryTickerPriceResponse[]) => void;
declare type QueryOrderCallback = (err: Error, value: QueryOrderResponse) => void;
declare type CancelOrderCallback = (err: Error, value: CancelOrderResponse) => void;
//# sourceMappingURL=callbacks.d.ts.map