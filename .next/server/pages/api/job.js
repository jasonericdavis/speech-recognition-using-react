/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/job";
exports.ids = ["pages/api/job"];
exports.modules = {

/***/ "./pages/api/job.js":
/*!**************************!*\
  !*** ./pages/api/job.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\nfunction handler(req, res) {\n  if (req.method === 'POST') {\n    console.log(`webhook received: ${JSON.stringify(req.body)}`);\n    req.io.emit(`job`, req.body);\n    res.sendStatus(200);\n  } else {\n    res.status(\"200\").send(\"Get a job\");\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGVlY2gtcmVjb2duaXRpb24tdXNpbmctcmVhY3QvLi9wYWdlcy9hcGkvam9iLmpzP2ZkNTkiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiYm9keSIsImlvIiwiZW1pdCIsInNlbmRTdGF0dXMiLCJzdGF0dXMiLCJzZW5kIl0sIm1hcHBpbmdzIjoiOzs7O0FBQWUsU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQWxCLEVBQTBCO0FBQ3RCQyxXQUFPLENBQUNDLEdBQVIsQ0FBYSxxQkFBb0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixHQUFHLENBQUNPLElBQW5CLENBQXlCLEVBQTFEO0FBQ0FQLE9BQUcsQ0FBQ1EsRUFBSixDQUFPQyxJQUFQLENBQWEsS0FBYixFQUFtQlQsR0FBRyxDQUFDTyxJQUF2QjtBQUNBTixPQUFHLENBQUNTLFVBQUosQ0FBZSxHQUFmO0FBQ0gsR0FKRCxNQUlPO0FBQ0hULE9BQUcsQ0FBQ1UsTUFBSixDQUFXLEtBQVgsRUFBa0JDLElBQWxCLENBQXVCLFdBQXZCO0FBQ0g7QUFDSiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9qb2IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGB3ZWJob29rIHJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHJlcS5ib2R5KX1gKVxuICAgICAgICByZXEuaW8uZW1pdChgam9iYCwgcmVxLmJvZHkpXG4gICAgICAgIHJlcy5zZW5kU3RhdHVzKDIwMClcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKFwiMjAwXCIpLnNlbmQoXCJHZXQgYSBqb2JcIilcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/job.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/job.js"));
module.exports = __webpack_exports__;

})();