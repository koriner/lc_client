/*
  @file: src/containers/App/index.js
  @brief: Main app container component
  @author: Shane Korin (sk@distriqt.com)
*/

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styles from './styles.css';
import MapContainer from '../MapContainer';

const NoMatch = () => (
  <div>
    <h3>
      Page not found!
    </h3>
  </div>
);

/**
 * App component
 */
class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.app}>
          <Switch>
            <Route exact path="/" component={MapContainer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
