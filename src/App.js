import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import GitHubApp from './projetos/pg/src/GithubApp';
import TodoList from './projetos/todo_/src/TodoApp'
import Pesquisa_de_livros from './projetos/pesquisa_de_livros/Pesquisa_de_livros';

class App extends Component {
  render() {
    return (
          <Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/projetos/git_app"  component={GitHubApp} />
                <Route exact path="/projetos/todo_"  component={TodoList} />
                <Route exact path="/projetos/pesquisa_de_livros" component={Pesquisa_de_livros} />
              </Switch>
          </Fragment>
      );
    }
}

export default App;
