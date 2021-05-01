type DepthLevel = 5 | 10 | 20;

type AggregateTradePayload = {
    /** Event Type */
    e: 'aggTrade';
    /** Event Time */
    E: number;
    /** Symbol */
    s: string;
    /** Aggregate trade ID */
    a: number;
    /** Price */
    p: string;
    /** Quantity */
    q: string;
    /** First trade ID */
    f: number;
    /** Last trade ID */
    l: number;
    /** Trade time */
    T: number;
    /** Is the buyer the market maker? */
    m: boolean;
    /** Ignore */
    M: boolean;
};

type TradePayload = {
    /** Event Type */
    e: 'trade';
    /** Event Time */
    E: number;
    /** Symbol */
    s: string;
    /** Trade ID */
    t: number;
    /** Price */
    p: string;
    /** Quantity */
    q: string;
    /** Buyer order ID */
    b: number;
    /** Seller order ID */
    a: number;
    /** Trade time */
    T: number;
    /** Is the buyer the market maker? */
    m: boolean;
    /** Ignore */
    M: boolean;
};

type KlinePayload = {
    /** Event type */
    e: 'kline';
    /** Event time */
    E: number;
    /** Symbol */
    s: string;
    k: {
        /** Kline start time */
        t: number;
        /** Kline close time */
        T: number;
        /** Symbol */
        s: string;
        /** Interval */
        i: ChartInterval;
        /** First trafe ID */
        f: number;
        /** Last trade ID */
        L: number;
        /** Open price */
        o: string;
        /** Close price */
        c: string;
        /** High price */
        h: string;
        /** Low price */
        l: string;
        /** Base asset volume */
        v: string;
        /** Number of trades */
        n: number;
        /** Is this kline closed? */
        x: boolean;
        /** Quote asset volume */
        q: string;
        /** Taker buy base asset volume */
        V: string;
        /** Taker buy quote asset volume */
        Q: string;
        /** Ignore */
        B: string;
    }
};

type MiniTickerPayload = {
    /** Event type */
    e: '24hrMiniTicker';
    /** Event time */
    E: number;
    /** Symbol */
    s: string;
    /** Close price */
    c: string;
    /** Open price */
    o: string;
    /** High price */
    h: string;
    /** Low price */
    l: string;
    /** Total traded base asset volume */
    v: string;
    /** Total traded quote asset volume */
    q: string;
};

type AllMiniTickersPayload = MiniTickerPayload[];

type TickerPayload = {
    /** Event type */
    e: '24hrTicker';
    /** Event time */
    E: number;
    /** Symbol */
    s: string;
    /** Price change */
    p: string;  
    /** Price change percent */
    P: string;  
    /** Weighted average price */
    w: string;
    /** First trade(F)-1 price (first trade before the 24hr rolling window) */
    x: string;
    /** Last price */
    c: string;
    /** Last quantity */
    Q: string;
    /** Best bid price */
    b: string;  
    /** Best bid quantity */
    B: string;  
    /** Best ask price */
    a: string;  
    /** Best ask quantity */
    A: string;  
    /** Open price */
    o: string;  
    /** High price */
    h: string;
    /** Low price */
    l: string;  
    /** Total traded base asset volume */
    v: string;  
    /** Total traded quote asset volume */
    q: string;  
    /** Statistics open time */
    O: number;  
    /** Statistics close time */
    C: number;  
    /** First trade ID */
    F: number;  
    /** Last trade Id */
    L: number;  
    /** Total number of trades */
    n: number;  
};

type AllTickersPayload = TickerPayload[];

type BookTickerPayload = {
    /** order book updateId */
    u: number; 
    /** symbol */
    s: string; 
    /** best bid price */
    b: string; 
    /** best bid qty */
    B: string; 
    /** best ask price */
    a: string; 
    /** best ask qty */
    A: string; 
};

type AllBookTickersPayload = BookTickerPayload;

type DepthLevelUpdatePayload = {
    /** Last update ID */
    lastUpdateId: number;
    /** Bids to be updated ( [Price level to be updated, Quantity] ) */
    bids: [string, string][];
    /** Asks to be updated ( [Price level to be updated, Quantity] ) */
    asks: [string, string][];
};

type DepthUpdatePayload = {
    /** Event type */
    e: 'depthUpdate';
    /** Event time */
    E: number;
    /** Symbol */
    s: string;
    /** First update ID in event */
    U: number;
    /** Final update ID in event */
    u: number;
    /** Bids to be updated */
    b: [string, string][];
    /** Asks to be updated */
    a: [string, string][];
};