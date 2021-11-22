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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"characterResolver\": () => (/* binding */ characterResolver)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.ts\");\n\nconst characterResolver = {\n  Query: {\n    character: async (_parent, args, context) => {\n      const { id } = args;\n      const character = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)(id);\n      console.log(character.species);\n      return character;\n    },\n    characters: async (_parent, args, context) => {\n      const characters = await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getData)();\n      return characters?.results;\n    }\n  }\n};\n\n\n//# sourceURL=webpack://subgraph-characters/./src/resolver.ts?");

/***/ }),

/***/ "./src/schema.ts":
/*!***********************!*\
  !*** ./src/schema.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = apollo_server__WEBPACK_IMPORTED_MODULE_0__.gql`\n\ntype Character @key(fields: \"id\"){\n    id: ID\n    # The name of this character.\n    name: String\n    # The birth year of the character, using the in-universe standard of BBY or ABY - Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is a battle that occurs at the end of Star Wars episode IV: A New Hope\n    birthYear: String\n    # The eye color of this character. Will be \"unknown\" if not known or \"n/a\" if the person does not have an eye.\n    eyeColor: String\n    # The skin color of this character.\n    skinColor: String\n    # The gender of this character. Either \"Male\", \"Female\" or \"unknown\", \"n/a\" if the person does not have a gender.\n    gender: String\n    # The height of the character in centimeters.\n    height: String\n    # The mass of the character in kilograms.\n    mass: String\n    # An array of species that this character belongs to.\n    species: [Species]\n}\n\n# This is a \"stub\" of the Species entity \nextend type Species @key(fields: \"id\") {\n  id: ID @external\n}\n\nextend type Query {\n    character(id: ID!): Character\n    characters: [Character]\n}\n`;\n\n\n//# sourceURL=webpack://subgraph-characters/./src/schema.ts?");

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/subgraph */ \"@apollo/subgraph\");\n/* harmony import */ var _apollo_subgraph__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ \"./src/schema.ts\");\n/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolver */ \"./src/resolver.ts\");\n\n\n\n\nconst server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  schema: (0,_apollo_subgraph__WEBPACK_IMPORTED_MODULE_1__.buildSubgraphSchema)([{ typeDefs: _schema__WEBPACK_IMPORTED_MODULE_2__.typeDefs, resolvers: _resolver__WEBPACK_IMPORTED_MODULE_3__.characterResolver }])\n});\nserver.listen({ port: 4002 }).then(({ url }) => {\n  console.log(`\\u{1F680}  Character subgraph ready at ${url}`);\n});\n\n\n//# sourceURL=webpack://subgraph-characters/./src/server.ts?");

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