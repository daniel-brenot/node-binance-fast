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