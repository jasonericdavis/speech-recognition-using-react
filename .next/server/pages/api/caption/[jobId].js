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
exports.id = "pages/api/caption/[jobId]";
exports.ids = ["pages/api/caption/[jobId]"];
exports.modules = {

/***/ "./pages/api/caption/[jobId].js":
/*!**************************************!*\
  !*** ./pages/api/caption/[jobId].js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var revai_node_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! revai-node-sdk */ \"revai-node-sdk\");\n/* harmony import */ var revai_node_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(revai_node_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'GET') {\n    try {\n      const asyncClient = new revai_node_sdk__WEBPACK_IMPORTED_MODULE_0__.RevAiApiClient(process.env.revai_access_token);\n      const {\n        jobId\n      } = req.query;\n      console.dir(jobId);\n      let output = '';\n      await asyncClient.getCaptions(jobId, revai_node_sdk__WEBPACK_IMPORTED_MODULE_0__.CaptionType.VTT).then(response => {\n        const stream = response;\n        stream.on('data', chunk => {\n          output += chunk;\n        });\n        stream.on('end', () => {\n          console.log(output);\n          res.send(output);\n        });\n      });\n    } catch (err) {\n      console.error(err.message);\n      res.sendStatus(500);\n    }\n  } else {\n    res.status(\"200\").send(\"Get a job\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGVlY2gtcmVjb2duaXRpb24tdXNpbmctcmVhY3QvLi9wYWdlcy9hcGkvY2FwdGlvbi9bam9iSWRdLmpzP2IwZjQiXSwibmFtZXMiOlsicmVxIiwicmVzIiwibWV0aG9kIiwiYXN5bmNDbGllbnQiLCJSZXZBaUFwaUNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJyZXZhaV9hY2Nlc3NfdG9rZW4iLCJqb2JJZCIsInF1ZXJ5IiwiY29uc29sZSIsImRpciIsIm91dHB1dCIsImdldENhcHRpb25zIiwiQ2FwdGlvblR5cGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdHJlYW0iLCJvbiIsImNodW5rIiwibG9nIiwic2VuZCIsImVyciIsImVycm9yIiwibWVzc2FnZSIsInNlbmRTdGF0dXMiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBRUEsK0RBQWUsT0FBT0EsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEtBQWxCLEVBQXlCO0FBQ3JCLFFBQUk7QUFDQSxZQUFNQyxXQUFXLEdBQUcsSUFBSUMsMERBQUosQ0FBbUJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFBL0IsQ0FBcEI7QUFDQSxZQUFNO0FBQUNDO0FBQUQsVUFBVVIsR0FBRyxDQUFDUyxLQUFwQjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBLFVBQUlJLE1BQU0sR0FBRyxFQUFiO0FBQ0EsWUFBTVQsV0FBVyxDQUFDVSxXQUFaLENBQXdCTCxLQUF4QixFQUErQk0sMkRBQS9CLEVBQ0xDLElBREssQ0FDQUMsUUFBUSxJQUFJO0FBQ2hCLGNBQU1DLE1BQU0sR0FBR0QsUUFBZjtBQUNBQyxjQUFNLENBQUNDLEVBQVAsQ0FBVSxNQUFWLEVBQWtCQyxLQUFLLElBQUk7QUFDekJQLGdCQUFNLElBQUlPLEtBQVY7QUFDRCxTQUZEO0FBSUFGLGNBQU0sQ0FBQ0MsRUFBUCxDQUFVLEtBQVYsRUFBaUIsTUFBTTtBQUNyQlIsaUJBQU8sQ0FBQ1UsR0FBUixDQUFZUixNQUFaO0FBQ0FYLGFBQUcsQ0FBQ29CLElBQUosQ0FBU1QsTUFBVDtBQUNELFNBSEQ7QUFJRCxPQVhLLENBQU47QUFZRCxLQWpCSCxDQWlCSSxPQUFNVSxHQUFOLEVBQVc7QUFDWFosYUFBTyxDQUFDYSxLQUFSLENBQWNELEdBQUcsQ0FBQ0UsT0FBbEI7QUFDQXZCLFNBQUcsQ0FBQ3dCLFVBQUosQ0FBZSxHQUFmO0FBQ0Q7QUFDTixHQXRCRCxNQXNCTztBQUNIeEIsT0FBRyxDQUFDeUIsTUFBSixDQUFXLEtBQVgsRUFBa0JMLElBQWxCLENBQXVCLFdBQXZCO0FBQ0g7QUFDSixDQTFCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jYXB0aW9uL1tqb2JJZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JldkFpQXBpQ2xpZW50LCBDYXB0aW9uVHlwZX0gZnJvbSAncmV2YWktbm9kZS1zZGsnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGlmKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhc3luY0NsaWVudCA9IG5ldyBSZXZBaUFwaUNsaWVudChwcm9jZXNzLmVudi5yZXZhaV9hY2Nlc3NfdG9rZW4pXG4gICAgICAgICAgICBjb25zdCB7am9iSWR9ID0gcmVxLnF1ZXJ5XG4gICAgICAgICAgICBjb25zb2xlLmRpcihqb2JJZClcbiAgICAgICAgICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICAgICAgICAgIGF3YWl0IGFzeW5jQ2xpZW50LmdldENhcHRpb25zKGpvYklkLCBDYXB0aW9uVHlwZS5WVFQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IHJlc3BvbnNlXG4gICAgICAgICAgICAgIHN0cmVhbS5vbignZGF0YScsIGNodW5rID0+IHtcbiAgICAgICAgICAgICAgICBvdXRwdXQgKz0gY2h1bmtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgICAgICAgIHN0cmVhbS5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQob3V0cHV0KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcbiAgICAgICAgICAgIHJlcy5zZW5kU3RhdHVzKDUwMClcbiAgICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyhcIjIwMFwiKS5zZW5kKFwiR2V0IGEgam9iXCIpXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/caption/[jobId].js\n");

/***/ }),

/***/ "revai-node-sdk":
/*!*********************************!*\
  !*** external "revai-node-sdk" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("revai-node-sdk");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/caption/[jobId].js"));
module.exports = __webpack_exports__;

})();