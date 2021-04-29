declare type BinanceUserDataOptions = {
    /** API Key from binance */
    apiKey: string;
    /** API Secret from binance */
    apiSecret: string;
    baseURL?: string;
    combinedBaseURL?: string;
    /** Optional, defaults to 15000, is the request time out in milliseconds */
    timeout?: number;
    /**
     * Optional, is the amount of time the request
     * needs to be received within or else it will be discarded.
     */
    recvWindow?: number;
    handleDrift?: boolean;
    cacheConnections?: boolean;
};
//# sourceMappingURL=binance-user-data.d.ts.map