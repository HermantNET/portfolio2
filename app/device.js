import { Component } from 'react';

// Add class .device to whatever div targetted by main react component to get dynamic sizing.
class Screen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="device-body">
        <div className="device-content">
          {this.props.children}
        </div>
        <div className="device-home" />
      </div>
    );
  }
}

module.exports = Screen;
