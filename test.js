"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var indexify = _interopRequire(require("./"));

var map = _interopRequire(require("fj-map"));




it("fj-indexify", function () {
  assert.equal(typeof indexify, "function");
  assert.deepEqual(indexify([]), []);
  assert.deepEqual(indexify(["1"]), [[0, "1"]]);
  assert.deepEqual(indexify(["1", "2"]), [[0, "1"], [1, "2"]]);

  assert.deepEqual(map(function (item) {
    return item[0] + item[1];
  }, indexify([1, 2, 3, 4])), [1, 3, 5, 7]);
});