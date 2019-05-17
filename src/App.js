import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import GitHubApp from './projetos/pg/src/GithubApp';
import TodoList from './projetos/todo_/src/TodoApp'
import PortalNews from './projetos/portal-news/PortalNews';
import Projetos from './pages/Projetos/Projetos';
import Chat from './projetos/chat-app/Chat';

class App extends Component {
  render() {
    return (
          <Fragment>
                      <Switch>
                        <Route exact={ true } path="/" component={Home} />
                        <Route exact={ true } path="/projetos/" component={Projetos} />
                        <Route path="/projetos/git-app/:name"  component={GitHubApp} />
                        <Route exact={ true } path="/projetos/todo-app/"  component={TodoList} />
                        <Route exact={ true } path="/projetos/portal-news" component={PortalNews} />
                        <Route exact={ true } path="/projetos/chat-app" component={Chat} />
                      </Switch>
          </Fragment>
      );
    }
}

export default App;
