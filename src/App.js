import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import GitHubApp from './pg/src/App.js';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
          <Fragment>
              <Switch>
                <Route exact path="/" render={() => <h1> Olá </h1> } />
                <Route exact path="/githubApp" render={() => <GitHubApp /> } />
              </Switch>
          </Fragment>
      );
    }
}

export default App;
