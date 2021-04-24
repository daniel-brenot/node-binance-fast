import RequestHandler from "./util/request-handler";
import WebSocketHandler from "./util/websocket-handler";

export default class UserDataStreamAPI {

    constructor(private handler: RequestHandler, private websocketHandler: WebSocketHandler) { }

    /**
     * Start a new user data stream.
     * The stream will close after 60 minutes unless a keepalive is sent.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#user-data-stream-endpoints
     */
     async createUserDataStream() {
        const URL = '/api/v3/userDataStream';
        const WEIGHT = 1;
        return await this.handler.sendPostRequest<CreateUserDataStreamResponse>(URL, WEIGHT, {});
    }

    /**
     * Keepalive a user data stream to prevent a time out.
     * User data streams will close after 60 minutes.
     * It's recommended to send a ping about every 30 minutes.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#keepalive-user-data-stream-user_stream
     */
    async keepAliveUserDataStream(params: KeepAliveUserDataStreamParameters) {
        const URL = '/api/v3/userDataStream';
        const WEIGHT = 1;
        await this.handler.sendPutRequest<{}>(URL, WEIGHT, params);
    }

    /**
     * Close out a user data stream.
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#close-user-data-stream-user_stream
     */
    async cancelUserDataStream(params: CancelUserDataStreamParameters) {
        const URL = '/api/v3/userDataStream';
        const WEIGHT = 1;
        await this.handler.sendDeleteRequest<{}>(URL, WEIGHT, params);
    }

    /**
     * outboundAccountPosition is sent any time an account balance has changed and
     * contains the assets that were possibly changed by the event that generated the balance change.
     * 
     * Reference:  
     * https://github.com/binance/binance-spot-api-docs/blob/master/user-data-stream.md#account-update
     */
    onOutboundAccountPosition() {
        const PATH = `outboundAccountPosition`;
        return this.websocketHandler.createWebSocket<OutboundAccountPositionPayload>(PATH);
    }

    /**
     * Balance Update occurs during the following:
     * Deposits or withdrawals from the account
     * Transfer of funds between accounts (e.g. Spot to Margin)
     */
    onBalanceUpdate() {
        const PATH = `balanceUpdate`;
        return this.websocketHandler.createWebSocket<BalanceUpdatePayload>(PATH);
    }

    /**
     * Orders are updated with the executionReport event.
     * Average price can be found by doing Z divided by z.
     * If the order is an OCO, an event will be displayed named ListStatus in addition to the executionReport event.
     */
    onOrderUpdate(){
        const PATH = `executionReport`;
        return this.websocketHandler.createWebSocket<OrderUpdatePayload>(PATH);
    }


}