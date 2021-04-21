// Callbacks
type PingCallback = (err: Error) => void;
type TimeCallback = (err: Error, value: QueryTimeResponse) => void;
type DepthCallback = (err: Error, value: QueryDepthResponse) => void;
type TradesCallback = (err: Error, value: QueryTradesResponse) => void;
type HistoricalTradesCallback = (err: Error, value: QueryHistoricalTradesResponse) => void;
type AggTradesCallback = (err: Error, value: QueryAggTradesResponse) => void;
type ExchangeInfoCallback = (err: Error, value: QueryExchangeInfoResponse) => void;
type KlinesCallback = (err: Error, value: QueryKlinesResponse) => void;
type Ticker24HrCallback = (err: Error, value: any) => void;
type TickerPriceCallback = (err: Error, value: any) => void;
type BookTickerCallbackify = (arg1: QueryBookTickerParameters | {}, callback: (err: Error, result: QueryBookTickerResponse[]) => void) => void;
type BookTickerCallback = (err: Error, value: any) => void;
type AllBookTickersCallbackify = (arg1: QueryBookTickerParameters | {}, callback: (err: Error, result: QueryBookTickerResponse[]) => void) => void;
type AllBookTickersCallback = (err: Error, value: QueryBookTickerResponse[]) =>void;
type AllPricesCallback = (err: Error, value: QueryTickerPriceResponse[]) => void;
type QueryOrderCallback = (err: Error, value: QueryOrderResponse) => void;
type CancelOrderCallback = (err: Error, value: CancelOrderResponse) => void;