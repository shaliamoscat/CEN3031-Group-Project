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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_trpc/client */ \"(app-pages-browser)/./src/app/_trpc/client.ts\");\n/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton */ \"(app-pages-browser)/./node_modules/react-loading-skeleton/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_CircleOff_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,CircleOff!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/check-circle.js\");\n/* harmony import */ var _barrel_optimize_names_CheckCircle_CircleOff_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CheckCircle,CircleOff!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/circle-off.js\");\n/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/format */ \"(app-pages-browser)/./node_modules/date-fns/esm/format/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n // for formatting date\n\nconst Dashboard = ()=>{\n    _s();\n    // get streak data of user from trpc backend\n    const { data: streaks, isLoading: isStreaksLoading } = _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__.trpc.getUserStreak.useQuery();\n    // get user points\n    const { data: user, isLoading: isPointsLoading } = _app_trpc_client__WEBPACK_IMPORTED_MODULE_1__.trpc.getUserPoints.useQuery();\n    // user points is defined so that sudden large increase or decrease doesn't affect tree as much\n    // but continued progress and consistency is rewarded\n    let TreeImage = \"/tree_0.png\";\n    if ((user === null || user === void 0 ? void 0 : user.netPoints) && user.netPoints > 10) TreeImage = \"/tree_0.png\";\n    if ((user === null || user === void 0 ? void 0 : user.netPoints) && user.netPoints > 30) TreeImage = \"/tree_1.png\";\n    if ((user === null || user === void 0 ? void 0 : user.netPoints) && user.netPoints > 50) TreeImage = \"/tree_2.png\";\n    if ((user === null || user === void 0 ? void 0 : user.netPoints) && user.netPoints >= 70) TreeImage = \"/tree_3.png\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"mx-auto max-w-7xl md:p-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                // to show user his score\n                className: \"text-4xl text-emerald-600 text-center font-bold\",\n                children: [\n                    \" \",\n                    \"Score \",\n                    user === null || user === void 0 ? void 0 : user.netPoints,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-4xl px-6 lg:px-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-16 flow-root sm:mt-24\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isPointsLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            count: 5,\n                            height: 500,\n                            width: 500\n                        }, void 0, false, {\n                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"mx-auto\",\n                            src: TreeImage,\n                            width: 500,\n                            height: 500,\n                            quality: 100,\n                            alt: \"AeroGrow starter plant\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: streaks && (streaks === null || streaks === void 0 ? void 0 : streaks.length) != 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-16 flex flex-col items-center gap-2 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                        className: \"table-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            // table column titles\n                                            className: \"px-4 py-2 text-emerald-700 border-2 border-gray-500\",\n                                            children: [\n                                                \" \",\n                                                \"Minutes exercised\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2 border-2 border-gray-500 text-emerald-700\",\n                                            children: [\n                                                \" \",\n                                                \"Goal Status\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                            lineNumber: 66,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                            className: \"px-4 py-2 text-emerald-700 border-2 border-gray-500\",\n                                            children: [\n                                                \" \",\n                                                \"Time\",\n                                                \" \"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: streaks// table is sorted according to the date at which user entered the streak\n                                .sort((a, b)=>new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).map((streak, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        // alternating row color for table\n                                        className: index % 2 === 0 ? \"bg-gray-200\" : \"\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"border-2 border-gray-500 px-4 py-2 \",\n                                                children: streak.minutes\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2 border-2 border-gray-500\",\n                                                children: streak.goalReached ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_CircleOff_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 47\n                                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CheckCircle_CircleOff_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 65\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2 border-2 border-gray-500\",\n                                                children: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(new Date(streak.updatedAt), \"dd-MM-yyyy hh:mm a\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                                lineNumber: 99,\n                                                columnNumber: 23\n                                            }, undefined),\n                                            \" \"\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 21\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined) : isStreaksLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    height: 60,\n                    className: \"my-2\",\n                    count: 20\n                }, void 0, false, {\n                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-16 flex flex-col items-center gap-2 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-semibold text-xl\",\n                            children: \"You have not entered anything yet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \" Please enter your exercise minutes \"\n                        }, void 0, false, {\n                            fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nike/Documents/SOFTWARE/CEN3031-Group-Project/nextJs/src/components/Dashboard.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"Py2wWPGv3JIKeFWTyCADfycX8ec=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDMEM7QUFDSTtBQUMwQjtBQUN0QyxDQUFDLHNCQUFzQjtBQUMxQjtBQUUvQixNQUFNTSxZQUFZOztJQUNoQiw0Q0FBNEM7SUFDNUMsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLFdBQVdDLGdCQUFnQixFQUFFLEdBQ2xEVixrREFBSUEsQ0FBQ1csYUFBYSxDQUFDQyxRQUFRO0lBQzdCLGtCQUFrQjtJQUNsQixNQUFNLEVBQUVMLE1BQU1NLElBQUksRUFBRUosV0FBV0ssZUFBZSxFQUFFLEdBQzlDZCxrREFBSUEsQ0FBQ2UsYUFBYSxDQUFDSCxRQUFRO0lBQzdCLCtGQUErRjtJQUMvRixxREFBcUQ7SUFDckQsSUFBSUksWUFBWTtJQUNoQixJQUFJSCxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1JLFNBQVMsS0FBSUosS0FBS0ksU0FBUyxHQUFHLElBQUlELFlBQVk7SUFDeEQsSUFBSUgsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNSSxTQUFTLEtBQUlKLEtBQUtJLFNBQVMsR0FBRyxJQUFJRCxZQUFZO0lBQ3hELElBQUlILENBQUFBLGlCQUFBQSwyQkFBQUEsS0FBTUksU0FBUyxLQUFJSixLQUFLSSxTQUFTLEdBQUcsSUFBSUQsWUFBWTtJQUN4RCxJQUFJSCxDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1JLFNBQVMsS0FBSUosS0FBS0ksU0FBUyxJQUFJLElBQUlELFlBQVk7SUFDekQscUJBQ0UsOERBQUNFO1FBQUtDLFdBQVU7OzBCQUNkLDhEQUFDQztnQkFDQyx5QkFBeUI7Z0JBQ3pCRCxXQUFVOztvQkFFVDtvQkFBSTtvQkFDRU4saUJBQUFBLDJCQUFBQSxLQUFNSSxTQUFTO29CQUFFOzs7Ozs7OzBCQUUxQiw4REFBQ0c7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQztrQ0FDRU4sZ0NBQ0MsOERBQUNiLDhEQUFRQTs0QkFBQ29CLE9BQU87NEJBQUdDLFFBQVE7NEJBQUtDLE9BQU87Ozs7O3NEQUV4Qyw4REFBQ2xCLG1EQUFLQTs0QkFDSmMsV0FBVTs0QkFDVkssS0FBS1I7NEJBQ0xPLE9BQU87NEJBQ1BELFFBQVE7NEJBQ1JHLFNBQVM7NEJBQ1RDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNZCw4REFBQ047MEJBR0VaLFdBQVdBLENBQUFBLG9CQUFBQSw4QkFBQUEsUUFBU21CLE1BQU0sS0FBSSxrQkFDN0IsOERBQUNQO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDUzt3QkFBTVQsV0FBVTs7MENBQ2YsOERBQUNVOzBDQUNDLDRFQUFDQzs7c0RBR0MsOERBQUNDOzRDQUNDLHNCQUFzQjs0Q0FDdEJaLFdBQVU7O2dEQUVUO2dEQUFJOzs7Ozs7O3NEQUdQLDhEQUFDWTs0Q0FBR1osV0FBVTs7Z0RBQ1g7Z0RBQUk7Ozs7Ozs7c0RBR1AsOERBQUNZOzRDQUFHWixXQUFVOztnREFDWDtnREFBSTtnREFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUlYLDhEQUFDYTswQ0FFRXhCLE9BQ0MseUVBQXlFO2lDQUN4RXlCLElBQUksQ0FDSCxDQUFDQyxHQUFHQyxJQUNGLElBQUlDLEtBQUtELEVBQUVFLFNBQVMsRUFBRUMsT0FBTyxLQUM3QixJQUFJRixLQUFLRixFQUFFRyxTQUFTLEVBQUVDLE9BQU8sSUFFaENDLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDWiw4REFBQ1g7d0NBR0Msa0NBQWtDO3dDQUNsQ1gsV0FBV3NCLFFBQVEsTUFBTSxJQUFJLGdCQUFnQjs7MERBRTdDLDhEQUFDQztnREFBR3ZCLFdBQVU7MERBQ1hxQixPQUFPRyxPQUFPOzs7Ozs7MERBR2pCLDhEQUFDRDtnREFBR3ZCLFdBQVU7MERBQ1hxQixPQUFPSSxXQUFXLGlCQUFHLDhEQUFDMUMsaUdBQVdBOzs7OzhFQUFNLDhEQUFDQyxpR0FBU0E7Ozs7Ozs7Ozs7MERBRXBELDhEQUFDdUM7Z0RBQUd2QixXQUFVOzBEQUVYZiwyREFBTUEsQ0FDTCxJQUFJZ0MsS0FBS0ksT0FBT0gsU0FBUyxHQUN6Qjs7Ozs7OzRDQUVFOzt1Q0FqQkRJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0F3Qm5CL0IsaUNBQ0UsOERBQUNULDhEQUFRQTtvQkFBQ3FCLFFBQVE7b0JBQUlILFdBQVU7b0JBQU9FLE9BQU87Ozs7OzhDQUU5Qyw4REFBQ0Q7b0JBQUlELFdBQVU7O3NDQUViLDhEQUFDMEI7NEJBQUcxQixXQUFVO3NDQUF3Qjs7Ozs7O3NDQUd0Qyw4REFBQzJCO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0dBdEhNeEM7S0FBQUE7QUF3SE4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkLnRzeD80ZTYzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdHJwYyB9IGZyb20gXCJAL2FwcC9fdHJwYy9jbGllbnRcIjtcbmltcG9ydCBTa2VsZXRvbiBmcm9tIFwicmVhY3QtbG9hZGluZy1za2VsZXRvblwiO1xuaW1wb3J0IHsgQ2hlY2tDaXJjbGUsIENpcmNsZURhc2hlZEljb24sIENpcmNsZU9mZiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiOyAvLyBmb3IgZm9ybWF0dGluZyBkYXRlXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICAvLyBnZXQgc3RyZWFrIGRhdGEgb2YgdXNlciBmcm9tIHRycGMgYmFja2VuZFxuICBjb25zdCB7IGRhdGE6IHN0cmVha3MsIGlzTG9hZGluZzogaXNTdHJlYWtzTG9hZGluZyB9ID1cbiAgICB0cnBjLmdldFVzZXJTdHJlYWsudXNlUXVlcnkoKTtcbiAgLy8gZ2V0IHVzZXIgcG9pbnRzXG4gIGNvbnN0IHsgZGF0YTogdXNlciwgaXNMb2FkaW5nOiBpc1BvaW50c0xvYWRpbmcgfSA9XG4gICAgdHJwYy5nZXRVc2VyUG9pbnRzLnVzZVF1ZXJ5KCk7XG4gIC8vIHVzZXIgcG9pbnRzIGlzIGRlZmluZWQgc28gdGhhdCBzdWRkZW4gbGFyZ2UgaW5jcmVhc2Ugb3IgZGVjcmVhc2UgZG9lc24ndCBhZmZlY3QgdHJlZSBhcyBtdWNoXG4gIC8vIGJ1dCBjb250aW51ZWQgcHJvZ3Jlc3MgYW5kIGNvbnNpc3RlbmN5IGlzIHJld2FyZGVkXG4gIGxldCBUcmVlSW1hZ2UgPSBcIi90cmVlXzAucG5nXCI7XG4gIGlmICh1c2VyPy5uZXRQb2ludHMgJiYgdXNlci5uZXRQb2ludHMgPiAxMCkgVHJlZUltYWdlID0gXCIvdHJlZV8wLnBuZ1wiO1xuICBpZiAodXNlcj8ubmV0UG9pbnRzICYmIHVzZXIubmV0UG9pbnRzID4gMzApIFRyZWVJbWFnZSA9IFwiL3RyZWVfMS5wbmdcIjtcbiAgaWYgKHVzZXI/Lm5ldFBvaW50cyAmJiB1c2VyLm5ldFBvaW50cyA+IDUwKSBUcmVlSW1hZ2UgPSBcIi90cmVlXzIucG5nXCI7XG4gIGlmICh1c2VyPy5uZXRQb2ludHMgJiYgdXNlci5uZXRQb2ludHMgPj0gNzApIFRyZWVJbWFnZSA9IFwiL3RyZWVfMy5wbmdcIjtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBtZDpwLTEwXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIC8vIHRvIHNob3cgdXNlciBoaXMgc2NvcmVcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC00eGwgdGV4dC1lbWVyYWxkLTYwMCB0ZXh0LWNlbnRlciBmb250LWJvbGRcIlxuICAgICAgPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIFNjb3JlIHt1c2VyPy5uZXRQb2ludHN9e1wiIFwifVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctNHhsIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2IGZsb3ctcm9vdCBzbTptdC0yNFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aXNQb2ludHNMb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8U2tlbGV0b24gY291bnQ9ezV9IGhlaWdodD17NTAwfSB3aWR0aD17NTAwfSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgc3JjPXtUcmVlSW1hZ2V9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICBxdWFsaXR5PXsxMDB9XG4gICAgICAgICAgICAgICAgYWx0PVwiQWVyb0dyb3cgc3RhcnRlciBwbGFudFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgLy8gY2hlY2sgaWYgc3RyZWFrIGRhdGEgZXhpc3RzIGFuZCBpcyBub3QgZW1wdHlcbiAgICAgID5cbiAgICAgICAge3N0cmVha3MgJiYgc3RyZWFrcz8ubGVuZ3RoICE9IDAgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNiBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtMiBcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBjcmVhdGUgYSB0YWJsZSB0byBkaXNwbGF5IHN0cmVhayBpbmZvIHRvIHRoZSB1c2VyXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRhYmxlIGNvbHVtbiB0aXRsZXNcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtNCBweS0yIHRleHQtZW1lcmFsZC03MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBNaW51dGVzIGV4ZXJjaXNlZFxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHRleHQtZW1lcmFsZC03MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBHb2FsIFN0YXR1c1xuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC00IHB5LTIgdGV4dC1lbWVyYWxkLTcwMCBib3JkZXItMiBib3JkZXItZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBUaW1le1wiIFwifVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgey8qIGRhdGUgYXQgd2hpY2ggdXNlciBlbnRlcmVkIHRoZSBzdHJlYWsgaXMgZmV0Y2hlZCAgKi99XG4gICAgICAgICAgICAgICAge3N0cmVha3NcbiAgICAgICAgICAgICAgICAgIC8vIHRhYmxlIGlzIHNvcnRlZCBhY2NvcmRpbmcgdG8gdGhlIGRhdGUgYXQgd2hpY2ggdXNlciBlbnRlcmVkIHRoZSBzdHJlYWtcbiAgICAgICAgICAgICAgICAgIC5zb3J0KFxuICAgICAgICAgICAgICAgICAgICAoYSwgYikgPT5cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShiLnVwZGF0ZWRBdCkuZ2V0VGltZSgpIC1cbiAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShhLnVwZGF0ZWRBdCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAubWFwKChzdHJlYWssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgIC8vIG1hcCBlYWNoIHN0cmVhayB0byBhIHJvdyBpbiB0aGUgdGFibGVcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGFsdGVybmF0aW5nIHJvdyBjb2xvciBmb3IgdGFibGVcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2luZGV4ICUgMiA9PT0gMCA/IFwiYmctZ3JheS0yMDBcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLTIgYm9yZGVyLWdyYXktNTAwIHB4LTQgcHktMiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJlYWsubWludXRlc31cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBhIHN5bWJvbCBpcyBkaXNwbGF5ZWQgZGVwZW5kaW5nIG9uIHdoZWh0ZXIgZ29hbCB3YXMgcmVhY2hlZCBvciBub3QgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXItMiBib3JkZXItZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdHJlYWsuZ29hbFJlYWNoZWQgPyA8Q2hlY2tDaXJjbGUgLz4gOiA8Q2lyY2xlT2ZmIC8+fVxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiBib3JkZXItMiBib3JkZXItZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBkYXRlIGlzIGZvcm1hdHRlZCB3aXRoIGRhdGUtZm5zIGxpYnJhcnkgLSByYXcgZGF0ZSB0byBkZCBNTSB5eXl5IGhoOm1tIGEgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzdHJlYWsudXBkYXRlZEF0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZC1NTS15eXl5IGhoOm1tIGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IC8vIGxvYWRpbmcgZ3JhcGhpY3NcbiAgICAgICAgaXNTdHJlYWtzTG9hZGluZyA/IChcbiAgICAgICAgICA8U2tlbGV0b24gaGVpZ2h0PXs2MH0gY2xhc3NOYW1lPVwibXktMlwiIGNvdW50PXsyMH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0yIFwiPlxuICAgICAgICAgICAgey8qICBpZiBub3N0cmVha3Mgc2hvdyB5b3UgaGF2ZSBub3QgZW50ZXJlZCBhbnl0aGluZyB5ZXQgKi99XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgIFlvdSBoYXZlIG5vdCBlbnRlcmVkIGFueXRoaW5nIHlldFxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwPiBQbGVhc2UgZW50ZXIgeW91ciBleGVyY2lzZSBtaW51dGVzIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJ0cnBjIiwiU2tlbGV0b24iLCJDaGVja0NpcmNsZSIsIkNpcmNsZU9mZiIsImZvcm1hdCIsIkltYWdlIiwiRGFzaGJvYXJkIiwiZGF0YSIsInN0cmVha3MiLCJpc0xvYWRpbmciLCJpc1N0cmVha3NMb2FkaW5nIiwiZ2V0VXNlclN0cmVhayIsInVzZVF1ZXJ5IiwidXNlciIsImlzUG9pbnRzTG9hZGluZyIsImdldFVzZXJQb2ludHMiLCJUcmVlSW1hZ2UiLCJuZXRQb2ludHMiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiY291bnQiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsInF1YWxpdHkiLCJhbHQiLCJsZW5ndGgiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5Iiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInVwZGF0ZWRBdCIsImdldFRpbWUiLCJtYXAiLCJzdHJlYWsiLCJpbmRleCIsInRkIiwibWludXRlcyIsImdvYWxSZWFjaGVkIiwiaDMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Dashboard.tsx\n"));

/***/ })

});