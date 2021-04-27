[v2](../modules/Namespace:-v2).BinanceREST

API object for accessing Binance REST API

Data is returned in ascending order. Oldest first, newest last.
All time and timestamp related fields are in milliseconds.
Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md

## Table of contents

### Constructors

- [constructor](./Class:-BinanceREST#constructor)

### Methods

- [cancelOCOOrder](./Class:-BinanceREST#cancelocoorder)
- [cancelOpenOrders](./Class:-BinanceREST#cancelopenorders)
- [cancelOrder](./Class:-BinanceREST#cancelorder)
- [createOCOOrder](./Class:-BinanceREST#createocoorder)
- [createOrder](./Class:-BinanceREST#createorder)
- [queryAccountInformation](./Class:-BinanceREST#queryaccountinformation)
- [queryAggTrades](./Class:-BinanceREST#queryaggtrades)
- [queryAllOCOOrders](./Class:-BinanceREST#queryallocoorders)
- [queryAllOrders](./Class:-BinanceREST#queryallorders)
- [queryAvgPrice](./Class:-BinanceREST#queryavgprice)
- [queryBookTicker](./Class:-BinanceREST#querybookticker)
- [queryDepth](./Class:-BinanceREST#querydepth)
- [queryExchangeInfo](./Class:-BinanceREST#queryexchangeinfo)
- [queryHistoricalTrades](./Class:-BinanceREST#queryhistoricaltrades)
- [queryKlines](./Class:-BinanceREST#queryklines)
- [queryMyTrades](./Class:-BinanceREST#querymytrades)
- [queryOCOOrder](./Class:-BinanceREST#queryocoorder)
- [queryOpenOCOOrders](./Class:-BinanceREST#queryopenocoorders)
- [queryOpenOrders](./Class:-BinanceREST#queryopenorders)
- [queryOrder](./Class:-BinanceREST#queryorder)
- [queryPing](./Class:-BinanceREST#queryping)
- [queryTicker24hr](./Class:-BinanceREST#queryticker24hr)
- [queryTickerPrice](./Class:-BinanceREST#querytickerprice)
- [queryTime](./Class:-BinanceREST#querytime)
- [queryTrades](./Class:-BinanceREST#querytrades)
- [testOrder](./Class:-BinanceREST#testorder)

## Constructors

### constructor

\+ **new BinanceREST**(`handler`: *default*): [*BinanceREST*](./Class:-BinanceREST)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `handler` | *default* |

**Returns:** [*BinanceREST*](./Class:-BinanceREST)

Defined in: lib/base/rest-api.ts:11

## Methods

### cancelOCOOrder

▸ **cancelOCOOrder**(`params`: CancelOCOOrderParameters): *Promise*<CancelOCOOrderResponse\>

Cancel an entire Order List.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-oco-trade

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | CancelOCOOrderParameters |

**Returns:** *Promise*<CancelOCOOrderResponse\>

Defined in: lib/base/rest-api.ts:276

___

### cancelOpenOrders

▸ **cancelOpenOrders**(`params`: CancelOpenOrdersParameters): *Promise*<CancelOpenOrdersResponse\>

Cancels all active orders on a symbol. This includes OCO orders.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-all-open-orders-on-a-symbol-trade

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | CancelOpenOrdersParameters |

**Returns:** *Promise*<CancelOpenOrdersResponse\>

Defined in: lib/base/rest-api.ts:229

___

### cancelOrder

▸ **cancelOrder**(`params`: CancelOrderParameters): *Promise*<CancelOrderResponse\>

Cancel an active order.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | CancelOrderParameters |

**Returns:** *Promise*<CancelOrderResponse\>

Defined in: lib/base/rest-api.ts:218

___

### createOCOOrder

▸ **createOCOOrder**(`params`: CreateOCOOrderParameters): *Promise*<CreateOCOOrderResponse\>

Send in a new OCO.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#new-oco-trade

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | CreateOCOOrderParameters |

**Returns:** *Promise*<CreateOCOOrderResponse\>

Defined in: lib/base/rest-api.ts:265

___

### createOrder

▸ **createOrder**(`params`: LimitOrderParameters & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"ACK"``  } & StopLossOrderParameters & { `newOrderRespType`: ``"ACK"``  } & StopLossLimitOrderParameters & { `newOrderRespType`: ``"ACK"``  } & TakeProfitOrderParameters & { `newOrderRespType`: ``"ACK"``  } & TakeProfitLimitOrderParameters & { `newOrderRespType`: ``"ACK"``  } & LimitMakerOrderParameters & { `newOrderRespType`: ``"ACK"``  }): *Promise*<OrderACKResponse\>

Send in a new order.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | LimitOrderParameters & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"ACK"``  } & StopLossOrderParameters & { `newOrderRespType`: ``"ACK"``  } & StopLossLimitOrderParameters & { `newOrderRespType`: ``"ACK"``  } & TakeProfitOrderParameters & { `newOrderRespType`: ``"ACK"``  } & TakeProfitLimitOrderParameters & { `newOrderRespType`: ``"ACK"``  } & LimitMakerOrderParameters & { `newOrderRespType`: ``"ACK"``  } |

**Returns:** *Promise*<OrderACKResponse\>

Defined in: lib/base/rest-api.ts:181

▸ **createOrder**(`params`: LimitOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & StopLossOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & StopLossLimitOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & TakeProfitOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & TakeProfitLimitOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & LimitMakerOrderParameters & { `newOrderRespType`: ``"RESULT"``  }): *Promise*<OrderRESULTResponse\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | LimitOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & StopLossOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & StopLossLimitOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & TakeProfitOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & TakeProfitLimitOrderParameters & { `newOrderRespType`: ``"RESULT"``  } & LimitMakerOrderParameters & { `newOrderRespType`: ``"RESULT"``  } |

**Returns:** *Promise*<OrderRESULTResponse\>

Defined in: lib/base/rest-api.ts:182

▸ **createOrder**(`params`: LimitOrderParameters & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"FULL"``  } & StopLossOrderParameters & { `newOrderRespType`: ``"FULL"``  } & StopLossLimitOrderParameters & { `newOrderRespType`: ``"FULL"``  } & TakeProfitOrderParameters & { `newOrderRespType`: ``"FULL"``  } & TakeProfitLimitOrderParameters & { `newOrderRespType`: ``"FULL"``  } & LimitMakerOrderParameters & { `newOrderRespType`: ``"FULL"``  }): *Promise*<OrderFULLResponse\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | LimitOrderParameters & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & BaseOrderParameters & { `newOrderRespType`: ``"FULL"``  } & StopLossOrderParameters & { `newOrderRespType`: ``"FULL"``  } & StopLossLimitOrderParameters & { `newOrderRespType`: ``"FULL"``  } & TakeProfitOrderParameters & { `newOrderRespType`: ``"FULL"``  } & TakeProfitLimitOrderParameters & { `newOrderRespType`: ``"FULL"``  } & LimitMakerOrderParameters & { `newOrderRespType`: ``"FULL"``  } |

**Returns:** *Promise*<OrderFULLResponse\>

Defined in: lib/base/rest-api.ts:183

___

### queryAccountInformation

▸ **queryAccountInformation**(`params`: QueryAccountInformationParameters): *Promise*<QueryAccountInformationResponse\>

Get current account information.
Weight: 5
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-information-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryAccountInformationParameters |

**Returns:** *Promise*<QueryAccountInformationResponse\>

Defined in: lib/base/rest-api.ts:320

___

### queryAggTrades

▸ **queryAggTrades**(`params`: QueryAggTradesParameters): *Promise*<QueryAggTradesResponse\>

Get compressed, aggregate trades.
Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryAggTradesParameters |

**Returns:** *Promise*<QueryAggTradesResponse\>

Defined in: lib/base/rest-api.ts:92

___

### queryAllOCOOrders

▸ **queryAllOCOOrders**(`params`: QueryAllOCOOrdersParameters): *Promise*<QueryAllOCOOrdersResponse\>

Retrieves all OCO based on provided optional parameters.
Weight: 10
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-all-oco-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryAllOCOOrdersParameters |

**Returns:** *Promise*<QueryAllOCOOrdersResponse\>

Defined in: lib/base/rest-api.ts:298

___

### queryAllOrders

▸ **queryAllOrders**(`params`: QueryAllOrdersParameters): *Promise*<QueryAllOrdersResponse\>

Get all account orders; active, canceled, or filled.
Weight: 5 with symbol
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#all-orders-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryAllOrdersParameters |

**Returns:** *Promise*<QueryAllOrdersResponse\>

Defined in: lib/base/rest-api.ts:253

___

### queryAvgPrice

▸ **queryAvgPrice**(`params`: { `symbol`: *string*  }): *Promise*<AveragePriceResponse\>

Current average price for a symbol.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-average-price

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | *object* |
| `params.symbol` | *string* |

**Returns:** *Promise*<AveragePriceResponse\>

Defined in: lib/base/rest-api.ts:116

___

### queryBookTicker

▸ **queryBookTicker**(`params`: *Omit*<QueryBookTickerParameters, ``"symbol"``\>): *Promise*<QueryBookTickerResponse[]\>

Best price/qty on the order book for a symbol.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | *Omit*<QueryBookTickerParameters, ``"symbol"``\> |

**Returns:** *Promise*<QueryBookTickerResponse[]\>

Defined in: lib/base/rest-api.ts:163

▸ **queryBookTicker**(`params`: QueryBookTickerParameters): *Promise*<QueryBookTickerResponse\>

Best price/qty on the order book for all symbols.
Weight: 2
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryBookTickerParameters |

**Returns:** *Promise*<QueryBookTickerResponse\>

Defined in: lib/base/rest-api.ts:169

___

### queryDepth

▸ **queryDepth**(`params`: QueryDepthParameters): *Promise*<QueryDepthResponse\>

Gets the order book depth.
Weight: Adjusted based on the limit:
5-100: 1
500:   5
1000   10
5000   50
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#order-book

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryDepthParameters |

**Returns:** *Promise*<QueryDepthResponse\>

Defined in: lib/base/rest-api.ts:58

___

### queryExchangeInfo

▸ **queryExchangeInfo**(): *Promise*<QueryExchangeInfoResponse\>

Current exchange trading rules and symbol information.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information

**Returns:** *Promise*<QueryExchangeInfoResponse\>

Defined in: lib/base/rest-api.ts:43

___

### queryHistoricalTrades

▸ **queryHistoricalTrades**(`params`: QueryHistoricalTradesParameters): *Promise*<QueryHistoricalTradesResponse\>

Get older trades.
Weight: 5
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryHistoricalTradesParameters |

**Returns:** *Promise*<QueryHistoricalTradesResponse\>

Defined in: lib/base/rest-api.ts:80

___

### queryKlines

▸ **queryKlines**(`params`: QueryKlinesParameters): *Promise*<QueryKlinesResponse\>

Kline/candlestick bars for a symbol.
Klines are uniquely identified by their open time.
If startTime and endTime are not sent, the most recent klines are returned.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryKlinesParameters |

**Returns:** *Promise*<QueryKlinesResponse\>

Defined in: lib/base/rest-api.ts:105

___

### queryMyTrades

▸ **queryMyTrades**(`params`: QueryMyTradesParameters): *Promise*<QueryMyTradesResponse\>

Get trades for a specific account and symbol.
Weight: 5 with symbol
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-trade-list-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryMyTradesParameters |

**Returns:** *Promise*<QueryMyTradesResponse\>

Defined in: lib/base/rest-api.ts:331

___

### queryOCOOrder

▸ **queryOCOOrder**(`params`: QueryOCOOrderParameters): *Promise*<QueryOCOOrderResponse\>

Retrieves a specific OCO based on provided optional parameters.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-oco-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryOCOOrderParameters |

**Returns:** *Promise*<QueryOCOOrderResponse\>

Defined in: lib/base/rest-api.ts:287

___

### queryOpenOCOOrders

▸ **queryOpenOCOOrders**(`params`: QueryOpenOCOOrdersParameters): *Promise*<QueryOpenOCOOrdersResponse\>

Retrieves all open OCO based on provided optional parameters.
Weight: 2
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-open-oco-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryOpenOCOOrdersParameters |

**Returns:** *Promise*<QueryOpenOCOOrdersResponse\>

Defined in: lib/base/rest-api.ts:309

___

### queryOpenOrders

▸ **queryOpenOrders**(`params`: *Omit*<QueryOpenOrdersParameters, ``"symbol"``\>): *Promise*<QueryOpenOrdersResponse[]\>

Get all open orders on a symbol. Careful when accessing this with no symbol.
Weight: 1 for a single symbol; 40 when the symbol parameter is omitted.
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#current-open-orders-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | *Omit*<QueryOpenOrdersParameters, ``"symbol"``\> |

**Returns:** *Promise*<QueryOpenOrdersResponse[]\>

Defined in: lib/base/rest-api.ts:240

▸ **queryOpenOrders**(`params`: QueryOpenOrdersParameters): *Promise*<QueryOpenOrdersResponse\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryOpenOrdersParameters |

**Returns:** *Promise*<QueryOpenOrdersResponse\>

Defined in: lib/base/rest-api.ts:241

___

### queryOrder

▸ **queryOrder**(`params`: QueryOrderParameters): *Promise*<QueryOrderResponse\>

Check an order's status.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryOrderParameters |

**Returns:** *Promise*<QueryOrderResponse\>

Defined in: lib/base/rest-api.ts:207

___

### queryPing

▸ **queryPing**(): *Promise*<void\>

Test connectivity to the REST API.
Weight: 1
Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity

**Returns:** *Promise*<void\>

Defined in: lib/base/rest-api.ts:21

___

### queryTicker24hr

▸ **queryTicker24hr**(`params`: QueryTicker24HrParameters): *Promise*<QueryTicker24HrResponse\>

24 hour rolling window price change statistics.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryTicker24HrParameters |

**Returns:** *Promise*<QueryTicker24HrResponse\>

Defined in: lib/base/rest-api.ts:127

▸ **queryTicker24hr**(`params`: *Omit*<QueryTicker24HrParameters, ``"symbol"``\>): *Promise*<QueryTicker24HrResponse[]\>

24 hour rolling window price change statistics.
Weight: 40
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | *Omit*<QueryTicker24HrParameters, ``"symbol"``\> |

**Returns:** *Promise*<QueryTicker24HrResponse[]\>

Defined in: lib/base/rest-api.ts:133

___

### queryTickerPrice

▸ **queryTickerPrice**(`params`: QueryTickerPriceParameters): *Promise*<QueryTickerPriceResponse\>

Latest price for a symbol.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryTickerPriceParameters |

**Returns:** *Promise*<QueryTickerPriceResponse\>

Defined in: lib/base/rest-api.ts:145

▸ **queryTickerPrice**(`params`: *Omit*<QueryTickerPriceParameters, ``"symbol"``\>): *Promise*<QueryTickerPriceResponse[]\>

Latest price for all symbols.
Weight: 2
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | *Omit*<QueryTickerPriceParameters, ``"symbol"``\> |

**Returns:** *Promise*<QueryTickerPriceResponse[]\>

Defined in: lib/base/rest-api.ts:151

___

### queryTime

▸ **queryTime**(): *Promise*<QueryTimeResponse\>

Test connectivity to the REST API and get the current server time.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time

**Returns:** *Promise*<QueryTimeResponse\>

Defined in: lib/base/rest-api.ts:32

___

### queryTrades

▸ **queryTrades**(`params`: QueryTradesParameters): *Promise*<QueryTradesResponse\>

Get recent trades.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | QueryTradesParameters |

**Returns:** *Promise*<QueryTradesResponse\>

Defined in: lib/base/rest-api.ts:69

___

### testOrder

▸ **testOrder**(`params`: CreateOrderParameters): *Promise*<void\>

Test new order creation and signature/recvWindow long.
Creates and validates a new order but does not send it into the matching engine.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade

#### Parameters:

| Name | Type |
| :------ | :------ |
| `params` | CreateOrderParameters |

**Returns:** *Promise*<void\>

Defined in: lib/base/rest-api.ts:196
