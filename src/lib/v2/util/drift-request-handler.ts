import RequestHandler from "../../base/util/request-handler";

const INVALID_TIMESTAMP = '-1021';

export default class DriftRequestHandler extends RequestHandler {

    protected fixingDrift?: Promise<number>;
    /** True if the drift fix request has already completed */
    protected driftFixComplete: boolean;

    constructor(
        protected apiKey: string,
        protected apiSecret: string,
        protected baseURL: string,
        protected fixDrift: ()=>Promise<number> 
    ) {
        super(apiKey, apiSecret, baseURL);
        this.driftFixComplete = true;
    }

    /**
     * If a request asks for drift to be fixed when it's already being fixed, then this will return a promise
     * that resolves when the current logic for fixing drift is complete.
     * If the drift is not already being fixed, then this will create the request to do so, and cache it for any new requests to
     * wait for before sending.
     */
    protected requestDriftCorrection() {
        console.log('Drift Correction');
        if(this.driftFixComplete) {
            this.driftFixComplete = false;
            this.fixingDrift = this.fixDrift();
            this.fixingDrift.then(() => { this.driftFixComplete=true; });
        }
        return this.fixingDrift as Promise<number>;
    }

    protected applyDrift(value: { timestamp?: number} | undefined, drift: number) {
        if(value?.timestamp) { value.timestamp += drift; }
        return value;
    }

    /**
     * 
     */
    async sendRequest<T>({ path, method, weight, params }: { path: string, method: Method, weight: number, params?: { timestamp?: number} }): Promise<T>{
        console.log(path)
        try {
            // If a drift correction is happening, wait for that before sending a request
            if(params?.timestamp) await this.fixingDrift;
            return await super.sendRequest<T>({ path, method, weight, params })
        } catch (err) {
            if(err.name === INVALID_TIMESTAMP) {
                try {
                    let drift = await this.requestDriftCorrection();
                    params = this.applyDrift(params, drift);
                    return await super.sendRequest<T>({ path, method, weight, params, });
                } catch (err) { throw err; }
            } else {
                throw err;
            }
        }
    }

    /**
     * 
     * Also adds a HMAC-SHA256 signature to the request.
     */
    async sendSignedRequest<T>({ path, method, weight, params }: { path: string, method: Method, weight: number, params?: { timestamp?: number} }): Promise<T> {
        console.log(path);
        try {
            // If a drift correction is happening, wait for that before sending a request
            if(params?.timestamp ) await this.fixingDrift;
            return await super.sendSignedRequest<T>({ path, method, weight, params })
        } catch (err) {
            if(err.name === INVALID_TIMESTAMP) {
                try {
                    let drift = await this.requestDriftCorrection();
                    params = this.applyDrift(params, drift);
                    return await super.sendSignedRequest<T>({ path, method, weight, params });
                } catch (err) { throw err; }
            } else {
                throw err;
            }
        }
    }
}