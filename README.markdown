# fj-indexify

[![Build Status](https://travis-ci.org/fp-js/fj-indexify.svg)](https://travis-ci.org/fp-js/fj-indexify) [![npm version](https://badge.fury.io/js/fj-indexify.svg)](http://badge.fury.io/js/fj-indexify)
> Indexify an array

## Installation

`npm install fj-indexify --save`

## Usage

```js
var indexify = require('fj-indexify');

const a = ["foo", "bar", "moo"];
const aIdxd = indexify(a);
console.log(aIdxd); // => [[0, "foo"], [1, "bar"], [2, "moo"]]

map((i) => i[0] + i[1], aIdxd); // => ["0foo", "1bar", "2moo"]
```
