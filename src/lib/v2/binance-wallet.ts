import { RESTAPI } from '../base';
import RequestHandler from '../base/util/request-handler';
import WalletAPI from '../base/wallet-api';
import DriftRequestHandler from './util/drift-request-handler';

const DEFAULT_BASE_URL = 'https://api.binance.com/';

/**
 * Binance Wallet API
 */
export default class BinanceWallet {

    protected wallet: WalletAPI;
    protected rest: RESTAPI;
    protected syncInterval?: NodeJS.Timeout;
    protected handler: RequestHandler;
    protected drift = 0;
    protected options?: Required<BinanceRESTOptions>

    constructor(options: BinanceRESTOptions) {
        const DEFAULT_OPTIONS = {
            baseURL: DEFAULT_BASE_URL,
            timeout: 15000,
            recvWindow: 10000,
            handleDrift: false
        };
        this.options = { ...DEFAULT_OPTIONS, ...options };
        if (options.handleDrift) {
            this.handler = new DriftRequestHandler(options.apiKey, options.apiSecret, this.options.baseURL, this.fixDrift.bind(this));
        } else {
            this.handler = new RequestHandler(options.apiKey, options.apiSecret, this.options.baseURL);
        }
        this.wallet = new WalletAPI(this.handler);
        this.rest = new RESTAPI(this.handler);

    }

    protected async fixDrift() {
        this.drift = await this.calculateDrift();
        return this.drift;
    }

    protected get timestamp() { return Date.now() + this.drift; }

    /**
     * Starts an interval that automatically calculates drift between the server and client,
     * and updates the request handler accordingly.
     * @param interval The time in milliseconds between the requests to sync time. 
     * Note: A lower interval will use more weight and can potentially overuse request weight allowance.
     */
    async startTimeSync(interval = 30000) {
        // If there's already an interval running, clear it and reset values
        if (!!this.syncInterval) { this.endTimeSync(); }

        // Calculate initial drift value and setup interval to periodically update it
        await this.fixDrift();
        this.syncInterval = setInterval(async () => {
            this.drift = await this.calculateDrift();
        }, interval);
    }

    /**
     * Clears the interval for syncing server time with local time for requests.
     */
    endTimeSync() {
        if (!this.syncInterval) { return };
        clearInterval(this.syncInterval);
        this.drift = 0;
        this.syncInterval = undefined;
    }

    /**
     * Test connectivity to the REST API and get the difference in milliseconds
     * between the current server time and the local time.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    async calculateDrift() {
        const systemTime = Date.now();
        const serverTime = (await this.rest.queryTime()).serverTime;
        const transitTime = Math.round((Date.now() - systemTime) / 2);
        return (serverTime - (systemTime + transitTime));
    }

    async getAllCoins(){
        try {
            return await this.wallet.getAllCoins({timestamp: this.timestamp});
        } catch (err) { throw err; }
    }

}