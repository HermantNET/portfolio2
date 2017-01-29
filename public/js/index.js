/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _calculator = __webpack_require__(1);

	var _calculator2 = _interopRequireDefault(_calculator);

	var _gallery = __webpack_require__(2);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _tictactoe = __webpack_require__(3);

	var _tictactoe2 = _interopRequireDefault(_tictactoe);

	var _styles = __webpack_require__(4);

	var _styles2 = _interopRequireDefault(_styles);

	var _calculator3 = __webpack_require__(8);

	var _calculator4 = _interopRequireDefault(_calculator3);

	var _gallery3 = __webpack_require__(10);

	var _gallery4 = _interopRequireDefault(_gallery3);

	var _t = __webpack_require__(12);

	var _t2 = _interopRequireDefault(_t);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var Calculator = React.createClass({
	  displayName: 'Calculator',

	  getInitialState: function getInitialState() {
	    return {
	      num: 0,
	      operator: '+',
	      displayNum: "0",
	      calculated: false
	    };
	  },
	  clickNum: function clickNum(num) {
	    if (this.state.operator === '=') {
	      this.setState({
	        num: 0,
	        displayNum: num.toString(),
	        operator: '+',
	        calculated: false
	      });
	    } else {
	      this.setState({
	        displayNum: this.state.calculated ? num.toString() : this.state.displayNum !== "0" ? this.state.displayNum + num : num.toString(),
	        calculated: false
	      });
	    }
	  },
	  clickDecimal: function clickDecimal() {
	    this.setState({
	      displayNum: this.state.calculated ? "0." : this.state.displayNum.includes('.') ? this.state.displayNum : this.state.displayNum + '.',
	      calculated: false
	    });
	  },
	  clickFunc: function clickFunc(op) {
	    var n1 = this.state.num,
	        n2 = +this.state.displayNum;

	    switch (this.state.operator) {
	      case '+':
	        n1 += n2;
	        break;
	      case '-':
	        n1 -= n2;
	        break;
	      case '*':
	        n1 *= n2;
	        break;
	      case '/':
	        n1 /= n2;
	    }

	    this.setState({
	      num: n1,
	      displayNum: n1.toString(),
	      operator: op,
	      calculated: true
	    });
	  },
	  reset: function reset() {
	    this.setState({
	      num: 0,
	      displayNum: "0",
	      operator: '+',
	      calculated: false
	    });
	  },
	  resetInput: function resetInput() {
	    this.setState({
	      displayNum: "0"
	    });
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'calc' },
	      React.createElement(
	        'p',
	        { className: 'calc-display' },
	        this.state.displayNum
	      ),
	      React.createElement(
	        'div',
	        { className: 'calc-buttons' },
	        React.createElement(
	          'div',
	          { className: 'calc-numbers' },
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 7) },
	            React.createElement(
	              'span',
	              null,
	              '7'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 8) },
	            React.createElement(
	              'span',
	              null,
	              '8'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 9) },
	            React.createElement(
	              'span',
	              null,
	              '9'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 4) },
	            React.createElement(
	              'span',
	              null,
	              '4'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 5) },
	            React.createElement(
	              'span',
	              null,
	              '5'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 6) },
	            React.createElement(
	              'span',
	              null,
	              '6'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 1) },
	            React.createElement(
	              'span',
	              null,
	              '1'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 2) },
	            React.createElement(
	              'span',
	              null,
	              '2'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickNum.bind(this, 3) },
	            React.createElement(
	              'span',
	              null,
	              '3'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button calc-button-long', onClick: this.clickNum.bind(this, 0) },
	            React.createElement(
	              'span',
	              null,
	              '0'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickDecimal },
	            React.createElement(
	              'span',
	              null,
	              '.'
	            )
	          )
	        ),
	        React.createElement(
	          'div',
	          { className: 'calc-functions' },
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickFunc.bind(this, '*') },
	            React.createElement(
	              'span',
	              null,
	              '\xD7'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickFunc.bind(this, '/') },
	            React.createElement(
	              'span',
	              null,
	              '\xF7'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button danger', onClick: this.resetInput },
	            React.createElement(
	              'span',
	              null,
	              'C'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button danger', onClick: this.reset },
	            React.createElement(
	              'span',
	              null,
	              'AC'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickFunc.bind(this, '+') },
	            React.createElement(
	              'span',
	              null,
	              '+'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.clickFunc.bind(this, '-') },
	            React.createElement(
	              'span',
	              null,
	              '-'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button calc-button-tall', onClick: this.clickFunc.bind(this, '=') },
	            React.createElement(
	              'span',
	              null,
	              '='
	            )
	          )
	        )
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(Calculator, null), document.getElementById('calculator'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	var Gallery = React.createClass({
	  displayName: "Gallery",

	  getInitialState: function getInitialState() {
	    return {
	      photos: [{ img: "/img/gal1.jpg", thumb: "/img/gal1_thumb.jpg" }, { img: "/img/gal2.jpg", thumb: "/img/gal2_thumb.jpg" }, { img: "/img/gal3.jpg", thumb: "/img/gal3_thumb.jpg" }],
	      activePhoto: -1,
	      add: false
	    };
	  },
	  selectPhoto: function selectPhoto(photoIndex) {
	    this.setState({
	      activePhoto: photoIndex
	    });
	  },
	  add: function add() {
	    this.setState({
	      add: true
	    });
	  },
	  addImage: function addImage() {
	    this.setState({
	      photos: this.url.value.trim() !== "" ? this.state.photos.concat({ img: this.url.value, thumb: this.thumb.value }) : this.state.photos,
	      add: false
	    });
	  },
	  render: function render() {
	    var _this = this;

	    var render;
	    if (this.state.activePhoto > -1) {
	      render = React.createElement(
	        "div",
	        { className: "gallery" },
	        React.createElement(
	          "div",
	          null,
	          React.createElement("img", { className: "gal-display", src: this.state.photos[this.state.activePhoto].img, onClick: this.selectPhoto.bind(this, -1) }),
	          React.createElement(
	            "p",
	            null,
	            "Click the image to return to the Gallery."
	          )
	        )
	      );
	    } else {
	      render = React.createElement(
	        "div",
	        { className: "gallery" },
	        React.createElement(
	          "div",
	          { className: "gal-span" },
	          React.createElement(
	            "p",
	            null,
	            "Click an image to view."
	          )
	        ),
	        this.state.photos.map(function (photo, index) {
	          return React.createElement(
	            "div",
	            { key: index },
	            React.createElement("img", { className: "gal-thumb", src: photo.thumb, onClick: _this.selectPhoto.bind(_this, index) })
	          );
	        }),
	        this.state.add ? React.createElement(
	          "div",
	          { className: "gal-span" },
	          React.createElement("input", { type: "text", placeholder: "Image URL", ref: function ref(input) {
	              _this.url = input;
	            } }),
	          React.createElement("input", { type: "text", placeholder: "Image thumbnail URL", ref: function ref(input) {
	              _this.thumb = input;
	            } }),
	          React.createElement(
	            "button",
	            { onClick: this.addImage },
	            "Add Image"
	          )
	        ) : React.createElement(
	          "div",
	          { className: "gal-span", onClick: this.add },
	          React.createElement(
	            "h1",
	            null,
	            "+"
	          ),
	          React.createElement(
	            "p",
	            null,
	            "Add Image"
	          )
	        )
	      );
	    }
	    return render;
	  }
	});

	ReactDOM.render(React.createElement(Gallery, null), document.getElementById('gallery'));

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var TicTacToe = React.createClass({
	  displayName: "TicTacToe",

	  getInitialState: function getInitialState() {
	    return {
	      board: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
	      over: false,
	      winner: -1
	    };
	  },
	  check: function check() {
	    var _this = this;

	    var board = this.state.board;

	    for (var row = 0; row < 3; row++) {
	      if (board[row].every(function (pc) {
	        return pc === _this.state.board[row][1];
	      })) {
	        return board[row][0];
	      }
	    }

	    for (var col = 0; col < 3; col++) {
	      var values = [];
	      for (var row = 0; row < 3; row++) {
	        values.push(board[row][col]);
	      }
	      if (values.every(function (pc) {
	        return pc === values[1];
	      })) {
	        return values[0];
	      }
	    }

	    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
	      return board[1][1];
	    } else if (board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
	      return board[1][1];
	    } else if (board.every(function (row) {
	      return row.every(function (pc) {
	        return pc > -1;
	      });
	    })) {
	      return 2;
	    } else {
	      return -1;
	    }
	  },
	  botMove: function botMove() {
	    var newBoard = this.state.board.slice();
	    var lastMove = 0;
	    var indices = [0, 0];

	    while (lastMove > -1) {
	      if (!newBoard.some(function (row) {
	        return row.some(function (pc) {
	          return pc === -1;
	        });
	      })) return;
	      indices = indices.map(function () {
	        return Math.round(Math.random() * 2);
	      });
	      lastMove = newBoard[indices[0]][indices[1]];
	    }

	    newBoard[indices[0]][indices[1]] = 1;

	    this.setState({
	      board: newBoard
	    });
	  },
	  makeMove: function makeMove(row, col) {
	    var newBoard = this.state.board.slice();
	    if (newBoard[row][col] > -1 || this.state.over) return;
	    newBoard[row][col] = 0;
	    this.setState({
	      board: newBoard
	    }, function () {
	      this.botMove();
	      var res = this.check();
	      if (res > -1) {
	        this.setState({
	          over: true,
	          winner: res
	        });
	      }
	    });
	  },
	  reset: function reset() {
	    this.setState({
	      board: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
	      over: false,
	      winner: -1
	    });
	  },
	  render: function render() {
	    var _this2 = this;

	    return React.createElement(
	      "div",
	      { className: "t3" },
	      React.createElement(
	        "div",
	        { className: "t3-board" },
	        this.state.board.map(function (row, i) {
	          return row.map(function (col, i2) {
	            return React.createElement("div", {
	              className: col === -1 ? '' : col === 0 ? 't3-blue' : 't3-red',
	              key: "" + i + i2,
	              onClick: _this2.makeMove.bind(_this2, i, i2)
	            });
	          });
	        })
	      ),
	      React.createElement(
	        "div",
	        { className: "t3-span" },
	        React.createElement(
	          "p",
	          null,
	          this.state.over ? this.state.winner === 0 ? 'WIN' : this.state.winner === 1 ? 'LOSS' : 'TIE' : 'TIC TAC TOE'
	        ),
	        this.state.over ? React.createElement(
	          "button",
	          { onClick: this.reset },
	          "Play Again?"
	        ) : null
	      )
	    );
	  }
	});

	ReactDOM.render(React.createElement(TicTacToe, null), document.getElementById('t3'));

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./styles.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "html {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1rem; }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\n.title {\n  text-align: center;\n  font-family: 'Bungee', cursive;\n  margin: 0;\n  padding: 1rem; }\n\n.content > p, h2 {\n  padding: 0 2rem; }\n\n.section-blue {\n  background-color: #067BC2;\n  color: #EEF1EC; }\n\n/* Blocks */\n#heading > .title {\n  font-size: 3rem; }\n\n#nav {\n  display: inline-flex;\n  justify-content: space-around;\n  width: 15rem; }\n\n#content1 {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n#content1 > p {\n  max-width: 50rem; }\n\n#content1 > blockquote {\n  padding: 1rem;\n  box-shadow: 0.2rem 0.2rem 0.4rem grey; }\n\n#content1 > blockquote > p {\n  padding: 1rem 0.5rem;\n  border-left: 0.2rem solid lightgrey; }\n\n#content1 > blockquote > small {\n  display: block;\n  text-align: right; }\n\n#content2 {\n  display: flex;\n  flex-direction: column; }\n\n#content3 {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n#content3 > div {\n  padding: 2rem;\n  text-align: center; }\n\n#footer {\n  margin-top: 5rem;\n  text-align: center;\n  font-size: 0.8rem;\n  padding: 1rem 2rem; }\n\n/* images */\n.react {\n  display: block;\n  margin: 0 auto;\n  max-width: 16rem; }\n\n.img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5rem 0;\n  background-size: cover;\n  height: 15rem;\n  box-shadow: 0.7rem 0.7rem 1rem rgba(0, 0, 0, 0.4) inset; }\n\n.img > h2 {\n  text-align: center;\n  text-shadow: 0 0 0.5rem black;\n  color: white; }\n\n#imagine {\n  margin-top: 0;\n  background-image: url(/img/imagine.jpg);\n  background-size: 120%;\n  background-position: 42% 35%; }\n\n#build {\n  background-image: url(/img/build.jpg);\n  background-size: 140%;\n  background-position: left; }\n\n#profit {\n  background-image: url(/img/profit.jpg);\n  background-position: center; }\n\n/* misc */\n.split {\n  margin: 0 auto;\n  max-width: 20rem;\n  display: flex;\n  justify-content: space-around; }\n\n.text-section {\n  display: inline;\n  color: white;\n  background-color: black;\n  padding: 0.6rem; }\n\n.languages {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n\n.center {\n  text-align: center; }\n\n#hamburger {\n  width: 2.5rem;\n  height: 3rem;\n  display: inline-block;\n  font-size: 2.5rem;\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 0 0.5rem;\n  border-radius: 0.5rem; }\n\n#hamburger > span {\n  display: block;\n  transform: scaleX(1.7); }\n\n.column {\n  flex-direction: column; }\n\n.item {\n  margin: 3rem 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center; }\n\n.desc {\n  max-width: 20rem;\n  margin: 1rem 2rem; }\n\n.desc-large {\n  padding: 0 2rem;\n  max-width: 40rem; }\n\n.grey {\n  padding: 0 2rem;\n  padding-bottom: 2rem;\n  background-color: lightgrey;\n  margin-bottom: 2rem; }\n\n.hr-break {\n  background-color: lightgrey;\n  border: 0;\n  margin: 5rem 0;\n  height: 0.5rem;\n  box-shadow: 0 0.1rem 0.2rem grey inset; }\n\n@media (min-width: 768px) {\n  .grey {\n    border-radius: 1%; }\n  #imagine {\n    background-image: url(/img/imagine_medium.jpg);\n    background-size: 105%;\n    background-position: 25% 50%; }\n  #build {\n    background-image: url(/img/build_medium.jpg); }\n  #profit {\n    background-image: url(/img/profit_medium.jpg); } }\n\n@media (min-width: 1024px) {\n  #build, #profit, #imagine {\n    background-attachment: fixed;\n    text-align: center;\n    font-size: 2rem;\n    height: 38rem; }\n  #imagine {\n    background-image: url(/img/imagine_large.jpg);\n    background-size: 115%;\n    background-position: 35% center; }\n  #build {\n    background-image: url(/img/build_large.jpg); }\n  #profit {\n    background-image: url(/img/profit_large.jpg); } }\n\n@media (min-width: 1440px) {\n  #imagine {\n    background-size: 105%;\n    background-position: 25% center; }\n  #build {\n    background-size: 100%; } }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./calculator.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./calculator.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".calc {\n  padding: 1rem;\n  width: 17.6rem;\n  font-family: sans-serif;\n  border-radius: 2%;\n  background: linear-gradient(to top, #e6e6e6, #f0f0f0);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0.3rem 0.3rem grey;\n  margin-bottom: 2rem; }\n\n.calc-display {\n  box-shadow: 0.1rem 0.1rem 0.2rem grey inset;\n  flex: 100rem 2rem 2rem;\n  word-break: break-all;\n  border-radius: 2%;\n  font-family: 'Press Start 2P';\n  margin: 0.1rem;\n  margin-bottom: 1.5rem;\n  padding: 0.5rem;\n  background-color: white;\n  text-align: right;\n  font-size: 1.5rem; }\n\n.calc-buttons {\n  height: 13.6rem;\n  width: 14rem;\n  display: flex;\n  align-content: flex-start; }\n\n.calc-functions {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap; }\n\n.calc-numbers {\n  display: flex;\n  flex-wrap: wrap; }\n\n.calc-button {\n  box-shadow: 0.15rem 0.15rem grey;\n  border-radius: 5%;\n  height: 3rem;\n  width: 3rem;\n  margin: 0.2rem; }\n\n.calc-numbers > .calc-button:active, .calc-functions > .calc-button:active {\n  background-color: #A9A9A9; }\n\n.calc-button > span {\n  user-select: none;\n  display: block;\n  text-align: center;\n  margin: 0.5rem; }\n\n.calc-numbers > .calc-button {\n  background-color: #DCDCDC; }\n\n.calc-functions > .calc-button {\n  background-color: #C0C0C0; }\n\n.calc-functions > .calc-button.danger {\n  background-color: #C55E5E; }\n\n.calc-functions > .calc-button.danger:active {\n  background-color: #A13636; }\n\n.calc-button-long {\n  width: 6.4rem; }\n\n.calc-button-tall {\n  height: 6.4rem; }\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./gallery.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./gallery.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".gallery {\n  max-width: 50rem;\n  background-color: grey;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: flex-start;\n  margin-bottom: 2rem; }\n\n.gallery > div > p {\n  text-align: center; }\n\n.gallery > div {\n  margin: 0.5rem; }\n\n.gallery > div > .gal-display {\n  width: 100%; }\n\n.gallery > div > .gal-thumb {\n  box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);\n  max-height: 10rem; }\n\n.gal-span {\n  text-align: center;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./t3.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./t3.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".t3-span {\n  text-align: center; }\n\n.t3-board {\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 12rem; }\n\n.t3-board > div {\n  border-radius: 4%;\n  height: 3rem;\n  width: 3rem;\n  margin: 0.2rem;\n  background-color: lightgrey; }\n\n.t3-board > .t3-blue {\n  background-color: blue; }\n\n.t3-board > .t3-red {\n  background-color: red; }\n", ""]);

	// exports


/***/ }
/******/ ]);