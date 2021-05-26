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
exports.id = "pages/api/media";
exports.ids = ["pages/api/media"];
exports.modules = {

/***/ "./pages/api/media.js":
/*!****************************!*\
  !*** ./pages/api/media.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var revai_node_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! revai-node-sdk */ \"revai-node-sdk\");\n/* harmony import */ var revai_node_sdk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(revai_node_sdk__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst media_path = process.env.media_path || './public/media/';\nconst access_token = process.env.revai_access_token;\nconst base_url = process.env.base_url || `http://localhost:3000`;\nconst asyncClient = new revai_node_sdk__WEBPACK_IMPORTED_MODULE_1__.RevAiApiClient(access_token);\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst storage = multer__WEBPACK_IMPORTED_MODULE_0___default().diskStorage({\n  destination: function (req, file, cb) {\n    cb(null, media_path);\n  },\n  filename: function (req, file, cb) {\n    cb(null, file.originalname);\n  }\n});\nconst upload = multer__WEBPACK_IMPORTED_MODULE_0___default()({\n  storage\n});\n\nconst createJob = async filename => {\n  const media_url = `${base_url}/media/${filename}`;\n  const webhook_url = `${base_url}/api/job`;\n  return asyncClient.submitJobUrl(media_url, {\n    callback_url: webhook_url\n  }); //     //res.json(job);\n  // } catch(err) {\n  //   console.dir(`Error: ${err.message}`)\n  //   res.status(500).json({error: err.message})\n  // }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    await upload.single(\"mediaFile\")(req, res, err => {\n      if (err instanceof (multer__WEBPACK_IMPORTED_MODULE_0___default().MulterError)) {\n        return null;\n      } else {\n        console.log(`Media File: ${req.file.filename}`);\n        createJob(req.file.filename).then(job => {\n          res.json(job);\n        });\n      }\n    });\n  } else {\n    res.status(\"200\").send(\"Get a job\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGVlY2gtcmVjb2duaXRpb24tdXNpbmctcmVhY3QvLi9wYWdlcy9hcGkvbWVkaWEuanM/ZDNlOCJdLCJuYW1lcyI6WyJtZWRpYV9wYXRoIiwicHJvY2VzcyIsImVudiIsImFjY2Vzc190b2tlbiIsInJldmFpX2FjY2Vzc190b2tlbiIsImJhc2VfdXJsIiwiYXN5bmNDbGllbnQiLCJSZXZBaUFwaUNsaWVudCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJzdG9yYWdlIiwibXVsdGVyIiwiZGVzdGluYXRpb24iLCJyZXEiLCJmaWxlIiwiY2IiLCJmaWxlbmFtZSIsIm9yaWdpbmFsbmFtZSIsInVwbG9hZCIsImNyZWF0ZUpvYiIsIm1lZGlhX3VybCIsIndlYmhvb2tfdXJsIiwic3VibWl0Sm9iVXJsIiwiY2FsbGJhY2tfdXJsIiwicmVzIiwibWV0aG9kIiwic2luZ2xlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJqb2IiLCJqc29uIiwic3RhdHVzIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWixJQUEwQixpQkFBN0M7QUFDQSxNQUFNRyxZQUFZLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxrQkFBakM7QUFDQSxNQUFNQyxRQUFRLEdBQUdKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxRQUFaLElBQXlCLHVCQUExQztBQUNBLE1BQU1DLFdBQVcsR0FBRyxJQUFJQywwREFBSixDQUFtQkosWUFBbkIsQ0FBcEI7QUFFTyxNQUFNSyxNQUFNLEdBQUc7QUFDcEJDLEtBQUcsRUFBRTtBQUNIQyxjQUFVLEVBQUU7QUFEVDtBQURlLENBQWY7QUFNUCxNQUFNQyxPQUFPLEdBQUdDLHlEQUFBLENBQW1CO0FBQy9CQyxhQUFXLEVBQUUsVUFBVUMsR0FBVixFQUFlQyxJQUFmLEVBQXFCQyxFQUFyQixFQUF5QjtBQUNwQ0EsTUFBRSxDQUFDLElBQUQsRUFBT2hCLFVBQVAsQ0FBRjtBQUNELEdBSDhCO0FBSS9CaUIsVUFBUSxFQUFFLFVBQVVILEdBQVYsRUFBZUMsSUFBZixFQUFxQkMsRUFBckIsRUFBeUI7QUFDakNBLE1BQUUsQ0FBQyxJQUFELEVBQU9ELElBQUksQ0FBQ0csWUFBWixDQUFGO0FBQ0Q7QUFOOEIsQ0FBbkIsQ0FBaEI7QUFTQSxNQUFNQyxNQUFNLEdBQUdQLDZDQUFNLENBQUM7QUFBRUQ7QUFBRixDQUFELENBQXJCOztBQUVBLE1BQU1TLFNBQVMsR0FBRyxNQUFPSCxRQUFQLElBQW9CO0FBQ2hDLFFBQU1JLFNBQVMsR0FBSSxHQUFFaEIsUUFBUyxVQUFTWSxRQUFTLEVBQWhEO0FBQ0EsUUFBTUssV0FBVyxHQUFJLEdBQUVqQixRQUFTLFVBQWhDO0FBRUEsU0FBT0MsV0FBVyxDQUFDaUIsWUFBWixDQUF5QkYsU0FBekIsRUFBb0M7QUFDekNHLGdCQUFZLEVBQUVGO0FBRDJCLEdBQXBDLENBQVAsQ0FKZ0MsQ0FPcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELENBWkQ7O0FBY0EsK0RBQWUsT0FBT1IsR0FBUCxFQUFZVyxHQUFaLEtBQW9CO0FBQy9CLE1BQUdYLEdBQUcsQ0FBQ1ksTUFBSixLQUFlLE1BQWxCLEVBQTBCO0FBQ3RCLFVBQU1QLE1BQU0sQ0FBQ1EsTUFBUCxDQUFjLFdBQWQsRUFBMkJiLEdBQTNCLEVBQWdDVyxHQUFoQyxFQUFzQ0csR0FBRCxJQUFTO0FBQ2xELFVBQUdBLEdBQUcsWUFBWWhCLDJEQUFsQixFQUFzQztBQUNwQyxlQUFPLElBQVA7QUFDRCxPQUZELE1BRU87QUFDTGlCLGVBQU8sQ0FBQ0MsR0FBUixDQUFhLGVBQWNoQixHQUFHLENBQUNDLElBQUosQ0FBU0UsUUFBUyxFQUE3QztBQUNBRyxpQkFBUyxDQUFDTixHQUFHLENBQUNDLElBQUosQ0FBU0UsUUFBVixDQUFULENBQTZCYyxJQUE3QixDQUFrQ0MsR0FBRyxJQUFJO0FBQ3ZDUCxhQUFHLENBQUNRLElBQUosQ0FBU0QsR0FBVDtBQUNELFNBRkQ7QUFHRDtBQUNGLEtBVEssQ0FBTjtBQVVILEdBWEQsTUFXTztBQUNIUCxPQUFHLENBQUNTLE1BQUosQ0FBVyxLQUFYLEVBQWtCQyxJQUFsQixDQUF1QixXQUF2QjtBQUNIO0FBQ0osQ0FmRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9tZWRpYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtdWx0ZXIgZnJvbSBcIm11bHRlclwiXG5pbXBvcnQge1JldkFpQXBpQ2xpZW50fSBmcm9tICdyZXZhaS1ub2RlLXNkaydcblxuY29uc3QgbWVkaWFfcGF0aCA9IHByb2Nlc3MuZW52Lm1lZGlhX3BhdGggfHwgJy4vcHVibGljL21lZGlhLydcbmNvbnN0IGFjY2Vzc190b2tlbiA9IHByb2Nlc3MuZW52LnJldmFpX2FjY2Vzc190b2tlbjtcbmNvbnN0IGJhc2VfdXJsID0gcHJvY2Vzcy5lbnYuYmFzZV91cmwgfHwgYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMGBcbmNvbnN0IGFzeW5jQ2xpZW50ID0gbmV3IFJldkFpQXBpQ2xpZW50KGFjY2Vzc190b2tlbik7XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufVxuXG5jb25zdCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgICBkZXN0aW5hdGlvbjogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcbiAgICAgIGNiKG51bGwsIG1lZGlhX3BhdGgpXG4gICAgfSxcbiAgICBmaWxlbmFtZTogZnVuY3Rpb24gKHJlcSwgZmlsZSwgY2IpIHtcbiAgICAgIGNiKG51bGwsIGZpbGUub3JpZ2luYWxuYW1lKVxuICAgIH0sXG59KVxuICBcbmNvbnN0IHVwbG9hZCA9IG11bHRlcih7IHN0b3JhZ2UgfSlcblxuY29uc3QgY3JlYXRlSm9iID0gYXN5bmMgKGZpbGVuYW1lKSA9PiB7XG4gICAgICBjb25zdCBtZWRpYV91cmwgPSBgJHtiYXNlX3VybH0vbWVkaWEvJHtmaWxlbmFtZX1gXG4gICAgICBjb25zdCB3ZWJob29rX3VybCA9IGAke2Jhc2VfdXJsfS9hcGkvam9iYDtcbiAgICAgIFxuICAgICAgcmV0dXJuIGFzeW5jQ2xpZW50LnN1Ym1pdEpvYlVybChtZWRpYV91cmwsIHtcbiAgICAgICAgY2FsbGJhY2tfdXJsOiB3ZWJob29rX3VybCxcbiAgICAgIH0pXG4gIC8vICAgICAvL3Jlcy5qc29uKGpvYik7XG4gIC8vIH0gY2F0Y2goZXJyKSB7XG4gIC8vICAgY29uc29sZS5kaXIoYEVycm9yOiAke2Vyci5tZXNzYWdlfWApXG4gIC8vICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe2Vycm9yOiBlcnIubWVzc2FnZX0pXG4gIC8vIH1cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBpZihyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgYXdhaXQgdXBsb2FkLnNpbmdsZShcIm1lZGlhRmlsZVwiKShyZXEsIHJlcywgKGVycikgPT4ge1xuICAgICAgICAgIGlmKGVyciBpbnN0YW5jZW9mIG11bHRlci5NdWx0ZXJFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYE1lZGlhIEZpbGU6ICR7cmVxLmZpbGUuZmlsZW5hbWV9YClcbiAgICAgICAgICAgIGNyZWF0ZUpvYihyZXEuZmlsZS5maWxlbmFtZSkudGhlbihqb2IgPT4ge1xuICAgICAgICAgICAgICByZXMuanNvbihqb2IpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKFwiMjAwXCIpLnNlbmQoXCJHZXQgYSBqb2JcIilcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/media.js\n");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("multer");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/media.js"));
module.exports = __webpack_exports__;

})();