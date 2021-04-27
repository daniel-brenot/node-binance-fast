/// <reference path="types/binance-ws.d.ts" />
import { WebSocketStreamAPI } from "../base";
declare type BinanceWSOptions = {
    baseUrl?: string;
    combinedBaseUrl?: string;
    cacheConnections?: boolean;
};
/**
 * API for all calls to websocket data.
 */
export default class BinanceWS extends WebSocketStreamAPI {
    constructor({ baseUrl, combinedBaseUrl, cacheConnections }: BinanceWSOptions);
}
export {};
//# sourceMappingURL=binance-ws.d.ts.map