## Table of contents

### Type aliases

- [ChartInterval](./enums#chartinterval)
- [ContingencyType](./enums#contingencytype)
- [LIMIT\_MAKER\_ORDER](./enums#limit_maker_order)
- [LIMIT\_ORDER](./enums#limit_order)
- [Limit](./enums#limit)
- [MARKET\_ORDER](./enums#market_order)
- [OCOOrderStatus](./enums#ocoorderstatus)
- [OCOStatus](./enums#ocostatus)
- [ORDERS](./enums#orders)
- [OrderResponseType](./enums#orderresponsetype)
- [OrderSide](./enums#orderside)
- [OrderStatus](./enums#orderstatus)
- [OrderType](./enums#ordertype)
- [RAW\_REQUESTS](./enums#raw_requests)
- [REQUEST\_WEIGHT](./enums#request_weight)
- [RateLimitType](./enums#ratelimittype)
- [STOP\_LOSS\_LIMIT\_ORDER](./enums#stop_loss_limit_order)
- [STOP\_LOSS\_ORDER](./enums#stop_loss_order)
- [SymbolStatus](./enums#symbolstatus)
- [SymbolType](./enums#symboltype)
- [TAKE\_PROFIT\_LIMIT\_ORDER](./enums#take_profit_limit_order)
- [TAKE\_PROFIT\_ORDER](./enums#take_profit_order)
- [TimeInForce](./enums#timeinforce)

## Type aliases

### ChartInterval

Ƭ **ChartInterval**: ``"1m"`` \| ``"3m"`` \| ``"5m"`` \| ``"15m"`` \| ``"30m"`` \| ``"1h"`` \| ``"2h"`` \| ``"4h"`` \| ``"6h"`` \| ``"8h"`` \| ``"12h"`` \| ``"1d"`` \| ``"3d"`` \| ``"1w"`` \| ``"1M"``

m -> minutes; h -> hours; d -> days; w -> weeks; M -> months

Defined in: types/enums.ts:50

___

### ContingencyType

Ƭ **ContingencyType**: ``"OCO"``

Defined in: types/enums.ts:11

___

### LIMIT\_MAKER\_ORDER

Ƭ **LIMIT\_MAKER\_ORDER**: ``"LIMIT_MAKER"``

Defined in: types/enums.ts:25

___

### LIMIT\_ORDER

Ƭ **LIMIT\_ORDER**: ``"LIMIT"``

Defined in: types/enums.ts:13

___

### Limit

Ƭ **Limit**: ``5`` \| ``10`` \| ``20`` \| ``50`` \| ``100`` \| ``500`` \| ``1000`` \| ``5000``

Defined in: types/enums.ts:47

___

### MARKET\_ORDER

Ƭ **MARKET\_ORDER**: ``"MARKET"``

Defined in: types/enums.ts:15

___

### OCOOrderStatus

Ƭ **OCOOrderStatus**: ``"EXECUTING"`` \| ``"ALL_DONE"`` \| ``"REJECT"``

Defined in: types/enums.ts:9

___

### OCOStatus

Ƭ **OCOStatus**: ``"RESPONSE"`` \| ``"EXEC_STARTED"`` \| ``"ALL_DONE"``

Defined in: types/enums.ts:7

___

### ORDERS

Ƭ **ORDERS**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `interval` | ``"SECOND"`` |
| `intervalNum` | ``1`` |
| `limit` | ``10`` |
| `rateLimitType` | ``"ORDERS"`` |

Defined in: types/enums.ts:59

___

### OrderResponseType

Ƭ **OrderResponseType**: ``"ACK"`` \| ``"RESULT"`` \| ``"FULL"``

Defined in: types/enums.ts:29

___

### OrderSide

Ƭ **OrderSide**: ``"BUY"`` \| ``"SELL"``

Defined in: types/enums.ts:31

___

### OrderStatus

Ƭ **OrderStatus**: ``"NEW"`` \| ``"PARTIALLY_FILLED"`` \| ``"FILLED"`` \| ``"FILLED"`` \| ``"CANCELLED"`` \| ``"PENDING_CANCEL"`` \| ``"REJECTED"`` \| ``"EXPIRED"``

Defined in: types/enums.ts:5

___

### OrderType

Ƭ **OrderType**: [*LIMIT\_ORDER*](./enums#limit_order) \| [*MARKET\_ORDER*](./enums#market_order) \| [*STOP\_LOSS\_ORDER*](./enums#stop_loss_order) \| [*STOP\_LOSS\_LIMIT\_ORDER*](./enums#stop_loss_limit_order) \| [*TAKE\_PROFIT\_ORDER*](./enums#take_profit_order) \| [*TAKE\_PROFIT\_LIMIT\_ORDER*](./enums#take_profit_limit_order) \| [*LIMIT\_MAKER\_ORDER*](./enums#limit_maker_order)

Defined in: types/enums.ts:27

___

### RAW\_REQUESTS

Ƭ **RAW\_REQUESTS**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `interval` | ``"MINUTE"`` |
| `intervalNum` | ``5`` |
| `limit` | ``500`` |
| `rateLimitType` | ``"RAW_REQUESTS"`` |

Defined in: types/enums.ts:66

___

### REQUEST\_WEIGHT

Ƭ **REQUEST\_WEIGHT**: *object*

#### Type declaration:

| Name | Type |
| :------ | :------ |
| `interval` | ``"MINUTE"`` |
| `intervalNum` | ``1`` |
| `limit` | ``1200`` |
| `rateLimitType` | ``"REQUEST_WEIGHT"`` |

Defined in: types/enums.ts:52

___

### RateLimitType

Ƭ **RateLimitType**: [*REQUEST\_WEIGHT*](./enums#request_weight) \| [*ORDERS*](./enums#orders) \| [*RAW\_REQUESTS*](./enums#raw_requests)

Defined in: types/enums.ts:73

___

### STOP\_LOSS\_LIMIT\_ORDER

Ƭ **STOP\_LOSS\_LIMIT\_ORDER**: ``"STOP_LOSS_LIMIT"``

Defined in: types/enums.ts:19

___

### STOP\_LOSS\_ORDER

Ƭ **STOP\_LOSS\_ORDER**: ``"STOP_LOSS"``

Defined in: types/enums.ts:17

___

### SymbolStatus

Ƭ **SymbolStatus**: ``"PRE_TRADING"`` \| ``"TRADING"`` \| ``"POST_TRADING"`` \| ``"END_OF_DAY"`` \| ``"HALT"`` \| ``"AUCTION_MATCH"`` \| ``"BREAK"``

Defined in: types/enums.ts:1

___

### SymbolType

Ƭ **SymbolType**: ``"SPOT"``

Defined in: types/enums.ts:3

___

### TAKE\_PROFIT\_LIMIT\_ORDER

Ƭ **TAKE\_PROFIT\_LIMIT\_ORDER**: ``"TAKE_PROFIT_LIMIT"``

Defined in: types/enums.ts:23

___

### TAKE\_PROFIT\_ORDER

Ƭ **TAKE\_PROFIT\_ORDER**: ``"TAKE_PROFIT"``

Defined in: types/enums.ts:21

___

### TimeInForce

Ƭ **TimeInForce**: ``"GTC"`` \| ``"IOC"`` \| ``"FOK"``

This sets how long an order will be active before expiration.

Good Til Canceled:
An order will be on the book unless the order is canceled.

Immediate Or Cancel:
An order will try to fill the order as much as it can before the order expires.

Fill or Kill:
An order will expire if the full order cannot be filled upon execution.

Defined in: types/enums.ts:45
