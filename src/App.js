import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import GitHubApp from './projects/pg/src/GithubApp';
import TodoList from './projects/todo_/src/TodoApp'

class App extends Component {
  render() {
    return (
          <Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projects/git_app/:name"  component={GitHubApp} />
                <Route exact path="/projects/todo_/home"  component={TodoList} />
              </Switch>
          </Fragment>
      );
    }
}

export default App;
