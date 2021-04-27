import RequestHandler from "../../base/util/request-handler";
export default class DriftRequestHandler extends RequestHandler {
    protected apiKey: string;
    protected apiSecret: string;
    protected baseURL: string;
    protected fixDrift: () => Promise<number>;
    protected fixingDrift?: Promise<number>;
    /** True if the drift fix request has already completed */
    protected driftFixComplete: boolean;
    constructor(apiKey: string, apiSecret: string, baseURL: string, fixDrift: () => Promise<number>);
    /**
     * If a request asks for drift to be fixed when it's already being fixed, then this will return a promise
     * that resolves when the current logic for fixing drift is complete.
     * If the drift is not already being fixed, then this will create the request to do so, and cache it for any new requests to
     * wait for before sending.
     */
    protected requestDriftCorrection(): Promise<number>;
    protected applyDrift(value: {
        timestamp?: number;
    } | undefined, drift: number): {
        timestamp?: number | undefined;
    } | undefined;
    /**
     *
     */
    sendRequest<T>({ path, method, weight, params }: {
        path: string;
        method: Method;
        weight: number;
        params?: {
            timestamp?: number;
        };
    }): Promise<T>;
    /**
     *
     * Also adds a HMAC-SHA256 signature to the request.
     */
    sendSignedRequest<T>({ path, method, weight, params }: {
        path: string;
        method: Method;
        weight: number;
        params?: {
            timestamp?: number;
        };
    }): Promise<T>;
}
//# sourceMappingURL=drift-request-handler.d.ts.map