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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_trpc/client */ \"(app-pages-browser)/./src/app/_trpc/client.ts\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton */ \"(app-pages-browser)/./node_modules/react-loading-skeleton/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_CircleOff_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,CircleOff!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check-circle.js\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_CircleOff_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,CircleOff!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-off.js\");\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns/format */ \"(app-pages-browser)/./node_modules/date-fns/esm/format/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // for formatting date\n\nconst Dashboard = ()=>{\n    _s();\n    // get streak data of user from trpc backend\n    const { data: streaks, isLoading } = _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__.trpc.getUserStreak.useQuery();\n    // get user points\n    const { data: user } = _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__.trpc.getUserPoints.useQuery();\n    // user points is defined so that sudden large increase or decrease doesn't affect tree as much\n    // but continued progress and consistency is rewarded\n    let TreeImage = \"/tree_0.png\";\n    if ((user === null || user === void 0 ? void 0 : user.netPoints) && user.netPoints > 10) TreeImage = \"/tree_0.png\";\n    if ((user === null || user === void 0 ? void 0 : user.netPoints) && user.netPoints > 30) TreeImage = \"/tree_1.png\";\n    if ((user === null || user === void 0 ? void 0 : user.netPoints) && user.netPoints > 50) TreeImage = \"/tree_2.png\";\n    if ((user === null || user === void 0 ? void 0 : user.netPoints) && user.netPoints >= 70) TreeImage = \"/tree_3.png\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mx-auto max-w-7xl md:p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-4xl text-emerald-600 text-center font-bold\",\n                children: [\n                    \" \",\n                    \"Score \",\n                    user === null || user === void 0 ? void 0 : user.netPoints,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-4xl px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-16 flow-root sm:mt-24\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"mx-auto\",\n                            // src=\"/Flower.jpg\"\n                            src: flowerImage,\n                            width: 500,\n                            height: 500,\n                            quality: 100,\n                            alt: \"AeroGrow starter plant\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: streaks && (streaks === null || streaks === void 0 ? void 0 : streaks.length) != 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-16 flex flex-col items-center gap-2 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2 text-emerald-700 border-2 border-gray-500\",\n                                            children: [\n                                                \" \",\n                                                \"Minutes exercised\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2 border-2 border-gray-500 text-emerald-700\",\n                                            children: [\n                                                \" \",\n                                                \"Goal Status\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2 text-emerald-700 border-2 border-gray-500\",\n                                            children: [\n                                                \" \",\n                                                \"Time\",\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: streaks.sort((a, b)=>new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).map((streak, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        className: index % 2 === 0 ? \"bg-gray-200\" : \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"border-2 border-gray-500 px-4 py-2 \",\n                                                children: streak.minutes\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2 border-2 border-gray-500\",\n                                                children: streak.goalReached ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_CircleOff_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 47\n                                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_CircleOff_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 65\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2 border-2 border-gray-500\",\n                                                children: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(new Date(streak.updatedAt), \"dd-MM-yyyy hh:mm a\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            \" \"\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 21\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, undefined) : isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    height: 60,\n                    className: \"my-2\",\n                    count: 20\n                }, void 0, false, {\n                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-16 flex flex-col items-center gap-2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-semibold text-xl\",\n                            children: \"You have not entered anything yet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \" Please enter your exercise minutes \"\n                        }, void 0, false, {\n                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"69sMwL6AeMjKkeLbxI8gss1bYZs=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEM7QUFDSTtBQUMwQjtBQUN0QyxDQUFDLHNCQUFzQjtBQUMxQjtBQUUvQixNQUFNTSxZQUFZOztJQUNoQiw0Q0FBNEM7SUFDNUMsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLFNBQVMsRUFBRSxHQUFHVCxrREFBSUEsQ0FBQ1UsYUFBYSxDQUFDQyxRQUFRO0lBQ2hFLGtCQUFrQjtJQUNsQixNQUFNLEVBQUVKLE1BQU1LLElBQUksRUFBRSxHQUFHWixrREFBSUEsQ0FBQ2EsYUFBYSxDQUFDRixRQUFRO0lBQ2xELCtGQUErRjtJQUMvRixxREFBcUQ7SUFDckQsSUFBSUcsWUFBWTtJQUNoQixJQUFJRixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1HLFNBQVMsS0FBSUgsS0FBS0csU0FBUyxHQUFHLElBQUlELFlBQVk7SUFDeEQsSUFBSUYsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNRyxTQUFTLEtBQUlILEtBQUtHLFNBQVMsR0FBRyxJQUFJRCxZQUFZO0lBQ3hELElBQUlGLENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTUcsU0FBUyxLQUFJSCxLQUFLRyxTQUFTLEdBQUcsSUFBSUQsWUFBWTtJQUN4RCxJQUFJRixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1HLFNBQVMsS0FBSUgsS0FBS0csU0FBUyxJQUFJLElBQUlELFlBQVk7SUFDekQscUJBQ0UsOERBQUNFO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFBSUQsV0FBVTs7b0JBQ1o7b0JBQUk7b0JBQ0VMLGlCQUFBQSwyQkFBQUEsS0FBTUcsU0FBUztvQkFBRTs7Ozs7OzswQkFFMUIsOERBQUNHO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDQztvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ0M7a0NBQ0MsNEVBQUNiLG1EQUFLQTs0QkFDSlksV0FBVTs0QkFDVixvQkFBb0I7NEJBQ3BCRSxLQUFLQzs0QkFDTEMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsU0FBUzs0QkFDVEMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtaLDhEQUFDTjswQkFDRVYsV0FBV0EsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTaUIsTUFBTSxLQUFJLGtCQUM3Qiw4REFBQ1A7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNTO3dCQUFNVCxXQUFVOzswQ0FDZiw4REFBQ1U7MENBQ0MsNEVBQUNDOztzREFDQyw4REFBQ0M7NENBQUdaLFdBQVU7O2dEQUNYO2dEQUFJOzs7Ozs7O3NEQUdQLDhEQUFDWTs0Q0FBR1osV0FBVTs7Z0RBQ1g7Z0RBQUk7Ozs7Ozs7c0RBR1AsOERBQUNZOzRDQUFHWixXQUFVOztnREFDWDtnREFBSTtnREFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlYLDhEQUFDYTswQ0FDRXRCLFFBQ0V1QixJQUFJLENBQ0gsQ0FBQ0MsR0FBR0MsSUFDRixJQUFJQyxLQUFLRCxFQUFFRSxTQUFTLEVBQUVDLE9BQU8sS0FDN0IsSUFBSUYsS0FBS0YsRUFBRUcsU0FBUyxFQUFFQyxPQUFPLElBRWhDQyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ1osOERBQUNYO3dDQUVDWCxXQUFXc0IsUUFBUSxNQUFNLElBQUksZ0JBQWdCOzswREFFN0MsOERBQUNDO2dEQUFHdkIsV0FBVTswREFDWHFCLE9BQU9HLE9BQU87Ozs7OzswREFFakIsOERBQUNEO2dEQUFHdkIsV0FBVTswREFDWHFCLE9BQU9JLFdBQVcsaUJBQUcsOERBQUN4QyxpR0FBV0E7Ozs7OEVBQU0sOERBQUNDLGlHQUFTQTs7Ozs7Ozs7OzswREFFcEQsOERBQUNxQztnREFBR3ZCLFdBQVU7MERBQ1hiLDJEQUFNQSxDQUNMLElBQUk4QixLQUFLSSxPQUFPSCxTQUFTLEdBQ3pCOzs7Ozs7NENBRUU7O3VDQWRESTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBb0JmOUIsMEJBQ0YsOERBQUNSLDhEQUFRQTtvQkFBQ3FCLFFBQVE7b0JBQUlMLFdBQVU7b0JBQU8wQixPQUFPOzs7Ozs4Q0FFOUMsOERBQUN6QjtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUMyQjs0QkFBRzNCLFdBQVU7c0NBQXdCOzs7Ozs7c0NBR3RDLDhEQUFDNEI7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWY7R0EvRk12QztLQUFBQTtBQWlHTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmQudHN4PzRlNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB0cnBjIH0gZnJvbSBcIkAvYXBwL190cnBjL2NsaWVudFwiO1xuaW1wb3J0IFNrZWxldG9uIGZyb20gXCJyZWFjdC1sb2FkaW5nLXNrZWxldG9uXCI7XG5pbXBvcnQgeyBDaGVja0NpcmNsZSwgQ2lyY2xlRGFzaGVkSWNvbiwgQ2lyY2xlT2ZmIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7IC8vIGZvciBmb3JtYXR0aW5nIGRhdGVcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIC8vIGdldCBzdHJlYWsgZGF0YSBvZiB1c2VyIGZyb20gdHJwYyBiYWNrZW5kXG4gIGNvbnN0IHsgZGF0YTogc3RyZWFrcywgaXNMb2FkaW5nIH0gPSB0cnBjLmdldFVzZXJTdHJlYWsudXNlUXVlcnkoKTtcbiAgLy8gZ2V0IHVzZXIgcG9pbnRzXG4gIGNvbnN0IHsgZGF0YTogdXNlciB9ID0gdHJwYy5nZXRVc2VyUG9pbnRzLnVzZVF1ZXJ5KCk7XG4gIC8vIHVzZXIgcG9pbnRzIGlzIGRlZmluZWQgc28gdGhhdCBzdWRkZW4gbGFyZ2UgaW5jcmVhc2Ugb3IgZGVjcmVhc2UgZG9lc24ndCBhZmZlY3QgdHJlZSBhcyBtdWNoXG4gIC8vIGJ1dCBjb250aW51ZWQgcHJvZ3Jlc3MgYW5kIGNvbnNpc3RlbmN5IGlzIHJld2FyZGVkXG4gIGxldCBUcmVlSW1hZ2UgPSBcIi90cmVlXzAucG5nXCI7XG4gIGlmICh1c2VyPy5uZXRQb2ludHMgJiYgdXNlci5uZXRQb2ludHMgPiAxMCkgVHJlZUltYWdlID0gXCIvdHJlZV8wLnBuZ1wiO1xuICBpZiAodXNlcj8ubmV0UG9pbnRzICYmIHVzZXIubmV0UG9pbnRzID4gMzApIFRyZWVJbWFnZSA9IFwiL3RyZWVfMS5wbmdcIjtcbiAgaWYgKHVzZXI/Lm5ldFBvaW50cyAmJiB1c2VyLm5ldFBvaW50cyA+IDUwKSBUcmVlSW1hZ2UgPSBcIi90cmVlXzIucG5nXCI7XG4gIGlmICh1c2VyPy5uZXRQb2ludHMgJiYgdXNlci5uZXRQb2ludHMgPj0gNzApIFRyZWVJbWFnZSA9IFwiL3RyZWVfMy5wbmdcIjtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBtZDpwLTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtNHhsIHRleHQtZW1lcmFsZC02MDAgdGV4dC1jZW50ZXIgZm9udC1ib2xkXCI+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgU2NvcmUge3VzZXI/Lm5ldFBvaW50c317XCIgXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy00eGwgcHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTYgZmxvdy1yb290IHNtOm10LTI0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvXCJcbiAgICAgICAgICAgICAgLy8gc3JjPVwiL0Zsb3dlci5qcGdcIlxuICAgICAgICAgICAgICBzcmM9e2Zsb3dlckltYWdlfVxuICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAgICAgICBhbHQ9XCJBZXJvR3JvdyBzdGFydGVyIHBsYW50XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7c3RyZWFrcyAmJiBzdHJlYWtzPy5sZW5ndGggIT0gMCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yIFwiPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWF1dG9cIj5cbiAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1lbWVyYWxkLTcwMCBib3JkZXItMiBib3JkZXItZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBNaW51dGVzIGV4ZXJjaXNlZFxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHRleHQtZW1lcmFsZC03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBHb2FsIFN0YXR1c1xuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1lbWVyYWxkLTcwMCBib3JkZXItMiBib3JkZXItZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBUaW1le1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3N0cmVha3NcbiAgICAgICAgICAgICAgICAgIC5zb3J0KFxuICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShiLnVwZGF0ZWRBdCkuZ2V0VGltZSgpIC1cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShhLnVwZGF0ZWRBdCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAubWFwKChzdHJlYWssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpbmRleCAlIDIgPT09IDAgPyBcImJnLWdyYXktMjAwXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci0yIGJvcmRlci1ncmF5LTUwMCBweC00IHB5LTIgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RyZWFrLm1pbnV0ZXN9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N0cmVhay5nb2FsUmVhY2hlZCA/IDxDaGVja0NpcmNsZSAvPiA6IDxDaXJjbGVPZmYgLz59XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNCBweS0yIGJvcmRlci0yIGJvcmRlci1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoc3RyZWFrLnVwZGF0ZWRBdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGQtTU0teXl5eSBoaDptbSBhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgPFNrZWxldG9uIGhlaWdodD17NjB9IGNsYXNzTmFtZT1cIm15LTJcIiBjb3VudD17MjB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiBcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGxcIj5cbiAgICAgICAgICAgICAgWW91IGhhdmUgbm90IGVudGVyZWQgYW55dGhpbmcgeWV0XG4gICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgPHA+IFBsZWFzZSBlbnRlciB5b3VyIGV4ZXJjaXNlIG1pbnV0ZXMgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkO1xuIl0sIm5hbWVzIjpbInRycGMiLCJTa2VsZXRvbiIsIkNoZWNrQ2lyY2xlIiwiQ2lyY2xlT2ZmIiwiZm9ybWF0IiwiSW1hZ2UiLCJEYXNoYm9hcmQiLCJkYXRhIiwic3RyZWFrcyIsImlzTG9hZGluZyIsImdldFVzZXJTdHJlYWsiLCJ1c2VRdWVyeSIsInVzZXIiLCJnZXRVc2VyUG9pbnRzIiwiVHJlZUltYWdlIiwibmV0UG9pbnRzIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImZsb3dlckltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJxdWFsaXR5IiwiYWx0IiwibGVuZ3RoIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJnZXRUaW1lIiwibWFwIiwic3RyZWFrIiwiaW5kZXgiLCJ0ZCIsIm1pbnV0ZXMiLCJnb2FsUmVhY2hlZCIsImNvdW50IiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Dashboard.tsx\n"));

/***/ })

});