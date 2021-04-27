import WebSocket from "ws";
import JSONWebSocket from "./json-websocket";

declare interface UserDataWebSocket extends JSONWebSocket<UserDataStreamPayload>{
    on(event: 'connect' | 'disconnect' | 'reconnect', listener: () => void): this;
    on(event: 'error', listener: (err: Error) => void): this;
    on(event: 'data', listener: (value: UserDataStreamPayload) => void): this;
    /**
     * outboundAccountPosition is sent any time an account balance has changed and
     * contains the assets that were possibly changed by the event that generated the balance change.
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/user-data-stream.md#account-update
     */
    on(event: 'outboundAccountPosition', listener: (value: OutboundAccountPositionPayload) => void): this;
    /**
     * Balance Update occurs during the following:
     * Deposits or withdrawals from the account
     * Transfer of funds between accounts (e.g. Spot to Margin)
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/user-data-stream.md#balance-update
     */
    on(event: 'balanceUpdate', listener: (value: BalanceUpdatePayload) => void): this;
    /**
     * Orders are updated with the executionReport event.
     * Average price can be found by doing Z divided by z.
     * If the order is an OCO, an event will be displayed named ListStatus in addition to the executionReport event.
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/user-data-stream.md#order-update
     */
    on(event: 'executionReport', listener: (value: ExecutionReportPayload) => void): this;
    /**
     * If the order is an OCO, an event will be displayed named ListStatus in addition to the executionReport event.
     * 
     * https://github.com/binance/binance-spot-api-docs/blob/master/user-data-stream.md#order-update
     */
    on(event: 'listStatus', listener: (value: ListStatusPayload) => void): this;
    on(event: 'connect' | 'disconnect' | 'reconnect' | 'error' | 'data', listener: Function): this;
}

class UserDataWebSocket extends JSONWebSocket<UserDataStreamPayload>{


    protected onMessage(message: WebSocket.Data) {
        try {
            const data = JSON.parse(message.toString()) as UserDataStreamPayload;
            this.emit('data', data);
            this.emit(data.e, data);
        }
        catch (err) { this.emit('error', err); }
    }
}

export default UserDataWebSocket;