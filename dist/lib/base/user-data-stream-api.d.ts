import RequestHandler from "./util/request-handler";
import WebSocketHandler from "./util/websocket-handler";
export default class UserDataStreamAPI {
    private handler;
    private websocketHandler;
    constructor(handler: RequestHandler, websocketHandler: WebSocketHandler);
    /**
     * Start a new user data stream.
     * The stream will close after 60 minutes unless a keepalive is sent.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#user-data-stream-endpoints
     */
    createUserDataStream(): Promise<CreateUserDataStreamResponse>;
    /**
     * Keepalive a user data stream to prevent a time out.
     * User data streams will close after 60 minutes.
     * It's recommended to send a ping about every 30 minutes.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#keepalive-user-data-stream-user_stream
     */
    keepAliveUserDataStream(params: KeepAliveUserDataStreamParameters): Promise<void>;
    /**
     * Close out a user data stream.
     * Weight: 1
     * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#close-user-data-stream-user_stream
     */
    cancelUserDataStream(params: CancelUserDataStreamParameters): Promise<void>;
    /**
     * Creates a user data stream websocket.
     * @param listenerKey The value returned by createUserDataStream
     */
    onUserData(listenerKey: string): import("./util/user-data-websocket").default;
}
//# sourceMappingURL=user-data-stream-api.d.ts.map