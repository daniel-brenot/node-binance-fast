import JSONWebSocket from "./json-websocket";

type DepthLevel = 5 | 10 | 20;


/**
 * API object for accessing binance Websocket API
 */
export default class BinanceWS {

    private cachedSockets: Record<string, JSONWebSocket<any>>;

    constructor(private baseUrl: string, private combinedBaseUrl: string) {
        this.cachedSockets = {};
    }
    
    /**
     * The Aggregate Trade Streams push trade information that is aggregated for a single taker order.  
     * 
     * Reference:  
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#aggregate-trade-streams
     * @param symbol
     */
    onAggTrade(symbol: string): JSONWebSocket<AggregateTradePayload> {
        const PATH = `${this.baseUrl}${symbol.toLowerCase()}@aggTrade`;
        if(this.cachedSockets[PATH]) return this.cachedSockets[PATH];
        this.cachedSockets[PATH] = new JSONWebSocket(PATH);
        return this.cachedSockets[PATH];
    }

    /**
     * The Trade Streams push raw trade information; each trade has a unique buyer and seller.  
     * 
     * Reference:  
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#trade-streams
     * @param symbol
     */
    onTrade(symbol: string): JSONWebSocket<TradePayload> {
        const PATH = `${this.baseUrl}${symbol.toLowerCase()}@trade`;
        if(this.cachedSockets[PATH]) return this.cachedSockets[PATH];
        this.cachedSockets[PATH] = new JSONWebSocket(PATH);
        return this.cachedSockets[PATH];
    }

    /**
     * The Kline/Candlestick Stream push updates to the current klines/candlestick every second.  
     * 
     * Reference:  
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#klinecandlestick-streams
     * @param symbol 
     * @param interval 
     * @param eventListener 
     */
    onKline(symbol: string, interval: ChartInterval): JSONWebSocket<KlinePayload> {
        const PATH = `${this.baseUrl}${symbol.toLowerCase()}@kline_${interval}`;
        if(this.cachedSockets[PATH]) return this.cachedSockets[PATH];
        this.cachedSockets[PATH] = new JSONWebSocket(PATH);
        return this.cachedSockets[PATH];
    }

    // onDepthUpdate(symbol: string, eventHandler: (err?: Error, value?: any)=>{}) {
    //     return new WebSocket(`${this.baseUrl}${symbol.toLowerCase()}@depth`, eventHandler);
    // }

    // onDepthLevelUpdate(symbol: string, level: DepthLevel, eventHandler) {
    //     return new WebSocket(`${this.baseUrl}${symbol.toLowerCase()}@depth${level}`, eventHandler);
    // }

    // onTicker(symbol: string, eventHandler) {
    //     return new WebSocket(`${this.baseUrl}${symbol.toLowerCase()}@ticker`, eventHandler);
    // }

    // onAllTickers(eventHandler) {
    //     new WebSocket(`${this.baseUrl}!ticker@arr`, eventHandler)
    // }


    // onCombinedStream(streams: string[], eventHandler) {
    //     new WebSocket(`${this.combinedBaseUrl}${streams.join('/')}`, eventHandler);
    // }
}