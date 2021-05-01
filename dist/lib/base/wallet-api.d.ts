import { RequestHandler } from "./util";
/**
 * Interface for REST calls to the binance wallet API
 *
 * https://binance-docs.github.io/apidocs/spot/en/#wallet-endpoints
 */
export default class WalletAPI {
    protected handler: RequestHandler;
    constructor(handler: RequestHandler);
    /**
     * Fetch system status.
     * https://binance-docs.github.io/apidocs/spot/en/#system-status-system
     */
    getSystemStatus(): Promise<void>;
    /**
     * Get information of coins (available for deposit and withdraw) for user.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#all-coins-39-information-user_data
     */
    getAllCoins(params: GetAllCoinsParams): Promise<void>;
    /**
     *
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#daily-account-snapshot-user_data
     */
    getDailyAccountSnapshot(): Promise<void>;
    /**
     * https://binance-docs.github.io/apidocs/spot/en/#disable-fast-withdraw-switch-user_data
     */
    postDisableFastWithdrawSwitch(): Promise<void>;
    /**
     * https://binance-docs.github.io/apidocs/spot/en/#enable-fast-withdraw-switch-user_data
     */
    postEnableFastWithdrawSwitch(): Promise<void>;
    /**
     * Submit a withdraw request.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#withdraw-sapi
     */
    postWithdraw(): Promise<void>;
    /**
     * Fetch deposit history.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#deposit-history-supporting-network-user_data
     */
    getDepositHistory(): Promise<void>;
    /**
     * Fetch history.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#withdraw-history-supporting-network-user_data
     */
    getWithdrawHistory(): Promise<void>;
    /**
     * Fetch deposit address with network.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#deposit-address-supporting-network-user_data
     */
    getDepositAddress(): Promise<void>;
    /**
     * Fetch account status detail.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#account-status-sapi-user_data
     */
    getAccountStatus(): Promise<void>;
    /**
     * Fetch account api trading status detail.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#account-api-trading-status-user_data
     */
    getAccountAPITradingStatus(): Promise<void>;
    /**
     * Fetch small amounts of assets exchanged BNB records.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#dustlog-user_data
     */
    getDustLog(): Promise<void>;
    /**
     * Convert dust assets to BNB.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#dust-transfer-user_data
     */
    postDustTransfer(): Promise<void>;
    /**
     * Query asset dividend record.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#asset-dividend-record-user_data
     */
    getAssetDividendRecord(): Promise<void>;
    /**
     * Fetch details of assets supported on Binance.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#asset-detail-user_data
     */
    getAssetDetail(): Promise<void>;
    /**
     * Fetch trade fee, values in percentage.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#trade-fee-user_data
     */
    getTradeFee(): Promise<void>;
    /**
     * You need to enable Permits Universal Transfer option for the api key which requests this endpoint.
     *
     * Weight: 1
     *
     * https://binance-docs.github.io/apidocs/spot/en/#user-universal-transfer
     */
    postUserUniversalTransfer(): Promise<void>;
    /**
     * Weight: 1
     */
    getUserUniversalTransfer(): Promise<void>;
}
//# sourceMappingURL=wallet-api.d.ts.map