import axios from 'axios';
import crypto from 'crypto';


/** Name of the header to assign the API key to */
const API_KEY_HEADER_NAME = 'X-MBX-APIKEY';


/**
 * Handles REST requests to binance by adding the appropriate headers
 * and sending the data to the provided url
 */
export class RequestHandler {

    constructor(private baseUrl: string, private apiKey: string, private apiSecret: string) {}

    /**
     * Uses the HMAC-SHA256 algorithm to sign the data passed in
     * using the secret key used to initialise the handler.
     * @param data The data to create a signature for
     */
    private getSignedRequestData(data: string){
        return crypto.createHmac('sha256', this.apiSecret).update(data).digest('hex')
    }

    /**
     * Sends a GET request to the current API 
     */
    async sendGetRequest<T>(path: string, params?: any): Promise<T>{
        return (await axios.get(`${this.baseUrl}${path}`, {params})).data as T;
    }

    /**
     * Sends a PUT request to the current API 
     */
    async sendPutRequest<T>(path: string, data: {}): Promise<T>{
        return (await axios.put(`${this.baseUrl}${path}`, data)).data as T;
    }

    /**
     * Sends a POST request to the current API 
     */
    async sendPostRequest<T>(path: string, data: {}): Promise<T>{
        return (await axios.post(`${this.baseUrl}${path}`, data)).data as T;
    }

    /**
     * Sends a DELETE request to the current API 
     */
    async sendDeleteRequest<T>(path: string, params?: any): Promise<T>{
        return (await axios.delete(`${this.baseUrl}${path}`, {params})).data as T;
    }

    /**
     * Sends a GET request to the current API.  
     * Also adds a HMAC-SHA256 signature to the request.
     */
    async sendSignedGetRequest<T>(path: string, params?: any): Promise<T>{
        return (await axios.get(`${this.baseUrl}${path}`, {params})).data as T;
    }

    /**
     * Sends a PUT request to the current API.  
     * Also adds a HMAC-SHA256 signature to the request.
     */
    async sendSignedPutRequest<T>(path: string, data: {}): Promise<T>{
        return (await axios.put(`${this.baseUrl}${path}`, data)).data as T;
    }

    /**
     * Sends a POST request to the current API.  
     * Also adds a HMAC-SHA256 signature to the request.
     */
    async sendSignedPostRequest<T>(path: string, data: {}): Promise<T>{
        return (await axios.post(`${this.baseUrl}${path}`, data)).data as T;
    }

    /**
     * Sends a DELETE request to the current API.  
     * Also adds a HMAC-SHA256 signature to the request.
     */
    async sendSignedDeleteRequest<T>(path: string, params?: any): Promise<T>{
        return (await axios.delete(`${this.baseUrl}${path}`, {params})).data as T;
    }

}