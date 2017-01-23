var Calculator = React.createClass({
  getInitialState: function() {
    return {
      num1: 0,
      num2: 0,
      displayNum: "0"
    };
  },
  clickNum: function(num) {
    this.setState({
      displayNum: this.state.displayNum !== "0" ? this.state.displayNum + num : `${num}`
    });
  },
  clickDecimal: function() {
    this.setState({
      displayNum: this.state.displayNum.includes('.') ? this.state.displayNum : this.state.displayNum + '.'
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
            <div className="calc-button"><span>×</span></div>
            <div className="calc-button"><span>÷</span></div>
            <div className="calc-button"><span>rem</span></div>
            <div className="calc-button"><span>CE</span></div>
            <div className="calc-button"><span>+</span></div>
            <div className="calc-button"><span>-</span></div>
            <div className="calc-button calc-button-tall"><span>=</span></div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<Calculator />, document.getElementById('calculator'));
