/// <reference types="node" />
import { RESTAPI } from '../base';
import RequestHandler from '../base/util/request-handler';
import WalletAPI from '../base/wallet-api';
/**
 * Binance Wallet API
 */
export default class BinanceWallet {
    protected wallet: WalletAPI;
    protected rest: RESTAPI;
    protected syncInterval?: NodeJS.Timeout;
    protected handler: RequestHandler;
    protected drift: number;
    protected options?: Required<BinanceRESTOptions>;
    constructor(options: BinanceRESTOptions);
    protected fixDrift(): Promise<number>;
    protected get timestamp(): number;
    /**
     * Starts an interval that automatically calculates drift between the server and client,
     * and updates the request handler accordingly.
     * @param interval The time in milliseconds between the requests to sync time.
     * Note: A lower interval will use more weight and can potentially overuse request weight allowance.
     */
    startTimeSync(interval?: number): Promise<void>;
    /**
     * Clears the interval for syncing server time with local time for requests.
     */
    endTimeSync(): void;
    /**
     * Test connectivity to the REST API and get the difference in milliseconds
     * between the current server time and the local time.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
     */
    calculateDrift(): Promise<number>;
    getAllCoins(): Promise<void>;
}
//# sourceMappingURL=binance-wallet.d.ts.map