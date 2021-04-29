type BinanceUserDataOptions = {
    /** API Key from binance */
    apiKey: string;
    /** API Secret from binance */
    apiSecret: string;
    /*
     * Optional, default is 'https://api.binance.com/'.
     * Can be useful in case default url stops working, or to use the test API.
     */
    baseURL?: string;
    /*
     * Optional, default is 'https://api.binance.com/'.
     * Can be useful in case default url stops working, or to use the test API.
     */
    combinedBaseURL?: string;
    /** Optional, defaults to 15000, is the request time out in milliseconds */
    timeout?: number;
    /** 
     * Optional, is the amount of time the request
     * needs to be received within or else it will be discarded.
     */
    recvWindow?: number;
    /*
     * Optional, default is false.  If turned on, the library will attempt to handle any drift of
     * your clock on it's own.  If a request fails due to drift, it'll attempt a fix by requesting
     * binance's server time, calculating the difference with your own clock, and then reattempting
     * the request.
     */
    handleDrift?: boolean;
    /*
     * Optional, default is true.  If turned on, the library will cache websockets and return them when
     * requested with the same parameters twice.
     */
    cacheConnections?: boolean;
}