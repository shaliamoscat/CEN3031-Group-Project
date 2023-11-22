"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/components/Dashboard.tsx":
/*!**************************************!*\
  !*** ./src/components/Dashboard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_trpc/client */ \"(app-pages-browser)/./src/app/_trpc/client.ts\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loading-skeleton */ \"(app-pages-browser)/./node_modules/react-loading-skeleton/dist/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n// date formatting\nfunction formatDate(dateString) {\n    const date = new Date(dateString);\n    const day = String(date.getDate()).padStart(2, \"0\");\n    const month = String(date.getMonth() + 1).padStart(2, \"0\"); // Months are 0-based in JavaScript\n    const year = date.getFullYear();\n    // Get hours and minutes\n    const hours = date.getHours();\n    const minutes = String(date.getMinutes()).padStart(2, \"0\");\n    // Convert 24-hour time to 12-hour time\n    const twelveHourHours = hours % 12 || 12;\n    const amPm = hours < 12 ? \"am\" : \"pm\";\n    return \"\".concat(day, \"-\").concat(month, \"-\").concat(year, \" \").concat(twelveHourHours, \":\").concat(minutes, \" \").concat(amPm);\n}\nconst Dashboard = ()=>{\n    _s();\n    const { data: streaks, isLoading } = _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__.trpc.getUserStreak.useQuery();\n    // return (<div> Hello world </div>)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mx-auto max-w-7xl md:p-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: streaks && (streaks === null || streaks === void 0 ? void 0 : streaks.length) != 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"table-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-4 py-2 text-emerald-700\",\n                                    children: [\n                                        \" \",\n                                        \"Minutes exercised\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-4 py-2 text-emerald-700\",\n                                    children: \" Goal Status\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"px-4 py-2 text-emerald-700\",\n                                    children: \" Time \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: streaks.map((streak, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                className: index % 2 === 0 ? \"bg-gray-200\" : \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border px-4 py-2\",\n                                        children: streak.minutes\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border px-4 py-2\",\n                                        children: streak.goalReached\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border px-4 py-2\",\n                                        children: formatDate(streak.updatedAt)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, undefined) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                height: 60,\n                className: \"my-2\",\n                count: 20\n            }, void 0, false, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 58,\n                columnNumber: 11\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-16 flex flex-col items-center gap-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"font-semibold text-xl\",\n                        children: \"You have not entered anything yet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \" Please enter your exercise minutes \"\n                    }, void 0, false, {\n                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 60,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"DWvIWbpbyFjZquLcujRClBaIrIw=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzBDO0FBQ0k7QUFFOUMsa0JBQWtCO0FBQ2xCLFNBQVNFLFdBQVdDLFVBQWtCO0lBQ3BDLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0Y7SUFDdEIsTUFBTUcsTUFBTUMsT0FBT0gsS0FBS0ksT0FBTyxJQUFJQyxRQUFRLENBQUMsR0FBRztJQUMvQyxNQUFNQyxRQUFRSCxPQUFPSCxLQUFLTyxRQUFRLEtBQUssR0FBR0YsUUFBUSxDQUFDLEdBQUcsTUFBTSxtQ0FBbUM7SUFDL0YsTUFBTUcsT0FBT1IsS0FBS1MsV0FBVztJQUU3Qix3QkFBd0I7SUFDeEIsTUFBTUMsUUFBUVYsS0FBS1csUUFBUTtJQUMzQixNQUFNQyxVQUFVVCxPQUFPSCxLQUFLYSxVQUFVLElBQUlSLFFBQVEsQ0FBQyxHQUFHO0lBRXRELHVDQUF1QztJQUN2QyxNQUFNUyxrQkFBa0JKLFFBQVEsTUFBTTtJQUN0QyxNQUFNSyxPQUFPTCxRQUFRLEtBQUssT0FBTztJQUVqQyxPQUFPLEdBQVVKLE9BQVBKLEtBQUksS0FBWU0sT0FBVEYsT0FBTSxLQUFXUSxPQUFSTixNQUFLLEtBQXNCSSxPQUFuQkUsaUJBQWdCLEtBQWNDLE9BQVhILFNBQVEsS0FBUSxPQUFMRztBQUNsRTtBQUVBLE1BQU1DLFlBQVk7O0lBQ2hCLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxTQUFTLEVBQUUsR0FBR3ZCLGtEQUFJQSxDQUFDd0IsYUFBYSxDQUFDQyxRQUFRO0lBRWhFLG9DQUFvQztJQUNwQyxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7c0JBQ0VOLFdBQVdBLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU08sTUFBTSxLQUFJLGtCQUM3Qiw4REFBQ0M7Z0JBQU1ILFdBQVU7O2tDQUNmLDhEQUFDSTtrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQztvQ0FBR04sV0FBVTs7d0NBQ1g7d0NBQUk7Ozs7Ozs7OENBR1AsOERBQUNNO29DQUFHTixXQUFVOzhDQUE2Qjs7Ozs7OzhDQUMzQyw4REFBQ007b0NBQUdOLFdBQVU7OENBQTZCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHL0MsOERBQUNPO2tDQUNFWixRQUFRYSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3BCLDhEQUFDTDtnQ0FFQ0wsV0FBV1UsUUFBUSxNQUFNLElBQUksZ0JBQWdCOztrREFFN0MsOERBQUNDO3dDQUFHWCxXQUFVO2tEQUFvQlMsT0FBT3BCLE9BQU87Ozs7OztrREFDaEQsOERBQUNzQjt3Q0FBR1gsV0FBVTtrREFBb0JTLE9BQU9HLFdBQVc7Ozs7OztrREFDcEQsOERBQUNEO3dDQUFHWCxXQUFVO2tEQUNYekIsV0FBV2tDLE9BQU9JLFNBQVM7Ozs7OztvQ0FDeEI7OytCQVBESDs7Ozs7Ozs7Ozs7Ozs7OzRCQVlYZCwwQkFDRiw4REFBQ3RCLDhEQUFRQTtnQkFBQ3dDLFFBQVE7Z0JBQUlkLFdBQVU7Z0JBQU9lLE9BQU87Ozs7OzBDQUU5Qyw4REFBQ2Q7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDZ0I7d0JBQUdoQixXQUFVO2tDQUF3Qjs7Ozs7O2tDQUd0Qyw4REFBQ2lCO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0EvQ014QjtLQUFBQTtBQWlETiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4PzRlNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB0cnBjIH0gZnJvbSBcIkAvYXBwL190cnBjL2NsaWVudFwiO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XG5cbi8vIGRhdGUgZm9ybWF0dGluZ1xuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlU3RyaW5nOiBzdHJpbmcpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuICBjb25zdCBkYXkgPSBTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgY29uc3QgbW9udGggPSBTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpOyAvLyBNb250aHMgYXJlIDAtYmFzZWQgaW4gSmF2YVNjcmlwdFxuICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gIC8vIEdldCBob3VycyBhbmQgbWludXRlc1xuICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhkYXRlLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuXG4gIC8vIENvbnZlcnQgMjQtaG91ciB0aW1lIHRvIDEyLWhvdXIgdGltZVxuICBjb25zdCB0d2VsdmVIb3VySG91cnMgPSBob3VycyAlIDEyIHx8IDEyO1xuICBjb25zdCBhbVBtID0gaG91cnMgPCAxMiA/IFwiYW1cIiA6IFwicG1cIjtcblxuICByZXR1cm4gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9ICR7dHdlbHZlSG91ckhvdXJzfToke21pbnV0ZXN9ICR7YW1QbX1gO1xufVxuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogc3RyZWFrcywgaXNMb2FkaW5nIH0gPSB0cnBjLmdldFVzZXJTdHJlYWsudXNlUXVlcnkoKTtcblxuICAvLyByZXR1cm4gKDxkaXY+IEhlbGxvIHdvcmxkIDwvZGl2PilcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBtZDpwLTEwXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7c3RyZWFrcyAmJiBzdHJlYWtzPy5sZW5ndGggIT0gMCA/IChcbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYXV0b1wiPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWVtZXJhbGQtNzAwXCI+XG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICBNaW51dGVzIGV4ZXJjaXNlZFxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWVtZXJhbGQtNzAwXCI+IEdvYWwgU3RhdHVzPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtZW1lcmFsZC03MDBcIj4gVGltZSA8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3N0cmVha3MubWFwKChzdHJlYWssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleCAlIDIgPT09IDAgPyBcImJnLWdyYXktMjAwXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+e3N0cmVhay5taW51dGVzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyIHB4LTQgcHktMlwiPntzdHJlYWsuZ29hbFJlYWNoZWR9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgcHgtNCBweS0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKHN0cmVhay51cGRhdGVkQXQpfVxuICAgICAgICAgICAgICAgICAgPC90ZD57XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICkgOiBpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPFNrZWxldG9uIGhlaWdodD17NjB9IGNsYXNzTmFtZT1cIm15LTJcIiBjb3VudD17MjB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGxcIj5cbiAgICAgICAgICAgICAgWW91IGhhdmUgbm90IGVudGVyZWQgYW55dGhpbmcgeWV0XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+IFBsZWFzZSBlbnRlciB5b3VyIGV4ZXJjaXNlIG1pbnV0ZXMgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIl0sIm5hbWVzIjpbInRycGMiLCJTa2VsZXRvbiIsImZvcm1hdERhdGUiLCJkYXRlU3RyaW5nIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwidHdlbHZlSG91ckhvdXJzIiwiYW1QbSIsIkRhc2hib2FyZCIsImRhdGEiLCJzdHJlYWtzIiwiaXNMb2FkaW5nIiwiZ2V0VXNlclN0cmVhayIsInVzZVF1ZXJ5IiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImxlbmd0aCIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJzdHJlYWsiLCJpbmRleCIsInRkIiwiZ29hbFJlYWNoZWQiLCJ1cGRhdGVkQXQiLCJoZWlnaHQiLCJjb3VudCIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Dashboard.tsx\n"));

/***/ })

});