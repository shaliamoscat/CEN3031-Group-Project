"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uncrypto";
exports.ids = ["vendor-chunks/uncrypto"];
exports.modules = {

/***/ "(rsc)/./node_modules/uncrypto/dist/crypto.node.cjs":
/*!****************************************************!*\
  !*** ./node_modules/uncrypto/dist/crypto.node.cjs ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst nodeCrypto = __webpack_require__(/*! node:crypto */ \"node:crypto\");\nfunction _interopDefaultCompat(e) {\n    return e && typeof e === \"object\" && \"default\" in e ? e.default : e;\n}\nconst nodeCrypto__default = /*#__PURE__*/ _interopDefaultCompat(nodeCrypto);\nconst subtle = nodeCrypto__default.webcrypto?.subtle || {};\nconst randomUUID = ()=>{\n    return nodeCrypto__default.randomUUID();\n};\nconst getRandomValues = (array)=>{\n    return nodeCrypto__default.webcrypto.getRandomValues(array);\n};\nconst _crypto = {\n    randomUUID,\n    getRandomValues,\n    subtle\n};\nexports[\"default\"] = _crypto;\nexports.getRandomValues = getRandomValues;\nexports.randomUUID = randomUUID;\nexports.subtle = subtle;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5jcnlwdG8vZGlzdC9jcnlwdG8ubm9kZS5janMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQUEsOENBQTZDO0lBQUVHLE9BQU87QUFBSyxDQUFDLEVBQUM7QUFFN0QsTUFBTUMsYUFBYUMsbUJBQU9BLENBQUM7QUFFM0IsU0FBU0Msc0JBQXVCQyxDQUFDO0lBQUksT0FBT0EsS0FBSyxPQUFPQSxNQUFNLFlBQVksYUFBYUEsSUFBSUEsRUFBRUMsT0FBTyxHQUFHRDtBQUFHO0FBRTFHLE1BQU1FLHNCQUFzQixXQUFXLEdBQUVILHNCQUFzQkY7QUFFL0QsTUFBTU0sU0FBU0Qsb0JBQW9CRSxTQUFTLEVBQUVELFVBQVUsQ0FBQztBQUN6RCxNQUFNRSxhQUFhO0lBQ2pCLE9BQU9ILG9CQUFvQkcsVUFBVTtBQUN2QztBQUNBLE1BQU1DLGtCQUFrQixDQUFDQztJQUN2QixPQUFPTCxvQkFBb0JFLFNBQVMsQ0FBQ0UsZUFBZSxDQUFDQztBQUN2RDtBQUNBLE1BQU1DLFVBQVU7SUFDZEg7SUFDQUM7SUFDQUg7QUFDRjtBQUVBUixrQkFBZSxHQUFHYTtBQUNsQmIsdUJBQXVCLEdBQUdXO0FBQzFCWCxrQkFBa0IsR0FBR1U7QUFDckJWLGNBQWMsR0FBR1EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZXJvR3Jvdy8uL25vZGVfbW9kdWxlcy91bmNyeXB0by9kaXN0L2NyeXB0by5ub2RlLmNqcz85M2E3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuY29uc3Qgbm9kZUNyeXB0byA9IHJlcXVpcmUoJ25vZGU6Y3J5cHRvJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdENvbXBhdCAoZSkgeyByZXR1cm4gZSAmJiB0eXBlb2YgZSA9PT0gJ29iamVjdCcgJiYgJ2RlZmF1bHQnIGluIGUgPyBlLmRlZmF1bHQgOiBlOyB9XG5cbmNvbnN0IG5vZGVDcnlwdG9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0Q29tcGF0KG5vZGVDcnlwdG8pO1xuXG5jb25zdCBzdWJ0bGUgPSBub2RlQ3J5cHRvX19kZWZhdWx0LndlYmNyeXB0bz8uc3VidGxlIHx8IHt9O1xuY29uc3QgcmFuZG9tVVVJRCA9ICgpID0+IHtcbiAgcmV0dXJuIG5vZGVDcnlwdG9fX2RlZmF1bHQucmFuZG9tVVVJRCgpO1xufTtcbmNvbnN0IGdldFJhbmRvbVZhbHVlcyA9IChhcnJheSkgPT4ge1xuICByZXR1cm4gbm9kZUNyeXB0b19fZGVmYXVsdC53ZWJjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGFycmF5KTtcbn07XG5jb25zdCBfY3J5cHRvID0ge1xuICByYW5kb21VVUlELFxuICBnZXRSYW5kb21WYWx1ZXMsXG4gIHN1YnRsZVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2NyeXB0bztcbmV4cG9ydHMuZ2V0UmFuZG9tVmFsdWVzID0gZ2V0UmFuZG9tVmFsdWVzO1xuZXhwb3J0cy5yYW5kb21VVUlEID0gcmFuZG9tVVVJRDtcbmV4cG9ydHMuc3VidGxlID0gc3VidGxlO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibm9kZUNyeXB0byIsInJlcXVpcmUiLCJfaW50ZXJvcERlZmF1bHRDb21wYXQiLCJlIiwiZGVmYXVsdCIsIm5vZGVDcnlwdG9fX2RlZmF1bHQiLCJzdWJ0bGUiLCJ3ZWJjcnlwdG8iLCJyYW5kb21VVUlEIiwiZ2V0UmFuZG9tVmFsdWVzIiwiYXJyYXkiLCJfY3J5cHRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/uncrypto/dist/crypto.node.cjs\n");

/***/ })

};
;