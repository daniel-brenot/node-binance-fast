import axios, { AxiosResponse } from 'axios';
import crypto from 'crypto';
import qs from 'qs';

/** Name of the header to assign the API key to */
const API_KEY_HEADER_NAME = 'X-MBX-APIKEY';

class RequestError extends Error{

    constructor(name: string, message: string){
        super(message);
        this.name = name;
    }
}

/**
 * Handles REST requests to binance by adding the appropriate headers
 * and sending the data to the provided url
 */
export default class RequestHandler {

    constructor(
        protected apiKey: string,
        protected apiSecret: string,
        protected baseURL: string
    ) { }

    /**
     * Uses the HMAC-SHA256 algorithm to sign the data passed in
     * using the secret key used to initialise the handler.
     * @param data The data to create a signature for
     */
    protected getSignature(data: string){
        return crypto.createHmac('sha256', this.apiSecret).update(data).digest('hex')
    }

    /**
     * 
     */
    async sendRequest<T>({path, method, weight, params}: {path: string, method: Method, weight: number, params?: {}}): Promise<T>{
        const headers = { [API_KEY_HEADER_NAME]: this.apiKey };
        try {
            return (await axios.request({baseURL: this.baseURL, url: path, method, params, headers})).data as T;
        } catch (err) {
            let data = err.response.data;
            throw new RequestError(data.code, data.msg);
        }
    }

    /**
     * 
     * Also adds a HMAC-SHA256 signature to the request.
     */
    async sendSignedRequest<T>({path, method, weight, params}: {path: string, method: Method, weight: number, params?: {}}): Promise<T>{
        const headers = { [API_KEY_HEADER_NAME]: this.apiKey };
        const signature = this.getSignature(qs.stringify(params));
        try {
            params= { signature, ...params };
            return (await axios.request({baseURL: this.baseURL, url: path, method, params, headers})).data as T;
        } catch (err) {
            let data = err.response.data;
            throw new RequestError(data.code, data.msg);
        }
    }
}