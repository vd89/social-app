module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** @format */\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || 'I_am_THE_Secret_Key_Process',\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/social-app',\n  mongoOPT: {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    useCreateIndex: true,\n    useFindAndModify: false\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controller/authController.js":
/*!*********************************************!*\
  !*** ./server/controller/authController.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/daxlaptop/workingProjects/mernProjects/social-app/server/controller/authController.js: Can not use keyword 'await' outside an async function (11:17)\\n\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m\\u001b[36mconst\\u001b[39m signin \\u001b[33m=\\u001b[39m (req\\u001b[33m,\\u001b[39m res) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\t\\u001b[36mtry\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 11 | \\u001b[39m    \\u001b[36mconst\\u001b[39m user \\u001b[33m=\\u001b[39m await \\u001b[33mUser\\u001b[39m\\u001b[33m.\\u001b[39mfindOne({ \\u001b[32m'email'\\u001b[39m\\u001b[33m:\\u001b[39m req\\u001b[33m.\\u001b[39mbody\\u001b[33m.\\u001b[39memail })\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    \\u001b[36mif\\u001b[39m (\\u001b[33m!\\u001b[39muser) {\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m      \\u001b[36mreturn\\u001b[39m res\\u001b[33m.\\u001b[39mstatus(\\u001b[35m401\\u001b[39m)\\u001b[33m.\\u001b[39mjson({error\\u001b[33m:\\u001b[39m \\u001b[32m'User Not found '\\u001b[39m})\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m    }\\u001b[0m\\n    at Parser._raise (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:757:17)\\n    at Parser.raiseWithData (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:750:17)\\n    at Parser.raise (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:744:17)\\n    at Parser.checkReservedWord (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:10921:14)\\n    at Parser.parseIdentifierName (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:10883:12)\\n    at Parser.parseIdentifier (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:10854:23)\\n    at Parser.parseExprAtom (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:9961:27)\\n    at Parser.parseExprSubscripts (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:9688:23)\\n    at Parser.parseMaybeUnary (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:9668:21)\\n    at Parser.parseExprOps (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:9538:23)\\n    at Parser.parseMaybeConditional (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:9511:23)\\n    at Parser.parseMaybeAssign (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:9466:21)\\n    at Parser.parseVar (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11869:26)\\n    at Parser.parseVarStatement (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11678:10)\\n    at Parser.parseStatementContent (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11277:21)\\n    at Parser.parseStatement (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11210:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11785:25)\\n    at Parser.parseBlockBody (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11771:10)\\n    at Parser.parseBlock (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11755:10)\\n    at Parser.parseTryStatement (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11643:23)\\n    at Parser.parseStatementContent (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11267:21)\\n    at Parser.parseStatement (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11210:17)\\n    at Parser.parseBlockOrModuleBlockBody (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11785:25)\\n    at Parser.parseBlockBody (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11771:10)\\n    at Parser.parseBlock (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:11755:10)\\n    at Parser.parseFunctionBody (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:10758:24)\\n    at Parser.parseArrowExpression (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:10727:10)\\n    at Parser.parseParenAndDistinguishExpression (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:10341:12)\\n    at Parser.parseExprAtom (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:10042:21)\\n    at Parser.parseExprSubscripts (/home/daxlaptop/workingProjects/mernProjects/social-app/node_modules/@babel/parser/lib/index.js:9688:23)\");\n\n//# sourceURL=webpack:///./server/controller/authController.js?");

/***/ }),

/***/ "./server/controller/dbController.js":
/*!*******************************************!*\
  !*** ./server/controller/dbController.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n/** @format */\n\n\nconst {\n  mongoUri,\n  mongoOPT\n} = _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (async () => {\n  try {\n    await Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(mongoUri, mongoOPT);\n    console.log(`Database is connected to the app... 🚀 🚀 🚀`);\n  } catch (err) {\n    console.log('MongoErr :>> ', err);\n  }\n});\n\n//# sourceURL=webpack:///./server/controller/dbController.js?");

/***/ }),

/***/ "./server/controller/userController.js":
/*!*********************************************!*\
  !*** ./server/controller/userController.js ***!
  \*********************************************/
/*! exports provided: userList, userByID, userCreate, userRead, userRemove, userUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userList\", function() { return userList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userByID\", function() { return userByID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userCreate\", function() { return userCreate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRead\", function() { return userRead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userRemove\", function() { return userRemove; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userUpdate\", function() { return userUpdate; });\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/** @format */\n\n\n // create new user\n\nconst userCreate = async (req, res) => {\n  const user = new _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"](req.body);\n\n  try {} catch (err) {\n    return res.status(400).json({\n      error: Object(_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_0__[\"getErrorMessage\"])(err)\n    });\n  }\n}; // view all user\n\n\nconst userList = async (req, res) => {\n  try {\n    let users = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n  } catch (err) {\n    return res.status(400).json({\n      error: Object(_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_0__[\"getErrorMessage\"])(err)\n    });\n  }\n}; // get user By id\n\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n\n    if (!user) {\n      return res.status(400).json({\n        error: 'User not found'\n      });\n    }\n\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: Object(_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_0__[\"getErrorMessage\"])(err)\n    });\n  }\n}; // view single user\n\n\nconst userRead = (req, res) => {\n  req.profile.hashedPassword = undefined;\n  return res.json(req.profile);\n}; // Update user\n\n\nconst userUpdate = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"extend\"])(user, req.body);\n    user.updated = Date.now();\n    await user.save();\n    user.hashedPassword = undefined;\n    return res.status(200).json(user);\n  } catch (err) {\n    return res.status(400).json({\n      error: Object(_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_0__[\"getErrorMessage\"])(err)\n    });\n  }\n}; // Delete user\n\n\nconst userRemove = async (req, res) => {\n  try {\n    const user = req.profile;\n    const deletedUser = await user.remove();\n    deletedUser.hashedPassword = undefined;\n    return res.status(200).json(deletedUser);\n  } catch (err) {\n    return res.status(400).json({\n      error: Object(_helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_0__[\"getErrorMessage\"])(err)\n    });\n  }\n};\n\n\n\n//# sourceURL=webpack:///./server/controller/userController.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../template */ \"./template.js\");\n/* harmony import */ var _routes_userRoutes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/userRoutes */ \"./server/routes/userRoutes.js\");\n/* harmony import */ var _routes_authRoutes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/authRoutes */ \"./server/routes/authRoutes.js\");\n/** @format */\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()(); // Middleware\n\napp.use(cors__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({\n  extended: true\n}));\napp.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('dev'));\napp.use(helmet__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_5___default()()); // Routes\n\napp.get('/', (req, res) => {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n});\napp.use('/api/users', _routes_userRoutes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use('/api/auth', _routes_authRoutes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    return res.status(401).json({\n      error: err.name + ': ' + err.message\n    });\n  } else if (err) {\n    console.log(err);\n    return res.status(400).json({\n      error: err.name + ': ' + err.message\n    });\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** @format */\nconst getErrorMessage = err => {\n  let message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n        break;\n    }\n  } else {\n    for (const errName in err.errors) {\n      if (err.errors[errName].messsage) {\n        message = err.errors[errName].message;\n      }\n    }\n  }\n\n  return message;\n};\n\nconst getUniqueErrorMessage = err => {\n  let output;\n\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getErrorMessage\n});\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/** @format */\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__[\"Schema\"]({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already Exists',\n    required: 'Email is required'\n  },\n  hashedPassword: {\n    type: String,\n    required: 'Password is required'\n  },\n  created: {\n    type: Date,\n    default: Date.now()\n  },\n  updated: Date\n}); // To virtualy set password for user and then store to database\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashedPassword = this.hashingPassword(password, this.salt);\n}).get(function () {\n  return this._password;\n}); // Methods for password\n\nUserSchema.methods = {\n  authenticate: function (password) {\n    return Object(bcrypt__WEBPACK_IMPORTED_MODULE_1__[\"compareSync\"])(password, this.hashedPassword);\n  },\n  makeSalt: function () {\n    return Object(bcrypt__WEBPACK_IMPORTED_MODULE_1__[\"genSaltSync\"])(10);\n  },\n  hashingPassword: function (password, salt) {\n    if (!password) {\n      return '';\n    }\n\n    try {\n      return Object(bcrypt__WEBPACK_IMPORTED_MODULE_1__[\"hashSync\"])(password, salt);\n    } catch (err) {\n      return '';\n    }\n  }\n}; // Path and validation\n\nUserSchema.path('hashedPassword').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at leat 6 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(mongoose__WEBPACK_IMPORTED_MODULE_0__[\"model\"])('User', UserSchema, 'users'));\n\n//# sourceURL=webpack:///./server/models/User.js?");

/***/ }),

/***/ "./server/routes/authRoutes.js":
/*!*************************************!*\
  !*** ./server/routes/authRoutes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_authController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/authController */ \"./server/controller/authController.js\");\n/* harmony import */ var _controller_authController__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_controller_authController__WEBPACK_IMPORTED_MODULE_1__);\n/** @format */\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n/*\n  @ Signin route user\n  @ Route /api/auth/signin\n  @ POST\n*/\n\nrouter.route('/signin').post(_controller_authController__WEBPACK_IMPORTED_MODULE_1__[\"signin\"]);\n/*\n  @ Signout Route user\n  @ Route /api/auth/signout\n  @ GET\n*/\n\nrouter.route('/signout').get(_controller_authController__WEBPACK_IMPORTED_MODULE_1__[\"signout\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/authRoutes.js?");

/***/ }),

/***/ "./server/routes/userRoutes.js":
/*!*************************************!*\
  !*** ./server/routes/userRoutes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_userController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/userController */ \"./server/controller/userController.js\");\n/* harmony import */ var _controller_authController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/authController */ \"./server/controller/authController.js\");\n/* harmony import */ var _controller_authController__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_controller_authController__WEBPACK_IMPORTED_MODULE_2__);\n/** @format */\n\n\n\nconst router = Object(express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"])();\n/*\n  @ User list and create user\n  @ Router /api/users/\n  @ POST && GET\n*/\n\nrouter.route('/').get(_controller_userController__WEBPACK_IMPORTED_MODULE_1__[\"userList\"]).post(_controller_userController__WEBPACK_IMPORTED_MODULE_1__[\"userCreate\"]);\n/*\n  @ User read, update and delete\n  @ Route /api/users/:userId\n  @ GET ,PUT and DELETE\n*/\n\nrouter.route('/:userId').get(_controller_authController__WEBPACK_IMPORTED_MODULE_2__[\"requiredSignin\"], _controller_userController__WEBPACK_IMPORTED_MODULE_1__[\"userRead\"]).put(_controller_authController__WEBPACK_IMPORTED_MODULE_2__[\"requiredSignin\"], _controller_authController__WEBPACK_IMPORTED_MODULE_2__[\"hasAuthorization\"], _controller_userController__WEBPACK_IMPORTED_MODULE_1__[\"userUpdate\"]).delete(_controller_authController__WEBPACK_IMPORTED_MODULE_2__[\"requiredSignin\"], _controller_authController__WEBPACK_IMPORTED_MODULE_2__[\"hasAuthorization\"], _controller_userController__WEBPACK_IMPORTED_MODULE_1__[\"userRemove\"]);\n/*\n  @ User get user id  to get params\n  @ PARAM\n*/\n\nrouter.param('userId', _controller_userController__WEBPACK_IMPORTED_MODULE_1__[\"userByID\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./server/routes/userRoutes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n/* harmony import */ var _controller_dbController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/dbController */ \"./server/controller/dbController.js\");\n\n\n\nconst {\n  port\n} = _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; // DataBase controller\n\nObject(_controller_dbController__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Server\n\n_express__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.log(`Server is running on port ${port}... 🐕 🐕`);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/** @format */\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  return `\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\"/>\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>\n      <title>MERN social App</title>\n    </head>\n    <body>\n      <h1>This is the test run</h1>\n      <div id=\"root\"> Hello World</div>\n      <!-- <script src=\"/dist/bundle.js\" type=\"text/javascript\"></script> -->\n    </body>\n    </html>\n  `;\n});\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/daxlaptop/workingProjects/mernProjects/social-app/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ })

/******/ });