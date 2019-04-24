import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import GitHubApp from './projetos/pg/src/GithubApp';
import TodoList from './projetos/todo_/src/TodoApp'
import Pesquisa_de_livros from './projetos/pesquisa_de_livros/Pesquisa_de_livros';
import Webedia from './projetos/webedia/App';

class App extends Component {
  render() {
    return (
          <Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projetos/git-app/"  component={GitHubApp} />
                <Route exact path="/projetos/git-app/:name"  component={GitHubApp} />
                <Route exact path="/projetos/todo-app/"  component={TodoList} />
                <Route exact path="/projetos/pesquisa_de_livros" component={Pesquisa_de_livros} />
                <Route exact path="/projetos/webedia-news" component={Webedia} />
              </Switch>
          </Fragment>
      );
    }
}

export default App;
