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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body{\\r\\n\\twidth: 95%;\\r\\n\\tmargin: 0 auto;\\r\\n\\tfont-family: calibri;\\r\\n}\\r\\n\\r\\nheader{\\r\\n\\tbackground-color: rgb(75, 75, 75);\\r\\n\\tpadding: 2px;\\r\\n\\tcolor: white;\\r\\n}\\r\\n\\r\\n.page-title{\\r\\n\\ttext-align: center;\\r\\n\\ttext-decoration: line-through;\\r\\n}\\r\\n\\r\\n\\r\\n.start-container{\\r\\n\\twidth: 300px;\\r\\n\\tmargin: 0 auto;\\r\\n\\tmargin-top: 50px;\\r\\n\\tbackground-color: rgb(75, 75, 75);\\r\\n\\theight: 100px;\\r\\n\\tpadding: 2px  5px ;\\r\\n\\tcolor: white;\\r\\n\\tborder-radius: 6px;\\r\\n\\tbox-shadow: 2px 2px 2px grey;\\r\\n}\\r\\n\\r\\n\\r\\n.message{\\r\\n\\ttext-align: center;\\r\\n\\tfont-size: 1.2em;\\r\\n\\tfont-weight: bold;\\r\\n}\\r\\n\\r\\n.start{\\r\\n\\tdisplay: block;\\r\\n\\twidth: 84.16px;\\r\\n\\tfont-family: calibri;\\r\\n\\tfont-weight: bold;\\r\\n\\tcolor: white;\\r\\n\\tbackground-color: black;\\r\\n\\tborder-radius: 3px;\\r\\n\\tmargin: 0 auto;\\r\\n}\\r\\n\\r\\n.start:hover{\\r\\n\\topacity: 0.7;\\r\\n}\\r\\n\\r\\n.start:active{\\r\\n\\tbox-shadow: 1px 1px 1px black;\\r\\n}\\r\\n\\r\\n.player-board,.enemy-board{\\r\\n\\twidth: 260px;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-wrap: wrap;\\r\\n\\tflex-direction: row;\\r\\n\\tmargin: 0 auto;\\r\\n\\t/* margin-top: 20px; */\\r\\n\\t\\r\\n}\\r\\n\\r\\n.single-board,.single-board-e{\\r\\n\\tmargin: 1px;\\r\\n\\tborder: 2px solid rgb(68, 68, 68);\\r\\n\\twidth: 24px;\\r\\n\\theight: 24px;\\r\\n\\r\\n}\\r\\n\\r\\n.single-board:hover,.single-board-e:hover{\\r\\n\\tborder: 1.9px solid rgb(68, 68, 68);\\r\\n}\\r\\n\\r\\n.single-board-hit{\\r\\n\\tmargin: 1px;\\r\\n\\tborder: 2px solid rgb(68, 68, 68);\\r\\n\\tbackground-color: #dc2626;\\r\\n\\twidth: 24px;\\r\\n\\theight: 24px;\\r\\n}\\r\\n\\r\\n.single-board-base{\\r\\n\\tmargin: 1px;\\r\\n\\tborder: 2px solid rgb(68, 68, 68);\\r\\n\\tbackground-color: #26dc35;\\r\\n\\twidth: 24px;\\r\\n\\theight: 24px;\\r\\n}\\r\\n\\r\\n.single-board-used{\\r\\n\\tmargin: 1px;\\r\\n\\tborder: 2px solid rgb(68, 68, 68);\\r\\n\\tbackground-color: #0891b2;\\r\\n\\twidth: 24px;\\r\\n\\theight: 24px;\\r\\n}\\r\\n\\r\\n.alls{\\r\\n\\twidth: 90%;\\r\\n\\tpadding: 20px 0;\\r\\n\\tmargin: 0 auto;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-around;\\r\\n\\tflex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.titles{\\r\\n\\twidth: 90%;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-around;\\r\\n}\\r\\n\\r\\n#m-1{\\r\\n\\tcolor: green;\\r\\n}\\r\\n\\r\\n#m-2{\\r\\n\\tcolor: red;\\r\\n}\\r\\n\\r\\n.end{\\r\\n\\tcolor: black;\\r\\n\\tmargin-top: 80px;\\r\\n\\tfont-family: calibri;\\r\\n\\ttext-align: center;\\r\\n\\ttext-decoration: underline;\\r\\n\\tfont-weight: bold;\\r\\n\\tfont-style: italic;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://test-webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://test-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://test-webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://test-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://test-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://test-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://test-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://test-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/elementCreate.js":
/*!******************************!*\
  !*** ./src/elementCreate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComplexElement\": () => (/* binding */ createComplexElement),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(parent,type,className){\r\n\tvar elt = document.createElement(type)\r\n\telt.className = className\r\n\tvar parent = parent\r\n\tparent.append(elt)\r\n\treturn elt\r\n\r\n}\r\n\r\nfunction createComplexElement(parent,type,className,idName,textContent){\r\n\tvar elt = document.createElement(`${type}`)\r\n\telt.className = className\r\n\telt.id = idName\r\n\telt.textContent = textContent\r\n\tparent.append(elt)\r\n\treturn elt\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test-webpack/./src/elementCreate.js?");

/***/ }),

/***/ "./src/enemyboard.js":
/*!***************************!*\
  !*** ./src/enemyboard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enemyGen\": () => (/* binding */ generateBoard),\n/* harmony export */   \"playTurn\": () => (/* binding */ playTurn)\n/* harmony export */ });\n/* harmony import */ var _elementCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate */ \"./src/elementCreate.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _finish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finish */ \"./src/finish.js\");\n\r\n\r\n\r\n\r\nvar allBoards = []\r\nvar allPlayerShips = []\r\nvar  fPlayer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.createShip)()\r\nfPlayer.name = \"Ship1\"\r\nvar  sPlayer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.createShip)()\r\nsPlayer.name = \"Ship2\"\r\nvar tPlayer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.createShip)()\r\ntPlayer.name = \"Ship3\"\r\n\r\n\r\nfunction generateBoard(){\r\n\tlet playerBoard = document.querySelector(\".enemy-board\")\r\n\tlet actualX = 0\r\n\tlet actualY = -1\r\n\tlet f = 0\r\n\r\n\tfor(let i = 0;i<100;i++){\r\n\t\tlet board = {x:0,y:0,placeBoard:(0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElement)(playerBoard,'button','single-board-e'),used:false,canHit:false,owner:null}\r\n\t\tallBoards.push(board)\r\n\t\tf +=1\r\n\t\tboard.placeBoard.disabled = true\r\n\t\t// board.placeBoard.textContent = f\r\n\t\tboard.placeBoard.addEventListener(\"click\",()=>{\r\n\t\t})\r\n\t\tif(actualX>=10){\r\n\t\t\tactualX = 0\r\n\t\t\tactualY -= 1\r\n\t\t\t\r\n\t\t}\r\n\t\tactualX += 1\r\n\t\tboard.x = actualX\r\n\t\tboard.y = actualY\r\n\r\n\t\t\r\n\t}\r\n\t\r\n\r\n\t\r\n\tlet c = 0\r\n\tgenerateShip(fPlayer,3)\r\n\t// allPlayerShips.player3 = true\r\n\tallPlayerShips.push(fPlayer)\r\n\t// console.log(fPlayer.stats.hits);\r\n\r\n\tgenerateShip(sPlayer,5)\r\n\tallPlayerShips.push(sPlayer)\r\n\t// allPlayerShips.player5 = true\r\n\t// console.log(sPlayer.stats.hits);\r\n\r\n\tgenerateShip(tPlayer,4)\r\n\tallPlayerShips.push(tPlayer)\r\n\t// allPlayerShips.player4 = true\r\n\t// console.log(tPlayer.stats.hits);\r\n\t// console.log(allPlayerShips);\r\n\r\n\t\r\n\r\n\tcheckSunkPlayer()\r\n\t// console.log(allPlayerShips[0].posY);\r\n\tif(allPlayerShips[0].posY==allPlayerShips[1].posY || allPlayerShips[1].posY == allPlayerShips[2].posY ||allPlayerShips[0].posY == allPlayerShips[2].posY){\r\n\t\tlet CoordY = Math.floor(Math.random()*-10)\r\n\t\tallPlayerShips[0].posY = CoordY\r\n\t\tCoordY = Math.floor(Math.random()*-10)\r\n\t\tallPlayerShips[1].posY = CoordY\r\n\t\tCoordY = Math.floor(Math.random()*-10)\r\n\t\tallPlayerShips[2].posY = CoordY\r\n\t\t// console.log(\"We found a bug!\");\r\n\t\tdocument.location.reload()\r\n\r\n\t}\r\n\t\r\n}\r\n\r\n\r\n\r\nfunction checkSunkPlayer(){\r\n\tvar count = 0\r\n\tfor(let i = 0; i<allPlayerShips.length;i++){\r\n\t\t// console.log(allPlayerShips);\r\n\t\tif(count<=3 && allPlayerShips[i].stats.sunk == true )\r\n\t\tcount +=1\r\n\t\t// console.log(count);\r\n\t}\r\n\tif(count==3){\r\n\t\t// console.log(\"All ships were sunk! Game Finished!\");\r\n\t\t(0,_finish__WEBPACK_IMPORTED_MODULE_2__.finish)(\"You lost!\")\r\n\t}\r\n}\r\n\r\nfunction generateShip(playerShip,length){\r\n\t// playerShip  =  createShip()\r\n\tplayerShip.posX = []\r\n\tplayerShip.stats.length = length\r\n\tplayerShip.stats.hits = 0\r\n\tlet CoordX = (Math.random() * ((10-playerShip.stats.length)-1+1)) + 1\r\n\tCoordX = Math.round(CoordX)\r\n\tlet tf = true\r\n\twhile(tf == true){\r\n\t\tif(CoordX +playerShip.stats.length>10){\r\n\t\t\tCoordX = (Math.random() * ((10-playerShip.stats.length)-1+1)) + 1\r\n\t\t\tCoordX = Math.round(CoordX)\r\n\r\n\t\t\ttf = true\r\n\t\t}\r\n\t\telse{\r\n\t\t\ttf = false\r\n\t\t}\r\n\r\n\t}\r\n\tplayerShip.startPos = CoordX\r\n\r\n\t// let CoordY = -(Math.random() * ((9)+1-1))\r\n\tlet CoordY = Math.floor(Math.random()*-10)\r\n\tlet fg = true\r\n\twhile(fg == true){\r\n\t\tif(CoordY>=0 || CoordY<-10){\r\n\t\t\t// CoordY = -(Math.random() * ((9)+1-1))\r\n\t\t\tCoordY = Math.floor(Math.random()*-10)-1\r\n\t\t\tCoordY = Math.round(CoordY)\r\n\t\t\t// console.log('changed');\r\n\t\t\t\r\n\t\t\tfg = true\r\n\t\t\tcontinue\r\n\t\t}\r\n\t\telse if(CoordY == -0){\r\n\t\t\t// CoordY = -(Math.random() * ((9)+1-1))\r\n\t\t\tCoordY = Math.floor(Math.random()*-10)-1\r\n\t\t\tCoordY = Math.round(CoordY)\r\n\t\t\t// console.log('changed');\r\n\t\t\t\r\n\t\t\tfg = true\r\n\t\t\tcontinue\r\n\t\t}\r\n\t\telse{\r\n\t\t\tfg = false\r\n\t\t\tbreak\r\n\t\t}\r\n\r\n\t}\r\n\tCoordY = Math.round(CoordY)\r\n\t// console.log(CoordY);\r\n\t// console.log(playerShip.posX);\r\n\tplayerShip.posY = CoordY\r\n\tplayerShip.posGen()\r\n\tplaceShip(allBoards,playerShip.startPos,playerShip.posY,playerShip)\r\n\tplaceRest(allBoards,playerShip,playerShip.posX,playerShip.posY,playerShip)\r\n\t// console.log(playerShip.startPos,playerShip.posY);\r\n\t// console.log(playerShip.posX);\r\n\treturn playerShip\r\n\r\n}\r\n\r\nfunction playTurn(index){\r\n\t\r\n\tcheckSunkPlayer()\r\n\t// var kk = document.querySelectorAll(\".single-board-e\")\r\n\t// for(let i = 0;i<kk.length;i++){\r\n\t// \tconsole.log(i,\"-\",kk[i]);\r\n\t// \tkk[i].disabled = true\r\n\r\n\t// }\r\n\r\n\r\n}\r\n\r\nfunction placeRest(board,ship,shipX,shipY,own){\r\n\tlet aX = -1\r\n\tfor(let i = 0;i<ship.posX.length;i++){\r\n\t\t\r\n\t\taX += 1\r\n\t\t// console.log(ship.posX[aX]);\r\n\t\tloopTrough( ship.posX[aX],board,shipY,own)\r\n\t\t\r\n\t}\r\n\t// console.log('Ship:',shipX[0],shipY,own);\r\n\t\r\n}\r\n\r\nfunction loopTrough(target,container,targetY,owner){\r\n\tfor(let i = 0; i< container.length;i++){\r\n\t\t// container[i].placeBoard.className = 'single-board-base'\r\n\t\tif(target==container[i].x && targetY == container[i].y ){\r\n\t\t\t// console.log('Good job!');\r\n\t\t\tcontainer[i].owner = owner\r\n\t\t\tcontainer[i].placeBoard.addEventListener('click',()=>{\r\n\t\t\t\tcontainer[i].placeBoard.className = 'single-board-hit'\r\n\t\t\t\tcontainer[i].canHit = true\r\n\t\t\t\tcontainer[i].owner.hit()\r\n\t\t\t\t// console.log('second',container[i].owner.stats.hits);\r\n\t\t\t\tcontainer[i].owner.isSunk()\r\n\t\t\t\t// console.log(owner.name);\r\n\t\t\t\t// console.log(container[i].owner.stats.sunk);\r\n\t\t\t\tif(container[i].owner.name == \"Ship1\"){\r\n\r\n\t\t\t\t\tallPlayerShips[0] = container[i].owner\r\n\t\t\t\t}\r\n\t\t\t\tif(container[i].owner.name == \"Ship2\"){\r\n\r\n\t\t\t\t\tallPlayerShips[1] = container[i].owner\r\n\t\t\t\t}\r\n\t\t\t\tif(container[i].owner.name == \"Ship3\"){\r\n\r\n\t\t\t\t\tallPlayerShips[2] = container[i].owner\r\n\t\t\t\t}\r\n\t\t\t\tcheckSunkPlayer()\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n\r\n}\r\n\r\nfunction placeShip(board,coordx,coordy,owner){\r\n\tfor(let i=0;i<board.length;i++){\r\n\t\t// console.log(allBoards[i].x,allBoards[i].y);\r\n\r\n\r\n\t\t// if(board[i].x == coordx && board[i].y == coordy){\r\n\t\t// \tboard[i].canHit = true\r\n\t\t// \tboard[i].placeBoard.addEventListener('click',()=>{\r\n\t\t// \t\tif(board[i].used ==false && board[i].canHit == true){\r\n\r\n\t\t// \t\t\tboard[i].owner = owner\r\n\r\n\t\t// \t\t\tboard[i].placeBoard.className = 'single-board-hit'\r\n\t\t// \t\t\tboard[i].used = true\r\n\t\t// \t\t\tboard[i].owner.stats.hits += 1\r\n\t\t// \t\t\t// console.log('first',board[i].owner.stats.hits);\r\n\t\t// \t\t\tboard[i].owner.isSunk()\r\n\r\n\t\t// \t\t\t// console.log(board[i].x,board[i].y,board[i].used);\r\n\r\n\t\t// \t\t}\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t// \t})\r\n\t\t// }\r\n\t\tboard[i].placeBoard.addEventListener('click',()=>{\r\n\t\t\tif(board[i].used ==false){\r\n\t\t\t\t\r\n\t\t\t\t// console.log(board[i].x,board[i].y,board[i].used);\r\n\t\t\t\tallBoards[i].placeBoard.className = 'single-board-used'\r\n\t\t\t\tboard[i].used = true\r\n\t\t\t\tcheckSunkPlayer()\r\n\r\n\t\t\t}\r\n\r\n\t\t})\r\n\t\t// else{\r\n\r\n\t\t// }\r\n\t}\r\n}\r\n// generateBoard()\r\n// board2()\r\n// playTurn(0)\r\n\n\n//# sourceURL=webpack://test-webpack/./src/enemyboard.js?");

/***/ }),

/***/ "./src/finish.js":
/*!***********************!*\
  !*** ./src/finish.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"finish\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _enemyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemyboard */ \"./src/enemyboard.js\");\nfunction createElement(parent,type,className){\r\n\tvar elt = document.createElement(type)\r\n\telt.className = className\r\n\tvar parent = parent\r\n\tparent.append(elt)\r\n\treturn elt\r\n\r\n}\r\n\r\nfunction createComplexElement(parent,type,className,idName,textContent){\r\n\tvar elt = document.createElement(`${type}`)\r\n\telt.className = className\r\n\telt.id = idName\r\n\telt.textContent = textContent\r\n\tparent.append(elt)\r\n\treturn elt\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createMenu(txt){\r\n\tlet msg1 = document.querySelector(\"#m-1\")\r\n\tlet msg2 = document.querySelector(\"#m-2\")\r\n\tlet body = document.querySelector(\"body\")\r\n\tlet container = createElement(body,'section','start-container')\r\n\r\n\tlet text = createComplexElement(container,'p','message','',txt)\r\n\tlet startBtn = createComplexElement(container,'button','start','','Ok')\r\n\tlet link = createComplexElement(startBtn,'a','','','')\r\n\r\n\tlet playerBoard = document.querySelector(\".player-board\")\r\n\tlet EnemyBoard = document.querySelector(\".enemy-board\")\r\n\tlet tx = createComplexElement(container,'p','end','','Created by Igeon22')\r\n\tplayerBoard.remove()\r\n\tEnemyBoard.remove()\r\n\tmsg1.remove()\r\n\tmsg2.remove()\r\n\r\n\r\n\tstartBtn.addEventListener('click',()=>{\r\n\t\t// generateBoard()\r\n\t\t// enemyGen()\r\n\t\t// board2()\r\n\t\t// msg2.textContent = \"Player\"\r\n\t\t// msg1.textContent = \"Enemy\"\r\n\t\tcontainer.remove()\r\n\t\tlet body = document.querySelector(\"body\")\r\n\t\twindow.location.reload()\r\n\t\t// setTimeout(() => {\r\n\t\t\t\r\n\t\t// }, 2000);\r\n\t\t\r\n\t})\r\n}\r\n\r\n// createMenu('You won the game!')\r\n\r\n\n\n//# sourceURL=webpack://test-webpack/./src/finish.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateBoard\": () => (/* binding */ generateBoard),\n/* harmony export */   \"generateShip\": () => (/* binding */ generateShip)\n/* harmony export */ });\n/* harmony import */ var _elementCreate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elementCreate */ \"./src/elementCreate.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _enemyboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemyboard */ \"./src/enemyboard.js\");\n/* harmony import */ var _finish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finish */ \"./src/finish.js\");\n\r\n\r\n\r\n\r\n\r\nvar allBoards = []\r\nvar allPlayerShips = []\r\nvar  fPlayer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.createShip)()\r\nfPlayer.name = \"Ship1\"\r\nvar  sPlayer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.createShip)()\r\nsPlayer.name = \"Ship2\"\r\nvar tPlayer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__.createShip)()\r\ntPlayer.name = \"Ship3\"\r\n\r\n// var h = 0\r\n\r\n// enemyGen()\r\nvar arr = [];\r\nwhile(arr.length < 100){\r\n    var r = Math.floor(Math.random() * 100) + 1;\r\n\tif(r>98){\r\n\t\tr = Math.floor(Math.random() * 100) + 1;\r\n\t}\r\n    if(arr.indexOf(r) === -1) arr.push(r);\r\n}\r\n// console.log(arr);\r\n\r\nfunction generateBoard(){\r\n\t(0,_enemyboard__WEBPACK_IMPORTED_MODULE_2__.enemyGen)()\r\n\tlet playerBoard = document.querySelector(\".player-board\")\r\n\tlet actualX = 0\r\n\tlet actualY = -1\r\n\r\n\tfor(let i = 0;i<100;i++){\r\n\t\tlet board = {x:0,y:0,placeBoard:(0,_elementCreate__WEBPACK_IMPORTED_MODULE_0__.createElement)(playerBoard,'button','single-board'),used:false,canHit:false,owner:null}\r\n\t\tallBoards.push(board)\r\n\t\t// board.placeBoard.disabled = true\r\n\t\tboard.placeBoard.addEventListener(\"click\",()=>{\r\n\t\t})\r\n\t\tif(actualX>=10){\r\n\t\t\tactualX = 0\r\n\t\t\tactualY -= 1\r\n\t\t\t\r\n\t\t}\r\n\t\tactualX += 1\r\n\t\tboard.x = actualX\r\n\t\tboard.y = actualY\r\n\r\n\t\t\r\n\t}\r\n\r\n\t\r\n\r\n\t\r\n\tlet c = 0\r\n\tgenerateShip(fPlayer,3)\r\n\t// allPlayerShips.player3 = true\r\n\tallPlayerShips.push(fPlayer)\r\n\t// console.log(fPlayer.stats.hits);\r\n\r\n\tgenerateShip(sPlayer,5)\r\n\tallPlayerShips.push(sPlayer)\r\n\t// allPlayerShips.player5 = true\r\n\t// console.log(sPlayer.stats.hits);\r\n\r\n\tgenerateShip(tPlayer,4)\r\n\tallPlayerShips.push(tPlayer)\r\n\t// allPlayerShips.player4 = true\r\n\t// console.log(tPlayer.stats.hits);\r\n\t// console.log(allPlayerShips);\r\n\r\n\t\r\n\r\n\tcheckSunkPlayer()\r\n\t// console.log(allPlayerShips[0].posY);\r\n\tif(allPlayerShips[0].posY==allPlayerShips[1].posY || allPlayerShips[1].posY == allPlayerShips[2].posY ||allPlayerShips[0].posY == allPlayerShips[2].posY){\r\n\t\tlet CoordY = Math.floor(Math.random()*-10)\r\n\t\tallPlayerShips[0].posY = CoordY\r\n\t\tCoordY = Math.floor(Math.random()*-10)\r\n\t\tallPlayerShips[1].posY = CoordY\r\n\t\tCoordY = Math.floor(Math.random()*-10)\r\n\t\tallPlayerShips[2].posY = CoordY\r\n\t\t// console.log(\"We found a bug!\");\r\n\t\tdocument.location.reload()\r\n\t}\r\n\t\r\n}\r\n\r\n\r\n\r\nfunction checkSunkPlayer(){\r\n\tvar count = 0\r\n\tfor(let i = 0; i<allPlayerShips.length;i++){\r\n\t\t// console.log(allPlayerShips);\r\n\t\tif(count<=3 && allPlayerShips[i].stats.sunk == true )\r\n\t\tcount +=1\r\n\t\t// console.log(count);\r\n\t}\r\n\tif(count==3){\r\n\t\t// console.log(\"All ships were sunk! Game Finished!\");\r\n\t\t(0,_finish__WEBPACK_IMPORTED_MODULE_3__.finish)(\"You won!\")\r\n\t}\r\n}\r\n\r\nfunction generateShip(playerShip,length){\r\n\t// playerShip  =  createShip()\r\n\tplayerShip.posX = []\r\n\tplayerShip.stats.length = length\r\n\tplayerShip.stats.hits = 0\r\n\tlet CoordX = (Math.random() * ((10-playerShip.stats.length)-1+1)) + 1\r\n\tCoordX = Math.round(CoordX)\r\n\tlet tf = true\r\n\twhile(tf == true){\r\n\t\tif(CoordX +playerShip.stats.length>10){\r\n\t\t\tCoordX = (Math.random() * ((10-playerShip.stats.length)-1+1)) + 1\r\n\t\t\tCoordX = Math.round(CoordX)\r\n\r\n\t\t\ttf = true\r\n\t\t}\r\n\t\telse{\r\n\t\t\ttf = false\r\n\t\t}\r\n\r\n\t}\r\n\tplayerShip.startPos = CoordX\r\n\r\n\t// let CoordY = -(Math.random() * ((9)+1-1))\r\n\tlet CoordY = Math.floor(Math.random()*-10)\r\n\tlet fg = true\r\n\twhile(fg == true){\r\n\t\tif(CoordY>=0 || CoordY<-10){\r\n\t\t\t// CoordY = -(Math.random() * ((9)+1-1))\r\n\t\t\tCoordY = Math.floor(Math.random()*-10)-1\r\n\t\t\tCoordY = Math.round(CoordY)\r\n\t\t\t// console.log('changed');\r\n\t\t\t\r\n\t\t\tfg = true\r\n\t\t\tcontinue\r\n\t\t}\r\n\t\telse if(CoordY == -0){\r\n\t\t\t// CoordY = -(Math.random() * ((9)+1-1))\r\n\t\t\tCoordY = Math.floor(Math.random()*-10)-1\r\n\t\t\tCoordY = Math.round(CoordY)\r\n\t\t\t// console.log('changed');\r\n\t\t\t\r\n\t\t\tfg = true\r\n\t\t\tcontinue\r\n\t\t}\r\n\t\telse{\r\n\t\t\tfg = false\r\n\t\t\tbreak\r\n\t\t}\r\n\r\n\t}\r\n\tCoordY = Math.round(CoordY)\r\n\t// console.log(CoordY);\r\n\t// console.log(playerShip.posX);\r\n\tplayerShip.posY = CoordY\r\n\tplayerShip.posGen()\r\n\tplaceShip(allBoards,playerShip.startPos,playerShip.posY,playerShip)\r\n\tplaceRest(allBoards,playerShip,playerShip.posX,playerShip.posY,playerShip)\r\n\t// console.log(playerShip.startPos,playerShip.posY);\r\n\t// console.log(playerShip.posX);\r\n\treturn playerShip\r\n\r\n}\r\n\r\nfunction placeRest(board,ship,shipX,shipY,own){\r\n\tlet aX = -1\r\n\tfor(let i = 0;i<ship.posX.length;i++){\r\n\t\t\r\n\t\taX += 1\r\n\t\t// console.log(ship.posX[aX]);\r\n\t\tloopTrough( ship.posX[aX],board,shipY,own)\r\n\t\t\r\n\t}\r\n\t// console.log('Ship:',shipX[0],shipY,own);\r\n\t\r\n}\r\n\r\nfunction loopTrough(target,container,targetY,owner){\r\n\tfor(let i = 0; i< container.length;i++){\r\n\t\tif(target==container[i].x && targetY == container[i].y ){\r\n\t\t\t// console.log('Good job!');\r\n\t\t\tcontainer[i].owner = owner\r\n\t\t\tcontainer[i].placeBoard.addEventListener('click',()=>{\r\n\t\t\t\tcontainer[i].placeBoard.className = 'single-board-hit'\r\n\t\t\t\tcontainer[i].canHit = true\r\n\t\t\t\tcontainer[i].owner.hit()\r\n\t\t\t\t// console.log('second',container[i].owner.stats.hits);\r\n\t\t\t\tcontainer[i].owner.isSunk()\r\n\t\t\t\t// console.log(owner.name);\r\n\t\t\t\t// console.log(container[i].owner.stats.sunk);\r\n\t\t\t\tif(container[i].owner.name == \"Ship1\"){\r\n\r\n\t\t\t\t\tallPlayerShips[0] = container[i].owner\r\n\t\t\t\t}\r\n\t\t\t\tif(container[i].owner.name == \"Ship2\"){\r\n\r\n\t\t\t\t\tallPlayerShips[1] = container[i].owner\r\n\t\t\t\t}\r\n\t\t\t\tif(container[i].owner.name == \"Ship3\"){\r\n\r\n\t\t\t\t\tallPlayerShips[2] = container[i].owner\r\n\t\t\t\t}\r\n\t\t\t\tcheckSunkPlayer()\r\n\t\t\t})\r\n\t\t}\r\n\t}\r\n\r\n}\r\nvar gt = 0\r\n// console.log(all[34]);\r\n\r\nfunction placeShip(board,coordx,coordy,owner){\r\n\tfor(let i=0;i<board.length;i++){\r\n\t\t// console.log(allBoards[i].x,allBoards[i].y);\r\n\r\n\r\n\t\t// if(board[i].x == coordx && board[i].y == coordy){\r\n\t\t// \tboard[i].canHit = true\r\n\t\t// \tboard[i].placeBoard.addEventListener('click',()=>{\r\n\t\t// \t\tif(board[i].used ==false && board[i].canHit == true){\r\n\r\n\t\t// \t\t\tboard[i].owner = owner\r\n\r\n\t\t// \t\t\tboard[i].placeBoard.className = 'single-board-hit'\r\n\t\t// \t\t\tboard[i].used = true\r\n\t\t// \t\t\tboard[i].owner.stats.hits += 1\r\n\t\t// \t\t\t// console.log('first',board[i].owner.stats.hits);\r\n\t\t// \t\t\tboard[i].owner.isSunk()\r\n\t\t\r\n\t\t// \t\t\t// console.log(board[i].x,board[i].y,board[i].used);\r\n\r\n\t\t// \t\t}\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t// \t})\r\n\t\t// }\r\n\t\tvar all = document.querySelectorAll(\".single-board-e\")\r\n\t\tboard[i].placeBoard.addEventListener('click',()=>{\r\n\t\t\tif(board[i].used ==false){\r\n\t\t\t\t\r\n\t\t\t\t// console.log(board[i].x,board[i].y,board[i].used);\r\n\t\t\t\tallBoards[i].placeBoard.className = 'single-board-used'\r\n\t\t\t\tboard[i].used = true\r\n\t\t\t\tcheckSunkPlayer()\r\n\t\t\t\t// let vv = document.querySelectorAll(\".single-board-e\")\r\n\t\t\t\t// console.log(all[120]);\r\n\t\t\t\t// console.log(arr[0]-1);\r\n\t\t\t\t// console.log(arr[0]-1);\r\n\t\t\t\t// console.log('act',all[arr[0]]);\r\n\t\t\t\t// console.log('af',arr);\r\n\t\t\t\tall[arr[0]-1].disabled = false\r\n\t\t\t\tall[arr[0]-1].click()\r\n\t\t\t\tall[arr[0]-1].disabled = true\r\n\t\t\t\t;(0,_enemyboard__WEBPACK_IMPORTED_MODULE_2__.playTurn)()\r\n\t\t\t\t// console.log(gt);\r\n\t\t\t\tarr.shift()\r\n\t\t\t\t// if(arr[arr.length-1] != undefined){\r\n\t\t\t\t// \tplayTurn(arr[arr.length-1])\r\n\r\n\t\t\t\t// }\r\n\r\n\t\t\t}\r\n\r\n\t\t})\r\n\t\t// else{\r\n\r\n\t\t// }\r\n\t}\r\n}\r\n\r\n// function pop(){\r\n// \tarr.pop()\r\n// \tconsole.log(arr);\r\n// }\r\n\r\n// pop()\r\n// console.log(arr);\r\n// pop()\r\n// console.log(arr);\r\n// pop()\r\n// console.log(arr);\r\n// playTurn(1)\r\n\r\n// generateBoard()\r\n// board2()\r\n\n\n//# sourceURL=webpack://test-webpack/./src/gameboard.js?");

/***/ }),

/***/ "./src/greeting.js":
/*!*************************!*\
  !*** ./src/greeting.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sayHello\": () => (/* binding */ sayHello)\n/* harmony export */ });\nfunction sayHello (){\r\n\talert(\"Hello from webpack\")\r\n}\r\n\r\n\n\n//# sourceURL=webpack://test-webpack/./src/greeting.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting */ \"./src/greeting.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _mainmenu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainmenu.js */ \"./src/mainmenu.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _elementCreate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elementCreate */ \"./src/elementCreate.js\");\n/* harmony import */ var _enemyboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enemyboard */ \"./src/enemyboard.js\");\n/* harmony import */ var _finish__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./finish */ \"./src/finish.js\");\n\r\n// import '../sass/styles.scss';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// enemyGen()\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://test-webpack/./src/index.js?");

/***/ }),

/***/ "./src/mainmenu.js":
/*!*************************!*\
  !*** ./src/mainmenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _enemyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemyboard */ \"./src/enemyboard.js\");\nfunction createElement(parent,type,className){\r\n\tvar elt = document.createElement(type)\r\n\telt.className = className\r\n\tvar parent = parent\r\n\tparent.append(elt)\r\n\treturn elt\r\n\r\n}\r\n\r\nfunction createComplexElement(parent,type,className,idName,textContent){\r\n\tvar elt = document.createElement(`${type}`)\r\n\telt.className = className\r\n\telt.id = idName\r\n\telt.textContent = textContent\r\n\tparent.append(elt)\r\n\treturn elt\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createMenu(){\r\n\tlet msg1 = document.querySelector(\"#m-1\")\r\n\tlet msg2 = document.querySelector(\"#m-2\")\r\n\tlet body = document.querySelector(\"body\")\r\n\tlet container = createElement(body,'section','start-container')\r\n\r\n\tlet text = createComplexElement(container,'p','message','','Sink all enemy ships to win')\r\n\tlet txtLink = createComplexElement(container,'a','','','')\r\n\r\n\tlet startBtn = createComplexElement(container,'button','start','','Start Game')\r\n\tlet t = createComplexElement(container,'p','end','','Created by Igeon22')\r\n\r\n\tstartBtn.addEventListener('click',()=>{\r\n\t\t;(0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.generateBoard)()\r\n\t\t// enemyGen()\r\n\t\t// board2()\r\n\t\tmsg2.textContent = \"Player\"\r\n\t\tmsg1.textContent = \"Enemy\"\r\n\t\tcontainer.remove()\r\n\t\t// setTimeout(() => {\r\n\t\t\t\r\n\t\t// }, 2000);\r\n\t\t\r\n\t})\r\n}\r\n\r\ncreateMenu()\r\n\r\n\n\n//# sourceURL=webpack://test-webpack/./src/mainmenu.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createShip\": () => (/* binding */ createShip)\n/* harmony export */ });\n\r\n\r\n// console.log(\"Hits: \",this.stats.hits);\r\n\r\n\r\nfunction createShip(){\r\n\tlet Ship = {name:'',stats:{length:3,hits:0,sunk:false},hit:function(){this.stats.hits ++;},\r\n\tisSunk:function(){\r\n\t\t// console.log(this.stats.hits);\r\n\t\tif(this.stats.hits>=this.stats.length){\r\n\t\t\tthis.stats.sunk = true\r\n\t\t\t// console.log(\"A battleship were sunk!\");\r\n\t\t}\r\n\t},posGen:function(){\r\n\t\tlet tv = this.startPos\r\n\t\t// console.log('object');\r\n\t\tfor(let i = 0;i<this.stats.length;i++){\r\n\t\t\ttv++;\r\n\t\t\tthis.posX.push(tv)\r\n\t\t}\r\n\t\t\r\n\t},posX:[],posY:0,startPos:0,sunk:false,}\r\n\r\n\treturn Ship\r\n}\r\n\r\n\r\n// var newShip = Ship\r\n// newShip.hit()\r\n// var a = (Math.random() * ((10-Ship.stats.length)-1+0)) + 1\r\n// a = Math.round(a)\r\n// console.log(a);\r\n\r\n\r\n\n\n//# sourceURL=webpack://test-webpack/./src/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;