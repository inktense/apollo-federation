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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_gateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/gateway */ \"@apollo/gateway\");\n/* harmony import */ var _apollo_gateway__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_gateway__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_graphql_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/graphql/services */ \"./src/graphql/services/index.ts\");\n\n\n\nconst gateway = new _apollo_gateway__WEBPACK_IMPORTED_MODULE_1__.ApolloGateway({\n  serviceList: [_src_graphql_services__WEBPACK_IMPORTED_MODULE_2__.CharactersService]\n});\nconst server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({ gateway });\nserver.listen().then(({ url }) => {\n  console.log(`\\u{1F680}  Server ready at ${url}`);\n});\n\n\n//# sourceURL=webpack://apollo-federation/./index.ts?");

/***/ }),

/***/ "./src/graphql/schema/characters.ts":
/*!******************************************!*\
  !*** ./src/graphql/schema/characters.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ \"apollo-server\");\n/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = apollo_server__WEBPACK_IMPORTED_MODULE_0__.gql`\n\ntype Character @key(fields: \"id\"){\n    id: ID!\n    name: String\n    birthYear: String\n    eyeColor: String\n    skinColor: String\n    gender: String\n    height: Int\n    mass: Int\n}\n\nextend type Query {\n    character(id: ID!): Person\n    characters: [Person]\n}\n`;\n\n\n//# sourceURL=webpack://apollo-federation/./src/graphql/schema/characters.ts?");

/***/ }),

/***/ "./src/graphql/services/index.ts":
/*!***************************************!*\
  !*** ./src/graphql/services/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CharactersService\": () => (/* reexport safe */ _peopleService__WEBPACK_IMPORTED_MODULE_0__.CharactersService)\n/* harmony export */ });\n/* harmony import */ var _peopleService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./peopleService */ \"./src/graphql/services/peopleService.ts\");\n\n\n\n\n//# sourceURL=webpack://apollo-federation/./src/graphql/services/index.ts?");

/***/ }),

/***/ "./src/graphql/services/peopleService.ts":
/*!***********************************************!*\
  !*** ./src/graphql/services/peopleService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CharactersService\": () => (/* binding */ CharactersService)\n/* harmony export */ });\n/* harmony import */ var _schema_characters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../schema/characters */ \"./src/graphql/schema/characters.ts\");\n\nconst CharactersService = {\n  name: \"characters\",\n  url: \"http://localhost:3000\",\n  port: \"4001\",\n  People: _schema_characters__WEBPACK_IMPORTED_MODULE_0__.typeDefs,\n  resolvers: {\n    Query: {\n      person(_, { id }) {\n        console.log(\"id => \", id);\n      }\n    }\n  }\n};\n\n\n//# sourceURL=webpack://apollo-federation/./src/graphql/services/peopleService.ts?");

/***/ }),

/***/ "@apollo/gateway":
/*!**********************************!*\
  !*** external "@apollo/gateway" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@apollo/gateway");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("apollo-server");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;