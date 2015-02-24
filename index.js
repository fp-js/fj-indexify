"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var map = _interopRequire(require("fj-map"));




var indexify = function (list) {
  var index = 0;

  return map(function (item) {
    return [index++, item];
  }, list);
};

module.exports = indexify;