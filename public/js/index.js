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
	          this.state.over ? this.state.winner === 0 ? 'WIN' : 'LOSS' : 'TIC TAC TOE'
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

/***/ }
/******/ ]);