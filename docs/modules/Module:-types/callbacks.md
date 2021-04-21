## Table of contents

### Type aliases

- [AggTradesCallback](./callbacks#aggtradescallback)
- [AllBookTickersCallback](./callbacks#allbooktickerscallback)
- [AllBookTickersCallbackify](./callbacks#allbooktickerscallbackify)
- [AllPricesCallback](./callbacks#allpricescallback)
- [BookTickerCallback](./callbacks#booktickercallback)
- [BookTickerCallbackify](./callbacks#booktickercallbackify)
- [CancelOrderCallback](./callbacks#cancelordercallback)
- [DepthCallback](./callbacks#depthcallback)
- [ExchangeInfoCallback](./callbacks#exchangeinfocallback)
- [HistoricalTradesCallback](./callbacks#historicaltradescallback)
- [KlinesCallback](./callbacks#klinescallback)
- [PingCallback](./callbacks#pingcallback)
- [QueryOrderCallback](./callbacks#queryordercallback)
- [Ticker24HrCallback](./callbacks#ticker24hrcallback)
- [TickerPriceCallback](./callbacks#tickerpricecallback)
- [TimeCallback](./callbacks#timecallback)
- [TradesCallback](./callbacks#tradescallback)

## Type aliases

### AggTradesCallback

Ƭ **AggTradesCallback**: (`err`: Error, `value`: [*QueryAggTradesResponse*](./responses#queryaggtradesresponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryAggTradesResponse*](./responses#queryaggtradesresponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryAggTradesResponse*](./responses#queryaggtradesresponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:7

___

### AllBookTickersCallback

Ƭ **AllBookTickersCallback**: (`err`: Error, `value`: [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[]) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[] |

**Returns:** *void*

Defined in: types/callbacks.ts:15

___

### AllBookTickersCallbackify

Ƭ **AllBookTickersCallbackify**: (`arg1`: [*QueryBookTickerParameters*](../../interfaces/Interface:-QueryBookTickerParameters) \| {}, `callback`: (`err`: Error, `result`: [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[]) => *void*) => *void*

#### Type declaration:

▸ (`arg1`: [*QueryBookTickerParameters*](../../interfaces/Interface:-QueryBookTickerParameters) \| {}, `callback`: (`err`: Error, `result`: [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[]) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `arg1` | [*QueryBookTickerParameters*](../../interfaces/Interface:-QueryBookTickerParameters) \| {} |
| `callback` | (`err`: Error, `result`: [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[]) => *void* |

**Returns:** *void*

Defined in: types/callbacks.ts:14

___

### AllPricesCallback

Ƭ **AllPricesCallback**: (`err`: Error, `value`: [*QueryTickerPriceResponse*](../../interfaces/Interface:-QueryTickerPriceResponse)[]) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryTickerPriceResponse*](../../interfaces/Interface:-QueryTickerPriceResponse)[]): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryTickerPriceResponse*](../../interfaces/Interface:-QueryTickerPriceResponse)[] |

**Returns:** *void*

Defined in: types/callbacks.ts:16

___

### BookTickerCallback

Ƭ **BookTickerCallback**: (`err`: Error, `value`: *any*) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: *any*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | *any* |

**Returns:** *void*

Defined in: types/callbacks.ts:13

___

### BookTickerCallbackify

Ƭ **BookTickerCallbackify**: (`arg1`: [*QueryBookTickerParameters*](../../interfaces/Interface:-QueryBookTickerParameters) \| {}, `callback`: (`err`: Error, `result`: [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[]) => *void*) => *void*

#### Type declaration:

▸ (`arg1`: [*QueryBookTickerParameters*](../../interfaces/Interface:-QueryBookTickerParameters) \| {}, `callback`: (`err`: Error, `result`: [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[]) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `arg1` | [*QueryBookTickerParameters*](../../interfaces/Interface:-QueryBookTickerParameters) \| {} |
| `callback` | (`err`: Error, `result`: [*QueryBookTickerResponse*](../../interfaces/Interface:-QueryBookTickerResponse)[]) => *void* |

**Returns:** *void*

Defined in: types/callbacks.ts:12

___

### CancelOrderCallback

Ƭ **CancelOrderCallback**: (`err`: Error, `value`: [*CancelOrderResponse*](../../interfaces/Interface:-CancelOrderResponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*CancelOrderResponse*](../../interfaces/Interface:-CancelOrderResponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*CancelOrderResponse*](../../interfaces/Interface:-CancelOrderResponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:18

___

### DepthCallback

Ƭ **DepthCallback**: (`err`: Error, `value`: [*QueryDepthResponse*](../../interfaces/Interface:-QueryDepthResponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryDepthResponse*](../../interfaces/Interface:-QueryDepthResponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryDepthResponse*](../../interfaces/Interface:-QueryDepthResponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:4

___

### ExchangeInfoCallback

Ƭ **ExchangeInfoCallback**: (`err`: Error, `value`: [*QueryExchangeInfoResponse*](../../interfaces/Interface:-QueryExchangeInfoResponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryExchangeInfoResponse*](../../interfaces/Interface:-QueryExchangeInfoResponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryExchangeInfoResponse*](../../interfaces/Interface:-QueryExchangeInfoResponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:8

___

### HistoricalTradesCallback

Ƭ **HistoricalTradesCallback**: (`err`: Error, `value`: [*QueryHistoricalTradesResponse*](./responses#queryhistoricaltradesresponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryHistoricalTradesResponse*](./responses#queryhistoricaltradesresponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryHistoricalTradesResponse*](./responses#queryhistoricaltradesresponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:6

___

### KlinesCallback

Ƭ **KlinesCallback**: (`err`: Error, `value`: [*QueryKlinesResponse*](./responses#queryklinesresponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryKlinesResponse*](./responses#queryklinesresponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryKlinesResponse*](./responses#queryklinesresponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:9

___

### PingCallback

Ƭ **PingCallback**: (`err`: Error) => *void*

#### Type declaration:

▸ (`err`: Error): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |

**Returns:** *void*

Defined in: types/callbacks.ts:2

___

### QueryOrderCallback

Ƭ **QueryOrderCallback**: (`err`: Error, `value`: [*QueryOrderResponse*](../../interfaces/Interface:-QueryOrderResponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryOrderResponse*](../../interfaces/Interface:-QueryOrderResponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryOrderResponse*](../../interfaces/Interface:-QueryOrderResponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:17

___

### Ticker24HrCallback

Ƭ **Ticker24HrCallback**: (`err`: Error, `value`: *any*) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: *any*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | *any* |

**Returns:** *void*

Defined in: types/callbacks.ts:10

___

### TickerPriceCallback

Ƭ **TickerPriceCallback**: (`err`: Error, `value`: *any*) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: *any*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | *any* |

**Returns:** *void*

Defined in: types/callbacks.ts:11

___

### TimeCallback

Ƭ **TimeCallback**: (`err`: Error, `value`: [*QueryTimeResponse*](../../interfaces/Interface:-QueryTimeResponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryTimeResponse*](../../interfaces/Interface:-QueryTimeResponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryTimeResponse*](../../interfaces/Interface:-QueryTimeResponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:3

___

### TradesCallback

Ƭ **TradesCallback**: (`err`: Error, `value`: [*QueryTradesResponse*](./responses#querytradesresponse)) => *void*

#### Type declaration:

▸ (`err`: Error, `value`: [*QueryTradesResponse*](./responses#querytradesresponse)): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `value` | [*QueryTradesResponse*](./responses#querytradesresponse) |

**Returns:** *void*

Defined in: types/callbacks.ts:5
