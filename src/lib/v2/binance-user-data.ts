import { UserDataStreamAPI } from "../base";
import { RequestHandler, WebSocketHandler } from "../base/util";
import CachedWebsocketHander from "./util/cached-websocket-handler";
import DriftRequestHandler from "./util/drift-request-handler";

const DEFAULT_BASE_URL = 'https://api.binance.com/';
const DEFAULT_WS_BASE_URL = 'wss://stream.binance.com:9443';
const DEFAULT_WS_COMBINED_BASE_URL = 'wss://stream.binance.com:9443/stream?streams=';


/**
 * 
 */
export default class BinanceUserData {

    private userData: UserDataStreamAPI;
    private handler: RequestHandler;
    private websocketHandler: WebSocketHandler;
    protected options?: Required<BinanceUserDataOptions>
    protected drift = 0;

    constructor(options: BinanceUserDataOptions) {
        const DEFAULT_OPTIONS = {
            baseURL: DEFAULT_BASE_URL,
            combinedBaseURL: DEFAULT_WS_COMBINED_BASE_URL,
            timeout: 15000,
            recvWindow: 10000,
            handleDrift: false,
            cacheConnections: true
        };
        this.options = { ...DEFAULT_OPTIONS, ...options };
        // if (options.handleDrift) {
        //     //this.handler = new DriftRequestHandler(options.apiKey, options.apiSecret, this.options.baseURL, this.fixDrift.bind(this));
        // } else {
             this.handler = new RequestHandler(options.apiKey, options.apiSecret, this.options.baseURL);
        // }
        if (options.cacheConnections) {
            this.websocketHandler = new CachedWebsocketHander(this.options.baseURL, this.options.combinedBaseURL);
        } else {
            this.websocketHandler = new WebSocketHandler(this.options.baseURL, this.options.combinedBaseURL);
        }
        this.userData = new UserDataStreamAPI(this.handler, this.websocketHandler);
    }

    // protected async fixDrift() {
    //     this.drift = await this.calculateDrift();
    //     return this.drift;
    // }

    // /**
    //  * Test connectivity to the REST API and get the current server time.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
    //  */
    // private async getTime() {
    //     return this.rest.queryTime();
    // }

    // /**
    //  * Test connectivity to the REST API and get the difference in milliseconds
    //  * between the current server time and the local time.  
    //  * Weight: 1  
    //  * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
    //  */
    //  async calculateDrift() {
    //     const systemTime = Date.now();
    //     const serverTime = (await this.getTime()).serverTime;
    //     const transitTime = Math.round((Date.now() - systemTime) / 2);
    //     return (serverTime - (systemTime + transitTime));
    // }
}