[v2](../modules/Namespace:-v2).BinanceWS

API object for accessing binance Websocket stream API.
Each method returns a custom websocket wrapper that
automatically parses messages returned from the server and
emits JSON to all listeners.
The websockets automatically close upon all of the listeners
being closed.

## Table of contents

### Constructors

- [constructor](./Class:-BinanceWS#constructor)

### Methods

- [onAggTrade](./Class:-BinanceWS#onaggtrade)
- [onAllBookTickers](./Class:-BinanceWS#onallbooktickers)
- [onAllMiniTickers](./Class:-BinanceWS#onallminitickers)
- [onAllTickers](./Class:-BinanceWS#onalltickers)
- [onBookTicker](./Class:-BinanceWS#onbookticker)
- [onCombinedStream](./Class:-BinanceWS#oncombinedstream)
- [onDepthLevelUpdate](./Class:-BinanceWS#ondepthlevelupdate)
- [onDepthUpdate](./Class:-BinanceWS#ondepthupdate)
- [onKline](./Class:-BinanceWS#onkline)
- [onMiniTicker](./Class:-BinanceWS#onminiticker)
- [onTicker](./Class:-BinanceWS#onticker)
- [onTrade](./Class:-BinanceWS#ontrade)

## Constructors

### constructor

\+ **new BinanceWS**(`handler`: *default*): [*BinanceWS*](./Class:-BinanceWS)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `handler` | *default* |

**Returns:** [*BinanceWS*](./Class:-BinanceWS)

Defined in: [lib/base/websocket-stream-api.ts:11](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L11)

## Methods

### onAggTrade

▸ **onAggTrade**(`symbol`: *string*): *JSONWebSocket*<AggregateTradePayload\>

The Aggregate Trade Streams push trade information that is aggregated for a single taker order.

Update Speed: Real-time

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#aggregate-trade-streams

#### Parameters:

| Name | Type |
| :------ | :------ |
| `symbol` | *string* |

**Returns:** *JSONWebSocket*<AggregateTradePayload\>

Defined in: [lib/base/websocket-stream-api.ts:24](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L24)

___

### onAllBookTickers

▸ **onAllBookTickers**(): *JSONWebSocket*<AllBookTickersPayload\>

Pushes any update to the best bid or ask's price or quantity in real-time for all symbols.

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-book-tickers-stream

**Returns:** *JSONWebSocket*<AllBookTickersPayload\>

Defined in: [lib/base/websocket-stream-api.ts:132](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L132)

___

### onAllMiniTickers

▸ **onAllMiniTickers**(): *JSONWebSocket*<AllMiniTickersPayload\>

24hr rolling window mini-ticker statistics for all symbols that changed in an array.
These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
Note that only tickers that have changed will be present in the array.

Update Speed: 1000ms

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-market-mini-tickers-stream

**Returns:** *JSONWebSocket*<AllMiniTickersPayload\>

Defined in: [lib/base/websocket-stream-api.ts:83](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L83)

___

### onAllTickers

▸ **onAllTickers**(): *JSONWebSocket*<AllTickersPayload\>

24hr rolling window ticker statistics for all symbols that changed in an array.
These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.
Note that only tickers that have changed will be present in the array.

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#all-market-tickers-stream

**Returns:** *JSONWebSocket*<AllTickersPayload\>

Defined in: [lib/base/websocket-stream-api.ts:109](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L109)

___

### onBookTicker

▸ **onBookTicker**(`symbol`: *string*): *JSONWebSocket*<BookTickerPayload\>

Pushes any update to the best bid or ask's price or quantity in real-time for a specified symbol.

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-book-ticker-streams

#### Parameters:

| Name | Type |
| :------ | :------ |
| `symbol` | *string* |

**Returns:** *JSONWebSocket*<BookTickerPayload\>

Defined in: [lib/base/websocket-stream-api.ts:121](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L121)

___

### onCombinedStream

▸ **onCombinedStream**(`streams`: *string*[]): *JSONWebSocket*<{}\>

Multiple streams combined into a single stream

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#general-wss-information

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `streams` | *string*[] | list of stream names to stream |

**Returns:** *JSONWebSocket*<{}\>

Defined in: [lib/base/websocket-stream-api.ts:170](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L170)

___

### onDepthLevelUpdate

▸ **onDepthLevelUpdate**(`symbol`: *string*, `level`: DepthLevel, `updateSpeed?`: ``"100ms"``): *JSONWebSocket*<DepthLevelUpdatePayload\>

Top <levels> bids and asks, pushed every second.
Valid levels are 5, 10, or 20.

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#partial-book-depth-streams

#### Parameters:

| Name | Type |
| :------ | :------ |
| `symbol` | *string* |
| `level` | DepthLevel |
| `updateSpeed?` | ``"100ms"`` |

**Returns:** *JSONWebSocket*<DepthLevelUpdatePayload\>

Defined in: [lib/base/websocket-stream-api.ts:146](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L146)

___

### onDepthUpdate

▸ **onDepthUpdate**(`symbol`: *string*, `updateSpeed?`: ``"100ms"``): *JSONWebSocket*<DepthUpdatePayload\>

Order book price and quantity depth updates used to locally manage an order book.

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#diff-depth-stream

#### Parameters:

| Name | Type |
| :------ | :------ |
| `symbol` | *string* |
| `updateSpeed?` | ``"100ms"`` |

**Returns:** *JSONWebSocket*<DepthUpdatePayload\>

Defined in: [lib/base/websocket-stream-api.ts:158](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L158)

___

### onKline

▸ **onKline**(`symbol`: *string*, `interval`: ChartInterval): *JSONWebSocket*<KlinePayload\>

The Kline/Candlestick Stream push updates to the current klines/candlestick every second.

Update Speed: 2000ms

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#klinecandlestick-streams

#### Parameters:

| Name | Type |
| :------ | :------ |
| `symbol` | *string* |
| `interval` | ChartInterval |

**Returns:** *JSONWebSocket*<KlinePayload\>

Defined in: [lib/base/websocket-stream-api.ts:53](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L53)

___

### onMiniTicker

▸ **onMiniTicker**(`symbol`: *string*): *JSONWebSocket*<MiniTickerPayload\>

24hr rolling window mini-ticker statistics.
These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.

Update Speed: 1000ms

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-mini-ticker-stream

#### Parameters:

| Name | Type |
| :------ | :------ |
| `symbol` | *string* |

**Returns:** *JSONWebSocket*<MiniTickerPayload\>

Defined in: [lib/base/websocket-stream-api.ts:68](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L68)

___

### onTicker

▸ **onTicker**(`symbol`: *string*): *JSONWebSocket*<TickerPayload\>

24hr rolling window ticker statistics for a single symbol.
These are NOT the statistics of the UTC day, but a 24hr rolling window for the previous 24hrs.

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#individual-symbol-ticker-streams

#### Parameters:

| Name | Type |
| :------ | :------ |
| `symbol` | *string* |

**Returns:** *JSONWebSocket*<TickerPayload\>

Defined in: [lib/base/websocket-stream-api.ts:96](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L96)

___

### onTrade

▸ **onTrade**(`symbol`: *string*): *JSONWebSocket*<TradePayload\>

The Trade Streams push raw trade information; each trade has a unique buyer and seller.

Update Speed: Real-time

Reference:
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#trade-streams

#### Parameters:

| Name | Type |
| :------ | :------ |
| `symbol` | *string* |

**Returns:** *JSONWebSocket*<TradePayload\>

Defined in: [lib/base/websocket-stream-api.ts:38](https://github.com/daniel-brenot/node-binance-fast/blob/67759e3/src/lib/base/websocket-stream-api.ts#L38)
