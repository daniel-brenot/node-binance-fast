import WebSocketHandler from "./util/websocket-handler";

/**
 * API object for accessing binance Websocket stream API.
 * Each method returns a custom websocket wrapper that
 * automatically parses messages returned from the server and
 * emits JSON to all listeners.
 * The websockets automatically close upon all of the listeners
 * being closed. 
 */
export default class WebSocketStreamAPI {

    constructor(private handler: WebSocketHandler) {}

    /**
     * The Aggregate Trade Streams push trade information that is aggregated for a single taker order.  
     * 
     * Update Speed: Real-time
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#aggregate-trade-streams
     * @param symbol
     */
    onAggTrade(symbol: string) {
        const PATH = `${symbol.toLowerCase()}@aggTrade`;
        return this.handler.createWebSocket<AggregateTradePayload>(PATH);
    }

    /**
     * The Trade Streams push raw trade information; each trade has a unique buyer and seller.  
     * 
     * Update Speed: Real-time
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#trade-streams
     * @param symbol
     */
    onTrade(symbol: string) {
        const PATH = `${symbol.toLowerCase()}@trade`;
        return this.handler.createWebSocket<TradePayload>(PATH);
    }

    /**
     * The Kline/Candlestick Stream push updates to the current klines/candlestick every second.  
     * 
     * Update Speed: 2000ms
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#klinecandlestick-streams
     * @param symbol 
     * @param interval 
     */
    onKline(symbol: string, interval: ChartInterval) {
        const PATH = `${symbol.toLowerCase()}@kline_${interval}`;
        return this.handler.createWebSocket<KlinePayload>(PATH);
    }

    /**
     * 24hr rolling window mini-ticker statistics.
     * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.  
     * 
     * Update Speed: 1000ms
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-mini-ticker-stream
     * @param symbol 
     */
    onMiniTicker(symbol: string) {
        const PATH = `${symbol.toLowerCase()}@miniTicker`;
        return this.handler.createWebSocket<MiniTickerPayload>(PATH);
    }

    /**
     * 24hr rolling window mini-ticker statistics for all symbols that changed in an array.
     * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.  
     * Note that only tickers that have changed will be present in the array.
     * 
     * Update Speed: 1000ms
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-market-mini-tickers-stream
     */
    onAllMiniTickers() {
        const PATH = `!miniTicker@arr`;
        return this.handler.createWebSocket<AllMiniTickersPayload>(PATH);
    }

    /**
     * 24hr rolling window ticker statistics for a single symbol.
     * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
     * 
     * Update Speed: 1000ms
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-ticker-streams
     * @param symbol
     */
    onTicker(symbol: string) {
        const PATH = `${symbol}@ticker`;
        return this.handler.createWebSocket<TickerPayload>(PATH);
    }
    
    /**
     * 24hr rolling window ticker statistics for all symbols that changed in an array.
     * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
     * Note that only tickers that have changed will be present in the array.
     * 
     * Update Speed: 1000ms
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-market-tickers-stream
     */
    onAllTickers() {
        const PATH = `!ticker@arr`;
        return this.handler.createWebSocket<AllTickersPayload>(PATH);
    }

    /**
     * Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.
     * 
     * Update Speed: Real-time
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-book-ticker-streams
     * @param symbol
     */
    onBookTicker(symbol: string) {
        const PATH = `${symbol}@bookTicker`;
        return this.handler.createWebSocket<BookTickerPayload>(PATH);
    }

    /**
     * Pushes any update to the best bid or ask's price or quantity in real-time for all symbols.
     * 
     * Update Speed: Real-time
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-book-tickers-stream
     */
    onAllBookTickers() {
        const PATH = `!bookTicker`;
        return this.handler.createWebSocket<AllBookTickersPayload>(PATH);
    }

    /**
     * Top <levels> bids and asks, pushed every second.
     * Valid levels are 5, 10, or 20.
     * 
     * Update Speed: 1000ms or 100ms
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#partial-book-depth-streams
     * @param symbol 
     * @param level 
     */
    onDepthLevelUpdate(symbol: string, level: DepthLevel, updateSpeed?: '100ms') {
        const PATH = `${symbol.toLowerCase()}@depth${level}${updateSpeed?'@'+updateSpeed:''}`;
        return this.handler.createWebSocket<DepthLevelUpdatePayload>(PATH);
    }

    /**
     * Order book price and quantity depth updates used to locally manage an order book.
     * 
     * Update Speed: 1000ms or 100ms
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#diff-depth-stream
     * @param symbol 
     */
    onDepthUpdate(symbol: string, updateSpeed?: '100ms') {
        const PATH = `${symbol.toLowerCase()}@depth${updateSpeed?'@'+updateSpeed:''}`;
        return this.handler.createWebSocket<DepthUpdatePayload>(PATH);
    }

    /**
     * Multiple streams combined into a single stream
     * 
     * Update Speed: 2000ms, 1000ms, 100ms, or Real-time
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#general-wss-information
     * @param streams list of stream names to stream
     */
    onCombinedStream(streams: string[]) {
        const PATH = `${streams.join('/')}`;
        return this.handler.createWebSocket<{}>(PATH);
    }
}