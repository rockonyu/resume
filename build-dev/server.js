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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/webpack.config.dev.js":
/*!**************************************!*\
  !*** ./config/webpack.config.dev.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _require = __webpack_require__(/*! path */ \"path\"),\n    resolve = _require.resolve;\n\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\nvar HtmlWebpackHarddiskPlugin = __webpack_require__(/*! html-webpack-harddisk-plugin */ \"html-webpack-harddisk-plugin\");\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n\nmodule.exports = [{\n  mode: 'development',\n  entry: {\n    server: './src/server/index.js'\n  },\n  output: {\n    path: resolve(__dirname, '..', 'build-dev'),\n    filename: '[name].js',\n    publicPath: '/'\n  },\n  target: 'node',\n  node: {\n    __dirname: false,\n    __filename: false\n  },\n  externals: nodeExternals(),\n  // plugins: [\n  //   new webpack.DefinePlugin({\n  //     'process.env': {\n  //       NODE_ENV: `'production'`\n  //     }\n  //   })\n  // ],\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      loader: 'babel-loader'\n    }, {\n      test: /\\.tsx?$/,\n      loader: 'awesome-typescript-loader'\n    }]\n  },\n  resolve: {\n    extensions: ['.ts', '.tsx', '.js', '.jsx']\n  }\n}, {\n  mode: 'development',\n  entry: {\n    main: ['webpack-hot-middleware/client?reload=true', './src/client/index.tsx'],\n    vendor: ['react', 'react-dom']\n  },\n  output: {\n    publicPath: '/',\n    path: resolve(__dirname, '..', 'build-dev', 'client'),\n    filename: '[name].js',\n    hotUpdateMainFilename: 'hot-update.[hash:6].json',\n    hotUpdateChunkFilename: 'hot-update.[hash:6].js'\n  },\n  target: 'web',\n  module: {\n    rules: [{\n      test: /\\.js$/,\n      exclude: /node_modules/,\n      loader: 'babel-loader?presets[]=env&presets[]=react',\n      query: {\n        presets: ['env', 'react']\n      }\n    }, {\n      test: /\\.tsx?$/,\n      loader: 'awesome-typescript-loader'\n    }, {\n      test: /\\.css$/,\n      loaders: ['style-loader', 'css-loader']\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), new HtmlWebpackPlugin({\n    inject: true,\n    filename: 'index.html',\n    template: resolve(__dirname, '..', 'src', 'server', 'template.js'),\n    //favicon: resolve(__dirname, '..', 'src', 'client', 'static', 'favicon.png'),\n    alwaysWriteToDisk: true\n  }), new HtmlWebpackHarddiskPlugin({\n    outputPath: resolve(__dirname, '..', 'build-dev', 'client')\n  })],\n  resolve: {\n    extensions: ['.ts', '.tsx', '.js', '.jsx']\n  },\n  optimization: {\n    splitChunks: {\n      cacheGroups: {\n        commons: {\n          test: /[\\\\/]node_modules[\\\\/]/,\n          name: 'vendor',\n          chunks: 'all'\n        }\n      }\n    }\n  },\n  stats: {\n    assetsSort: '!size',\n    children: false,\n    chunks: false,\n    colors: true,\n    entrypoints: false,\n    modules: false\n  }\n}];\n\n//# sourceURL=webpack:///./config/webpack.config.dev.js?");

/***/ }),

/***/ "./src/client/components/Layout.ts":
/*!*****************************************!*\
  !*** ./src/client/components/Layout.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Layout = function (_a) {\r\n    var title = _a.title, body = _a.body, styles = _a.styles;\r\n    return \"\\n  <!doctype html>\\n  <html \\u26A1>\\n    <head>\\n      <meta charset=\\\"utf-8\\\">\\n      <script async src=\\\"https://cdn.ampproject.org/v0.js\\\"></script>\\n      <title>\" + title + \"</title>\\n      <link rel=\\\"canonical\\\" href=\\\"http://rockonyu.github.io/resume\\\">\\n      <meta name=\\\"viewport\\\" content=\\\"width=device-width,minimum-scale=1,initial-scale=1\\\">\\n      <script type=\\\"application/ld+json\\\">\\n        {\\n          \\\"@context\\\": \\\"http://schema.org\\\",\\n          \\\"@type\\\": \\\"NewsArticle\\\",\\n          \\\"headline\\\": \\\"Open-source framework for publishing content\\\",\\n          \\\"datePublished\\\": \\\"2015-10-07T12:02:41Z\\\",\\n          \\\"image\\\": [\\n            \\\"logo.jpg\\\"\\n          ]\\n        }\\n      </script>\\n      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>\\n      <style amp-custom>\\n        \" + styles + \"\\n      </style>\\n    </head>\\n    <body>\\n      <div id=\\\"app\\\">\" + body + \"</div>\\n    </body>\\n  </html>\\n\";\r\n};\r\nexports.default = Layout;\r\n\n\n//# sourceURL=webpack:///./src/client/components/Layout.ts?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar http = __webpack_require__(/*! http */ \"http\");\nvar express = __webpack_require__(/*! express */ \"express\");\n\n// process.env.NODE_ENV = process.env.NODE_ENV || 'development';\nprocess.env.HTTP_PORT = process.env.HTTP_PORT || 3000;\n\nvar app = express();\n\napp.set('env', \"development\");\napp.use(express.static(_path2.default.join(__dirname, 'client')));\n\n// application routes\nvar setupAppRoutes = __webpack_require__(/*! ./middlewares/development */ \"./src/server/middlewares/development.js\");\nsetupAppRoutes(app);\n\nhttp.createServer(app).listen(process.env.HTTP_PORT, function () {\n  console.log('HTTP server is now running on http://localhost:' + process.env.HTTP_PORT);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/middlewares/development.js":
/*!***********************************************!*\
  !*** ./src/server/middlewares/development.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _Layout = __webpack_require__(/*! ../../client/components/Layout */ \"./src/client/components/Layout.ts\");\n\nvar _Layout2 = _interopRequireDefault(_Layout);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\nvar webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\nvar webpackConfig = __webpack_require__(/*! ../../../config/webpack.config.dev */ \"./config/webpack.config.dev.js\");\n\nmodule.exports = function setup(app) {\n  var compiler = webpack(webpackConfig[1]);\n\n  app.use(webpackDevMiddleware(compiler, {\n    publicPath: webpackConfig[1].output.publicPath,\n    stats: {\n      colors: true\n    }\n  }));\n\n  app.use(webpackHotMiddleware(compiler));\n\n  // all other requests be handled by UI itself\n  app.get('*', function (req, res) {\n    // res.send(\n    //   Layout({\n    //     title: '123',\n    //     body: null,\n    //     styles: null\n    //   })\n    // );\n    res.sendFile((0, _path.resolve)(__dirname, 'client', 'index.html'));\n  });\n};\n\n//# sourceURL=webpack:///./src/server/middlewares/development.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-harddisk-plugin":
/*!***********************************************!*\
  !*** external "html-webpack-harddisk-plugin" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-harddisk-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-harddisk-plugin%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });