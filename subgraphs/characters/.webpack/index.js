/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/resolver.ts":
/*!*************************!*\
  !*** ./src/resolver.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"characterResolver\": () => (/* binding */ characterResolver)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\nconst characterResolver = {\n  Query: {\n    character: async (_parent, args, context) => {\n      const { id } = args;\n      const character = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)(id);\n      return character;\n    },\n    characters: async (_parent, args, context) => {\n      const characters = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)();\n      console.log(characters?.results);\n      return characters?.results;\n    }\n  },\n  Character: {\n    species({ species }) {\n      console.log(\"species, \", species);\n      let test = [];\n      if (species?.length) {\n        test = species.map((item) => {\n          const substring = item?.split(/[//]/);\n          const id = substring[substring.length - 2];\n          console.log(\"item => \", id);\n          return { __typename: \"Species\", id };\n        });\n      }\n      console.log(\"test => \", test);\n      return test;\n    }\n  }\n};\n\n\n//# sourceURL=webpack://subgraph-characters/./src/resolver.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/subgraph */ \"@apollo/subgraph\");\n/* harmony import */ var _apollo_subgraph__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolver */ \"./src/resolver.ts\");\n\n\n\n\n\nconst typeDefs = (0,apollo_server__WEBPACK_IMPORTED_MODULE_0__.gql)((0,fs__WEBPACK_IMPORTED_MODULE_2__.readFileSync)(\"./schema.graphql\", { encoding: \"utf-8\" }));\nconst server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  schema: (0,_apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__.buildSubgraphSchema)([{ typeDefs, resolvers: _resolver__WEBPACK_IMPORTED_MODULE_3__.characterResolver }])\n});\nserver.listen({ port: 4002 }).then(({ url }) => {\n  console.log(`\\u{1F680}  Character subgraph ready at ${url}`);\n});\n\n\n//# sourceURL=webpack://subgraph-characters/./src/server.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getData = async (id) => {\n  try {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n      method: \"get\",\n      url: `https://swapi.dev/api/people/` + (id ? `${id}/` : \"\")\n    });\n    return result.data;\n  } catch (error) {\n    console.error(`Error making SWAPI request: ${error}`);\n  }\n};\n\n\n//# sourceURL=webpack://subgraph-characters/./src/utils.ts?");

/***/ }),

/***/ "@apollo/subgraph":
/*!***********************************!*\
  !*** external "@apollo/subgraph" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@apollo/subgraph");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("apollo-server");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;