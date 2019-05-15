import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Landing from './components/landing.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.setUser = this.setUser.bind(this);
  }

  setUser(username) {
    this.setState({ username: username });
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact render={props => <Landing {...props} setUser={this.setUser} />} />
        </div>
      </Router>
    );
  }
}

export default App;
