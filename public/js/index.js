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

	var _device = __webpack_require__(4);

	var _device2 = _interopRequireDefault(_device);

	var _ui = __webpack_require__(6);

	var _ui2 = _interopRequireDefault(_ui);

	var _docReady = __webpack_require__(7);

	var _docReady2 = _interopRequireDefault(_docReady);

	var _styles = __webpack_require__(9);

	var _styles2 = _interopRequireDefault(_styles);

	var _calculator3 = __webpack_require__(13);

	var _calculator4 = _interopRequireDefault(_calculator3);

	var _gallery3 = __webpack_require__(15);

	var _gallery4 = _interopRequireDefault(_gallery3);

	var _t = __webpack_require__(17);

	var _t2 = _interopRequireDefault(_t);

	var _device3 = __webpack_require__(19);

	var _device4 = _interopRequireDefault(_device3);

	var _ui3 = __webpack_require__(21);

	var _ui4 = _interopRequireDefault(_ui3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _docReady2.default)(function () {
	  AOS.init({
	    offset: 140
	  });
	});

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
	          "div",
	          { className: "t3-btn", onClick: this.reset },
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

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Add class .device to whatever div targetted by main react component to get dynamic sizing.
	var Screen = function (_Component) {
	  _inherits(Screen, _Component);

	  function Screen(props) {
	    _classCallCheck(this, Screen);

	    return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, props));
	  }

	  _createClass(Screen, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "div",
	        { className: "device-body" },
	        React.createElement(
	          "div",
	          { className: "device-content" },
	          this.props.children
	        ),
	        React.createElement("div", { className: "device-home" })
	      );
	    }
	  }]);

	  return Screen;
	}(_react.Component);

	module.exports = Screen;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _device = __webpack_require__(4);

	var _device2 = _interopRequireDefault(_device);

	var _home = __webpack_require__(24);

	var _home2 = _interopRequireDefault(_home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Ui = function (_Component) {
	  _inherits(Ui, _Component);

	  function Ui(props) {
	    _classCallCheck(this, Ui);

	    return _possibleConstructorReturn(this, (Ui.__proto__ || Object.getPrototypeOf(Ui)).call(this, props));
	  }

	  _createClass(Ui, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        _device2.default,
	        null,
	        React.createElement(_home2.default, null)
	      );
	    }
	  }]);

	  return Ui;
	}(_react.Component);

	ReactDOM.render(React.createElement(Ui, null), document.getElementById('ui'));

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * docReady v1.0.4
	 * Cross browser DOMContentLoaded event emitter
	 * MIT license
	 */

	/*jshint browser: true, strict: true, undef: true, unused: true*/
	/*global define: false, require: false, module: false */

	( function( window ) {

	'use strict';

	var document = window.document;
	// collection of functions to be triggered on ready
	var queue = [];

	function docReady( fn ) {
	  // throw out non-functions
	  if ( typeof fn !== 'function' ) {
	    return;
	  }

	  if ( docReady.isReady ) {
	    // ready now, hit it
	    fn();
	  } else {
	    // queue function when ready
	    queue.push( fn );
	  }
	}

	docReady.isReady = false;

	// triggered on various doc ready events
	function onReady( event ) {
	  // bail if already triggered or IE8 document is not ready just yet
	  var isIE8NotReady = event.type === 'readystatechange' && document.readyState !== 'complete';
	  if ( docReady.isReady || isIE8NotReady ) {
	    return;
	  }

	  trigger();
	}

	function trigger() {
	  docReady.isReady = true;
	  // process queue
	  for ( var i=0, len = queue.length; i < len; i++ ) {
	    var fn = queue[i];
	    fn();
	  }
	}

	function defineDocReady( eventie ) {
	  // trigger ready if page is ready
	  if ( document.readyState === 'complete' ) {
	    trigger();
	  } else {
	    // listen for events
	    eventie.bind( document, 'DOMContentLoaded', onReady );
	    eventie.bind( document, 'readystatechange', onReady );
	    eventie.bind( window, 'load', onReady );
	  }

	  return docReady;
	}

	// transport
	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(8) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (defineDocReady), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  module.exports = defineDocReady( require('eventie') );
	} else {
	  // browser global
	  window.docReady = defineDocReady( window.eventie );
	}

	})( window );


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * eventie v1.0.6
	 * event binding helper
	 *   eventie.bind( elem, 'click', myFn )
	 *   eventie.unbind( elem, 'click', myFn )
	 * MIT license
	 */

	/*jshint browser: true, undef: true, unused: true */
	/*global define: false, module: false */

	( function( window ) {

	'use strict';

	var docElem = document.documentElement;

	var bind = function() {};

	function getIEEvent( obj ) {
	  var event = window.event;
	  // add event.target
	  event.target = event.target || event.srcElement || obj;
	  return event;
	}

	if ( docElem.addEventListener ) {
	  bind = function( obj, type, fn ) {
	    obj.addEventListener( type, fn, false );
	  };
	} else if ( docElem.attachEvent ) {
	  bind = function( obj, type, fn ) {
	    obj[ type + fn ] = fn.handleEvent ?
	      function() {
	        var event = getIEEvent( obj );
	        fn.handleEvent.call( fn, event );
	      } :
	      function() {
	        var event = getIEEvent( obj );
	        fn.call( obj, event );
	      };
	    obj.attachEvent( "on" + type, obj[ type + fn ] );
	  };
	}

	var unbind = function() {};

	if ( docElem.removeEventListener ) {
	  unbind = function( obj, type, fn ) {
	    obj.removeEventListener( type, fn, false );
	  };
	} else if ( docElem.detachEvent ) {
	  unbind = function( obj, type, fn ) {
	    obj.detachEvent( "on" + type, obj[ type + fn ] );
	    try {
	      delete obj[ type + fn ];
	    } catch ( err ) {
	      // can't delete window object properties
	      obj[ type + fn ] = undefined;
	    }
	  };
	}

	var eventie = {
	  bind: bind,
	  unbind: unbind
	};

	// ----- module definition ----- //

	if ( true ) {
	  // AMD
	  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (eventie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
	  // CommonJS
	  module.exports = eventie;
	} else {
	  // browser global
	  window.eventie = eventie;
	}

	})( window );


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "html {\n  font-family: 'Raleway', sans-serif;\n  font-size: 1rem;\n  background-color: white; }\n\nbody {\n  padding: 0;\n  margin: 0; }\n\nblockquote {\n  display: inline-block;\n  background-color: #E0E0E2;\n  padding: 1rem;\n  box-shadow: 0.2rem 0.2rem 0.4rem grey;\n  max-width: 50rem; }\n  blockquote > small {\n    display: block;\n    text-align: right; }\n\n#content {\n  width: 100%;\n  overflow: hidden; }\n\n.title {\n  text-align: center;\n  font-family: 'Bungee', cursive;\n  margin: 0;\n  padding: 1rem; }\n\n.dark {\n  background-color: #CE5374;\n  color: #800B2E; }\n\n/* Blocks */\n#content0 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n#content1 {\n  background-color: #CE5374;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n#content2 {\n  background-color: #CE5374;\n  display: flex;\n  flex-direction: column; }\n\n#content3 {\n  width: 95%;\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n  #content3 > div {\n    padding: 2rem;\n    padding-top: 5rem;\n    text-align: center; }\n\n#footer {\n  margin-top: 5rem;\n  text-align: center;\n  font-size: 0.8rem;\n  padding: 1rem 2rem; }\n\n/* images */\n#me {\n  margin-bottom: 2rem;\n  border-radius: 50%;\n  max-width: 18rem;\n  box-shadow: 0.2rem 0.2rem 0 #CE5374, 0.4rem 0.4rem 0 #800B2E; }\n\n.react {\n  display: block;\n  margin: 0 auto;\n  max-width: 16rem; }\n\n.img {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 5rem 0;\n  background-size: cover;\n  height: 15rem;\n  box-shadow: 0.7rem 0.7rem 1rem rgba(0, 0, 0, 0.4) inset; }\n\n/* misc */\n#built-with {\n  margin-bottom: 0;\n  background-color: #353238;\n  color: white; }\n  #built-with div {\n    background-color: #353238;\n    max-width: 40rem;\n    padding: 2rem 1rem;\n    margin: 1rem 1rem; }\n    #built-with div h3 {\n      margin-top: 2rem; }\n\n.split {\n  margin: 0 auto;\n  max-width: 20rem;\n  display: flex;\n  justify-content: space-around; }\n\n.text-section {\n  color: rgba(0, 0, 0, 0.6);\n  font-weight: 700;\n  display: inline;\n  padding: 0.6rem; }\n\n.languages {\n  width: 100%;\n  background-color: #353238; }\n  .languages > div {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center; }\n    .languages > div h3 {\n      text-align: center;\n      margin-top: 2rem; }\n\n.center {\n  text-align: center; }\n\n#hamburger {\n  width: 2.5rem;\n  height: 3rem;\n  display: inline-block;\n  font-size: 2.5rem;\n  background-color: rgba(255, 255, 255, 0.2);\n  padding: 0 0.5rem;\n  border-radius: 0.5rem; }\n\n#hamburger > span {\n  display: block;\n  transform: scaleX(1.7); }\n\n.column {\n  flex-direction: column; }\n\n.item {\n  margin: 3rem 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center; }\n\n.desc {\n  box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);\n  border-radius: 2%;\n  padding: 2rem 1rem;\n  margin: 1rem 1rem;\n  background-color: #E0E0E2;\n  max-width: 20rem; }\n\n.desc-large {\n  box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);\n  border-radius: 2%;\n  padding: 2rem 1rem;\n  margin: 1rem 1rem;\n  background-color: #E0E0E2;\n  max-width: 40rem; }\n\n.grey {\n  padding: 0 2rem;\n  padding-bottom: 2rem;\n  background-color: #E0E0E2;\n  margin-bottom: 2rem; }\n\n@media (min-width: 768px) {\n  .grey {\n    border-radius: 1%; } }\n\n@media (min-width: 768px) and (min-height: 680px) {\n  #content0 {\n    height: 100vh; } }\n", ""]);

	// exports


/***/ },
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".calc {\n  padding: 1rem;\n  width: 17.6rem;\n  font-family: sans-serif;\n  border-radius: 2%;\n  background: linear-gradient(to top, #e6e6e6, #f0f0f0);\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0.3rem 0.3rem grey;\n  margin-bottom: 2rem; }\n\n.calc-display {\n  box-shadow: 0.1rem 0.1rem 0.2rem grey inset;\n  flex: 100rem 2rem 2rem;\n  word-break: break-all;\n  border-radius: 2%;\n  font-family: 'Press Start 2P';\n  margin: 0.1rem;\n  margin-bottom: 1.5rem;\n  padding: 0.5rem;\n  background-color: white;\n  text-align: right;\n  font-size: 1.5rem; }\n\n.calc-buttons {\n  height: 13.6rem;\n  width: 14rem;\n  display: flex;\n  align-content: flex-start; }\n\n.calc-functions {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap; }\n\n.calc-numbers {\n  display: flex;\n  flex-wrap: wrap; }\n\n.calc-button {\n  box-shadow: 0.15rem 0.15rem grey;\n  border-radius: 5%;\n  height: 3rem;\n  width: 3rem;\n  margin: 0.2rem; }\n\n.calc-numbers > .calc-button:active, .calc-functions > .calc-button:active {\n  background-color: #A9A9A9; }\n\n.calc-button > span {\n  user-select: none;\n  display: block;\n  text-align: center;\n  margin: 0.5rem; }\n\n.calc-numbers > .calc-button {\n  background-color: #DCDCDC; }\n\n.calc-functions > .calc-button {\n  background-color: #C0C0C0; }\n\n.calc-functions > .calc-button.danger {\n  background-color: #C55E5E; }\n\n.calc-functions > .calc-button.danger:active {\n  background-color: #A13636; }\n\n.calc-button-long {\n  width: 6.4rem; }\n\n.calc-button-tall {\n  height: 6.4rem; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".gallery {\n  border-radius: 1%;\n  max-width: 50rem;\n  background-color: rgba(0, 0, 0, 0.3);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: flex-start; }\n\n.gallery > div > p {\n  text-align: center; }\n\n.gallery > div {\n  margin: 0.5rem; }\n\n.gallery > div > .gal-display {\n  width: 100%; }\n\n.gallery > div > .gal-thumb {\n  box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.4);\n  max-height: 10rem; }\n\n.gal-span {\n  text-align: center;\n  width: 100%; }\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".t3 {\n  height: 16rem; }\n\n.t3-span {\n  text-align: center; }\n\n.t3-board {\n  margin: 0 auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: center;\n  width: 12rem; }\n\n.t3-board > div {\n  border-radius: 4%;\n  height: 3rem;\n  width: 3rem;\n  margin: 0.2rem;\n  background-color: white; }\n\n.t3-board > .t3-blue {\n  background-color: #800B2E; }\n\n.t3-board > .t3-red {\n  background-color: #353238; }\n\n.t3-btn {\n  border-radius: 2%;\n  padding: 0.5rem;\n  background-color: #353238;\n  color: white; }\n", ""]);

	// exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./device.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./device.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, ".device {\n  margin-left: -0.4rem;\n  width: 90%;\n  display: flex;\n  justify-content: center; }\n\n.device-body {\n  flex: 1;\n  min-width: 18rem;\n  max-width: 50rem;\n  height: 32rem;\n  border-radius: 4%;\n  box-shadow: 0.3rem 0.3rem black, 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.4);\n  margin: 2rem 0;\n  padding: 0.5rem;\n  padding-top: 2rem;\n  background-color: #353238;\n  height: 30rem; }\n\n.device-content {\n  box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.4) inset;\n  border-radius: 1%;\n  margin: 0 auto;\n  background-color: white;\n  width: 95%;\n  height: 86%; }\n\n.device-home {\n  background-color: #E0E0E2;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  margin: 0.8rem auto 0.5rem auto; }\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./ui.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./ui.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(11)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Home = function Home() {
	  return _react2.default.createElement(
	    "div",
	    { style: styles.center },
	    _react2.default.createElement(
	      "h1",
	      null,
	      "TEHJR"
	    ),
	    _react2.default.createElement(
	      "h3",
	      null,
	      "Login"
	    ),
	    _react2.default.createElement("input", { placeholder: "Username", type: "text" }),
	    _react2.default.createElement("input", { placeholder: "Password", type: "password" })
	  );
	};

	var styles = {
	  center: {
	    height: '100%',
	    display: 'flex',
	    flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'center'
	  }
	};

	module.exports = Home;

/***/ }
/******/ ]);