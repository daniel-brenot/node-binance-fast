[types/filters](../modules/Module:-types/filters).PRICE_FILTER

The PRICE_FILTER defines the price rules for a symbol.

## Table of contents

### Properties

- [filterType](./Interface:-PRICE_FILTER#filtertype)
- [maxPrice](./Interface:-PRICE_FILTER#maxprice)
- [minPrice](./Interface:-PRICE_FILTER#minprice)
- [tickPrice](./Interface:-PRICE_FILTER#tickprice)

## Properties

### filterType

• **filterType**: ``"PRICE_FILTER"``

Defined in: types/filters.ts:7

___

### maxPrice

• **maxPrice**: *string*

defines the maximum price/stopPrice allowed; disabled on maxPrice == 0.

Defined in: types/filters.ts:11

___

### minPrice

• **minPrice**: *string*

defines the minimum price/stopPrice allowed; disabled on minPrice == 0.

Defined in: types/filters.ts:9

___

### tickPrice

• **tickPrice**: *string*

tickSize defines the intervals that a price/stopPrice can be increased/decreased by; disabled on tickSize == 0.

Defined in: types/filters.ts:13
