"use strict";

var _module_one = require("./module_one.js");

var m1 = _interopRequireWildcard(_module_one);

var _module_two = require("./module_two.js");

var m2 = _interopRequireWildcard(_module_two);

var _module_three = require("./module_three.js");

var m3 = _interopRequireWildcard(_module_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(m1); //该文件作为入口文件


//模块引入

console.log(m2);
console.log(m3);