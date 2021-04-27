/**
 * Handles REST requests to binance by adding the appropriate headers
 * and sending the data to the provided url
 */
export default class RequestHandler {
    protected apiKey: string;
    protected apiSecret: string;
    protected baseURL: string;
    constructor(apiKey: string, apiSecret: string, baseURL: string);
    /**
     * Uses the HMAC-SHA256 algorithm to sign the data passed in
     * using the secret key used to initialise the handler.
     * @param data The data to create a signature for
     */
    protected getSignature(data: string): string;
    /**
     *
     */
    sendRequest<T>({ path, method, weight, params }: {
        path: string;
        method: Method;
        weight: number;
        params?: {};
    }): Promise<T>;
    /**
     *
     * Also adds a HMAC-SHA256 signature to the request.
     */
    sendSignedRequest<T>({ path, method, weight, params }: {
        path: string;
        method: Method;
        weight: number;
        params?: {};
    }): Promise<T>;
}
//# sourceMappingURL=request-handler.d.ts.map