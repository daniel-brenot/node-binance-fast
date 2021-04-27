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
        const path = 'api/v3/userDataStream';
        const weight = 1;
        const method = 'POST';
        return await this.handler.sendRequest<CreateUserDataStreamResponse>({path, weight, method});
    }

    /**
     * Keepalive a user data stream to prevent a time out.
     * User data streams will close after 60 minutes.
     * It's recommended to send a ping about every 30 minutes.  
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#keepalive-user-data-stream-user_stream
     */
    async keepAliveUserDataStream(params: KeepAliveUserDataStreamParameters) {
        const path = 'api/v3/userDataStream';
        const weight = 1;
        const method = 'PUT';
        await this.handler.sendRequest<{}>({path, weight, method, params});
    }

    /**
     * Close out a user data stream.
     * Weight: 1  
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#close-user-data-stream-user_stream
     */
    async cancelUserDataStream(params: CancelUserDataStreamParameters) {
        const path = 'api/v3/userDataStream';
        const weight = 1;
        const method = 'DELETE';
        await this.handler.sendRequest<{}>({path, weight, method, params});
    }

    /**
     * Creates a user data stream websocket.
     * @param listenerKey The value returned by createUserDataStream
     */
    onUserData(listenerKey: string) {
        return this.websocketHandler.createUserDataWebSocket(listenerKey)
    }

}