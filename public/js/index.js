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
	            { className: 'calc-button', onClick: this.resetInput },
	            React.createElement(
	              'span',
	              null,
	              'C'
	            )
	          ),
	          React.createElement(
	            'div',
	            { className: 'calc-button', onClick: this.reset },
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

/***/ }
/******/ ]);