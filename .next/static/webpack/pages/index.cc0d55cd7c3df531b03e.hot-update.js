/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/mediaPlayer.jsx":
/*!************************************!*\
  !*** ./components/mediaPlayer.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jason/Coding/speech-recognition-using-react/components/mediaPlayer.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar MediaPlayer = function MediaPlayer(_ref) {\n  _s();\n\n  var src = _ref.src,\n      caption = _ref.caption;\n  var captionRef = React.createRef();\n\n  var handleOutputTypeChange = function handleOutputTypeChange(event) {};\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var captionBlob = new Blob([data], {\n      type: \"text/vtt;charset=utf-8\"\n    });\n    var url = URL.createObjectURL(caption); // const captionEl = document.querySelector(\"#caption\")\n\n    captionRef.mode = \"showing\";\n    captionRef.src = url;\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n      preload: \"metadata\",\n      id: \"media_player\",\n      src: src,\n      controls: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n        type: \"video/mp4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"track\", {\n        ref: captionRef,\n        kind: \"subtitles\",\n        srcLang: \"en\",\n        label: \"English\",\n        \"default\": true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"transcription\",\n      className: \"transcription p-4\",\n      children: caption ? caption : 'Waiting for a transcription'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MediaPlayer, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = MediaPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaPlayer);\n\nvar _c;\n\n$RefreshReg$(_c, \"MediaPlayer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWRpYVBsYXllci5qc3g/ZDFjYyJdLCJuYW1lcyI6WyJNZWRpYVBsYXllciIsInNyYyIsImNhcHRpb24iLCJjYXB0aW9uUmVmIiwiUmVhY3QiLCJjcmVhdGVSZWYiLCJoYW5kbGVPdXRwdXRUeXBlQ2hhbmdlIiwiZXZlbnQiLCJ1c2VFZmZlY3QiLCJjYXB0aW9uQmxvYiIsIkJsb2IiLCJkYXRhIiwidHlwZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIm1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxHQUFrQixRQUFsQkEsR0FBa0I7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7QUFDcEMsTUFBTUMsVUFBVSxHQUFHQyxLQUFLLENBQUNDLFNBQU4sRUFBbkI7O0FBQ0EsTUFBTUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixDQUFDQyxLQUFELEVBQVcsQ0FFekMsQ0FGRDs7QUFJQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTUMsV0FBVyxHQUFHLElBQUlDLElBQUosQ0FBUyxDQUFDQyxJQUFELENBQVQsRUFBaUI7QUFDakNDLFVBQUksRUFBQztBQUQ0QixLQUFqQixDQUFwQjtBQUdBLFFBQU1DLEdBQUcsR0FBR0MsR0FBRyxDQUFDQyxlQUFKLENBQW9CYixPQUFwQixDQUFaLENBSlksQ0FLWjs7QUFDQUMsY0FBVSxDQUFDYSxJQUFYLEdBQWtCLFNBQWxCO0FBQ0FiLGNBQVUsQ0FBQ0YsR0FBWCxHQUFpQlksR0FBakI7QUFDSCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBVUQsc0JBQ0M7QUFBQSw0QkFDSTtBQUFPLGFBQU8sRUFBQyxVQUFmO0FBQTBCLFFBQUUsRUFBQyxjQUE3QjtBQUE0QyxTQUFHLEVBQUVaLEdBQWpEO0FBQXNELGNBQVEsTUFBOUQ7QUFBQSw4QkFDSTtBQUFRLFlBQUksRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU8sV0FBRyxFQUFFRSxVQUFaO0FBQXdCLFlBQUksRUFBQyxXQUE3QjtBQUF5QyxlQUFPLEVBQUMsSUFBakQ7QUFBc0QsYUFBSyxFQUFDLFNBQTVEO0FBQXNFO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVdJO0FBQUssUUFBRSxFQUFDLGVBQVI7QUFBd0IsZUFBUyxFQUFDLG1CQUFsQztBQUFBLGdCQUNLRCxPQUFPLEdBQUVBLE9BQUYsR0FBWTtBQUR4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEo7QUFBQSxrQkFERDtBQWlCRixDQWpDRDs7R0FBTUYsVzs7S0FBQUEsVztBQW1DTiwrREFBZUEsV0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVkaWFQbGF5ZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IE1lZGlhUGxheWVyID0gKHtzcmMsIGNhcHRpb259KSA9PiB7XG4gICAgY29uc3QgY2FwdGlvblJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIGNvbnN0IGhhbmRsZU91dHB1dFR5cGVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhcHRpb25CbG9iID0gbmV3IEJsb2IoW2RhdGFdLCB7XG4gICAgICAgICAgICB0eXBlOlwidGV4dC92dHQ7Y2hhcnNldD11dGYtOFwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGNhcHRpb24pO1xuICAgICAgICAvLyBjb25zdCBjYXB0aW9uRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhcHRpb25cIilcbiAgICAgICAgY2FwdGlvblJlZi5tb2RlID0gXCJzaG93aW5nXCI7XG4gICAgICAgIGNhcHRpb25SZWYuc3JjID0gdXJsO1xuICAgIH0sIFtdKVxuXG4gICByZXR1cm4gKFxuICAgIDw+XG4gICAgICAgIDx2aWRlbyBwcmVsb2FkPVwibWV0YWRhdGFcIiBpZD1cIm1lZGlhX3BsYXllclwiIHNyYz17c3JjfSBjb250cm9scz5cbiAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICA8dHJhY2sgcmVmPXtjYXB0aW9uUmVmfSBraW5kPVwic3VidGl0bGVzXCIgc3JjTGFuZz1cImVuXCIgbGFiZWw9XCJFbmdsaXNoXCIgZGVmYXVsdCAvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJvdXRwdXQtdHlwZVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiY2FwdGlvblJiXCIgbmFtZT1cIm91dHB1dC10eXBlXCIgdmFsdWU9XCJjYXB0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZU91dHB1dFR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhcHRpb25cIj5DYXB0aW9uPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRyYW5zY3JpcHRpb25SYlwiIG5hbWU9XCJvdXRwdXQtdHlwZVwiIHZhbHVlPVwidHJhbnNjcmlwdGlvblwiIGNoZWNrZWQgb25DaGFuZ2U9e2hhbmRsZU91dHB1dFR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRyYW5zY3JpcHRpb25cIj5UcmFuc2NyaXB0aW9uPC9sYWJlbD48YnIgLz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGlkPVwidHJhbnNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInRyYW5zY3JpcHRpb24gcC00XCI+XG4gICAgICAgICAgICB7Y2FwdGlvbj8gY2FwdGlvbiA6ICdXYWl0aW5nIGZvciBhIHRyYW5zY3JpcHRpb24nfVxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFQbGF5ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mediaPlayer.jsx\n");

/***/ })

});