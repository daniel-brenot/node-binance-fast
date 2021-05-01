import { RequestHandler } from "./util";

/**
 * Interface for REST calls to the binance wallet API
 * 
 * https://binance-docs.github.io/apidocs/spot/en/#wallet-endpoints
 */
export default class WalletAPI {

    constructor(protected handler: RequestHandler) { }

    /**
     * Fetch system status.
     * https://binance-docs.github.io/apidocs/spot/en/#system-status-system
     */
    async getSystemStatus() {
        const path = 'sapi/v1/system/status';
        const weight = 0;
        const method = 'GET';
        try {
            await this.handler.sendRequest<GetSystemStatusResponse>({ path, method, weight });
        } catch (err) { throw err; }

    }

    /**
     * Get information of coins (available for deposit and withdraw) for user.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#all-coins-39-information-user_data
     */
    async getAllCoins(params: GetAllCoinsParams) {
        const path = 'sapi/v1/capital/config/getall';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<GetAllCoinsResponse>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * 
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#daily-account-snapshot-user_data
     */
    async getDailyAccountSnapshot() {
        const path = 'sapi/v1/accountSnapshot';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<GetDailyAccountSnapshotResponse>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * https://binance-docs.github.io/apidocs/spot/en/#disable-fast-withdraw-switch-user_data
     */
    async postDisableFastWithdrawSwitch() {
        const path = 'sapi/v1/account/disableFastWithdrawSwitch';
        const weight = 0;
        const method = 'POST';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * https://binance-docs.github.io/apidocs/spot/en/#enable-fast-withdraw-switch-user_data
     */
    async postEnableFastWithdrawSwitch() {
        const path = 'sapi/v1/account/enableFastWithdrawSwitch';
        const weight = 0;
        const method = 'POST';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Submit a withdraw request.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#withdraw-sapi
     */
    async postWithdraw() {
        const path = 'sapi/v1/capital/withdraw/apply';
        const weight = 1;
        const method = 'POST';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Fetch deposit history.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#deposit-history-supporting-network-user_data
     */
    async getDepositHistory() {
        const path = 'sapi/v1/capital/deposit/hisrec';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Fetch history.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#withdraw-history-supporting-network-user_data
     */
    async getWithdrawHistory() {
        const path = 'sapi/v1/capital/withdraw/history';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Fetch deposit address with network.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#deposit-address-supporting-network-user_data
     */
    async getDepositAddress() {
        const path = 'sapi/v1/capital/deposit/address';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Fetch account status detail.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#account-status-sapi-user_data
     */
    async getAccountStatus() {
        const path = 'sapi/v1/account/status';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Fetch account api trading status detail.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#account-api-trading-status-user_data
     */
    async getAccountAPITradingStatus() {
        const path = 'sapi/v1/account/apiTradingStatus';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Fetch small amounts of assets exchanged BNB records.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#dustlog-user_data
     */
    async getDustLog() {
        const path = 'sapi/v1/asset/dribblet';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Convert dust assets to BNB.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#dust-transfer-user_data
     */
    async postDustTransfer() {
        const path = 'sapi/v1/asset/dust';
        const weight = 1;
        const method = 'POST';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Query asset dividend record.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#asset-dividend-record-user_data
     */
    async getAssetDividendRecord(){
        const path = 'sapi/v1/asset/assetDividend';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Fetch details of assets supported on Binance.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#asset-detail-user_data
     */
    async getAssetDetail() {
        const path = 'sapi/v1/asset/assetDetail';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Fetch trade fee, values in percentage.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#trade-fee-user_data
     */
    async getTradeFee() {
        const path = 'sapi/v1/asset/tradeFee';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * You need to enable Permits Universal Transfer option for the api key which requests this endpoint.
     * 
     * Weight: 1
     * 
     * https://binance-docs.github.io/apidocs/spot/en/#user-universal-transfer
     */
    async postUserUniversalTransfer(){
        const path = 'sapi/v1/asset/transfer';
        const weight = 1;
        const method = 'POST';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }

    /**
     * Weight: 1
     */
    async getUserUniversalTransfer() {
        const path = 'sapi/v1/asset/transfer';
        const weight = 1;
        const method = 'GET';
        try {
            await this.handler.sendRequest<{}>({ path, method, weight });
        } catch (err) { throw err; }
    }
}