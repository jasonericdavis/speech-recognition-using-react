/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/uploadForm.jsx":
/*!***********************************!*\
  !*** ./components/uploadForm.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useSocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useSocket */ \"./hooks/useSocket.js\");\n/* harmony import */ var _mediaPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mediaPlayer */ \"./components/mediaPlayer.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jason/Coding/speech-recognition-using-react/components/uploadForm.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\nvar Loading = function Loading() {\n  return (\n    /*#__PURE__*/\n    // <button type=\"button\" className=\"bg-rose-600\" disabled>\n    //     <svg className=\"animate-spin h-5 w-5 mr-3\" viewBox=\"0 0 24 24\">\n    //     </svg>\n    //     Processing\n    // </button>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" animate-spin w-12 h-12 border-4  border-blue-600 rounded-full loader\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, _this), \"Loading\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, _this)\n  );\n};\n\n_c = Loading;\n\nvar UploadForm = function UploadForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var fileInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();\n\n  var chooseFileHandler = function chooseFileHandler(e) {\n    fileInput.current.click();\n  };\n\n  var onFileChange = function onFileChange(e) {\n    console.log(e.target.files);\n    setFile(e.target.files[0]);\n  };\n\n  var submit = function submit(e) {\n    var formData = new FormData();\n    formData.append(\"mediaFile\", file);\n    fetch(\"/api/media\", {\n      method: 'POST',\n      body: formData\n    }).then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      console.dir(data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n    console.log(\"Form Submitted\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"p-2\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n      htmlFor: \"mediaFile\",\n      children: file ? file.name : 'Choose a media file to process'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      type: \"file\",\n      className: \"hidden\",\n      ref: fileInput,\n      onChange: onFileChange\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"inline-flex justify-evenly\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"inline-flex items-center h-10 px-2 mx-2 nline-block py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple  hover:shadow-lg hover:bg-blue-800 focus:outline-none\",\n        onClick: chooseFileHandler,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          className: \"px-2\",\n          children: \"Select\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"inline-flex items-center h-10 px-2 mx-2 nline-block py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple  hover:shadow-lg hover:bg-blue-800 focus:outline-none\",\n        onClick: submit,\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(UploadForm, \"Nkb8eHkBruGouXteoqeZ1R6wRVk=\");\n\n_c2 = UploadForm;\n\nvar AsyncForm = function AsyncForm() {\n  _s2();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      job = _useState3[0],\n      setJob = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      caption = _useState4[0],\n      setCaption = _useState4[1];\n\n  var socket = (0,_hooks_useSocket__WEBPACK_IMPORTED_MODULE_2__.default)('job', function (message) {\n    console.log(\"received job \".concat(JSON.stringify(message)));\n    setJob(message.job);\n    setCaption(null);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setJob(JSON.parse(localStorage.getItem('job')).job || null);\n    setCaption(localStorage.getItem('caption'));\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    if (!job) return;\n    var url = \"/api/caption/\".concat(job.id);\n    fetch(url).then(function (res) {\n      return res.text();\n    }).then(function (caption) {\n      setCaption(caption);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  }, [job]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"flex flex-col items-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"row-start-3 row-end-4 col-start-2 col-end-3 flex-grow\",\n      children: job && caption ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mediaPlayer__WEBPACK_IMPORTED_MODULE_3__.default, {\n        src: job.media_url,\n        caption: caption\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 35\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 28\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 23\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex-grow\",\n      children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 52\n      }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UploadForm, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 66\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 106,\n    columnNumber: 9\n  }, _this);\n};\n\n_s2(AsyncForm, \"LBYjZqoqK5KvNMujNai3+Qia7yU=\", false, function () {\n  return [_hooks_useSocket__WEBPACK_IMPORTED_MODULE_2__.default];\n});\n\n_c3 = AsyncForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsyncForm);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Loading\");\n$RefreshReg$(_c2, \"UploadForm\");\n$RefreshReg$(_c3, \"AsyncForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91cGxvYWRGb3JtLmpzeD9lMmEzIl0sIm5hbWVzIjpbIkxvYWRpbmciLCJVcGxvYWRGb3JtIiwidXNlU3RhdGUiLCJmaWxlIiwic2V0RmlsZSIsImZpbGVJbnB1dCIsIlJlYWN0IiwiY2hvb3NlRmlsZUhhbmRsZXIiLCJlIiwiY3VycmVudCIsImNsaWNrIiwib25GaWxlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwic3VibWl0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImRpciIsImVyciIsIm5hbWUiLCJBc3luY0Zvcm0iLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImpvYiIsInNldEpvYiIsImNhcHRpb24iLCJzZXRDYXB0aW9uIiwic29ja2V0IiwidXNlU29ja2V0IiwibWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VFZmZlY3QiLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cmwiLCJpZCIsInRleHQiLCJtZWRpYV91cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBO0FBQUE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTlk7QUFBQSxDQUFoQjs7S0FBTUEsTzs7QUFnQk4sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUFBLGtCQUNHQywrQ0FBUSxDQUFDLElBQUQsQ0FEWDtBQUFBLE1BQ2RDLElBRGM7QUFBQSxNQUNSQyxPQURROztBQUVyQixNQUFNQyxT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QUE7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsZ0JBQTZCSixPQUFPLGdCQUFHLDhEQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUFpQiw4REFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBU0gsQ0F0Q0Q7O0lBQU1ELFM7VUFLYVEscUQ7OztNQUxiUixTO0FBd0NOLCtEQUFlQSxTQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91cGxvYWRGb3JtLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVNvY2tldCBmcm9tICcuLi9ob29rcy91c2VTb2NrZXQnXG5pbXBvcnQgTWVkaWFQbGF5ZXIgZnJvbSAnLi9tZWRpYVBsYXllcidcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IChcbiAgICAvLyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJiZy1yb3NlLTYwMFwiIGRpc2FibGVkPlxuICAgIC8vICAgICA8c3ZnIGNsYXNzTmFtZT1cImFuaW1hdGUtc3BpbiBoLTUgdy01IG1yLTNcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgLy8gICAgIDwvc3ZnPlxuICAgIC8vICAgICBQcm9jZXNzaW5nXG4gICAgLy8gPC9idXR0b24+XG4gICAgPHNwYW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXG4gICAgICAgICAgICBhbmltYXRlLXNwaW4gdy0xMiBoLTEyIGJvcmRlci00IFxuICAgICAgICAgICAgYm9yZGVyLWJsdWUtNjAwIHJvdW5kZWQtZnVsbCBsb2FkZXJcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIExvYWRpbmdcbiAgICA8L3NwYW4+XG5cbilcblxuY29uc3QgVXBsb2FkRm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBmaWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAgIGNvbnN0IGNob29zZUZpbGVIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgZmlsZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcbiAgICB9XG5cbiAgICBjb25zdCBvbkZpbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlcylcbiAgICAgICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSlcbiAgICB9XG5cbiAgICBjb25zdCBzdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJtZWRpYUZpbGVcIiwgZmlsZSlcblxuICAgICAgICBmZXRjaChcIi9hcGkvbWVkaWFcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSAgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5kaXIoZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxuICAgICAgICBjb25zb2xlLmxvZyhgRm9ybSBTdWJtaXR0ZWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtZWRpYUZpbGVcIj57ZmlsZSA/IGZpbGUubmFtZSA6ICdDaG9vc2UgYSBtZWRpYSBmaWxlIHRvIHByb2Nlc3MnIH08L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiAgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCIgXG4gICAgICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uRmlsZUNoYW5nZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWV2ZW5seVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBoLTEwIHB4LTIgbXgtMlxuICAgICAgICAgICAgICAgIG5saW5lLWJsb2NrIHB5LTIgdGV4dC14cyBmb250LW1lZGl1bSBsZWFkaW5nLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSB1cHBlcmNhc2UgdHJhbnNpdGlvbiBiZy1ibHVlLTcwMCByb3VuZGVkIHNoYWRvdyByaXBwbGUgXG4gICAgICAgICAgICAgICAgaG92ZXI6c2hhZG93LWxnIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2hvb3NlRmlsZUhhbmRsZXJ9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB4LTJcIj5TZWxlY3Q8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGgtMTAgcHgtMiBteC0yXG4gICAgICAgICAgICAgICAgbmxpbmUtYmxvY2sgcHktMiB0ZXh0LXhzIGZvbnQtbWVkaXVtIGxlYWRpbmctNiB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHVwcGVyY2FzZSB0cmFuc2l0aW9uIGJnLWJsdWUtNzAwIHJvdW5kZWQgc2hhZG93IHJpcHBsZSBcbiAgICAgICAgICAgICAgICBob3ZlcjpzaGFkb3ctbGcgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6b3V0bGluZS1ub25lXCIgb25DbGljaz17c3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgQXN5bmNGb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtqb2IsIHNldEpvYl0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtjYXB0aW9uLCBzZXRDYXB0aW9uXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBzb2NrZXQgPSB1c2VTb2NrZXQoJ2pvYicsIG1lc3NhZ2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgcmVjZWl2ZWQgam9iICR7SlNPTi5zdHJpbmdpZnkobWVzc2FnZSl9YClcbiAgICAgICAgc2V0Sm9iKG1lc3NhZ2Uuam9iKVxuICAgICAgICBzZXRDYXB0aW9uKG51bGwpXG4gICAgfSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldEpvYihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdqb2InKSkuam9iIHx8IG51bGwpXG4gICAgICAgIHNldENhcHRpb24obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcHRpb24nKSlcblxuICAgIH0sW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZigham9iKSByZXR1cm5cblxuICAgICAgICBjb25zdCB1cmwgPSBgL2FwaS9jYXB0aW9uLyR7am9iLmlkfWBcbiAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcbiAgICAgICAgLnRoZW4oY2FwdGlvbiA9PiB7XG4gICAgICAgICAgICBzZXRDYXB0aW9uKGNhcHRpb24pXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB9LCBbam9iXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93LXN0YXJ0LTMgcm93LWVuZC00IGNvbC1zdGFydC0yIGNvbC1lbmQtMyBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICB7am9iICYmIGNhcHRpb24gPyA8TWVkaWFQbGF5ZXIgc3JjPXtqb2IubWVkaWFfdXJsfSBjYXB0aW9uPXtjYXB0aW9ufSAvPiBcbiAgICAgICAgICAgICAgICAgICAgOiA8ZGl2PjxMb2FkaW5nIC8+PC9kaXY+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPnsgbG9hZGluZyA/IDxMb2FkaW5nIC8+IDogPFVwbG9hZEZvcm0gLz4gfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzeW5jRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/uploadForm.jsx\n");

/***/ })

});