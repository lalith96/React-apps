import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Routing from './pages/routing';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="" exact component={Routing} />
        </Switch>
      </Router>
    );
  }
}

export default App;
