type KeepAliveUserDataStreamParameters = {
    listenKey: string;
};

type CancelUserDataStreamParameters = {
    listenKey: string;
};

type CreateUserDataStreamResponse = {
    listenKey: string;
};

type OutboundAccountPositionPayload = {
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

type BalanceUpdatePayload = {
    /* Event Type */
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

type ExecutionReportPayload = {
    
};

type ListStatusPayload = {

};

type OrderUpdatePayload = ExecutionReportPayload | ListStatusPayload;