import React from 'react';
import ReactDOM from 'react-dom';
import Text from './components/Text.jsx';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      testing: 'Test!'
    }
  }

  render() {
    return (
      <div>
        <h1>Hi from App.jsx!</h1>
        <p><Text testing={this.state} /></p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));