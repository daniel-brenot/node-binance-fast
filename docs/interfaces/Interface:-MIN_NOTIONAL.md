[types/filters](../modules/Module:-types/filters).MIN_NOTIONAL

The MIN_NOTIONAL filter defines the minimum notional value allowed for an order on a symbol. An order's notional value is the price * quantity. applyToMarket determines whether or not the MIN_NOTIONAL filter will also be applied to MARKET orders. Since MARKET orders have no price, the average price is used over the last avgPriceMins minutes. avgPriceMins is the number of minutes the average price is calculated over. 0 means the last price is used.

## Table of contents

### Properties

- [applyToMarket](./Interface:-MIN_NOTIONAL#applytomarket)
- [avgPriceMins](./Interface:-MIN_NOTIONAL#avgpricemins)
- [filterType](./Interface:-MIN_NOTIONAL#filtertype)
- [minNotional](./Interface:-MIN_NOTIONAL#minnotional)

## Properties

### applyToMarket

• **applyToMarket**: *boolean*

Defined in: types/filters.ts:41

___

### avgPriceMins

• **avgPriceMins**: *number*

Defined in: types/filters.ts:42

___

### filterType

• **filterType**: ``"MIN_NOTIONAL"``

Defined in: types/filters.ts:39

___

### minNotional

• **minNotional**: *string*

Defined in: types/filters.ts:40
