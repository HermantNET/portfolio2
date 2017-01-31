import { Component } from 'react';
import Device from './device';
import Home from './uiPages/home';

class Ui extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Device>
        <Home />
      </Device>
    );
  }
}

ReactDOM.render(<Ui />, document.getElementById('ui'));
