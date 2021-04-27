declare module 'node-binance-fast/index' {
  import * as v1 from 'node-binance-fast/lib/v1/index';
  import * as v2 from 'node-binance-fast/lib/v2/index';
  export { v1, v2 };
  //# sourceMappingURL=index.d.ts.map
}
declare module 'node-binance-fast/index.d.ts' {
  {"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/index.ts"],"names":[],"mappings":"AAAA,OAAO,KAAK,EAAE,MAAM,UAAU,CAAC;AAC/B,OAAO,KAAK,EAAE,MAAM,UAAU,CAAC;AAE/B,OAAO,EACH,EAAE,EACF,EAAE,EACL,CAAA"}
}
declare module 'node-binance-fast/lib/base/index' {
  import RESTAPI from 'node-binance-fast/lib/base/rest-api';
  import WebSocketStreamAPI from 'node-binance-fast/lib/base/websocket-stream-api';
  import UserDataStreamAPI from 'node-binance-fast/lib/base/user-data-stream-api';
  export { RESTAPI, WebSocketStreamAPI, UserDataStreamAPI };
  //# sourceMappingURL=index.d.ts.map
}
declare module 'node-binance-fast/lib/base/index.d.ts' {
  {"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/index.ts"],"names":[],"mappings":"AAAA,OAAO,OAAO,MAAM,YAAY,CAAC;AACjC,OAAO,kBAAkB,MAAM,wBAAwB,CAAC;AACxD,OAAO,iBAAiB,MAAM,wBAAwB,CAAC;AAEvD,OAAO,EACH,OAAO,EACP,kBAAkB,EAClB,iBAAiB,EACpB,CAAA"}
}
declare module 'node-binance-fast/lib/base/rest-api' {
  import RequestHandler from "node-binance-fast/lib/base/util/request-handler";
  /**
   * API object for accessing Binance REST API
   *
   * Data is returned in ascending order. Oldest first, newest last.
   * All time and timestamp related fields are in milliseconds.
   * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md
   */
  export default class RESTAPI {
      private handler;
      constructor(handler: RequestHandler);
      /**
       * Test connectivity to the REST API.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
       */
      queryPing(): Promise<void>;
      /**
       * Test connectivity to the REST API and get the current server time.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
       */
      queryTime(): Promise<QueryTimeResponse>;
      /**
       * Current exchange trading rules and symbol information.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
       */
      queryExchangeInfo(): Promise<QueryExchangeInfoResponse>;
      /**
       * Gets the order book depth.
       * Weight: Adjusted based on the limit:
       * 5-100: 1
       * 500:   5
       * 1000   10
       * 5000   50
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
       */
      queryDepth(params: QueryDepthParameters): Promise<QueryDepthResponse>;
      /**
       * Get recent trades.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
       */
      queryTrades(params: QueryTradesParameters): Promise<QueryTradesResponse>;
      /**
       * Get older trades.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
       */
      queryHistoricalTrades(params: QueryHistoricalTradesParameters): Promise<QueryHistoricalTradesResponse>;
      /**
       * Get compressed, aggregate trades.
       * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
       */
      queryAggTrades(params: QueryAggTradesParameters): Promise<QueryAggTradesResponse>;
      /**
       * Kline/candlestick bars for a symbol.
       * Klines are uniquely identified by their open time.
       * If startTime and endTime are not sent, the most recent klines are returned.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
       */
      queryKlines(params: QueryKlinesParameters): Promise<QueryKlinesResponse>;
      /**
       * Current average price for a symbol.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
       */
      queryAvgPrice(params: {
          symbol: string;
      }): Promise<AveragePriceResponse>;
      /**
       * 24 hour rolling window price change statistics.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
       */
      queryTicker24hr(params: QueryTicker24hrParameters): Promise<QueryTicker24HrResponse>;
      /**
       * 24 hour rolling window price change statistics.
       * Weight: 40
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
       */
      queryTicker24hr(params: Omit<QueryTicker24hrParameters, 'symbol'>): Promise<QueryTicker24HrResponse[]>;
      /**
       * Latest price for a symbol.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
       */
      queryTickerPrice(params: QueryTickerPriceParameters): Promise<QueryTickerPriceResponse>;
      /**
       * Latest price for all symbols.
       * Weight: 2
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
       */
      queryTickerPrice(params: Omit<QueryTickerPriceParameters, 'symbol'>): Promise<QueryTickerPriceResponse[]>;
      /**
       * Best price/qty on the order book for all symbols.
       * Weight: 2
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
       */
      queryBookTicker(params: Omit<QueryBookTickerParameters, 'symbol'>): Promise<QueryBookTickerResponse[]>;
      /**
       * Best price/qty on the order book for a symbol.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
       */
      queryBookTicker(params: QueryBookTickerParameters): Promise<QueryBookTickerResponse>;
      /**
       * Send in a new order.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createOrder(params: CreateOrderParameters): Promise<OrderFULLResponse>;
      /**
       * Test new order creation and signature/recvWindow long.
       * Creates and validates a new order but does not send it into the matching engine.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade
       */
      testOrder(params: TestOrderParameters): Promise<void>;
      /**
       * Check an order's status.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
       */
      queryOrder(params: QueryOrderParameters): Promise<QueryOrderResponse>;
      /**
       * Cancel an active order.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
       */
      cancelOrder(params: CancelOrderParameters): Promise<CancelOrderResponse>;
      /**
       * Cancels all active orders on a symbol. This includes OCO orders.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
       */
      cancelOpenOrders(params: CancelOpenOrdersParameters): Promise<CancelOpenOrdersResponse>;
      /**
       * Get all open orders on a symbol. Careful when accessing this with no symbol.
       * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
       */
      queryOpenOrders(params: QueryOpenOrdersParameters): Promise<QueryOpenOrdersResponse>;
      queryOpenOrders(params: Omit<QueryOpenOrdersParameters, 'symbol'>): Promise<QueryOpenOrdersResponse[]>;
      /**
       * Get all account orders; active, canceled, or filled.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
       */
      queryAllOrders(params: QueryAllOrdersParameters): Promise<QueryAllOrdersResponse>;
      /**
       * Send in a new OCO.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade
       */
      createOCOOrder(params: CreateOCOOrderParameters): Promise<CreateOCOOrderResponse>;
      /**
       * Cancel an entire Order List.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-oco-trade
       */
      cancelOCOOrder(params: CancelOCOOrderParameters): Promise<CancelOCOOrderResponse>;
      /**
       * Retrieves a specific OCO based on provided optional parameters.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-oco-user_data
       */
      queryOCOOrder(params: QueryOCOOrderParameters): Promise<QueryOCOOrderResponse>;
      /**
       * Retrieves all OCO based on provided optional parameters.
       * Weight: 10
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
       */
      queryAllOCOOrders(params: QueryAllOCOOrdersParameters): Promise<QueryAllOCOOrdersResponse>;
      /**
       * Retrieves all open OCO based on provided optional parameters.
       * Weight: 2
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
       */
      queryOpenOCOOrders(params: QueryOpenOCOOrdersParameters): Promise<QueryOpenOCOOrdersResponse>;
      /**
       * Get current account information.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
       */
      queryAccountInformation(params: QueryAccountInformationParameters): Promise<QueryAccountInformationResponse>;
      /**
       * Get trades for a specific account and symbol.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
       */
      queryMyTrades(params: QueryMyTradesParameters): Promise<QueryMyTradesResponse>;
  }
  //# sourceMappingURL=rest-api.d.ts.map
}
declare module 'node-binance-fast/lib/base/rest-api.d.ts' {
  {"version":3,"file":"rest-api.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/rest-api.ts"],"names":[],"mappings":"AAAA,OAAO,cAAc,MAAM,wBAAwB,CAAC;AAEpD;;;;;;GAMG;AACH,MAAM,CAAC,OAAO,OAAO,OAAO;IAEZ,OAAO,CAAC,OAAO;gBAAP,OAAO,EAAE,cAAc;IAE3C;;;;OAIG;IACG,SAAS;IASf;;;;OAIG;IACG,SAAS;IASf;;;;OAIG;IACG,iBAAiB;IASvB;;;;;;;;OAQG;IACG,UAAU,CAAC,MAAM,EAAE,oBAAoB;IAS7C;;;;OAIG;IACG,WAAW,CAAC,MAAM,EAAE,qBAAqB;IAS/C;;;;OAIG;IACG,qBAAqB,CAAC,MAAM,EAAE,+BAA+B;IASnE;;;;;OAKG;IACG,cAAc,CAAC,MAAM,EAAE,wBAAwB;IASrD;;;;;;OAMG;IACG,WAAW,CAAC,MAAM,EAAE,qBAAqB;IAS/C;;;;OAIG;IACG,aAAa,CAAC,MAAM,EAAE;QAAE,MAAM,EAAE,MAAM,CAAA;KAAE;IAS9C;;;;OAIG;IACG,eAAe,CAAC,MAAM,EAAE,yBAAyB,GAAG,OAAO,CAAC,uBAAuB,CAAC;IAC1F;;;;OAIG;IACG,eAAe,CAAC,MAAM,EAAE,IAAI,CAAC,yBAAyB,EAAE,QAAQ,CAAC,GAAG,OAAO,CAAC,uBAAuB,EAAE,CAAC;IAU5G;;;;OAIG;IACG,gBAAgB,CAAC,MAAM,EAAE,0BAA0B,GAAG,OAAO,CAAC,wBAAwB,CAAC;IAC7F;;;;OAIG;IACG,gBAAgB,CAAC,MAAM,EAAE,IAAI,CAAC,0BAA0B,EAAE,QAAQ,CAAC,GAAG,OAAO,CAAC,wBAAwB,EAAE,CAAC;IAU/G;;;;OAIG;IACG,eAAe,CAAC,MAAM,EAAE,IAAI,CAAC,yBAAyB,EAAE,QAAQ,CAAC,GAAG,OAAO,CAAC,uBAAuB,EAAE,CAAC;IAC5G;;;;OAIG;IACG,eAAe,CAAC,MAAM,EAAE,yBAAyB,GAAG,OAAO,CAAC,uBAAuB,CAAC;IAU1F;;;;OAIG;IACG,WAAW,CAAC,MAAM,EAAE,qBAAqB,GAAG,OAAO,CAAC,iBAAiB,CAAC;IAS5E;;;;;OAKG;IACG,SAAS,CAAC,MAAM,EAAE,mBAAmB;IAS3C;;;;OAIG;IACG,UAAU,CAAC,MAAM,EAAE,oBAAoB;IAS7C;;;;OAIG;IACG,WAAW,CAAC,MAAM,EAAE,qBAAqB;IAS/C;;;;OAIG;IACG,gBAAgB,CAAC,MAAM,EAAE,0BAA0B;IASzD;;;;OAIG;IACG,eAAe,CAAC,MAAM,EAAE,yBAAyB,GAAG,OAAO,CAAC,uBAAuB,CAAC;IACpF,eAAe,CAAC,MAAM,EAAE,IAAI,CAAC,yBAAyB,EAAE,QAAQ,CAAC,GAAG,OAAO,CAAC,uBAAuB,EAAE,CAAC;IAU5G;;;;OAIG;IACG,cAAc,CAAC,MAAM,EAAE,wBAAwB;IASrD;;;;OAIG;IACG,cAAc,CAAC,MAAM,EAAE,wBAAwB;IASrD;;;;OAIG;IACG,cAAc,CAAC,MAAM,EAAE,wBAAwB;IASrD;;;;OAIG;IACG,aAAa,CAAC,MAAM,EAAE,uBAAuB;IASnD;;;;OAIG;IACG,iBAAiB,CAAC,MAAM,EAAE,2BAA2B;IAS3D;;;;OAIG;IACG,kBAAkB,CAAC,MAAM,EAAE,4BAA4B;IAS7D;;;;OAIG;IACG,uBAAuB,CAAC,MAAM,EAAE,iCAAiC;IASvE;;;;OAIG;IACG,aAAa,CAAC,MAAM,EAAE,uBAAuB;CAQtD"}
}
declare module 'node-binance-fast/lib/base/types/enums' {
  type SymbolStatus = 'PRE_TRADING' | 'TRADING' | 'POST_TRADING' | 'END_OF_DAY' | 'HALT' | 'AUCTION_MATCH' | 'BREAK';
  type SymbolType = 'SPOT';
  type OrderStatus = 'NEW' | 'PARTIALLY_FILLED' | 'FILLED' | 'FILLED' | 'CANCELLED' | 'PENDING_CANCEL' | 'REJECTED' | 'EXPIRED';
  type OCOStatus = 'RESPONSE' | 'EXEC_STARTED' | 'ALL_DONE';
  type OCOOrderStatus = 'EXECUTING' | 'ALL_DONE' | 'REJECT';
  type ContingencyType = 'OCO';
  type LIMIT_ORDER = 'LIMIT';
  type MARKET_ORDER = 'MARKET';
  type STOP_LOSS_ORDER = 'STOP_LOSS';
  type STOP_LOSS_LIMIT_ORDER = 'STOP_LOSS_LIMIT';
  type TAKE_PROFIT_ORDER = 'TAKE_PROFIT';
  type TAKE_PROFIT_LIMIT_ORDER = 'TAKE_PROFIT_LIMIT';
  type LIMIT_MAKER_ORDER = 'LIMIT_MAKER';
  type OrderType = LIMIT_ORDER | MARKET_ORDER | STOP_LOSS_ORDER | STOP_LOSS_LIMIT_ORDER | TAKE_PROFIT_ORDER | TAKE_PROFIT_LIMIT_ORDER | LIMIT_MAKER_ORDER;
  type OrderResponseType = 'ACK' | 'RESULT' | 'FULL';
  type OrderSide = 'BUY' | 'SELL';
  /**
   * This sets how long an order will be active before expiration.
   *
   * Good Til Canceled:
   * An order will be on the book unless the order is canceled.
   *
   * Immediate Or Cancel:
   * An order will try to fill the order as much as it can before the order expires.
   *
   * Fill or Kill:
   * An order will expire if the full order cannot be filled upon execution.
   */
  type TimeInForce = 'GTC' | 'IOC' | 'FOK';
  type Limit = 5 | 10 | 20 | 50 | 100 | 500 | 1000 | 5000;
  /** m -> minutes; h -> hours; d -> days; w -> weeks; M -> months */
  type ChartInterval = '1m' | '3m' | '5m' | '15m' | '30m' | '1h' | '2h' | '4h' | '6h' | '8h' | '12h' | '1d' | '3d' | '1w' | '1M';
  type REQUEST_WEIGHT = {
      rateLimitType: 'REQUEST_WEIGHT';
      interval: 'MINUTE';
      intervalNum: 1;
      limit: 1200;
  };
  type ORDERS = {
      rateLimitType: 'ORDERS';
      interval: 'SECOND';
      intervalNum: 1;
      limit: 10;
  };
  type RAW_REQUESTS = {
      rateLimitType: 'RAW_REQUESTS';
      interval: 'MINUTE';
      intervalNum: 5;
      limit: 500;
  };
  type RateLimitType = REQUEST_WEIGHT | ORDERS | RAW_REQUESTS;
  //# sourceMappingURL=enums.d.ts.map
}
declare module 'node-binance-fast/lib/base/types/enums.d.ts' {
  {"version":3,"file":"enums.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/types/enums.ts"],"names":[],"mappings":"AAAA,aAAK,YAAY,GAAG,aAAa,GAAG,SAAS,GAAG,cAAc,GAAG,YAAY,GAAG,MAAM,GAAG,eAAe,GAAG,OAAO,CAAC;AAEnH,aAAK,UAAU,GAAG,MAAM,CAAC;AAEzB,aAAK,WAAW,GAAG,KAAK,GAAG,kBAAkB,GAAG,QAAQ,GAAG,QAAQ,GAAG,WAAW,GAAG,gBAAgB,GAAG,UAAU,GAAG,SAAS,CAAC;AAE9H,aAAK,SAAS,GAAG,UAAU,GAAG,cAAc,GAAG,UAAU,CAAC;AAE1D,aAAK,cAAc,GAAG,WAAW,GAAG,UAAU,GAAG,QAAQ,CAAC;AAE1D,aAAK,eAAe,GAAG,KAAK,CAAC;AAE7B,aAAK,WAAW,GAAG,OAAO,CAAC;AAE3B,aAAK,YAAY,GAAG,QAAQ,CAAC;AAE7B,aAAK,eAAe,GAAG,WAAW,CAAC;AAEnC,aAAK,qBAAqB,GAAG,iBAAiB,CAAC;AAE/C,aAAK,iBAAiB,GAAG,aAAa,CAAC;AAEvC,aAAK,uBAAuB,GAAG,mBAAmB,CAAC;AAEnD,aAAK,iBAAiB,GAAG,aAAa,CAAC;AAEvC,aAAK,SAAS,GAAG,WAAW,GAAG,YAAY,GAAG,eAAe,GAAG,qBAAqB,GAAG,iBAAiB,GAAG,uBAAuB,GAAG,iBAAiB,CAAC;AAExJ,aAAK,iBAAiB,GAAG,KAAK,GAAG,QAAQ,GAAG,MAAM,CAAC;AAEnD,aAAK,SAAS,GAAG,KAAK,GAAG,MAAM,CAAC;AAEhC;;;;;;;;;;;GAWG;AACH,aAAK,WAAW,GAAG,KAAK,GAAG,KAAK,GAAG,KAAK,CAAC;AAEzC,aAAK,KAAK,GAAG,CAAC,GAAG,EAAE,GAAG,EAAE,GAAG,EAAE,GAAG,GAAG,GAAG,GAAG,GAAG,IAAI,GAAG,IAAI,CAAC;AAExD,mEAAmE;AACnE,aAAK,aAAa,GAAG,IAAI,GAAG,IAAI,GAAG,IAAI,GAAG,KAAK,GAAG,KAAK,GAAG,IAAI,GAAG,IAAI,GAAG,IAAI,GAAG,IAAI,GAAG,IAAI,GAAG,KAAK,GAAG,IAAI,GAAG,IAAI,GAAG,IAAI,GAAG,IAAI,CAAC;AAE/H,aAAK,cAAc,GAAG;IAClB,aAAa,EAAE,gBAAgB,CAAC;IAChC,QAAQ,EAAE,QAAQ,CAAC;IACnB,WAAW,EAAE,CAAC,CAAC;IACf,KAAK,EAAE,IAAI,CAAC;CACf,CAAC;AAEF,aAAK,MAAM,GAAG;IACV,aAAa,EAAE,QAAQ,CAAC;IACxB,QAAQ,EAAE,QAAQ,CAAC;IACnB,WAAW,EAAE,CAAC,CAAC;IACf,KAAK,EAAE,EAAE,CAAC;CACb,CAAC;AAEF,aAAK,YAAY,GAAG;IAChB,aAAa,EAAE,cAAc,CAAC;IAC9B,QAAQ,EAAE,QAAQ,CAAC;IACnB,WAAW,EAAE,CAAC,CAAC;IACf,KAAK,EAAE,GAAG,CAAC;CACd,CAAC;AAEF,aAAK,aAAa,GAAG,cAAc,GAAG,MAAM,GAAG,YAAY,CAAC"}
}
declare module 'node-binance-fast/lib/base/types/filters' {
  /** The PRICE_FILTER defines the price rules for a symbol. */
  interface PRICE_FILTER {
      filterType: 'PRICE_FILTER';
      /** defines the minimum price/stopPrice allowed; disabled on minPrice == 0. */
      minPrice: string;
      /** defines the maximum price/stopPrice allowed; disabled on maxPrice == 0. */
      maxPrice: string;
      /** tickSize defines the intervals that a price/stopPrice can be increased/decreased by; disabled on tickSize == 0. */
      tickPrice: string;
  }
  /** The PERCENT_PRICE filter defines valid range for a price based on the average of the previous trades. avgPriceMins is the number of minutes the average price is calculated over. 0 means the last price is used. */
  interface PERCENT_PRICE {
      filterType: 'PERCENT_PRICE';
      multiplierUp: string;
      multiplierDown: string;
      avgPriceMins: number;
  }
  /** The LOT_SIZE filter defines the quantity (aka "lots" in auction terms) rules for a symbol. */
  interface LOT_SIZE {
      filterType: 'LOT_SIZE';
      /** defines the minimum quantity/icebergQty allowed. */
      minQty: string;
      /** defines the maximum quantity/icebergQty allowed. */
      maxQty: string;
      /** defines the intervals that a quantity/icebergQty can be increased/decreased by. */
      stepSize: string;
  }
  /**
   * The MIN_NOTIONAL filter defines the minimum notional value allowed for an order on a symbol. An order's notional value is the price * quantity. applyToMarket determines whether or not the MIN_NOTIONAL filter will also be applied to MARKET orders. Since MARKET orders have no price, the average price is used over the last avgPriceMins minutes. avgPriceMins is the number of minutes the average price is calculated over. 0 means the last price is used.
   */
  interface MIN_NOTIONAL {
      filterType: 'MIN_NOTIONAL';
      minNotional: string;
      applyToMarket: boolean;
      avgPriceMins: number;
  }
  /**
   * The ICEBERG_PARTS filter defines the maximum parts an iceberg order can have. The number of ICEBERG_PARTS is defined as CEIL(qty / icebergQty).
   */
  interface ICEBERG_PARTS {
      filterType: 'ICEBERG_PARTS';
      limit: number;
  }
  /** The MARKET_LOT_SIZE filter defines the quantity (aka "lots" in auction terms) rules for MARKET orders on a symbol. */
  interface MARKET_LOT_SIZE {
      filterType: 'MARKET_LOT_SIZE';
      /** defines the minimum quantity allowed. */
      minQty: string;
      /** defines the maximum quantity allowed. */
      maxQty: string;
      /** defines the intervals that a quantity can be increased/decreased by. */
      stepSize: string;
  }
  /** The MAX_NUM_ORDERS filter defines the maximum number of orders an account is allowed to have open on a symbol. Note that both "algo" orders and normal orders are counted for this filter. */
  interface MAX_NUM_ORDERS {
      filterType: 'MAX_NUM_ORDERS';
      maxNumOrders: number;
  }
  /** The MAX_NUM_ALGO_ORDERS filter defines the maximum number of "algo" orders an account is allowed to have open on a symbol. "Algo" orders are STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
  interface MAX_NUM_ALGO_ORDERS {
      filterType: 'MAX_NUM_ALGO_ORDERS';
      maxNumAlgoOrders: number;
  }
  /** The MAX_NUM_ICEBERG_ORDERS filter defines the maximum number of ICEBERG orders an account is allowed to have open on a symbol. An ICEBERG order is any order where the icebergQty is > 0. */
  interface MAX_NUM_ICEBERG_ORDERS {
      filterType: 'MAX_NUM_ICEBERG_ORDERS';
      maxNumIcebergOrders: number;
  }
  /**
   * The MAX_POSITION filter defines the allowed maximum position an account can have on the base asset of a symbol. An account's position defined as the sum of the account's:
   * free balance of the base asset
   * locked balance of the base asset
   * sum of the qty of all open BUY orders
   * BUY orders will be rejected if the account's position is greater than the maximum position allowed.
  */
  interface MAX_POSITION {
      filterType: 'MAX_POSITION';
      maxPosition: string;
  }
  type SymbolFilter = PRICE_FILTER | PERCENT_PRICE | LOT_SIZE | MIN_NOTIONAL | ICEBERG_PARTS | MARKET_LOT_SIZE | MAX_NUM_ORDERS | MAX_NUM_ALGO_ORDERS | MAX_NUM_ICEBERG_ORDERS | MAX_POSITION;
  /** The MAX_NUM_ORDERS filter defines the maximum number of orders an account is allowed to have open on the exchange. Note that both "algo" orders and normal orders are counted for this filter. */
  interface EXCHANGE_MAX_NUM_ORDERS {
      filterType: 'EXCHANGE_MAX_NUM_ORDERS';
      maxNumOrders: number;
  }
  /** The MAX_ALGO_ORDERS filter defines the maximum number of "algo" orders an account is allowed to have open on the exchange. "Algo" orders are STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, and TAKE_PROFIT_LIMIT orders. */
  interface EXCHANGE_MAX_NUM_ALGO_ORDERS {
      filterType: 'EXCHANGE_MAX_NUM_ALGO_ORDERS';
      maxNumAlgoOrders: number;
  }
  type ExchangeFilter = EXCHANGE_MAX_NUM_ORDERS | EXCHANGE_MAX_NUM_ALGO_ORDERS;
  type Filter = SymbolFilter | ExchangeFilter;
  //# sourceMappingURL=filters.d.ts.map
}
declare module 'node-binance-fast/lib/base/types/filters.d.ts' {
  {"version":3,"file":"filters.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/types/filters.ts"],"names":[],"mappings":"AAIA,6DAA6D;AAC7D,UAAU,YAAY;IAClB,UAAU,EAAE,cAAc,CAAC;IAC3B,8EAA8E;IAC9E,QAAQ,EAAE,MAAM,CAAC;IACjB,8EAA8E;IAC9E,QAAQ,EAAE,MAAM,CAAC;IACjB,sHAAsH;IACtH,SAAS,EAAE,MAAM,CAAC;CACrB;AAED,wNAAwN;AACxN,UAAU,aAAa;IACnB,UAAU,EAAE,eAAe,CAAC;IAC5B,YAAY,EAAE,MAAM,CAAC;IACrB,cAAc,EAAE,MAAM,CAAC;IACvB,YAAY,EAAE,MAAM,CAAC;CACxB;AAED,iGAAiG;AACjG,UAAU,QAAQ;IACd,UAAU,EAAE,UAAU,CAAC;IACvB,uDAAuD;IACvD,MAAM,EAAE,MAAM,CAAC;IACf,uDAAuD;IACvD,MAAM,EAAE,MAAM,CAAC;IACf,sFAAsF;IACtF,QAAQ,EAAE,MAAM,CAAC;CACpB;AAED;;GAEG;AACH,UAAU,YAAY;IAClB,UAAU,EAAE,cAAc,CAAC;IAC3B,WAAW,EAAE,MAAM,CAAC;IACpB,aAAa,EAAE,OAAO,CAAC;IACvB,YAAY,EAAE,MAAM,CAAC;CACxB;AAED;;GAEG;AACH,UAAU,aAAa;IACnB,UAAU,EAAE,eAAe,CAAC;IAC5B,KAAK,EAAE,MAAM,CAAC;CACjB;AAED,yHAAyH;AACzH,UAAU,eAAe;IACrB,UAAU,EAAE,iBAAiB,CAAC;IAC9B,4CAA4C;IAC5C,MAAM,EAAE,MAAM,CAAC;IACf,4CAA4C;IAC5C,MAAM,EAAE,MAAM,CAAC;IACf,2EAA2E;IAC3E,QAAQ,EAAE,MAAM,CAAC;CACpB;AAED,iMAAiM;AACjM,UAAU,cAAc;IACpB,UAAU,EAAE,gBAAgB,CAAC;IAC7B,YAAY,EAAE,MAAM,CAAC;CACxB;AAED,0NAA0N;AAC1N,UAAU,mBAAmB;IACzB,UAAU,EAAE,qBAAqB,CAAC;IAClC,gBAAgB,EAAE,MAAM,CAAC;CAC5B;AAED,gMAAgM;AAChM,UAAU,sBAAsB;IAC5B,UAAU,EAAE,wBAAwB,CAAC;IACrC,mBAAmB,EAAE,MAAM,CAAC;CAC/B;AAED;;;;;;EAME;AACF,UAAU,YAAY;IAClB,UAAU,EAAE,cAAc,CAAC;IAC3B,WAAW,EAAE,MAAM,CAAC;CACvB;AAED,aAAK,YAAY,GAAG,YAAY,GAAG,aAAa,GAAG,QAAQ,GAAG,YAAY,GAAG,aAAa,GAAG,eAAe,GAAG,cAAc,GAAG,mBAAmB,GAAG,sBAAsB,GAAG,YAAY,CAAC;AAI5L,qMAAqM;AACrM,UAAU,uBAAuB;IAC7B,UAAU,EAAE,yBAAyB,CAAC;IACtC,YAAY,EAAE,MAAM,CAAC;CACxB;AAED,0NAA0N;AAC1N,UAAU,4BAA4B;IAClC,UAAU,EAAE,8BAA8B,CAAC;IAC3C,gBAAgB,EAAE,MAAM,CAAC;CAC5B;AAED,aAAK,cAAc,GAAG,uBAAuB,GAAG,4BAA4B,CAAC;AAE7E,aAAK,MAAM,GAAG,YAAY,GAAG,cAAc,CAAC"}
}
declare module 'node-binance-fast/lib/base/types/rest-api' {
  interface QueryDepthParameters {
      symbol: string;
      limit?: Limit;
  }
  interface QueryTradesParameters {
      symbol: string;
      limit?: Omit<Limit, 5000>;
  }
  interface QueryHistoricalTradesParameters {
      symbol: string;
      limit?: Omit<Limit, 5000>;
      fromId?: number;
  }
  interface QueryAggTradesParameters {
      symbol: string;
      fromId?: number;
      startTime?: number;
      endTime?: number;
      limit?: Omit<Limit, 5000>;
  }
  interface QueryKlinesParameters {
      symbol: string;
      interval: ChartInterval;
      startTime?: number;
      endTime?: number;
      limit?: Omit<Limit, 5000>;
  }
  interface QueryTicker24hrParameters {
      symbol: string;
  }
  interface QueryTickerPriceParameters {
      symbol: string;
  }
  interface QueryBookTickerParameters {
      symbol: string;
  }
  interface BaseOrderParameters {
      symbol: string;
      side: OrderSide;
      type: OrderType;
      newOrderRespType: OrderResponseType;
      timestamp: number;
      recvWindow?: number;
  }
  interface LimitOrderParameters extends BaseOrderParameters {
      type: LIMIT_ORDER;
      quantity: string;
      price: string;
      timeInForce: TimeInForce;
  }
  type MarketOrderParameters = (BaseOrderParameters & {
      type: MARKET_ORDER;
  }) & ({
      quantity: string;
  } | {
      quoteOrderQty: string;
  });
  interface StopLossOrderParameters extends BaseOrderParameters {
      type: STOP_LOSS_ORDER;
      quantity: string;
      stopPrice: string;
  }
  interface StopLossLimitOrderParameters extends BaseOrderParameters {
      type: STOP_LOSS_LIMIT_ORDER;
      timeInForce: TimeInForce;
      quantity: string;
      price: string;
      stopPrice: string;
      icebergQty?: number;
  }
  interface TakeProfitOrderParameters extends BaseOrderParameters {
      type: TAKE_PROFIT_ORDER;
      quantity: string;
      stopPrice: string;
  }
  interface TakeProfitLimitOrderParameters extends BaseOrderParameters {
      type: TAKE_PROFIT_LIMIT_ORDER;
      timeInForce: TimeInForce;
      quantity: string;
      price: string;
      stopPrice: string;
      icebergQty?: number;
  }
  interface LimitMakerOrderParameters extends BaseOrderParameters {
      type: LIMIT_MAKER_ORDER;
      quantity: string;
      price: string;
      icebergQty?: number;
  }
  type CreateOrderParameters = LimitOrderParameters | MarketOrderParameters | StopLossOrderParameters | StopLossLimitOrderParameters | TakeProfitOrderParameters | TakeProfitLimitOrderParameters | LimitMakerOrderParameters;
  type TestOrderParameters = CreateOrderParameters;
  type QueryOrderParameters = ({
      symbol: string;
      recvWindow?: number;
      timestamp: number;
  } & ({
      origClientOrderId: string;
      newClientOrderId?: string;
  } | {
      origClientOrderId?: string;
      newClientOrderId: string;
  }));
  type CancelOrderParameters = {
      symbol: string;
      orderId?: number;
      recvWindow?: number;
      timestamp: number;
  } & ({
      origClientOrderId: string;
      newClientOrderId?: string;
  } | {
      origClientOrderId?: string;
      newClientOrderId: string;
  });
  type CancelOpenOrdersParameters = {
      symbol: string;
      recvWindow?: number;
      timestamp: number;
  };
  type QueryOpenOrdersParameters = {
      symbol: string;
      recvWindow?: number;
      timestamp: number;
  };
  type QueryAllOrdersParameters = {
      symbol: string;
      orderId: number;
      startTime: number;
      endTime: number;
      limit: Omit<Limit, 5000>;
      recvWindow: number;
      timestamp: number;
  };
  type CreateOCOOrderParameters = {
      symbol: string;
      listClientOrderId?: string;
      side: OrderSide;
      quantity: string;
      limitClientOrderId?: string;
      price: string;
      limitIcebergQty?: string;
      stopClientOrderId?: string;
      stopPrice: string;
      stopLimitPrice?: string;
      stopIcebergQty?: string;
      stopLimitTimeInForce?: TimeInForce;
      newOrderRespType?: OrderResponseType;
      recvWindow: number;
      timestamp: number;
  };
  type CancelOCOOrderParameters = {
      symbol: string;
      newClientOrderId?: string;
      recvWindow?: number;
      timestamp: number;
  } & ({
      listClientOrderId: string;
      orderListId?: number;
  } | {
      listClientOrderId?: string;
      orderListId: number;
  });
  type QueryOCOOrderParameters = {
      recvWindow?: number;
      timestamp: number;
  } & ({
      orderListId: number;
      origClientOrderId?: string;
  } | {
      orderListId?: number;
      origClientOrderId: string;
  });
  type QueryAllOCOOrdersParameters = {
      fromId?: number;
      startTime?: number;
      endTime?: number;
      limit?: Omit<Limit, 5000>;
      recvWindow?: number;
      timestamp: number;
  };
  type QueryOpenOCOOrdersParameters = {
      recvWindow?: number;
      timestamp: number;
  };
  type QueryAccountInformationParameters = {
      recvWindow?: number;
      timestamp: number;
  };
  type QueryMyTradesParameters = {
      symbol: string;
      startTime?: number;
      endTime?: number;
      fromId?: number;
      limit?: Omit<Limit, 5000>;
      recvWindow?: number;
      timestamp: number;
  };
  interface QueryTimeResponse {
      serverTime: number;
  }
  interface QueryExchangeInfoResponse {
      timezone: string;
      serverTime: number;
      rateLimits: RateLimitType[];
      exchangeFilters: ExchangeFilter[];
      symbols: SymbolFilter[];
  }
  interface QueryDepthResponse {
      lastUpdateId: number;
      bids: [string, string][];
      asks: [string, string][];
  }
  type QueryTradesResponse = {
      id: number;
      price: string;
      qty: string;
      quoteQty: string;
      time: number;
      isBuyerMaker: boolean;
      isBestMatch: boolean;
  }[];
  type QueryHistoricalTradesResponse = QueryTradesResponse[];
  type QueryAggTradesResponse = {
      /** Aggregate tradeId */
      a: number;
      /** Price */
      p: string;
      /** Quantity */
      q: string;
      /** First tradeId */
      f: number;
      /** Last tradeId */
      l: number;
      /** Timestamp */
      T: number;
      /** Was the buyer the maker? */
      m: boolean;
      /** Was the trade the best price match? */
      M: boolean;
  }[];
  type QueryKlinesResponse = [number, string, string, string, string, string, number, string, number, string, string, string][];
  interface AveragePriceResponse {
      mins: number;
      price: string;
  }
  type QueryTicker24HrResponse = {
      symbol: string;
      priceChange: string;
      weightedAvgPrice: string;
      prevClosePrice: string;
      lastPrice: string;
      lastQty: string;
      bidPrice: string;
      askPrice: string;
      openPrice: string;
      highPrice: string;
      lowPrice: string;
      volume: string;
      quoteVolume: string;
      openTime: number;
      closeTime: number;
      firstId: number;
      lastId: number;
      count: number;
  };
  interface QueryTickerPriceResponse {
      symbol: string;
      price: string;
  }
  interface QueryBookTickerResponse {
      symbol: string;
      bidPrice: string;
      bidQty: string;
      askPrice: string;
      askQty: string;
  }
  interface OrderACKResponse {
      symbol: string;
      orderId: number;
      orderListId: number;
      clientOrderId: string;
      transactTime: number;
  }
  interface OrderRESULTResponse extends OrderACKResponse {
      price?: string;
      origQty?: string;
      executedQty?: string;
      cummulativeQuoteQty?: string;
      status?: OrderStatus;
      timeInForce?: TimeInForce;
      type?: OrderType;
      side?: OrderSide;
  }
  interface OrderFULLResponse extends OrderRESULTResponse {
      fills?: {
          price: string;
          qty: string;
          commission: string;
          commissionAsset: string;
      }[];
  }
  type OrderResponse = OrderACKResponse | OrderRESULTResponse | OrderFULLResponse;
  interface QueryOrderResponse {
      symbol: string;
      orderId: number;
      orderListId: number;
      clientOrderId: string;
      price: string;
      origQty: string;
      executedQty: string;
      cummulativeQty: string;
      status: OrderStatus;
      timeInForce: TimeInForce;
      type: OrderType;
      side: OrderSide;
      stopPrice: string;
      icebergQty: string;
      time: number;
      updateTime: string;
      isWorking: boolean;
      origQuoteOrderQty: string;
  }
  interface CancelOrderResponse {
      symbol: string;
      origClientOrderId?: string;
      newClientOrderId?: string;
      recvWindow?: number;
      timestamp: number;
  }
  type CancelOpenOrdersResponse = {
      symbol: string;
      orderId: number;
      origClientOrderId: string;
      orderListId: number;
      clientOrderId: string;
      price: string;
      origQty: string;
      executedQty: string;
      cummulativeQuoteQty: string;
      status: OrderStatus;
      timeInForce: TimeInForce;
      type: OrderType;
      side: OrderSide;
      orders: {
          symbol: string;
          orderId: number;
          clientOrderId: string;
      }[];
      orderReports: {
          symbol: string;
          origClientOrderId: string;
          orderId: number;
          orderListId: string;
          clientOrderId: string;
          price: string;
          origQty: string;
          executedQty: string;
          cummulativeQuoteQty: string;
          status: OrderStatus;
          timeInForce: TimeInForce;
          type: OrderType;
          side: OrderSide;
          stopPrice: string;
          icebergQty: string;
      }[];
  }[];
  type QueryOpenOrdersResponse = {
      symbol: string;
      orderId: number;
      orderListId: number;
      clientOrderId: string;
      price: string;
      origQty: string;
      executedQty: string;
      cummulativeQuoteQty: string;
      status: OrderStatus;
      timeInForce: TimeInForce;
      type: OrderType;
      side: OrderSide;
      stopPrice: string;
      icebergQty: string;
      time: number;
      updateTime: string;
      isWorking: boolean;
      origQuoteOrderQty: string;
  }[];
  type QueryAllOrdersResponse = {
      symbol: string;
      orderId: number;
      orderListId: number;
      clientOrderId: number;
      price: string;
      origQty: string;
      executedQty: string;
      cummulativeQuoteQty: string;
      status: OrderStatus;
      timeInForce: TimeInForce;
      type: OrderType;
      side: OrderSide;
      stopPrice: string;
      icebergQty: string;
      time: number;
      updateTime: number;
      isWorking: boolean;
      origQuoteOrderQty: string;
  };
  type QueryOCOOrderResponse = {
      recvWindow?: number;
      timestamp: number;
  } & ({
      orderListId: number;
      origClientOrderId?: string;
  } | {
      orderListId?: number;
      origClientOrderId: string;
  });
  type CreateOCOOrderResponse = {
      orderListId: number;
      contingencyType: OrderType;
      listStatusType: string;
      listOrderStatus: string;
      listClientOrderId: string;
      transactionTime: string;
      symbol: string;
      orders: {
          symbol: string;
          orderId: number;
          clientOrderId: string;
      }[];
      orderReports: OrderResponse[];
  };
  type CancelOCOOrderResponse = {
      orderListId: number;
      contingencyType: string;
      listStatusType: string;
      listOrderStatus: string;
      listClientOrderId: string;
      transactionTime: number;
      symbol: string;
      orders: {
          symbol: string;
          orderId: number;
          clientOrderId: string;
      }[];
      orderReports: {
          symbol: string;
          origClientOrderId: string;
          orderId: number;
          orderListId: number;
          clientOrderId: string;
          price: string;
          origQty: string;
          executedQty: string;
          cummulativeQuoteQty: string;
          status: OrderStatus;
          timeInForce: TimeInForce;
          type: OrderType;
          side: OrderSide;
          stopPrice: string;
      }[];
  };
  type QueryAllOCOOrdersResponse = {
      orderListId: number;
      contingencyType: string;
      listStatusType: string;
      listOrderStatus: string;
      listClientOrderId: string;
      transactionTime: number;
      symbol: string;
      orders: {
          symbol: string;
          orderId: number;
          clientOrderId: string;
      }[];
  }[];
  type QueryOpenOCOOrdersResponse = {
      orderListId: number;
      contingencyType: string;
      listStatusType: string;
      listOrderStatus: string;
      listClientOrderId: string;
      transactionTime: number;
      symbol: string;
      orders: {
          symbol: string;
          orderId: number;
          clientOrderId: string;
      }[];
  }[];
  type QueryAccountInformationResponse = {
      makerCommission: number;
      takerCommission: number;
      buyerCommission: number;
      sellerCommission: number;
      canTrade: boolean;
      canWithdraw: boolean;
      canDeposit: boolean;
      updateTime: number;
      accountType: string;
      balances: {
          asset: string;
          free: string;
          locked: string;
      }[];
      permissions: string[];
  };
  type QueryMyTradesResponse = {
      symbol: string;
      id: number;
      orderId: number;
      orderListId: number;
      price: string;
      qty: string;
      quoteQty: string;
      commission: string;
      commissionAsset: string;
      time: number;
      isBuyer: boolean;
      isMaker: boolean;
      isBestMatch: boolean;
  }[];
  //# sourceMappingURL=rest-api.d.ts.map
}
declare module 'node-binance-fast/lib/base/types/rest-api.d.ts' {
  {"version":3,"file":"rest-api.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/types/rest-api.ts"],"names":[],"mappings":"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"}
}
declare module 'node-binance-fast/lib/base/types/user-data-stream-api' {
  type ExecutionType = 'NEW' | 'CANCELED' | 'REPLACED' | 'REJECTED' | 'TRADE' | 'EXPIRED';
  type KeepAliveUserDataStreamParameters = {
      listenKey: string;
  };
  type CancelUserDataStreamParameters = {
      listenKey: string;
  };
  type CreateUserDataStreamResponse = {
      listenKey: string;
  };
  type OutboundAccountPositionPayload = {
      /** Event type */
      e: 'outboundAccountPosition';
      /** Event Time */
      E: number;
      /** Time of last account update */
      u: number;
      /** Balances Array */
      B: {
          /** Asset */
          a: string;
          /** Free */
          f: string;
          /** Locked */
          l: string;
      }[];
  };
  type BalanceUpdatePayload = {
      e: 'balanceUpdate';
      /** Event Time */
      E: number;
      /** Asset */
      a: string;
      /** Balance Delta */
      d: string;
      /** Clear Time */
      T: number;
  };
  type ExecutionReportPayload = {
      /** Event type */
      e: 'executionReport';
      /** Event time */
      E: number;
      /** Symbol */
      s: string;
      /** Client order ID */
      c: string;
      /** Side */
      S: OrderSide;
      /** Order type */
      o: OrderType;
      /** Time in force */
      f: TimeInForce;
      /** Order quantity */
      q: string;
      /** Order price */
      p: string;
      /** Stop price */
      P: string;
      /** Iceberg quantity */
      F: string;
      /** OrderListId */
      g: number;
      /** Original client order ID; This is the ID of the order being canceled */
      C: null | number;
      /** Current execution type */
      x: ExecutionType;
      /** Current order status */
      X: ExecutionType;
      /** Order reject reason; will be an error code. */
      r: string;
      /** Order ID */
      i: number;
      /** Last executed quantity */
      l: string;
      /** Cumulative filled quantity */
      z: string;
      /** Last executed price */
      L: string;
      /** Commission amount */
      n: string;
      /** Commission asset */
      N: null | string;
      /** Transaction time */
      T: number;
      /** Trade ID */
      t: number;
      /** Ignore */
      I: number;
      /** Is the order on the book? */
      w: boolean;
      /** Is this trade the maker side? */
      m: boolean;
      /** Ignore */
      M: boolean;
      /** Order creation time */
      O: number;
      /** Cumulative quote asset transacted quantity */
      Z: string;
      /** Last quote asset transacted quantity (i.e. lastPrice * lastQty) */
      Y: string;
      /** Quote Order Qty */
      Q: string;
  };
  type ListStatusPayload = {
      e: 'listStatus';
      E: number;
      s: string;
      g: number;
      c: string;
      l: string;
      r: string;
      C: string;
      T: number;
      O: {
          /** Symbol */
          s: string;
          /** orderId */
          i: number;
          /** ClientOrderId */
          c: string;
      }[];
  };
  type OrderUpdatePayload = ExecutionReportPayload | ListStatusPayload;
  type UserDataStreamPayload = OutboundAccountPositionPayload | BalanceUpdatePayload | ExecutionReportPayload | ListStatusPayload | OrderUpdatePayload;
  //# sourceMappingURL=user-data-stream-api.d.ts.map
}
declare module 'node-binance-fast/lib/base/types/user-data-stream-api.d.ts' {
  {"version":3,"file":"user-data-stream-api.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/types/user-data-stream-api.ts"],"names":[],"mappings":"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"}
}
declare module 'node-binance-fast/lib/base/types/websocket-stream-api' {
  type DepthLevel = 5 | 10 | 20;
  type AggregateTradePayload = {
      /** Event Type */
      e: 'aggTrade';
      /** Event Time */
      E: number;
      /** Symbol */
      s: string;
      /** Aggregate trade ID */
      a: number;
      /** Price */
      p: string;
      /** Quantity */
      q: string;
      /** First trade ID */
      f: number;
      /** Last trade ID */
      l: number;
      /** Trade time */
      T: number;
      /** Is the buyer the market maker? */
      m: boolean;
      /** Ignore */
      M: boolean;
  };
  type TradePayload = {
      /** Event Type */
      e: 'trade';
      /** Event Time */
      E: number;
      /** Symbol */
      s: string;
      /** Trade ID */
      t: number;
      /** Price */
      p: string;
      /** Quantity */
      q: string;
      /** Buyer order ID */
      b: number;
      /** Seller order ID */
      a: number;
      /** Trade time */
      T: number;
      /** Is the buyer the market maker? */
      m: boolean;
      /** Ignore */
      M: boolean;
  };
  type KlinePayload = {
      /** Event type */
      e: 'kline';
      /** Event time */
      E: number;
      /** Symbol */
      s: string;
      k: {
          /** Kline start time */
          t: number;
          /** Kline close time */
          T: number;
          /** Symbol */
          s: string;
          /** Interval */
          i: ChartInterval;
          /** First trafe ID */
          f: number;
          /** Last trade ID */
          L: number;
          /** Open price */
          o: string;
          /** Close price */
          c: string;
          /** High price */
          h: string;
          /** Low price */
          l: string;
          /** Base asset volume */
          v: string;
          /** Number of trades */
          n: number;
          /** Is this kline closed? */
          x: boolean;
          /** Quote asset volume */
          q: string;
          /** Taker buy base asset volume */
          V: string;
          /** Taker buy quote asset volume */
          Q: string;
          /** Ignore */
          B: string;
      };
  };
  type MiniTickerPayload = {
      /** Event type */
      e: '24hrMiniTicker';
      /** Event time */
      E: number;
      /** Symbol */
      s: string;
      /** Close price */
      c: string;
      /** Open price */
      o: string;
      /** High price */
      h: string;
      /** Low price */
      l: string;
      /** Total traded base asset volume */
      v: string;
      /** Total traded quote asset volume */
      q: string;
  };
  type AllMiniTickersPayload = MiniTickerPayload[];
  type TickerPayload = {
      /** Event type */
      e: '24hrTicker';
      /** Event time */
      E: number;
      /** Symbol */
      s: string;
      /** Price change */
      p: string;
      /** Price change percent */
      P: string;
      /** Weighted average price */
      w: string;
      /** First trade(F)-1 price (first trade before the 24hr rolling window) */
      x: string;
      /** Last price */
      c: string;
      /** Last quantity */
      Q: string;
      /** Best bid price */
      b: string;
      /** Best bid quantity */
      B: string;
      /** Best ask price */
      a: string;
      /** Best ask quantity */
      A: string;
      /** Open price */
      o: string;
      /** High price */
      h: string;
      /** Low price */
      l: string;
      /** Total traded base asset volume */
      v: string;
      /** Total traded quote asset volume */
      q: string;
      /** Statistics open time */
      O: number;
      /** Statistics close time */
      C: number;
      /** First trade ID */
      F: number;
      /** Last trade Id */
      L: number;
      /** Total number of trades */
      n: number;
  };
  type AllTickersPayload = TickerPayload[];
  type BookTickerPayload = {
      /** order book updateId */
      u: number;
      /** symbol */
      s: string;
      /** best bid price */
      b: string;
      /** best bid qty */
      B: string;
      /** best ask price */
      a: string;
      /** best ask qty */
      A: string;
  };
  type AllBookTickersPayload = BookTickerPayload[];
  type DepthLevelUpdatePayload = {
      /** Last update ID */
      lastUpdateId: number;
      /** Bids to be updated ( [Price level to be updated, Quantity] ) */
      bids: [string, string][];
      /** Asks to be updated ( [Price level to be updated, Quantity] ) */
      asks: [string, string][];
  };
  type DepthUpdatePayload = {
      /** Event type */
      e: 'depthUpdate';
      /** Event time */
      E: number;
      /** Symbol */
      s: string;
      /** First update ID in event */
      U: number;
      /** Final update ID in event */
      u: number;
      /** Bids to be updated */
      b: [string, string][];
      /** Asks to be updated */
      a: [string, string][];
  };
  //# sourceMappingURL=websocket-stream-api.d.ts.map
}
declare module 'node-binance-fast/lib/base/types/websocket-stream-api.d.ts' {
  {"version":3,"file":"websocket-stream-api.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/types/websocket-stream-api.ts"],"names":[],"mappings":"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"}
}
declare module 'node-binance-fast/lib/base/user-data-stream-api' {
  import RequestHandler from "node-binance-fast/lib/base/util/request-handler";
  import WebSocketHandler from "node-binance-fast/lib/base/util/websocket-handler";
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
      onUserData(listenerKey: string): import("node-binance-fast/lib/base/util/user-data-websocket").default;
  }
  //# sourceMappingURL=user-data-stream-api.d.ts.map
}
declare module 'node-binance-fast/lib/base/user-data-stream-api.d.ts' {
  {"version":3,"file":"user-data-stream-api.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/user-data-stream-api.ts"],"names":[],"mappings":"AAAA,OAAO,cAAc,MAAM,wBAAwB,CAAC;AACpD,OAAO,gBAAgB,MAAM,0BAA0B,CAAC;AAExD,MAAM,CAAC,OAAO,OAAO,iBAAiB;IAEtB,OAAO,CAAC,OAAO;IAAkB,OAAO,CAAC,gBAAgB;gBAAjD,OAAO,EAAE,cAAc,EAAU,gBAAgB,EAAE,gBAAgB;IAEvF;;;;;OAKG;IACI,oBAAoB;IAO3B;;;;;;OAMG;IACG,uBAAuB,CAAC,MAAM,EAAE,iCAAiC;IAOvE;;;;OAIG;IACG,oBAAoB,CAAC,MAAM,EAAE,8BAA8B;IAOjE;;;OAGG;IACH,UAAU,CAAC,WAAW,EAAE,MAAM;CAIjC"}
}
declare module 'node-binance-fast/lib/base/util/json-websocket' {
  /// <reference types="node" />
  import EventEmitter from 'events';
  import WebSocket from 'ws';
  interface JSONWebSocket<T> {
      on(event: 'connect' | 'disconnect' | 'reconnect', listener: () => void): this;
      on(event: 'error', listener: (err: Error) => void): this;
      on(event: 'data', listener: (value: T) => void): this;
      on(event: 'connect' | 'disconnect' | 'reconnect' | 'error' | 'data', listener: (...args: any[]) => void): this;
  }
  /**
   * Wrapper for websocket with logic for disconnecting and reconnecting.
   * Emits events for useful information.
   * Events:
   * connect: The websocket wrapper connected
   * disconnect: The websocket wrapper explicitely disconnected
   * reconnect: The websocket lost connection and will reconnect
   * error: The server returned an error or a JSON parse error ocurred
   * data: JSON data in the webstream.
   */
  class JSONWebSocket<T> extends EventEmitter {
      private url;
      protected ws?: WebSocket;
      protected connected: boolean;
      constructor(url: string);
      protected onMessage(message: WebSocket.Data): void;
      protected onError(err: Error): void;
      protected onPing(): void;
      protected onClose(): void;
      removeListener(event: string | symbol, listener: (...args: any[]) => void): this;
      removeAllListeners(event?: string | symbol | undefined): this;
      addListener(event: string | symbol, listener: (...args: any[]) => void): this;
      prependListener(event: string | symbol, listener: (...args: any[]) => void): this;
      /** Checks if the event emitter has any listeners */
      get isEmpty(): boolean;
      get isConnected(): boolean;
      get websocket(): WebSocket | undefined;
      /**
       * Connects the websocket and registers various handlers for events
       * and reconnection.
       */
      protected connect(): void;
      /**
       * Disables reconnection and keepalive behaviour,
       * as well as closing the socket.
       */
      protected disconnect(): void;
  }
  export default JSONWebSocket;
  //# sourceMappingURL=json-websocket.d.ts.map
}
declare module 'node-binance-fast/lib/base/util/json-websocket.d.ts' {
  {"version":3,"file":"json-websocket.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/util/json-websocket.ts"],"names":[],"mappings":";AAAA,OAAO,YAAY,MAAM,QAAQ,CAAC;AAClC,OAAO,SAAS,MAAM,IAAI,CAAC;AAG3B,OAAO,WAAW,aAAa,CAAC,CAAC;IAC7B,EAAE,CAAC,KAAK,EAAE,SAAS,GAAG,YAAY,GAAG,WAAW,EAAE,QAAQ,EAAE,MAAM,IAAI,GAAG,IAAI,CAAC;IAC9E,EAAE,CAAC,KAAK,EAAE,OAAO,EAAE,QAAQ,EAAE,CAAC,GAAG,EAAE,KAAK,KAAK,IAAI,GAAG,IAAI,CAAC;IACzD,EAAE,CAAC,KAAK,EAAE,MAAM,EAAE,QAAQ,EAAE,CAAC,KAAK,EAAE,CAAC,KAAK,IAAI,GAAG,IAAI,CAAC;IACtD,EAAE,CAAC,KAAK,EAAE,SAAS,GAAG,YAAY,GAAG,WAAW,GAAG,OAAO,GAAG,MAAM,EAAE,QAAQ,EAAE,CAAC,GAAG,IAAI,EAAE,GAAG,EAAE,KAAK,IAAI,GAAG,IAAI,CAAC;CAClH;AAED;;;;;;;;;GASG;AACH,cAAM,aAAa,CAAC,CAAC,CAAE,SAAQ,YAAY;IAK3B,OAAO,CAAC,GAAG;IAHvB,SAAS,CAAC,EAAE,CAAC,EAAE,SAAS,CAAC;IACzB,SAAS,CAAC,SAAS,EAAE,OAAO,CAAC;gBAET,GAAG,EAAE,MAAM;IAK/B,SAAS,CAAC,SAAS,CAAC,OAAO,EAAE,SAAS,CAAC,IAAI;IAK3C,SAAS,CAAC,OAAO,CAAC,GAAG,EAAE,KAAK;IAI5B,SAAS,CAAC,MAAM;IAIhB,SAAS,CAAC,OAAO;IAIjB,cAAc,CAAC,KAAK,EAAE,MAAM,GAAG,MAAM,EAAE,QAAQ,EAAE,CAAC,GAAG,IAAI,EAAE,GAAG,EAAE,KAAK,IAAI,GAAG,IAAI;IAMhF,kBAAkB,CAAC,KAAK,CAAC,EAAE,MAAM,GAAG,MAAM,GAAG,SAAS,GAAG,IAAI;IAM7D,WAAW,CAAC,KAAK,EAAE,MAAM,GAAG,MAAM,EAAE,QAAQ,EAAE,CAAC,GAAG,IAAI,EAAE,GAAG,EAAE,KAAK,IAAI,GAAG,IAAI;IAW7E,eAAe,CAAC,KAAK,EAAE,MAAM,GAAG,MAAM,EAAE,QAAQ,EAAE,CAAC,GAAG,IAAI,EAAE,GAAG,EAAE,KAAK,IAAI,GAAG,IAAI;IAOjF,oDAAoD;IACpD,IAAI,OAAO,YAEV;IAED,IAAI,WAAW,YAA6B;IAE5C,IAAI,SAAS,0BAAsB;IAEnC;;;OAGG;IACH,SAAS,CAAC,OAAO;IAYjB;;;OAGG;IACH,SAAS,CAAC,UAAU;CAQvB;AAED,eAAe,aAAa,CAAC"}
}
declare module 'node-binance-fast/lib/base/util/request-handler' {
  /**
   * Handles REST requests to binance by adding the appropriate headers
   * and sending the data to the provided url
   */
  export default class RequestHandler {
      protected apiKey: string;
      protected apiSecret: string;
      protected baseURL: string;
      constructor(apiKey: string, apiSecret: string, baseURL: string);
      /**
       * Uses the HMAC-SHA256 algorithm to sign the data passed in
       * using the secret key used to initialise the handler.
       * @param data The data to create a signature for
       */
      protected getSignature(data: string): string;
      /**
       *
       */
      sendRequest<T>({ path, method, weight, params }: {
          path: string;
          method: Method;
          weight: number;
          params?: {};
      }): Promise<T>;
      /**
       *
       * Also adds a HMAC-SHA256 signature to the request.
       */
      sendSignedRequest<T>({ path, method, weight, params }: {
          path: string;
          method: Method;
          weight: number;
          params?: {};
      }): Promise<T>;
  }
  //# sourceMappingURL=request-handler.d.ts.map
}
declare module 'node-binance-fast/lib/base/util/request-handler.d.ts' {
  {"version":3,"file":"request-handler.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/util/request-handler.ts"],"names":[],"mappings":"AAeA;;;GAGG;AACH,MAAM,CAAC,OAAO,OAAO,cAAc;IAG3B,SAAS,CAAC,MAAM,EAAE,MAAM;IACxB,SAAS,CAAC,SAAS,EAAE,MAAM;IAC3B,SAAS,CAAC,OAAO,EAAE,MAAM;gBAFf,MAAM,EAAE,MAAM,EACd,SAAS,EAAE,MAAM,EACjB,OAAO,EAAE,MAAM;IAG7B;;;;OAIG;IACH,SAAS,CAAC,YAAY,CAAC,IAAI,EAAE,MAAM;IAInC;;OAEG;IACG,WAAW,CAAC,CAAC,EAAE,EAAC,IAAI,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM,EAAC,EAAE;QAAC,IAAI,EAAE,MAAM,CAAC;QAAC,MAAM,EAAE,MAAM,CAAC;QAAC,MAAM,EAAE,MAAM,CAAC;QAAC,MAAM,CAAC,EAAE,EAAE,CAAA;KAAC,GAAG,OAAO,CAAC,CAAC,CAAC;IAU7H;;;OAGG;IACG,iBAAiB,CAAC,CAAC,EAAE,EAAC,IAAI,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM,EAAC,EAAE;QAAC,IAAI,EAAE,MAAM,CAAC;QAAC,MAAM,EAAE,MAAM,CAAC;QAAC,MAAM,EAAE,MAAM,CAAC;QAAC,MAAM,CAAC,EAAE,EAAE,CAAA;KAAC,GAAG,OAAO,CAAC,CAAC,CAAC;CAWtI"}
}
declare module 'node-binance-fast/lib/base/util/types/request-handler' {
  type Method = 'POST' | 'PUT' | 'GET' | 'DELETE';
  //# sourceMappingURL=request-handler.d.ts.map
}
declare module 'node-binance-fast/lib/base/util/types/request-handler.d.ts' {
  {"version":3,"file":"request-handler.d.ts","sourceRoot":"","sources":["../../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/util/types/request-handler.ts"],"names":[],"mappings":"AAAA,aAAK,MAAM,GAAG,MAAM,GAAG,KAAK,GAAG,KAAK,GAAG,QAAQ,CAAC"}
}
declare module 'node-binance-fast/lib/base/util/user-data-websocket' {
  import WebSocket from "ws";
  import JSONWebSocket from "node-binance-fast/lib/base/util/json-websocket";
  interface UserDataWebSocket extends JSONWebSocket<UserDataStreamPayload> {
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
  class UserDataWebSocket extends JSONWebSocket<UserDataStreamPayload> {
      protected onMessage(message: WebSocket.Data): void;
  }
  export default UserDataWebSocket;
  //# sourceMappingURL=user-data-websocket.d.ts.map
}
declare module 'node-binance-fast/lib/base/util/user-data-websocket.d.ts' {
  {"version":3,"file":"user-data-websocket.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/util/user-data-websocket.ts"],"names":[],"mappings":"AAAA,OAAO,SAAS,MAAM,IAAI,CAAC;AAC3B,OAAO,aAAa,MAAM,kBAAkB,CAAC;AAE7C,OAAO,WAAW,iBAAkB,SAAQ,aAAa,CAAC,qBAAqB,CAAC;IAC5E,EAAE,CAAC,KAAK,EAAE,SAAS,GAAG,YAAY,GAAG,WAAW,EAAE,QAAQ,EAAE,MAAM,IAAI,GAAG,IAAI,CAAC;IAC9E,EAAE,CAAC,KAAK,EAAE,OAAO,EAAE,QAAQ,EAAE,CAAC,GAAG,EAAE,KAAK,KAAK,IAAI,GAAG,IAAI,CAAC;IACzD,EAAE,CAAC,KAAK,EAAE,MAAM,EAAE,QAAQ,EAAE,CAAC,KAAK,EAAE,qBAAqB,KAAK,IAAI,GAAG,IAAI,CAAC;IAC1E;;;;;OAKG;IACH,EAAE,CAAC,KAAK,EAAE,yBAAyB,EAAE,QAAQ,EAAE,CAAC,KAAK,EAAE,8BAA8B,KAAK,IAAI,GAAG,IAAI,CAAC;IACtG;;;;;;OAMG;IACH,EAAE,CAAC,KAAK,EAAE,eAAe,EAAE,QAAQ,EAAE,CAAC,KAAK,EAAE,oBAAoB,KAAK,IAAI,GAAG,IAAI,CAAC;IAClF;;;;;;OAMG;IACH,EAAE,CAAC,KAAK,EAAE,iBAAiB,EAAE,QAAQ,EAAE,CAAC,KAAK,EAAE,sBAAsB,KAAK,IAAI,GAAG,IAAI,CAAC;IACtF;;;;OAIG;IACH,EAAE,CAAC,KAAK,EAAE,YAAY,EAAE,QAAQ,EAAE,CAAC,KAAK,EAAE,iBAAiB,KAAK,IAAI,GAAG,IAAI,CAAC;IAC5E,EAAE,CAAC,KAAK,EAAE,SAAS,GAAG,YAAY,GAAG,WAAW,GAAG,OAAO,GAAG,MAAM,EAAE,QAAQ,EAAE,QAAQ,GAAG,IAAI,CAAC;CAClG;AAED,cAAM,iBAAkB,SAAQ,aAAa,CAAC,qBAAqB,CAAC;IAGhE,SAAS,CAAC,SAAS,CAAC,OAAO,EAAE,SAAS,CAAC,IAAI;CAQ9C;AAED,eAAe,iBAAiB,CAAC"}
}
declare module 'node-binance-fast/lib/base/util/websocket-handler' {
  import JSONWebSocket from "node-binance-fast/lib/base/util/json-websocket";
  import UserDataWebSocket from "node-binance-fast/lib/base/util/user-data-websocket";
  /**
   * Helper class for managing websocket creation and
   * other features.
   */
  export default class WebSocketHandler {
      private baseUrl;
      private combinedBaseUrl;
      constructor(baseUrl: string, combinedBaseUrl: string);
      /**
       * Creates a new websocket at the provided path.
       * @param path
       */
      createWebSocket<T>(path: string): JSONWebSocket<T>;
      /**
       * Creates a new websocket at the provided combined stream path.
       * @param path
       */
      createCombinedWebSocket<T>(path: string): JSONWebSocket<T>;
      /**
       * Creates a user data stream websocket at the provided path
       * @path
       */
      createUserDataWebSocket(path: string): UserDataWebSocket;
  }
  //# sourceMappingURL=websocket-handler.d.ts.map
}
declare module 'node-binance-fast/lib/base/util/websocket-handler.d.ts' {
  {"version":3,"file":"websocket-handler.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/util/websocket-handler.ts"],"names":[],"mappings":"AAAA,OAAO,aAAa,MAAM,kBAAkB,CAAC;AAC7C,OAAO,iBAAiB,MAAM,uBAAuB,CAAC;AAEtD;;;GAGG;AACH,MAAM,CAAC,OAAO,OAAO,gBAAgB;IAErB,OAAO,CAAC,OAAO;IAAU,OAAO,CAAC,eAAe;gBAAxC,OAAO,EAAE,MAAM,EAAU,eAAe,EAAE,MAAM;IAEpE;;;OAGG;IACH,eAAe,CAAC,CAAC,EAAE,IAAI,EAAE,MAAM;IAI/B;;;OAGG;IACH,uBAAuB,CAAC,CAAC,EAAE,IAAI,EAAE,MAAM;IAIvC;;;OAGG;IACH,uBAAuB,CAAC,IAAI,EAAE,MAAM;CAIvC"}
}
declare module 'node-binance-fast/lib/base/websocket-stream-api' {
  import WebSocketHandler from "node-binance-fast/lib/base/util/websocket-handler";
  /**
   * API object for accessing binance Websocket stream API.
   * Each method returns a custom websocket wrapper that
   * automatically parses messages returned from the server and
   * emits JSON to all listeners.
   * The websockets automatically close upon all of the listeners
   * being closed.
   */
  export default class WebSocketStreamAPI {
      private handler;
      constructor(handler: WebSocketHandler);
      /**
       * The Aggregate Trade Streams push trade information that is aggregated for a single taker order.
       *
       * Update Speed: Real-time
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#aggregate-trade-streams
       * @param symbol
       */
      onAggTrade(symbol: string): import("node-binance-fast/lib/base/util/json-websocket").default<AggregateTradePayload>;
      /**
       * The Trade Streams push raw trade information; each trade has a unique buyer and seller.
       *
       * Update Speed: Real-time
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#trade-streams
       * @param symbol
       */
      onTrade(symbol: string): import("node-binance-fast/lib/base/util/json-websocket").default<TradePayload>;
      /**
       * The Kline/Candlestick Stream push updates to the current klines/candlestick every second.
       *
       * Update Speed: 2000ms
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#klinecandlestick-streams
       * @param symbol
       * @param interval
       */
      onKline(symbol: string, interval: ChartInterval): import("node-binance-fast/lib/base/util/json-websocket").default<KlinePayload>;
      /**
       * 24hr rolling window mini-ticker statistics.
       * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
       *
       * Update Speed: 1000ms
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-mini-ticker-stream
       * @param symbol
       */
      onMiniTicker(symbol: string): import("node-binance-fast/lib/base/util/json-websocket").default<MiniTickerPayload>;
      /**
       * 24hr rolling window mini-ticker statistics for all symbols that changed in an array.
       * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
       * Note that only tickers that have changed will be present in the array.
       *
       * Update Speed: 1000ms
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-market-mini-tickers-stream
       */
      onAllMiniTickers(): import("node-binance-fast/lib/base/util/json-websocket").default<AllMiniTickersPayload>;
      /**
       * 24hr rolling window ticker statistics for a single symbol.
       * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
       *
       * Update Speed: 1000ms
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-ticker-streams
       * @param symbol
       */
      onTicker(symbol: string): import("node-binance-fast/lib/base/util/json-websocket").default<TickerPayload>;
      /**
       * 24hr rolling window ticker statistics for all symbols that changed in an array.
       * These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
       * Note that only tickers that have changed will be present in the array.
       *
       * Update Speed: 1000ms
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-market-tickers-stream
       */
      onAllTickers(): import("node-binance-fast/lib/base/util/json-websocket").default<AllTickersPayload>;
      /**
       * Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.
       *
       * Update Speed: Real-time
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-book-ticker-streams
       * @param symbol
       */
      onBookTicker(symbol: string): import("node-binance-fast/lib/base/util/json-websocket").default<BookTickerPayload>;
      /**
       * Pushes any update to the best bid or ask's price or quantity in real-time for all symbols.
       *
       * Update Speed: Real-time
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-book-tickers-stream
       */
      onAllBookTickers(): import("node-binance-fast/lib/base/util/json-websocket").default<AllBookTickersPayload>;
      /**
       * Top <levels> bids and asks, pushed every second.
       * Valid levels are 5, 10, or 20.
       *
       * Update Speed: 1000ms or 100ms
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#partial-book-depth-streams
       * @param symbol
       * @param level
       */
      onDepthLevelUpdate(symbol: string, level: DepthLevel, updateSpeed?: '100ms'): import("node-binance-fast/lib/base/util/json-websocket").default<DepthLevelUpdatePayload>;
      /**
       * Order book price and quantity depth updates used to locally manage an order book.
       *
       * Update Speed: 1000ms or 100ms
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#diff-depth-stream
       * @param symbol
       */
      onDepthUpdate(symbol: string, updateSpeed?: '100ms'): import("node-binance-fast/lib/base/util/json-websocket").default<DepthUpdatePayload>;
      /**
       * Multiple streams combined into a single stream
       *
       * Update Speed: 2000ms, 1000ms, 100ms, or Real-time
       *
       * https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#general-wss-information
       * @param streams list of stream names to stream
       */
      onCombinedStream(streams: string[]): import("node-binance-fast/lib/base/util/json-websocket").default<{}>;
  }
  //# sourceMappingURL=websocket-stream-api.d.ts.map
}
declare module 'node-binance-fast/lib/base/websocket-stream-api.d.ts' {
  {"version":3,"file":"websocket-stream-api.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/base/websocket-stream-api.ts"],"names":[],"mappings":"AAAA,OAAO,gBAAgB,MAAM,0BAA0B,CAAC;AAExD;;;;;;;GAOG;AACH,MAAM,CAAC,OAAO,OAAO,kBAAkB;IAEvB,OAAO,CAAC,OAAO;gBAAP,OAAO,EAAE,gBAAgB;IAE7C;;;;;;;OAOG;IACH,UAAU,CAAC,MAAM,EAAE,MAAM;IAKzB;;;;;;;OAOG;IACH,OAAO,CAAC,MAAM,EAAE,MAAM;IAKtB;;;;;;;;OAQG;IACH,OAAO,CAAC,MAAM,EAAE,MAAM,EAAE,QAAQ,EAAE,aAAa;IAK/C;;;;;;;;OAQG;IACH,YAAY,CAAC,MAAM,EAAE,MAAM;IAK3B;;;;;;;;OAQG;IACH,gBAAgB;IAKhB;;;;;;;;OAQG;IACH,QAAQ,CAAC,MAAM,EAAE,MAAM;IAKvB;;;;;;;;OAQG;IACH,YAAY;IAKZ;;;;;;;OAOG;IACH,YAAY,CAAC,MAAM,EAAE,MAAM;IAK3B;;;;;;OAMG;IACH,gBAAgB;IAKhB;;;;;;;;;OASG;IACH,kBAAkB,CAAC,MAAM,EAAE,MAAM,EAAE,KAAK,EAAE,UAAU,EAAE,WAAW,CAAC,EAAE,OAAO;IAK3E;;;;;;;OAOG;IACH,aAAa,CAAC,MAAM,EAAE,MAAM,EAAE,WAAW,CAAC,EAAE,OAAO;IAKnD;;;;;;;OAOG;IACH,gBAAgB,CAAC,OAAO,EAAE,MAAM,EAAE;CAIrC"}
}
declare module 'node-binance-fast/lib/v1/binance-rest' {
  interface BinanceRestOptions {
      /** Get this from your account on binance.com */
      key: string;
      /** Get this from your account on binance.com */
      secret: string;
      /** Optional, defaults to 5000, increase if you're getting timestamp errors */
      recvWindow?: number;
      /** Optional, defaults to 15000, is the request time out in milliseconds */
      timeout?: number;
      /**
       * Optional, default is false. Binance's API returns objects with lots of one letter keys.  By
       * default those keys will be replaced with more descriptive, longer ones.
       */
      disableBeautification?: boolean;
      /**
       * Optional, default is false.  If turned on, the library will attempt to handle any drift of
       * your clock on it's own.  If a request fails due to drift, it'll attempt a fix by requesting
       * binance's server time, calculating the difference with your own clock, and then reattempting
       * the request.
       */
      handleDrift?: boolean;
      /**
       * Optional, default is false.  If turned on, the library will attempt to handle any drift of
       * your clock on it's own.  If a request fails due to drift, it'll attempt a fix by requesting
       * binance's server time, calculating the difference with your own clock, and then reattempting
       * the request.
       */
      baseUrl?: string;
      /**
       * Options as supported by the 'request' library
       * For a list of available options, see:
       * https://github.com/request/request
       */
      requestOptions?: {};
  }
  export default class BinanceRest {
      private key;
      private secret;
      private recvWindow;
      private timeout;
      private disableBeautification;
      private handleDrift;
      private baseUrl;
      private requestOptions;
      private beautifier;
      private drift;
      private syncInterval;
      private binance;
      constructor({ key, secret, recvWindow, timeout, disableBeautification, handleDrift, baseUrl, requestOptions }: BinanceRestOptions);
      getBaseUrl(): string;
      private setTimestamp;
      /** Gets the time value in miliseconds */
      private getTime;
      /**
       *
       */
      calculateDrift(): Promise<void>;
      /**
       *
       * @param interval
       * @param onRecalculateDriftCb
       */
      startTimeSync(interval: number | undefined, onRecalculateDriftCb: (value: Promise<void>) => void): Promise<void>;
      /**
       * Clears the interval to keep the API connector synced with the
       * server time.
       */
      endTimeSync(): void;
      /**
       * Test connectivity to the REST API.
       * Weight: 1
       * Reference:
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
       * @param callback
       */
      ping(callback?: undefined): Promise<void>;
      ping(callback: PingCallback): void;
      /**
       * Test connectivity to the REST API and get the current server time.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
       * @param callback
       */
      time(callback?: undefined): Promise<QueryTimeResponse>;
      time(callback: TimeCallback): void;
      /**
       * Gets the order book depth.
       * Weight: Adjusted based on the limit:
       * 5-100: 1
       * 500:   5
       * 1000   10
       * 5000   50
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
       * @param query
       * @param callback
       */
      depth(query: QueryDepthParameters | string, callback?: undefined): Promise<QueryDepthResponse>;
      depth(query: QueryDepthParameters | string, callback: DepthCallback): void;
      /**
       * Get recent trades.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
       * @param query
       * @param callback
       */
      trades(query: QueryTradesParameters | string, callback?: undefined): Promise<QueryTradesResponse>;
      trades(query: QueryTradesParameters | string, callback: TradesCallback): void;
      /**
       * Get older trades.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
       * @param query
       * @param callback
       */
      historicalTrades(query: QueryHistoricalTradesParameters | string, callback?: undefined): Promise<QueryHistoricalTradesResponse>;
      historicalTrades(query: QueryHistoricalTradesParameters | string, callback: HistoricalTradesCallback): void;
      /**
       * Get compressed, aggregate trades.
       * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
       * @param query
       * @param callback
       */
      aggTrades(query: QueryAggTradesParameters | string, callback?: undefined): Promise<QueryAggTradesResponse>;
      aggTrades(query: QueryAggTradesParameters | string, callback: AggTradesCallback): void;
      /**
       * Current exchange trading rules and symbol information.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
       * @param callback
       */
      exchangeInfo(callback?: undefined): Promise<QueryAggTradesResponse>;
      exchangeInfo(callback: ExchangeInfoCallback): void;
      /**
       * Kline/candlestick bars for a symbol.
       * Klines are uniquely identified by their open time.
       * If startTime and endTime are not sent, the most recent klines are returned.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
       * @param query
       * @param callback
       */
      klines(query: QueryKlinesParameters, callback?: undefined): Promise<QueryKlinesResponse>;
      klines(query: QueryKlinesParameters, callback: KlinesCallback): void;
      /**
       * 24 hour rolling window price change statistics.
       * Weight: 1 or 40
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
       * @param query
       * @param callback
       */
      ticker24Hr(query: QueryTicker24hrParameters, callback?: undefined): Promise<QueryTicker24HrResponse>;
      ticker24Hr(query?: {}, callback?: undefined): Promise<QueryTicker24HrResponse[]>;
      ticker24Hr(query: QueryTicker24hrParameters, callback: (err: Error, value: QueryTicker24HrResponse) => void): void;
      ticker24Hr(query: {}, callback: (err: Error, value: QueryTicker24HrResponse[]) => void): void;
      /**
       * Latest price for a symbol.
       * Weight: 1 or 2
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
       * @param query
       * @param callback
       */
      tickerPrice(query: QueryTickerPriceParameters, callback?: undefined): Promise<QueryTickerPriceResponse>;
      tickerPrice(query: QueryTickerPriceParameters, callback: TickerPriceCallback): void;
      /**
       * Best price/qty on the order book for a symbol.
       * Weight: 1 or 2
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
       * @param query
       * @param callback
       */
      bookTicker(query: QueryBookTickerParameters | string, callback: (err: Error, value: QueryBookTickerResponse) => void): void;
      bookTicker(query: Omit<QueryBookTickerParameters, 'symbol'>, callback: (err: Error, value: QueryBookTickerResponse[]) => void): void;
      bookTicker(query: QueryBookTickerParameters | string, callback?: undefined): Promise<QueryBookTickerResponse>;
      bookTicker(query: undefined, callback?: undefined): Promise<QueryBookTickerResponse[]>;
      /**
       * Returns the best price/qty on the order book for all symbols.
       * This route appears on an old API document, but does not appear in the most recent set of docs.
       * You should probably use bookTicker() instead as it utilizes a route with a newer version.
       * @param callback
       * @deprecated
       */
      allBookTickers(callback?: undefined): Promise<QueryBookTickerResponse[]>;
      allBookTickers(callback: AllBookTickersCallback): void;
      /**
       * Returns the latest price for all symbols.
       * This route appears on the old API document, but does not appear in the most recent set of docs.
       * You should probably use tickerPrice() instead as it utilizes a route with a newer version.
       * @param callback
       * @deprecated
       */
      allPrices(callback?: undefined): Promise<QueryTickerPriceResponse[]>;
      allPrices(callback: AllPricesCallback): void;
      /**
       * Send in a new order.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       * @param query
       * @param callback
       */
      newOrder(query: CreateOrderParameters, callback?: undefined): Promise<OrderFULLResponse>;
      newOrder(query: CreateOrderParameters, callback: (err: Error, value: OrderFULLResponse) => void): void;
      /**
       * Test new order creation and signature/recvWindow long.
       * Creates and validates a new order but does not send it into the matching engine.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade
       */
      testOrder(query: CreateOrderParameters & {
          newOrderRespType: 'ACK';
      }, callback?: undefined): Promise<OrderACKResponse>;
      testOrder(query: CreateOrderParameters & {
          newOrderRespType: 'RESULT';
      }, callback?: undefined): Promise<OrderRESULTResponse>;
      testOrder(query: CreateOrderParameters & {
          newOrderRespType: 'FULL';
      }, callback?: undefined): Promise<OrderFULLResponse>;
      testOrder(query: CreateOrderParameters & {
          newOrderRespType: 'ACK';
      }, callback: (err: Error, value: OrderACKResponse) => void): void;
      testOrder(query: CreateOrderParameters & {
          newOrderRespType: 'RESULT';
      }, callback: (err: Error, value: OrderRESULTResponse) => void): void;
      testOrder(query: CreateOrderParameters & {
          newOrderRespType: 'FULL';
      }, callback: (err: Error, value: OrderFULLResponse) => void): void;
      /**
       * Check an order's status.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
       * @param query
       * @param callback
       */
      queryOrder(query: QueryOrderParameters, callback?: undefined): Promise<QueryOrderResponse>;
      queryOrder(query: QueryOrderParameters, callback: QueryOrderCallback): void;
      /**
       * Cancel an active order.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
       * @param query
       * @param callback
       */
      cancelOrder(query: CancelOrderParameters, callback?: undefined): Promise<CancelOrderResponse>;
      cancelOrder(query: CancelOrderParameters, callback: CancelOrderCallback): void;
  }
  export {};
  //# sourceMappingURL=binance-rest.d.ts.map
}
declare module 'node-binance-fast/lib/v1/binance-rest.d.ts' {
  {"version":3,"file":"binance-rest.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v1/binance-rest.ts"],"names":[],"mappings":"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"}
}
declare module 'node-binance-fast/lib/v1/binance-ws' {
  export default class BinanceWS {
  }
  //# sourceMappingURL=binance-ws.d.ts.map
}
declare module 'node-binance-fast/lib/v1/binance-ws.d.ts' {
  {"version":3,"file":"binance-ws.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v1/binance-ws.ts"],"names":[],"mappings":"AAEA,MAAM,CAAC,OAAO,OAAO,SAAS;CAE7B"}
}
declare module 'node-binance-fast/lib/v1/index' {
  import BinanceRest from 'node-binance-fast/lib/v1/binance-rest';
  import BinanceWS from 'node-binance-fast/lib/v1/binance-ws';
  import ValueProcessor from 'node-binance-fast/lib/v1/util/value-processor';
  export { BinanceRest, BinanceWS, ValueProcessor, };
  //# sourceMappingURL=index.d.ts.map
}
declare module 'node-binance-fast/lib/v1/index.d.ts' {
  {"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v1/index.ts"],"names":[],"mappings":"AAAA,OAAO,WAAW,MAAM,gBAAgB,CAAC;AACzC,OAAO,SAAS,MAAM,cAAc,CAAC;AACrC,OAAO,cAAc,MAAM,wBAAwB,CAAC;AAEpD,OAAO,EACH,WAAW,EACX,SAAS,EACT,cAAc,GACjB,CAAA"}
}
declare module 'node-binance-fast/lib/v1/types/callbacks' {
  type PingCallback = (err: Error) => void;
  type TimeCallback = (err: Error, value: QueryTimeResponse) => void;
  type DepthCallback = (err: Error, value: QueryDepthResponse) => void;
  type TradesCallback = (err: Error, value: QueryTradesResponse) => void;
  type HistoricalTradesCallback = (err: Error, value: QueryHistoricalTradesResponse) => void;
  type AggTradesCallback = (err: Error, value: QueryAggTradesResponse) => void;
  type ExchangeInfoCallback = (err: Error, value: QueryExchangeInfoResponse) => void;
  type KlinesCallback = (err: Error, value: QueryKlinesResponse) => void;
  type Ticker24HrCallback = (err: Error, value: any) => void;
  type TickerPriceCallback = (err: Error, value: any) => void;
  type BookTickerCallbackify = (arg1: QueryBookTickerParameters | {}, callback: (err: Error, result: QueryBookTickerResponse[]) => void) => void;
  type BookTickerCallback = (err: Error, value: any) => void;
  type AllBookTickersCallbackify = (arg1: QueryBookTickerParameters | {}, callback: (err: Error, result: QueryBookTickerResponse[]) => void) => void;
  type AllBookTickersCallback = (err: Error, value: QueryBookTickerResponse[]) => void;
  type AllPricesCallback = (err: Error, value: QueryTickerPriceResponse[]) => void;
  type QueryOrderCallback = (err: Error, value: QueryOrderResponse) => void;
  type CancelOrderCallback = (err: Error, value: CancelOrderResponse) => void;
  //# sourceMappingURL=callbacks.d.ts.map
}
declare module 'node-binance-fast/lib/v1/types/callbacks.d.ts' {
  {"version":3,"file":"callbacks.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v1/types/callbacks.ts"],"names":[],"mappings":"AACA,aAAK,YAAY,GAAG,CAAC,GAAG,EAAE,KAAK,KAAK,IAAI,CAAC;AACzC,aAAK,YAAY,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,iBAAiB,KAAK,IAAI,CAAC;AACnE,aAAK,aAAa,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,kBAAkB,KAAK,IAAI,CAAC;AACrE,aAAK,cAAc,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,mBAAmB,KAAK,IAAI,CAAC;AACvE,aAAK,wBAAwB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,6BAA6B,KAAK,IAAI,CAAC;AAC3F,aAAK,iBAAiB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,sBAAsB,KAAK,IAAI,CAAC;AAC7E,aAAK,oBAAoB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,yBAAyB,KAAK,IAAI,CAAC;AACnF,aAAK,cAAc,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,mBAAmB,KAAK,IAAI,CAAC;AACvE,aAAK,kBAAkB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,GAAG,KAAK,IAAI,CAAC;AAC3D,aAAK,mBAAmB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,GAAG,KAAK,IAAI,CAAC;AAC5D,aAAK,qBAAqB,GAAG,CAAC,IAAI,EAAE,yBAAyB,GAAG,EAAE,EAAE,QAAQ,EAAE,CAAC,GAAG,EAAE,KAAK,EAAE,MAAM,EAAE,uBAAuB,EAAE,KAAK,IAAI,KAAK,IAAI,CAAC;AAC/I,aAAK,kBAAkB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,GAAG,KAAK,IAAI,CAAC;AAC3D,aAAK,yBAAyB,GAAG,CAAC,IAAI,EAAE,yBAAyB,GAAG,EAAE,EAAE,QAAQ,EAAE,CAAC,GAAG,EAAE,KAAK,EAAE,MAAM,EAAE,uBAAuB,EAAE,KAAK,IAAI,KAAK,IAAI,CAAC;AACnJ,aAAK,sBAAsB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,uBAAuB,EAAE,KAAI,IAAI,CAAC;AACpF,aAAK,iBAAiB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,wBAAwB,EAAE,KAAK,IAAI,CAAC;AACjF,aAAK,kBAAkB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,kBAAkB,KAAK,IAAI,CAAC;AAC1E,aAAK,mBAAmB,GAAG,CAAC,GAAG,EAAE,KAAK,EAAE,KAAK,EAAE,mBAAmB,KAAK,IAAI,CAAC"}
}
declare module 'node-binance-fast/lib/v1/util/beautifier' {
  /**
   * Restructures the values returned by the API by changing values and
   * renaming them to more descript names
   */
  export default class Beautifier {
      beautifications: {};
      constructor();
  }
  //# sourceMappingURL=beautifier.d.ts.map
}
declare module 'node-binance-fast/lib/v1/util/beautifier.d.ts' {
  {"version":3,"file":"beautifier.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v1/util/beautifier.ts"],"names":[],"mappings":"AAgMA;;;GAGG;AACH,MAAM,CAAC,OAAO,OAAO,UAAU;IAE3B,eAAe,EAAE,EAAE,CAAC;;CAuCvB"}
}
declare module 'node-binance-fast/lib/v1/util/value-processor' {
  export default class ValueProcessor {
  }
  //# sourceMappingURL=value-processor.d.ts.map
}
declare module 'node-binance-fast/lib/v1/util/value-processor.d.ts' {
  {"version":3,"file":"value-processor.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v1/util/value-processor.ts"],"names":[],"mappings":"AAEA,MAAM,CAAC,OAAO,OAAO,cAAc;CAoFlC"}
}
declare module 'node-binance-fast/lib/v2/binance-rest' {
  /// <reference types="node" />
  import { RESTAPI } from 'node-binance-fast/lib/base/index';
  import RequestHandler from 'node-binance-fast/lib/base/util/request-handler';
  /**
   * Binance REST API for executing common tasks.
   */
  export default class BinanceREST {
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
       * Test connectivity to the REST API.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity
       */
      ping(): Promise<void>;
      /**
       * Test connectivity to the REST API and get the current server time.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
       */
      getTime(): Promise<QueryTimeResponse>;
      /**
       * Test connectivity to the REST API and get the difference in milliseconds
       * between the current server time and the local time.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time
       */
      calculateDrift(): Promise<number>;
      /**
       * Current exchange trading rules and symbol information.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information
       */
      getExchangeInfo(): Promise<QueryExchangeInfoResponse>;
      /**
       * Gets the order book depth.
       * Weight: Adjusted based on the limit:
       * 5-100: 1
       * 500:   5
       * 1000   10
       * 5000   50
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book
       */
      queryDepth(symbol: string, limit?: Limit): Promise<QueryDepthResponse>;
      /**
       * Get recent trades.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list
       */
      queryTrades(symbol: string, limit?: Omit<Limit, 5000>): Promise<QueryTradesResponse>;
      /**
       * Get older trades.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data
       */
      queryHistoricalTrades(symbol: string, options?: QueryHistoricalTradesOptions): Promise<QueryHistoricalTradesResponse>;
      /**
       * Get compressed, aggregate trades.
       * Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list
       */
      queryAggTrades(symbol: string, options?: QueryAggTradesOptions): Promise<QueryAggTradesResponse>;
      /**
       * Kline/candlestick bars for a symbol.
       * Klines are uniquely identified by their open time.
       * If startTime and endTime are not sent, the most recent klines are returned.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data
       */
      queryKlines(symbol: string, interval: ChartInterval, options?: QueryKlinesOptions): Promise<QueryKlinesResponse>;
      /**
       * Current average price for a symbol.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price
       */
      queryAvgPrice(symbol: string): Promise<AveragePriceResponse>;
      /**
       * 24 hour rolling window price change statistics.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
       */
      queryTicker24hr(symbol: string): Promise<QueryTicker24HrResponse>;
      /**
       * 24 hour rolling window price change statistics.
       * Weight: 40
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics
       */
      queryAllTicker24hr(): Promise<QueryTicker24HrResponse[]>;
      /**
       * Latest price for a symbol.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
       */
      queryTickerPrice(symbol: string): Promise<QueryTickerPriceResponse>;
      /**
       * Latest price for all symbols.
       * Weight: 2
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker
       */
      queryAllTickersPrice(): Promise<QueryTickerPriceResponse[]>;
      /**
       * Best price/qty on the order book for a symbol.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
       */
      queryBookTicker(symbol: string): Promise<QueryBookTickerResponse>;
      /**
       * Best price/qty on the order book for all symbols.
       * Weight: 2
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker
       */
      queryAllBookTickers(): Promise<QueryBookTickerResponse[]>;
      /**
       * Send in a new limit buy order.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createLimitBuyOrder(symbol: string, quantity: string, price: string, options?: CreateLimitOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new limit sell order.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createLimitSellOrder(symbol: string, quantity: string, price: string, options: CreateLimitOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new market buy order with a stop-loss.
       * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createStopLossBuyOrder(symbol: string, quantity: string, stopPrice: string, options?: CreateStopLossOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new market sell order with a stop-loss.
       * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createStopLossSellOrder(symbol: string, quantity: string, stopPrice: string, options?: CreateStopLossOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new limit buy order with a stop-loss.
       * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createStopLossLimitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateStopLossLimitOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new limit sell order with a stop-loss.
       * A stop-loss is a price-target in the unfavourable direction of the current price, relative to your position.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createStopLossLimitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: CreateStopLossLimitOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new market buy order with a take-profit.
       * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createTakeProfitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new market sell order with a take-profit.
       * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createTakeProfitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new limit buy order with a take-profit.
       * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createTakeProfitLimitBuyOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitLimitOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new limit sell order with a take-profit.
       * A take-profit is a price-target in the favourable direction of the current price, relative to your position.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createTakeProfitLimitSellOrder(symbol: string, quantity: string, price: string, stopPrice: string, options?: TakeProfitLimitOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new limit buy order that cancels if filled immediately as a taker.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createLimitMakerBuyOrder(symbol: string, quantity: string, price: string, options?: LimitMakerOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Send in a new limit sell order that cancels if filled immediately as a taker.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints
       */
      createLimitMakerSellOrder(symbol: string, quantity: string, price: string, options?: LimitMakerOrderOptions): Promise<OrderFULLResponse>;
      /**
       * Check an order's status.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data
       */
      queryOrder(symbol: string, options?: QueryOrderOptions): Promise<QueryOrderResponse>;
      /**
       * Cancel an active order.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade
       */
      cancelOrder(symbol: string, options?: CancelOrderOptions): Promise<CancelOrderResponse>;
      /**
       * Cancels all active orders on a symbol. This includes OCO orders.
       * Weight: 1
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade
       */
      cancelOpenOrders(symbol: string, options?: CancelOpenOrdersOptions): Promise<CancelOpenOrdersResponse>;
      /**
       * Get all open orders on a symbol. Careful when accessing this with no symbol.
       * Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data
       */
      queryOpenOrders(symbol: string, options?: QueryOpenOrdersOptions): Promise<QueryOpenOrdersResponse>;
      /**
       * Get all account orders; active, canceled, or filled.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data
       */
      queryAllOpenOrders(options?: QueryAllOpenOrdersOptions): Promise<QueryOpenOrdersResponse[]>;
      /**
       * Retrieves all OCO based on provided optional parameters.
       * Weight: 10
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data
       */
      queryAllOCOOrders(options?: QueryAllOCOOrdersOptions): Promise<QueryAllOCOOrdersResponse>;
      /**
       * Retrieves all open OCO based on provided optional parameters.
       * Weight: 2
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data
       */
      queryOpenOCOOrders(options?: QueryOpenOCOOrdersOptions): Promise<QueryOpenOCOOrdersResponse>;
      /**
       * Get current account information.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data
       */
      queryAccountInformation(options?: QueryAccountInformationOptions): Promise<QueryAccountInformationResponse>;
      /**
       * Get trades for a specific account and symbol.
       * Weight: 5
       * https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data
       */
      queryMyTrades(symbol: string, options?: QueryMyTradesOptions): Promise<QueryMyTradesResponse>;
  }
  //# sourceMappingURL=binance-rest.d.ts.map
}
declare module 'node-binance-fast/lib/v2/binance-rest.d.ts' {
  {"version":3,"file":"binance-rest.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v2/binance-rest.ts"],"names":[],"mappings":"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"}
}
declare module 'node-binance-fast/lib/v2/binance-ws' {
  import { WebSocketStreamAPI } from "node-binance-fast/lib/base/index";
  type BinanceWSOptions = {
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
}
declare module 'node-binance-fast/lib/v2/binance-ws.d.ts' {
  {"version":3,"file":"binance-ws.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v2/binance-ws.ts"],"names":[],"mappings":"AAAA,OAAO,EAAE,kBAAkB,EAAE,MAAM,SAAS,CAAC;AAO7C,aAAK,gBAAgB,GAAG;IACpB,OAAO,CAAC,EAAE,MAAM,CAAC;IACjB,eAAe,CAAC,EAAE,MAAM,CAAC;IACzB,gBAAgB,CAAC,EAAE,OAAO,CAAC;CAC9B,CAAC;AAEF;;GAEG;AACH,MAAM,CAAC,OAAO,OAAO,SAAU,SAAQ,kBAAkB;gBAEzC,EACR,OAA0B,EAC1B,eAA2C,EAC3C,gBAAuB,EAC1B,EAAE,gBAAgB;CAItB"}
}
declare module 'node-binance-fast/lib/v2/index' {
  import BinanceREST from 'node-binance-fast/lib/v2/binance-rest';
  import BinanceWS from 'node-binance-fast/lib/v2/binance-ws';
  export { BinanceREST, BinanceWS };
  //# sourceMappingURL=index.d.ts.map
}
declare module 'node-binance-fast/lib/v2/index.d.ts' {
  {"version":3,"file":"index.d.ts","sourceRoot":"","sources":["../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v2/index.ts"],"names":[],"mappings":"AAAA,OAAO,WAAW,MAAM,gBAAgB,CAAC;AACzC,OAAO,SAAS,MAAM,cAAc,CAAC;AAErC,OAAO,EACH,WAAW,EACX,SAAS,EACZ,CAAA"}
}
declare module 'node-binance-fast/lib/v2/types/binance-rest' {
  type QueryHistoricalTradesOptions = Omit<QueryHistoricalTradesParameters, 'symbol'>;
  type QueryAggTradesOptions = Omit<QueryAggTradesParameters, 'symbol'>;
  type QueryOrderOptions = Omit<QueryOrderParameters, 'symbol'>;
  type QueryKlinesOptions = Omit<QueryKlinesParameters, 'symbol' | 'interval'>;
  type CreateLimitOrderOptions = Omit<LimitOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'price'>;
  type CreateMarketOrderOptions = Omit<MarketOrderParameters, 'symbol' | 'side' | 'type'>;
  type CreateStopLossOrderOptions = Omit<StopLossOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'stopPrice'>;
  type CreateStopLossLimitOrderOptions = Omit<StopLossLimitOrderParameters, 'symbol' | 'side' | 'type'>;
  type TakeProfitOrderOptions = Omit<TakeProfitOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'stopPrice'>;
  type TakeProfitLimitOrderOptions = Omit<TakeProfitLimitOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'price' | 'stopPrice'>;
  type LimitMakerOrderOptions = Omit<LimitMakerOrderParameters, 'symbol' | 'side' | 'type' | 'quantity' | 'price'>;
  type CancelOrderOptions = Omit<CancelOrderParameters, 'symbol'>;
  type CancelOpenOrdersOptions = Omit<CancelOpenOrdersParameters, 'symbol'>;
  type QueryOpenOrdersOptions = Omit<QueryOpenOrdersParameters, 'symbol'>;
  type QueryAllOpenOrdersOptions = Omit<QueryOpenOrdersParameters, 'symbol'>;
  type QueryAllOrdersOptions = Omit<QueryAllOrdersParameters, 'symbol'>;
  type CreateOCOOrderOptions = Omit<CreateOCOOrderParameters, 'symbol' | 'quantity' | 'price' | 'stopPrice'>;
  type CancelOCOOrderOptions = Omit<CancelOCOOrderParameters, 'symbol'>;
  type QueryOCOOrderOptions = Partial<QueryOCOOrderParameters>;
  type QueryAllOCOOrdersOptions = Partial<QueryAllOCOOrdersParameters>;
  type QueryOpenOCOOrdersOptions = Partial<QueryOpenOCOOrdersParameters>;
  type QueryAccountInformationOptions = Partial<QueryAccountInformationParameters>;
  type QueryMyTradesOptions = Partial<QueryMyTradesParameters>;
  type BinanceRESTOptions = {
      /** API Key from binance */
      apiKey: string;
      /** API Secret from binance */
      apiSecret: string;
      baseURL?: string;
      /** Optional, defaults to 15000, is the request time out in milliseconds */
      timeout?: number;
      /**
       * Optional, is the amount of time the request
       * needs to be received within or else it will be discarded.
       */
      recvWindow?: number;
      handleDrift?: boolean;
  };
  //# sourceMappingURL=binance-rest.d.ts.map
}
declare module 'node-binance-fast/lib/v2/types/binance-rest.d.ts' {
  {"version":3,"file":"binance-rest.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v2/types/binance-rest.ts"],"names":[],"mappings":"AAAA,aAAK,4BAA4B,GAAG,IAAI,CAAC,+BAA+B,EAAE,QAAQ,CAAC,CAAC;AACpF,aAAK,qBAAqB,GAAG,IAAI,CAAC,wBAAwB,EAAE,QAAQ,CAAC,CAAC;AACtE,aAAK,iBAAiB,GAAG,IAAI,CAAC,oBAAoB,EAAE,QAAQ,CAAC,CAAC;AAC9D,aAAK,kBAAkB,GAAG,IAAI,CAAC,qBAAqB,EAAE,QAAQ,GAAC,UAAU,CAAC,CAAC;AAC3E,aAAK,uBAAuB,GAAG,IAAI,CAAC,oBAAoB,EAAE,QAAQ,GAAC,MAAM,GAAC,MAAM,GAAC,UAAU,GAAC,OAAO,CAAC,CAAC;AACrG,aAAK,wBAAwB,GAAG,IAAI,CAAC,qBAAqB,EAAE,QAAQ,GAAC,MAAM,GAAC,MAAM,CAAC,CAAC;AACpF,aAAK,0BAA0B,GAAG,IAAI,CAAC,uBAAuB,EAAE,QAAQ,GAAC,MAAM,GAAC,MAAM,GAAC,UAAU,GAAC,WAAW,CAAC,CAAC;AAC/G,aAAK,+BAA+B,GAAG,IAAI,CAAC,4BAA4B,EAAE,QAAQ,GAAC,MAAM,GAAC,MAAM,CAAC,CAAC;AAClG,aAAK,sBAAsB,GAAG,IAAI,CAAC,yBAAyB,EAAE,QAAQ,GAAC,MAAM,GAAC,MAAM,GAAC,UAAU,GAAC,WAAW,CAAC,CAAC;AAC7G,aAAK,2BAA2B,GAAG,IAAI,CAAC,8BAA8B,EAAE,QAAQ,GAAC,MAAM,GAAC,MAAM,GAAC,UAAU,GAAC,OAAO,GAAC,WAAW,CAAC,CAAC;AAC/H,aAAK,sBAAsB,GAAG,IAAI,CAAC,yBAAyB,EAAE,QAAQ,GAAC,MAAM,GAAC,MAAM,GAAC,UAAU,GAAC,OAAO,CAAC,CAAC;AACzG,aAAK,kBAAkB,GAAG,IAAI,CAAC,qBAAqB,EAAE,QAAQ,CAAC,CAAC;AAChE,aAAK,uBAAuB,GAAG,IAAI,CAAC,0BAA0B,EAAE,QAAQ,CAAC,CAAC;AAC1E,aAAK,sBAAsB,GAAG,IAAI,CAAC,yBAAyB,EAAE,QAAQ,CAAC,CAAC;AACxE,aAAK,yBAAyB,GAAG,IAAI,CAAC,yBAAyB,EAAE,QAAQ,CAAC,CAAC;AAC3E,aAAK,qBAAqB,GAAG,IAAI,CAAC,wBAAwB,EAAE,QAAQ,CAAC,CAAC;AACtE,aAAK,qBAAqB,GAAG,IAAI,CAAC,wBAAwB,EAAE,QAAQ,GAAC,UAAU,GAAC,OAAO,GAAC,WAAW,CAAC,CAAC;AACrG,aAAK,qBAAqB,GAAG,IAAI,CAAC,wBAAwB,EAAE,QAAQ,CAAC,CAAC;AACtE,aAAK,oBAAoB,GAAG,OAAO,CAAC,uBAAuB,CAAC,CAAC;AAC7D,aAAK,wBAAwB,GAAG,OAAO,CAAC,2BAA2B,CAAC,CAAC;AACrE,aAAK,yBAAyB,GAAG,OAAO,CAAC,4BAA4B,CAAC,CAAC;AACvE,aAAK,8BAA8B,GAAG,OAAO,CAAC,iCAAiC,CAAC,CAAC;AACjF,aAAK,oBAAoB,GAAG,OAAO,CAAC,uBAAuB,CAAC,CAAC;AAG7D,aAAK,kBAAkB,GAAG;IACtB,2BAA2B;IAC3B,MAAM,EAAE,MAAM,CAAC;IACf,8BAA8B;IAC9B,SAAS,EAAE,MAAM,CAAC;IAKlB,OAAO,CAAC,EAAE,MAAM,CAAC;IACjB,2EAA2E;IAC3E,OAAO,CAAC,EAAE,MAAM,CAAC;IACjB;;;OAGG;IACH,UAAU,CAAC,EAAE,MAAM,CAAC;IAOpB,WAAW,CAAC,EAAE,OAAO,CAAC;CACzB,CAAA"}
}
declare module 'node-binance-fast/lib/v2/types/binance-ws' {
  //# sourceMappingURL=binance-ws.d.ts.map
}
declare module 'node-binance-fast/lib/v2/types/binance-ws.d.ts' {
  {"version":3,"file":"binance-ws.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v2/types/binance-ws.ts"],"names":[],"mappings":""}
}
declare module 'node-binance-fast/lib/v2/util/cached-websocket-handler' {
  import JSONWebSocket from "node-binance-fast/lib/base/util/json-websocket";
  import UserDataWebSocket from "node-binance-fast/lib/base/util/user-data-websocket";
  import WebSocketHandler from "node-binance-fast/lib/base/util/websocket-handler";
  /**
   * Caches the created websockets
   */
  export default class CachedWebsocketHander extends WebSocketHandler {
      private webSocketCache;
      private combinedWebSocketCache;
      private userDataWebSocketCache;
      constructor(baseURL: string, combinedBaseUrl: string);
      createWebSocket<T>(path: string): JSONWebSocket<T>;
      createCombinedWebSocket<T>(path: string): JSONWebSocket<T>;
      createUserDataWebSocket(path: string): UserDataWebSocket;
  }
  //# sourceMappingURL=cached-websocket-handler.d.ts.map
}
declare module 'node-binance-fast/lib/v2/util/cached-websocket-handler.d.ts' {
  {"version":3,"file":"cached-websocket-handler.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v2/util/cached-websocket-handler.ts"],"names":[],"mappings":"AAAA,OAAO,aAAa,MAAM,gCAAgC,CAAC;AAC3D,OAAO,iBAAiB,MAAM,qCAAqC,CAAC;AACpE,OAAO,gBAAgB,MAAM,mCAAmC,CAAC;AAEjE;;GAEG;AACH,MAAM,CAAC,OAAO,OAAO,qBAAsB,SAAQ,gBAAgB;IAE/D,OAAO,CAAC,cAAc,CAAmC;IACzD,OAAO,CAAC,sBAAsB,CAAmC;IACjE,OAAO,CAAC,sBAAsB,CAAmC;gBAGrD,OAAO,EAAE,MAAM,EAAE,eAAe,EAAE,MAAM;IAOpD,eAAe,CAAC,CAAC,EAAE,IAAI,EAAE,MAAM;IAM/B,uBAAuB,CAAC,CAAC,EAAE,IAAI,EAAE,MAAM;IAMvC,uBAAuB,CAAC,IAAI,EAAE,MAAM;CAKvC"}
}
declare module 'node-binance-fast/lib/v2/util/drift-request-handler' {
  import RequestHandler from "node-binance-fast/lib/base/util/request-handler";
  export default class DriftRequestHandler extends RequestHandler {
      protected apiKey: string;
      protected apiSecret: string;
      protected baseURL: string;
      protected fixDrift: () => Promise<number>;
      protected fixingDrift?: Promise<number>;
      /** True if the drift fix request has already completed */
      protected driftFixComplete: boolean;
      constructor(apiKey: string, apiSecret: string, baseURL: string, fixDrift: () => Promise<number>);
      /**
       * If a request asks for drift to be fixed when it's already being fixed, then this will return a promise
       * that resolves when the current logic for fixing drift is complete.
       * If the drift is not already being fixed, then this will create the request to do so, and cache it for any new requests to
       * wait for before sending.
       */
      protected requestDriftCorrection(): Promise<number>;
      protected applyDrift(value: {
          timestamp?: number;
      } | undefined, drift: number): {
          timestamp?: number | undefined;
      } | undefined;
      /**
       *
       */
      sendRequest<T>({ path, method, weight, params }: {
          path: string;
          method: Method;
          weight: number;
          params?: {
              timestamp?: number;
          };
      }): Promise<T>;
      /**
       *
       * Also adds a HMAC-SHA256 signature to the request.
       */
      sendSignedRequest<T>({ path, method, weight, params }: {
          path: string;
          method: Method;
          weight: number;
          params?: {
              timestamp?: number;
          };
      }): Promise<T>;
  }
  //# sourceMappingURL=drift-request-handler.d.ts.map
}
declare module 'node-binance-fast/lib/v2/util/drift-request-handler.d.ts' {
  {"version":3,"file":"drift-request-handler.d.ts","sourceRoot":"","sources":["../../../../../../../../../../Users/danielbrenot/Documents/projects/node-binance-fast/src/lib/v2/util/drift-request-handler.ts"],"names":[],"mappings":"AAAA,OAAO,cAAc,MAAM,iCAAiC,CAAC;AAI7D,MAAM,CAAC,OAAO,OAAO,mBAAoB,SAAQ,cAAc;IAOvD,SAAS,CAAC,MAAM,EAAE,MAAM;IACxB,SAAS,CAAC,SAAS,EAAE,MAAM;IAC3B,SAAS,CAAC,OAAO,EAAE,MAAM;IACzB,SAAS,CAAC,QAAQ,EAAE,MAAI,OAAO,CAAC,MAAM,CAAC;IAR3C,SAAS,CAAC,WAAW,CAAC,EAAE,OAAO,CAAC,MAAM,CAAC,CAAC;IACxC,0DAA0D;IAC1D,SAAS,CAAC,gBAAgB,EAAE,OAAO,CAAC;gBAGtB,MAAM,EAAE,MAAM,EACd,SAAS,EAAE,MAAM,EACjB,OAAO,EAAE,MAAM,EACf,QAAQ,EAAE,MAAI,OAAO,CAAC,MAAM,CAAC;IAM3C;;;;;OAKG;IACH,SAAS,CAAC,sBAAsB;IAUhC,SAAS,CAAC,UAAU,CAAC,KAAK,EAAE;QAAE,SAAS,CAAC,EAAE,MAAM,CAAA;KAAC,GAAG,SAAS,EAAE,KAAK,EAAE,MAAM;;;IAK5E;;OAEG;IACG,WAAW,CAAC,CAAC,EAAE,EAAE,IAAI,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM,EAAE,EAAE;QAAE,IAAI,EAAE,MAAM,CAAC;QAAC,MAAM,EAAE,MAAM,CAAC;QAAC,MAAM,EAAE,MAAM,CAAC;QAAC,MAAM,CAAC,EAAE;YAAE,SAAS,CAAC,EAAE,MAAM,CAAA;SAAC,CAAA;KAAE,GAAG,OAAO,CAAC,CAAC,CAAC;IAsBpJ;;;OAGG;IACG,iBAAiB,CAAC,CAAC,EAAE,EAAE,IAAI,EAAE,MAAM,EAAE,MAAM,EAAE,MAAM,EAAE,EAAE;QAAE,IAAI,EAAE,MAAM,CAAC;QAAC,MAAM,EAAE,MAAM,CAAC;QAAC,MAAM,EAAE,MAAM,CAAC;QAAC,MAAM,CAAC,EAAE;YAAE,SAAS,CAAC,EAAE,MAAM,CAAA;SAAC,CAAA;KAAE,GAAG,OAAO,CAAC,CAAC,CAAC;CAqB7J"}
}
declare module 'node-binance-fast' {
  import main = require('node-binance-fast/index.ts');
  export = main;
}