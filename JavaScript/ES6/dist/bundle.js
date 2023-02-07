(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module_one.js":2,"./module_three.js":3,"./module_two.js":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.study = study;
var name = exports.name = '何伟';
function study() {
    console.log("我正在学习JS");
}

//以上是分别暴露
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: '浙海大',
    study: function study() {
        console.log("我正在学习");
    }
};
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//统一暴露
var name = '浙江海洋大学';
var location = function location() {
  console.log("浙江省舟山市定海区长峙岛临城街道海大南路一号");
};

exports.name = name;
exports.location = location;
},{}]},{},[1]);
