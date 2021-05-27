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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jason/Coding/speech-recognition-using-react/components/mediaPlayer.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar MediaPlayer = function MediaPlayer(_ref) {\n  _s();\n\n  var src = _ref.src,\n      caption = _ref.caption;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      cues = _useState[0],\n      setCues = _useState[1];\n\n  var captionRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();\n\n  var handleOutputTypeChange = function handleOutputTypeChange(event) {};\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var captionBlob = new Blob([caption], {\n      type: \"text/vtt;charset=utf-8\"\n    });\n    var url = URL.createObjectURL(captionBlob); // const captionEl = document.querySelector(\"#caption\")\n\n    captionRef.current.mode = \"showing\";\n    captionRef.current.src = url;\n\n    captionRef.current.oncuechange = function (e) {\n      if (e.target.track.activeCues.length > 0) {\n        console.log(\"cue detected \".concat(e.target.track.activeCues.length));\n        captionRef.current.track.activeCues[0].line = 0; //setCues(e.target.track.activeCues[0].getCueAsHTML()?.children[0]?.textContent)\n      }\n    };\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: cues\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n      id: \"media_player\",\n      src: src,\n      controls: true,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n        type: \"video/mp4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"track\", {\n        ref: captionRef,\n        kind: \"subtitles\",\n        srcLang: \"en\",\n        label: \"English\",\n        \"default\": true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      id: \"transcription\",\n      className: \"transcription p-4\",\n      children: caption ? caption : 'Waiting for a transcription'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(MediaPlayer, \"fE/uqElTN5JaxLklJ5b8MqzdYbY=\");\n\n_c = MediaPlayer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MediaPlayer);\n\nvar _c;\n\n$RefreshReg$(_c, \"MediaPlayer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWRpYVBsYXllci5qc3g/ZDFjYyJdLCJuYW1lcyI6WyJNZWRpYVBsYXllciIsInNyYyIsImNhcHRpb24iLCJ1c2VTdGF0ZSIsImN1ZXMiLCJzZXRDdWVzIiwiY2FwdGlvblJlZiIsIlJlYWN0IiwiaGFuZGxlT3V0cHV0VHlwZUNoYW5nZSIsImV2ZW50IiwidXNlRWZmZWN0IiwiY2FwdGlvbkJsb2IiLCJCbG9iIiwidHlwZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnJlbnQiLCJtb2RlIiwib25jdWVjaGFuZ2UiLCJlIiwidGFyZ2V0IiwidHJhY2siLCJhY3RpdmVDdWVzIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFvQjtBQUFBOztBQUFBLE1BQWxCQyxHQUFrQixRQUFsQkEsR0FBa0I7QUFBQSxNQUFiQyxPQUFhLFFBQWJBLE9BQWE7O0FBQUEsa0JBQ1pDLCtDQUFRLENBQUMsSUFBRCxDQURJO0FBQUEsTUFDN0JDLElBRDZCO0FBQUEsTUFDdkJDLE9BRHVCOztBQUVwQyxNQUFNQyxVQUFVLGdCQUFHQyxzREFBQSxFQUFuQjs7QUFDQSxNQUFNQyxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLEtBQUQsRUFBVyxDQUV6QyxDQUZEOztBQUlBQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFNQyxXQUFXLEdBQUcsSUFBSUMsSUFBSixDQUFTLENBQUNWLE9BQUQsQ0FBVCxFQUFvQjtBQUNwQ1csVUFBSSxFQUFDO0FBRCtCLEtBQXBCLENBQXBCO0FBR0EsUUFBTUMsR0FBRyxHQUFHQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JMLFdBQXBCLENBQVosQ0FKWSxDQUtaOztBQUNBTCxjQUFVLENBQUNXLE9BQVgsQ0FBbUJDLElBQW5CLEdBQTBCLFNBQTFCO0FBQ0FaLGNBQVUsQ0FBQ1csT0FBWCxDQUFtQmhCLEdBQW5CLEdBQXlCYSxHQUF6Qjs7QUFDQVIsY0FBVSxDQUFDVyxPQUFYLENBQW1CRSxXQUFuQixHQUFpQyxVQUFDQyxDQUFELEVBQU87QUFDcEMsVUFBR0EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsVUFBZixDQUEwQkMsTUFBMUIsR0FBbUMsQ0FBdEMsRUFBd0M7QUFDcENDLGVBQU8sQ0FBQ0MsR0FBUix3QkFBNEJOLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULENBQWVDLFVBQWYsQ0FBMEJDLE1BQXREO0FBQ0FsQixrQkFBVSxDQUFDVyxPQUFYLENBQW1CSyxLQUFuQixDQUF5QkMsVUFBekIsQ0FBb0MsQ0FBcEMsRUFBdUNJLElBQXZDLEdBQThDLENBQTlDLENBRm9DLENBR3BDO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FmUSxFQWVOLEVBZk0sQ0FBVDtBQWlCRCxzQkFDQztBQUFBLDRCQUNJO0FBQUEsZ0JBQUl2QjtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQU8sUUFBRSxFQUFDLGNBQVY7QUFBeUIsU0FBRyxFQUFFSCxHQUE5QjtBQUFtQyxjQUFRLE1BQTNDO0FBQUEsOEJBQ0k7QUFBUSxZQUFJLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFFSTtBQUFPLFdBQUcsRUFBRUssVUFBWjtBQUF3QixZQUFJLEVBQUMsV0FBN0I7QUFBeUMsZUFBTyxFQUFDLElBQWpEO0FBQXNELGFBQUssRUFBQyxTQUE1RDtBQUFzRTtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFZSTtBQUFLLFFBQUUsRUFBQyxlQUFSO0FBQXdCLGVBQVMsRUFBQyxtQkFBbEM7QUFBQSxnQkFDS0osT0FBTyxHQUFFQSxPQUFGLEdBQVk7QUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpKO0FBQUEsa0JBREQ7QUFrQkYsQ0ExQ0Q7O0dBQU1GLFc7O0tBQUFBLFc7QUE0Q04sK0RBQWVBLFdBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZGlhUGxheWVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3QgTWVkaWFQbGF5ZXIgPSAoe3NyYywgY2FwdGlvbn0pID0+IHtcbiAgICBjb25zdCBbY3Vlcywgc2V0Q3Vlc10gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IGNhcHRpb25SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICBjb25zdCBoYW5kbGVPdXRwdXRUeXBlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBjYXB0aW9uQmxvYiA9IG5ldyBCbG9iKFtjYXB0aW9uXSwge1xuICAgICAgICAgICAgdHlwZTpcInRleHQvdnR0O2NoYXJzZXQ9dXRmLThcIlxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChjYXB0aW9uQmxvYik7XG4gICAgICAgIC8vIGNvbnN0IGNhcHRpb25FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FwdGlvblwiKVxuICAgICAgICBjYXB0aW9uUmVmLmN1cnJlbnQubW9kZSA9IFwic2hvd2luZ1wiO1xuICAgICAgICBjYXB0aW9uUmVmLmN1cnJlbnQuc3JjID0gdXJsO1xuICAgICAgICBjYXB0aW9uUmVmLmN1cnJlbnQub25jdWVjaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYoZS50YXJnZXQudHJhY2suYWN0aXZlQ3Vlcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgY3VlIGRldGVjdGVkICR7ZS50YXJnZXQudHJhY2suYWN0aXZlQ3Vlcy5sZW5ndGh9YClcbiAgICAgICAgICAgICAgICBjYXB0aW9uUmVmLmN1cnJlbnQudHJhY2suYWN0aXZlQ3Vlc1swXS5saW5lID0gMFxuICAgICAgICAgICAgICAgIC8vc2V0Q3VlcyhlLnRhcmdldC50cmFjay5hY3RpdmVDdWVzWzBdLmdldEN1ZUFzSFRNTCgpPy5jaGlsZHJlblswXT8udGV4dENvbnRlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXSlcblxuICAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgICA8cD57Y3Vlc308L3A+XG4gICAgICAgIDx2aWRlbyBpZD1cIm1lZGlhX3BsYXllclwiIHNyYz17c3JjfSBjb250cm9scz5cbiAgICAgICAgICAgIDxzb3VyY2UgdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICA8dHJhY2sgcmVmPXtjYXB0aW9uUmVmfSBraW5kPVwic3VidGl0bGVzXCIgc3JjTGFuZz1cImVuXCIgbGFiZWw9XCJFbmdsaXNoXCIgZGVmYXVsdCAvPlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJvdXRwdXQtdHlwZVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiY2FwdGlvblJiXCIgbmFtZT1cIm91dHB1dC10eXBlXCIgdmFsdWU9XCJjYXB0aW9uXCIgb25DaGFuZ2U9e2hhbmRsZU91dHB1dFR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNhcHRpb25cIj5DYXB0aW9uPC9sYWJlbD48YnIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cInRyYW5zY3JpcHRpb25SYlwiIG5hbWU9XCJvdXRwdXQtdHlwZVwiIHZhbHVlPVwidHJhbnNjcmlwdGlvblwiIGNoZWNrZWQgb25DaGFuZ2U9e2hhbmRsZU91dHB1dFR5cGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRyYW5zY3JpcHRpb25cIj5UcmFuc2NyaXB0aW9uPC9sYWJlbD48YnIgLz5cbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGlkPVwidHJhbnNjcmlwdGlvblwiIGNsYXNzTmFtZT1cInRyYW5zY3JpcHRpb24gcC00XCI+XG4gICAgICAgICAgICB7Y2FwdGlvbj8gY2FwdGlvbiA6ICdXYWl0aW5nIGZvciBhIHRyYW5zY3JpcHRpb24nfVxuICAgICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWFQbGF5ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/mediaPlayer.jsx\n");

/***/ })

});