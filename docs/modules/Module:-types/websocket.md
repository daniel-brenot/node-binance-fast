## Table of contents

### Type aliases

- [AggregateTradePayload](./websocket#aggregatetradepayload)
- [KlinePayload](./websocket#klinepayload)
- [TradePayload](./websocket#tradepayload)

## Type aliases

### AggregateTradePayload

Ƭ **AggregateTradePayload**: *object*

#### Type declaration:

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | *number* | Event Time |
| `M` | *boolean* | Ignore |
| `T` | *number* | Trade time |
| `a` | *number* | Aggregate trade ID |
| `e` | ``"aggTrade"`` | Event Type |
| `f` | *number* | First trade ID |
| `l` | *number* | Last trade ID |
| `m` | *boolean* | Is the buyer the market maker? |
| `p` | *string* | Price |
| `q` | *string* | Quantity |
| `s` | *string* | Symbol |

Defined in: types/websocket.ts:1

___

### KlinePayload

Ƭ **KlinePayload**: *object*

#### Type declaration:

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | *number* | Event time |
| `e` | ``"kline"`` | Event type |
| `k` | *object* | - |
| `k.B` | *string* | Ignore |
| `k.L` | *number* | Last trade ID |
| `k.Q` | *string* | Taker buy quote asset volume |
| `k.T` | *number* | Kline close time |
| `k.V` | *string* | Taker buy base asset volume |
| `k.c` | *string* | Close price |
| `k.f` | *number* | First trafe ID |
| `k.h` | *string* | High price |
| `k.i` | [*ChartInterval*](./enums#chartinterval) | Interval |
| `k.l` | *string* | Low price |
| `k.n` | *number* | Number of trades |
| `k.o` | *string* | Open price |
| `k.q` | *string* | Quote asset volume |
| `k.s` | *string* | Symbol |
| `k.t` | *number* | Kline start time |
| `k.v` | *string* | Base asset volume |
| `k.x` | *boolean* | Is this kline closed? |
| `s` | *string* | Symbol |

Defined in: types/websocket.ts:51

___

### TradePayload

Ƭ **TradePayload**: *object*

#### Type declaration:

| Name | Type | Description |
| :------ | :------ | :------ |
| `E` | *number* | Event Time |
| `M` | *boolean* | Ignore |
| `T` | *number* | Trade time |
| `a` | *number* | Seller order ID |
| `b` | *number* | Buyer order ID |
| `e` | ``"trade"`` | Event Type |
| `m` | *boolean* | Is the buyer the market maker? |
| `p` | *string* | Price |
| `q` | *string* | Quantity |
| `s` | *string* | Symbol |
| `t` | *number* | Trade ID |

Defined in: types/websocket.ts:26
