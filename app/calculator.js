var Calculator = React.createClass({
  getInitialState: function() {
    return {
      num: 0,
      operator: '+',
      displayNum: "0",
      calculated: false
    };
  },
  clickNum: function(num) {
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
  clickDecimal: function() {
    this.setState({
      displayNum: this.state.calculated ? "0." : this.state.displayNum.includes('.') ? this.state.displayNum : this.state.displayNum + '.',
      calculated: false
    });
  },
  clickFunc: function(op) {
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
  reset: function() {
    this.setState({
      num: 0,
      displayNum: "0",
      operator: '+',
      calculated: false
    });
  },
  resetInput: function() {
    this.setState({
      displayNum: "0"
    });
  },
  render: function() {
    return (
      <div className="calc">
        <p className="calc-display">{this.state.displayNum}</p>
        <div className="calc-buttons">
          <div className="calc-numbers">
            <div className="calc-button" onClick={this.clickNum.bind(this, 7)}><span>7</span></div>
            <div className="calc-button" onClick={this.clickNum.bind(this, 8)}><span>8</span></div>
            <div className="calc-button" onClick={this.clickNum.bind(this, 9)}><span>9</span></div>
            <div className="calc-button" onClick={this.clickNum.bind(this, 4)}><span>4</span></div>
            <div className="calc-button" onClick={this.clickNum.bind(this, 5)}><span>5</span></div>
            <div className="calc-button" onClick={this.clickNum.bind(this, 6)}><span>6</span></div>
            <div className="calc-button" onClick={this.clickNum.bind(this, 1)}><span>1</span></div>
            <div className="calc-button" onClick={this.clickNum.bind(this, 2)}><span>2</span></div>
            <div className="calc-button" onClick={this.clickNum.bind(this, 3)}><span>3</span></div>
            <div className="calc-button calc-button-long" onClick={this.clickNum.bind(this, 0)}><span>0</span></div>
            <div className="calc-button" onClick={this.clickDecimal}><span>.</span></div>
          </div>
          <div className="calc-functions">
            <div className="calc-button" onClick={this.clickFunc.bind(this, '*')}><span>×</span></div>
            <div className="calc-button" onClick={this.clickFunc.bind(this, '/')}><span>÷</span></div>
            <div className="calc-button" onClick={this.resetInput}><span>C</span></div>
            <div className="calc-button" onClick={this.reset}><span>AC</span></div>
            <div className="calc-button" onClick={this.clickFunc.bind(this, '+')}><span>+</span></div>
            <div className="calc-button" onClick={this.clickFunc.bind(this, '-')}><span>-</span></div>
            <div className="calc-button calc-button-tall" onClick={this.clickFunc.bind(this, '=')}><span>=</span></div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Calculator />, document.getElementById('calculator'));
