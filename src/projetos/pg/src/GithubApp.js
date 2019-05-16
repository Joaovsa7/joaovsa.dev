import React, { Component } from 'react';
import Profile from './components/profile';
import { Route } from 'react-router-dom'
import Repos from './components/repositories';
import BackToHome from '../../../pages/components/back-to-home-nav/backToHomeNav';


class GitHubApp extends Component {  
  constructor(props){
    super(props)
    this.state = {
      user: [{}],
      msgInfo: false,
      msgBox: false,
      showRep: false,
      value: '',
    }
  }
  componentDidMount(){
    if(this.state.username === undefined) return false;
    this.fetchData();
  }
  
  backToDefault(){ this.setState({user:[{}], value: ''}) }
  
  msgFunction(mensagem){
    this.setState({
      msgBox: true,
      msgInfo: `${mensagem}`,
      value: '',
    })
  }

  fetchData = async () => {

    const controller = new AbortController();
    const urlTofetch = `https://api.github.com/users/${this.state.value}`

    if(this.state.value === ""){
      this.msgFunction('O campo não pode estar vazio')
      controller.abort()
      return false
    }
    
    this.msgFunction('Carregando...')

    await fetch(urlTofetch)
    .then(response => {
      if(response.status === 403){
        this.msgFunction('Você realizou muitas tentativas erradas, tente novamente em alguns minutos')
      }
      if(response.status === 404){
        this.msgFunction(`O usuário ${this.state.value} não foi encontrado`)
        this.backToDefault()
      }
      if(response.status === 200){
        setTimeout(() => {
          response.json()
          .then(response => { this.setState({ user:[response], showRep: true, msgBox: false,})})
        }, 2000);
      }
    })
    .catch(err => {this.setState({msgBox: true, msgInfo: `${err}`})});
  }
  
  handleChange = event => {
    this.setState({
      value: event.target.value.trim(),
      username: event.target.value.trim(),
      msgBox: false,
    })
  }
  

      render() {
          return (
              <React.Fragment> 
                      <Route exact path="/projetos/git-app/home/" render={() => <Profile state={this.state}  handleChange={this.handleChange} toConcat={this.toConcat}  fetchData={this.fetchData} />
                  } />
                      <Route exact path="/projetos/git-app/repos/" render={() => <Repos state={this.state} name={this.state.user.name} handleChange={this.handleChange} toConcat={this.toConcat}  fetchData={this.fetchData} />
                  } />
                 <BackToHome position="fixed" />
              </React.Fragment>
        );
    }
}

export default GitHubApp;
