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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"speciesResolver\": () => (/* binding */ speciesResolver)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\nconst speciesResolver = {\n  Query: {\n    species: async (_parent, args, context) => {\n      const { id } = args;\n      const species = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)(id);\n      return species;\n    },\n    allSpecies: async (_parent, args, context) => {\n      const species = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)();\n      return species?.results;\n    }\n  }\n};\n\n\n//# sourceURL=webpack://subgraph-characters/./src/resolver.ts?");

/***/ }),

/***/ "./src/schema.ts":
/*!***********************!*\
  !*** ./src/schema.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = apollo_server__WEBPACK_IMPORTED_MODULE_0__.gql`\n\ntype Species {\n  id: ID\n  # The name of this species.\n  name: String \n  # The classification of this species, such as \"mammal\" or \"reptile\".\n  classification: String\n  # The designation of this species, such as \"sentient\".\n  designation: String\n  # The average height of this species in centimeters.\n  averageHeight: String\n  # The average lifespan of this species in years.\n  averageLifespan: String\n  # A comma-separated string of common eye colors for this species, \"none\" if this species does not typically have eyes.\n  eyeColors: String\n  # A comma-separated string of common hair colors for this species, \"none\" if this species does not typically have hair.\n  hairColors: String\n  # A comma-separated string of common skin colors for this species, \"none\" if this species does not typically have skin.\n  skinColors: String \n  # The language commonly spoken by this species.\n  language: String \n  # The URL of a planet resource, a planet that this species originates from.\n  homeworld: String \n  # An array of People URL Resources that are a part of this species.\n  characters: [String]\n  # An array of Film URL Resources that this species has appeared in.\n  films: [String] \n  # The hypermedia URL of this resource.\n  url: String\n  # The ISO 8601 date format of the time that this resource was created.\n  created: String\n}\n\nextend type Query {\n    species(id: ID!): Species\n    allSpecies: [Species]\n}\n`;\n\n\n//# sourceURL=webpack://subgraph-characters/./src/schema.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/subgraph */ \"@apollo/subgraph\");\n/* harmony import */ var _apollo_subgraph__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ \"./src/schema.ts\");\n/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolver */ \"./src/resolver.ts\");\n\n\n\n\nconst server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  schema: (0,_apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__.buildSubgraphSchema)([{ typeDefs: _schema__WEBPACK_IMPORTED_MODULE_2__.typeDefs, resolvers: _resolver__WEBPACK_IMPORTED_MODULE_3__.speciesResolver }])\n});\nserver.listen({ port: 4001 }).then(({ url }) => {\n  console.log(`\\u{1F680}  Server ready at ${url}`);\n});\n\n\n//# sourceURL=webpack://subgraph-characters/./src/server.ts?");

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getData = async (id) => {\n  try {\n    const result = await axios__WEBPACK_IMPORTED_MODULE_0___default()({\n      method: \"get\",\n      url: `https://swapi.dev/api/species/` + (id ? `${id}/` : \"\")\n    });\n    return result.data;\n  } catch (error) {\n    console.error(`Error making SWAPI request: ${error}`);\n  }\n};\n\n\n//# sourceURL=webpack://subgraph-characters/./src/utils.ts?");

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