[index](../modules/Module:-index).BinanceRest

## Table of contents

### Constructors

- [constructor](./Class:-BinanceRest#constructor)

### Methods

- [aggTrades](./Class:-BinanceRest#aggtrades)
- [allBookTickers](./Class:-BinanceRest#allbooktickers)
- [allPrices](./Class:-BinanceRest#allprices)
- [bookTicker](./Class:-BinanceRest#bookticker)
- [calculateDrift](./Class:-BinanceRest#calculatedrift)
- [cancelOrder](./Class:-BinanceRest#cancelorder)
- [depth](./Class:-BinanceRest#depth)
- [endTimeSync](./Class:-BinanceRest#endtimesync)
- [exchangeInfo](./Class:-BinanceRest#exchangeinfo)
- [getBaseUrl](./Class:-BinanceRest#getbaseurl)
- [historicalTrades](./Class:-BinanceRest#historicaltrades)
- [klines](./Class:-BinanceRest#klines)
- [newOrder](./Class:-BinanceRest#neworder)
- [ping](./Class:-BinanceRest#ping)
- [queryOrder](./Class:-BinanceRest#queryorder)
- [startTimeSync](./Class:-BinanceRest#starttimesync)
- [testOrder](./Class:-BinanceRest#testorder)
- [ticker24Hr](./Class:-BinanceRest#ticker24hr)
- [tickerPrice](./Class:-BinanceRest#tickerprice)
- [time](./Class:-BinanceRest#time)
- [trades](./Class:-BinanceRest#trades)

## Constructors

### constructor

\+ **new BinanceRest**(`__namedParameters`: BinanceRestOptions): [*BinanceRest*](./Class:-BinanceRest)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | BinanceRestOptions |

**Returns:** [*BinanceRest*](./Class:-BinanceRest)

Defined in: lib/v1/binance-rest.ts:58

## Methods

### aggTrades

▸ **aggTrades**(`query`: *string* \| [*QueryAggTradesParameters*](../interfaces/Interface:-QueryAggTradesParameters), `callback?`: *undefined*): *Promise*<[*QueryAggTradesResponse*](../modules/Module:-types/responses#queryaggtradesresponse)\>

Get compressed, aggregate trades.
Trades that fill at the time, from the same taker order, with the same price will have the quantity aggregated.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#compressedaggregate-trades-list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryAggTradesParameters*](../interfaces/Interface:-QueryAggTradesParameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryAggTradesResponse*](../modules/Module:-types/responses#queryaggtradesresponse)\>

Defined in: lib/v1/binance-rest.ts:248

▸ **aggTrades**(`query`: *string* \| [*QueryAggTradesParameters*](../interfaces/Interface:-QueryAggTradesParameters), `callback`: [*AggTradesCallback*](../modules/Module:-types/callbacks#aggtradescallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryAggTradesParameters*](../interfaces/Interface:-QueryAggTradesParameters) |
| `callback` | [*AggTradesCallback*](../modules/Module:-types/callbacks#aggtradescallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:249

___

### allBookTickers

▸ **allBookTickers**(`callback?`: *undefined*): *Promise*<[*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)[]\>

Returns the best price/qty on the order book for all symbols.
This route appears on an old API document, but does not appear in the most recent set of docs.
You should probably use bookTicker() instead as it utilizes a route with a newer version.

**`deprecated`** 

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)[]\>

Defined in: lib/v1/binance-rest.ts:360

▸ **allBookTickers**(`callback`: [*AllBookTickersCallback*](../modules/Module:-types/callbacks#allbooktickerscallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | [*AllBookTickersCallback*](../modules/Module:-types/callbacks#allbooktickerscallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:361

___

### allPrices

▸ **allPrices**(`callback?`: *undefined*): *Promise*<[*QueryTickerPriceResponse*](../interfaces/Interface:-QueryTickerPriceResponse)[]\>

Returns the latest price for all symbols.
This route appears on the old API document, but does not appear in the most recent set of docs.
You should probably use tickerPrice() instead as it utilizes a route with a newer version.

**`deprecated`** 

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryTickerPriceResponse*](../interfaces/Interface:-QueryTickerPriceResponse)[]\>

Defined in: lib/v1/binance-rest.ts:377

▸ **allPrices**(`callback`: [*AllPricesCallback*](../modules/Module:-types/callbacks#allpricescallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | [*AllPricesCallback*](../modules/Module:-types/callbacks#allpricescallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:378

___

### bookTicker

▸ **bookTicker**(`query`: *string* \| [*QueryBookTickerParameters*](../interfaces/Interface:-QueryBookTickerParameters), `callback`: (`err`: Error, `value`: [*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)) => *void*): *void*

Best price/qty on the order book for a symbol.
Weight: 1 or 2
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-order-book-ticker

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryBookTickerParameters*](../interfaces/Interface:-QueryBookTickerParameters) |
| `callback` | (`err`: Error, `value`: [*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:338

▸ **bookTicker**(`query`: *Omit*<[*QueryBookTickerParameters*](../interfaces/Interface:-QueryBookTickerParameters), ``"symbol"``\>, `callback`: (`err`: Error, `value`: [*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)[]) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *Omit*<[*QueryBookTickerParameters*](../interfaces/Interface:-QueryBookTickerParameters), ``"symbol"``\> |
| `callback` | (`err`: Error, `value`: [*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)[]) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:339

▸ **bookTicker**(`query`: *string* \| [*QueryBookTickerParameters*](../interfaces/Interface:-QueryBookTickerParameters), `callback?`: *undefined*): *Promise*<[*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryBookTickerParameters*](../interfaces/Interface:-QueryBookTickerParameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)\>

Defined in: lib/v1/binance-rest.ts:340

▸ **bookTicker**(`query`: *undefined*, `callback?`: *undefined*): *Promise*<[*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)[]\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *undefined* |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryBookTickerResponse*](../interfaces/Interface:-QueryBookTickerResponse)[]\>

Defined in: lib/v1/binance-rest.ts:341

___

### calculateDrift

▸ **calculateDrift**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: lib/v1/binance-rest.ts:104

___

### cancelOrder

▸ **cancelOrder**(`query`: [*CancelOrderParameters*](../modules/Module:-types/parameters#cancelorderparameters), `callback?`: *undefined*): *Promise*<[*CancelOrderResponse*](../interfaces/Interface:-CancelOrderResponse)\>

Cancel an active order.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#cancel-order-trade

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*CancelOrderParameters*](../modules/Module:-types/parameters#cancelorderparameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*CancelOrderResponse*](../interfaces/Interface:-CancelOrderResponse)\>

Defined in: lib/v1/binance-rest.ts:452

▸ **cancelOrder**(`query`: [*CancelOrderParameters*](../modules/Module:-types/parameters#cancelorderparameters), `callback`: [*CancelOrderCallback*](../modules/Module:-types/callbacks#cancelordercallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*CancelOrderParameters*](../modules/Module:-types/parameters#cancelorderparameters) |
| `callback` | [*CancelOrderCallback*](../modules/Module:-types/callbacks#cancelordercallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:453

___

### depth

▸ **depth**(`query`: *string* \| [*QueryDepthParameters*](../interfaces/Interface:-QueryDepthParameters), `callback?`: *undefined*): *Promise*<[*QueryDepthResponse*](../interfaces/Interface:-QueryDepthResponse)\>

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
| `query` | *string* \| [*QueryDepthParameters*](../interfaces/Interface:-QueryDepthParameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryDepthResponse*](../interfaces/Interface:-QueryDepthResponse)\>

Defined in: lib/v1/binance-rest.ts:193

▸ **depth**(`query`: *string* \| [*QueryDepthParameters*](../interfaces/Interface:-QueryDepthParameters), `callback`: [*DepthCallback*](../modules/Module:-types/callbacks#depthcallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryDepthParameters*](../interfaces/Interface:-QueryDepthParameters) |
| `callback` | [*DepthCallback*](../modules/Module:-types/callbacks#depthcallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:194

___

### endTimeSync

▸ **endTimeSync**(): *void*

Clears the interval to keep the API connector synced with the
server time.

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:143

___

### exchangeInfo

▸ **exchangeInfo**(`callback?`: *undefined*): *Promise*<[*QueryAggTradesResponse*](../modules/Module:-types/responses#queryaggtradesresponse)\>

Current exchange trading rules and symbol information.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#exchange-information

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryAggTradesResponse*](../modules/Module:-types/responses#queryaggtradesresponse)\>

Defined in: lib/v1/binance-rest.ts:265

▸ **exchangeInfo**(`callback`: [*ExchangeInfoCallback*](../modules/Module:-types/callbacks#exchangeinfocallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | [*ExchangeInfoCallback*](../modules/Module:-types/callbacks#exchangeinfocallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:266

___

### getBaseUrl

▸ **getBaseUrl**(): *string*

**Returns:** *string*

Defined in: lib/v1/binance-rest.ts:82

___

### historicalTrades

▸ **historicalTrades**(`query`: *string* \| [*QueryHistoricalTradesParameters*](../interfaces/Interface:-QueryHistoricalTradesParameters), `callback?`: *undefined*): *Promise*<[*QueryHistoricalTradesResponse*](../modules/Module:-types/responses#queryhistoricaltradesresponse)\>

Get older trades.
Weight: 5
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#old-trade-lookup-market_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryHistoricalTradesParameters*](../interfaces/Interface:-QueryHistoricalTradesParameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryHistoricalTradesResponse*](../modules/Module:-types/responses#queryhistoricaltradesresponse)\>

Defined in: lib/v1/binance-rest.ts:229

▸ **historicalTrades**(`query`: *string* \| [*QueryHistoricalTradesParameters*](../interfaces/Interface:-QueryHistoricalTradesParameters), `callback`: [*HistoricalTradesCallback*](../modules/Module:-types/callbacks#historicaltradescallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryHistoricalTradesParameters*](../interfaces/Interface:-QueryHistoricalTradesParameters) |
| `callback` | [*HistoricalTradesCallback*](../modules/Module:-types/callbacks#historicaltradescallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:230

___

### klines

▸ **klines**(`query`: [*QueryKlinesParameters*](../interfaces/Interface:-QueryKlinesParameters), `callback?`: *undefined*): *Promise*<[*QueryKlinesResponse*](../modules/Module:-types/responses#queryklinesresponse)\>

Kline/candlestick bars for a symbol.
Klines are uniquely identified by their open time.
If startTime and endTime are not sent, the most recent klines are returned.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#klinecandlestick-data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*QueryKlinesParameters*](../interfaces/Interface:-QueryKlinesParameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryKlinesResponse*](../modules/Module:-types/responses#queryklinesresponse)\>

Defined in: lib/v1/binance-rest.ts:284

▸ **klines**(`query`: [*QueryKlinesParameters*](../interfaces/Interface:-QueryKlinesParameters), `callback`: [*KlinesCallback*](../modules/Module:-types/callbacks#klinescallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*QueryKlinesParameters*](../interfaces/Interface:-QueryKlinesParameters) |
| `callback` | [*KlinesCallback*](../modules/Module:-types/callbacks#klinescallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:285

___

### newOrder

▸ **newOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  }, `callback?`: *undefined*): *Promise*<[*OrderACKResponse*](../interfaces/Interface:-OrderACKResponse)\>

Send in a new order.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#account-endpoints

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*OrderACKResponse*](../interfaces/Interface:-OrderACKResponse)\>

Defined in: lib/v1/binance-rest.ts:394

▸ **newOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  }, `callback?`: *undefined*): *Promise*<[*OrderRESULTResponse*](../interfaces/Interface:-OrderRESULTResponse)\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*OrderRESULTResponse*](../interfaces/Interface:-OrderRESULTResponse)\>

Defined in: lib/v1/binance-rest.ts:395

▸ **newOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  }, `callback?`: *undefined*): *Promise*<[*OrderFULLResponse*](../interfaces/Interface:-OrderFULLResponse)\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*OrderFULLResponse*](../interfaces/Interface:-OrderFULLResponse)\>

Defined in: lib/v1/binance-rest.ts:396

▸ **newOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  }, `callback`: (`err`: Error, `value`: [*OrderACKResponse*](../interfaces/Interface:-OrderACKResponse)) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } |
| `callback` | (`err`: Error, `value`: [*OrderACKResponse*](../interfaces/Interface:-OrderACKResponse)) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:397

▸ **newOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  }, `callback`: (`err`: Error, `value`: [*OrderRESULTResponse*](../interfaces/Interface:-OrderRESULTResponse)) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } |
| `callback` | (`err`: Error, `value`: [*OrderRESULTResponse*](../interfaces/Interface:-OrderRESULTResponse)) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:398

▸ **newOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  }, `callback`: (`err`: Error, `value`: [*OrderFULLResponse*](../interfaces/Interface:-OrderFULLResponse)) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } |
| `callback` | (`err`: Error, `value`: [*OrderFULLResponse*](../interfaces/Interface:-OrderFULLResponse)) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:399

___

### ping

▸ **ping**(`callback?`: *undefined*): *Promise*<void\>

Test connectivity to the REST API.
Weight: 1
Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-connectivity

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback?` | *undefined* |

**Returns:** *Promise*<void\>

Defined in: lib/v1/binance-rest.ts:156

▸ **ping**(`callback`: [*PingCallback*](../modules/Module:-types/callbacks#pingcallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | [*PingCallback*](../modules/Module:-types/callbacks#pingcallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:157

___

### queryOrder

▸ **queryOrder**(`query`: [*QueryOrderParameters*](../modules/Module:-types/parameters#queryorderparameters), `callback?`: *undefined*): *Promise*<[*QueryOrderResponse*](../interfaces/Interface:-QueryOrderResponse)\>

Check an order's status.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#query-order-user_data

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*QueryOrderParameters*](../modules/Module:-types/parameters#queryorderparameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryOrderResponse*](../interfaces/Interface:-QueryOrderResponse)\>

Defined in: lib/v1/binance-rest.ts:435

▸ **queryOrder**(`query`: [*QueryOrderParameters*](../modules/Module:-types/parameters#queryorderparameters), `callback`: [*QueryOrderCallback*](../modules/Module:-types/callbacks#queryordercallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*QueryOrderParameters*](../modules/Module:-types/parameters#queryorderparameters) |
| `callback` | [*QueryOrderCallback*](../modules/Module:-types/callbacks#queryordercallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:436

___

### startTimeSync

▸ **startTimeSync**(`interval?`: *number*, `onRecalculateDriftCb`: (`value`: *Promise*<void\>) => *void*): *Promise*<void\>

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `interval` | *number* | 300000 |
| `onRecalculateDriftCb` | (`value`: *Promise*<void\>) => *void* | - |

**Returns:** *Promise*<void\>

Defined in: lib/v1/binance-rest.ts:118

___

### testOrder

▸ **testOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  }, `callback?`: *undefined*): *Promise*<[*OrderACKResponse*](../interfaces/Interface:-OrderACKResponse)\>

Test new order creation and signature/recvWindow long.
Creates and validates a new order but does not send it into the matching engine.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#test-new-order-trade

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*OrderACKResponse*](../interfaces/Interface:-OrderACKResponse)\>

Defined in: lib/v1/binance-rest.ts:414

▸ **testOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  }, `callback?`: *undefined*): *Promise*<[*OrderRESULTResponse*](../interfaces/Interface:-OrderRESULTResponse)\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*OrderRESULTResponse*](../interfaces/Interface:-OrderRESULTResponse)\>

Defined in: lib/v1/binance-rest.ts:415

▸ **testOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  }, `callback?`: *undefined*): *Promise*<[*OrderFULLResponse*](../interfaces/Interface:-OrderFULLResponse)\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*OrderFULLResponse*](../interfaces/Interface:-OrderFULLResponse)\>

Defined in: lib/v1/binance-rest.ts:416

▸ **testOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  }, `callback`: (`err`: Error, `value`: [*OrderACKResponse*](../interfaces/Interface:-OrderACKResponse)) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"ACK"``  } |
| `callback` | (`err`: Error, `value`: [*OrderACKResponse*](../interfaces/Interface:-OrderACKResponse)) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:417

▸ **testOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  }, `callback`: (`err`: Error, `value`: [*OrderRESULTResponse*](../interfaces/Interface:-OrderRESULTResponse)) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"RESULT"``  } |
| `callback` | (`err`: Error, `value`: [*OrderRESULTResponse*](../interfaces/Interface:-OrderRESULTResponse)) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:418

▸ **testOrder**(`query`: [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  }, `callback`: (`err`: Error, `value`: [*OrderFULLResponse*](../interfaces/Interface:-OrderFULLResponse)) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*LimitOrderParameters*](../interfaces/Interface:-LimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossOrderParameters*](../interfaces/Interface:-StopLossOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*StopLossLimitOrderParameters*](../interfaces/Interface:-StopLossLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitOrderParameters*](../interfaces/Interface:-TakeProfitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*TakeProfitLimitOrderParameters*](../interfaces/Interface:-TakeProfitLimitOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & [*LimitMakerOrderParameters*](../interfaces/Interface:-LimitMakerOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quantity`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } & { `quoteOrderQty`: *string* ; `type`: ``"MARKET"``  } & [*BaseOrderParameters*](../interfaces/Interface:-BaseOrderParameters) & { `newOrderRespType`: ``"FULL"``  } |
| `callback` | (`err`: Error, `value`: [*OrderFULLResponse*](../interfaces/Interface:-OrderFULLResponse)) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:419

___

### ticker24Hr

▸ **ticker24Hr**(`query`: [*QueryTicker24HrParameters*](../interfaces/Interface:-QueryTicker24HrParameters), `callback?`: *undefined*): *Promise*<[*QueryTicker24HrResponse*](../interfaces/Interface:-QueryTicker24HrResponse)\>

24 hour rolling window price change statistics.
Weight: 1 or 40
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#24hr-ticker-price-change-statistics

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*QueryTicker24HrParameters*](../interfaces/Interface:-QueryTicker24HrParameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryTicker24HrResponse*](../interfaces/Interface:-QueryTicker24HrResponse)\>

Defined in: lib/v1/binance-rest.ts:301

▸ **ticker24Hr**(`query?`: {}, `callback?`: *undefined*): *Promise*<[*QueryTicker24HrResponse*](../interfaces/Interface:-QueryTicker24HrResponse)[]\>

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query?` | *object* |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryTicker24HrResponse*](../interfaces/Interface:-QueryTicker24HrResponse)[]\>

Defined in: lib/v1/binance-rest.ts:302

▸ **ticker24Hr**(`query`: [*QueryTicker24HrParameters*](../interfaces/Interface:-QueryTicker24HrParameters), `callback`: (`err`: Error, `value`: [*QueryTicker24HrResponse*](../interfaces/Interface:-QueryTicker24HrResponse)) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*QueryTicker24HrParameters*](../interfaces/Interface:-QueryTicker24HrParameters) |
| `callback` | (`err`: Error, `value`: [*QueryTicker24HrResponse*](../interfaces/Interface:-QueryTicker24HrResponse)) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:303

▸ **ticker24Hr**(`query`: {}, `callback`: (`err`: Error, `value`: [*QueryTicker24HrResponse*](../interfaces/Interface:-QueryTicker24HrResponse)[]) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *object* |
| `callback` | (`err`: Error, `value`: [*QueryTicker24HrResponse*](../interfaces/Interface:-QueryTicker24HrResponse)[]) => *void* |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:304

___

### tickerPrice

▸ **tickerPrice**(`query`: [*QueryTickerPriceParameters*](../interfaces/Interface:-QueryTickerPriceParameters), `callback?`: *undefined*): *Promise*<[*QueryTickerPriceResponse*](../interfaces/Interface:-QueryTickerPriceResponse)\>

Latest price for a symbol.
Weight: 1 or 2
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#symbol-price-ticker

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*QueryTickerPriceParameters*](../interfaces/Interface:-QueryTickerPriceParameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryTickerPriceResponse*](../interfaces/Interface:-QueryTickerPriceResponse)\>

Defined in: lib/v1/binance-rest.ts:321

▸ **tickerPrice**(`query`: [*QueryTickerPriceParameters*](../interfaces/Interface:-QueryTickerPriceParameters), `callback`: [*TickerPriceCallback*](../modules/Module:-types/callbacks#tickerpricecallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | [*QueryTickerPriceParameters*](../interfaces/Interface:-QueryTickerPriceParameters) |
| `callback` | [*TickerPriceCallback*](../modules/Module:-types/callbacks#tickerpricecallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:322

___

### time

▸ **time**(`callback?`: *undefined*): *Promise*<[*QueryTimeResponse*](../interfaces/Interface:-QueryTimeResponse)\>

Test connectivity to the REST API and get the current server time.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#check-server-time

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryTimeResponse*](../interfaces/Interface:-QueryTimeResponse)\>

Defined in: lib/v1/binance-rest.ts:172

▸ **time**(`callback`: [*TimeCallback*](../modules/Module:-types/callbacks#timecallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | [*TimeCallback*](../modules/Module:-types/callbacks#timecallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:173

___

### trades

▸ **trades**(`query`: *string* \| [*QueryTradesParameters*](../interfaces/Interface:-QueryTradesParameters), `callback?`: *undefined*): *Promise*<[*QueryTradesResponse*](../modules/Module:-types/responses#querytradesresponse)\>

Get recent trades.
Weight: 1
https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md#recent-trades-list

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryTradesParameters*](../interfaces/Interface:-QueryTradesParameters) |
| `callback?` | *undefined* |

**Returns:** *Promise*<[*QueryTradesResponse*](../modules/Module:-types/responses#querytradesresponse)\>

Defined in: lib/v1/binance-rest.ts:211

▸ **trades**(`query`: *string* \| [*QueryTradesParameters*](../interfaces/Interface:-QueryTradesParameters), `callback`: [*TradesCallback*](../modules/Module:-types/callbacks#tradescallback)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `query` | *string* \| [*QueryTradesParameters*](../interfaces/Interface:-QueryTradesParameters) |
| `callback` | [*TradesCallback*](../modules/Module:-types/callbacks#tradescallback) |

**Returns:** *void*

Defined in: lib/v1/binance-rest.ts:212
