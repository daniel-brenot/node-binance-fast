declare type ExecutionType = 'NEW' | 'CANCELED' | 'REPLACED' | 'REJECTED' | 'TRADE' | 'EXPIRED';
declare type KeepAliveUserDataStreamParameters = {
    listenKey: string;
};
declare type CancelUserDataStreamParameters = {
    listenKey: string;
};
declare type CreateUserDataStreamResponse = {
    listenKey: string;
};
declare type OutboundAccountPositionPayload = {
    /** Event type */
    e: 'outboundAccountPosition';
    /** Event Time */
    E: number;
    /** Time of last account update */
    u: number;
    /** Balances Array */
    B: {
        /** Asset */
        a: string;
        /** Free */
        f: string;
        /** Locked */
        l: string;
    }[];
};
declare type BalanceUpdatePayload = {
    e: 'balanceUpdate';
    /** Event Time */
    E: number;
    /** Asset */
    a: string;
    /** Balance Delta */
    d: string;
    /** Clear Time */
    T: number;
};
declare type ExecutionReportPayload = {
    /** Event type */
    e: 'executionReport';
    /** Event time */
    E: number;
    /** Symbol */
    s: string;
    /** Client order ID */
    c: string;
    /** Side */
    S: OrderSide;
    /** Order type */
    o: OrderType;
    /** Time in force */
    f: TimeInForce;
    /** Order quantity */
    q: string;
    /** Order price */
    p: string;
    /** Stop price */
    P: string;
    /** Iceberg quantity */
    F: string;
    /** OrderListId */
    g: number;
    /** Original client order ID; This is the ID of the order being canceled */
    C: null | number;
    /** Current execution type */
    x: ExecutionType;
    /** Current order status */
    X: ExecutionType;
    /** Order reject reason; will be an error code. */
    r: string;
    /** Order ID */
    i: number;
    /** Last executed quantity */
    l: string;
    /** Cumulative filled quantity */
    z: string;
    /** Last executed price */
    L: string;
    /** Commission amount */
    n: string;
    /** Commission asset */
    N: null | string;
    /** Transaction time */
    T: number;
    /** Trade ID */
    t: number;
    /** Ignore */
    I: number;
    /** Is the order on the book? */
    w: boolean;
    /** Is this trade the maker side? */
    m: boolean;
    /** Ignore */
    M: boolean;
    /** Order creation time */
    O: number;
    /** Cumulative quote asset transacted quantity */
    Z: string;
    /** Last quote asset transacted quantity (i.e. lastPrice * lastQty) */
    Y: string;
    /** Quote Order Qty */
    Q: string;
};
declare type ListStatusPayload = {
    e: 'listStatus';
    E: number;
    s: string;
    g: number;
    c: string;
    l: string;
    r: string;
    C: string;
    T: number;
    O: {
        /** Symbol */
        s: string;
        /** orderId */
        i: number;
        /** ClientOrderId */
        c: string;
    }[];
};
declare type OrderUpdatePayload = ExecutionReportPayload | ListStatusPayload;
declare type UserDataStreamPayload = OutboundAccountPositionPayload | BalanceUpdatePayload | ExecutionReportPayload | ListStatusPayload | OrderUpdatePayload;
//# sourceMappingURL=user-data-stream-api.d.ts.map