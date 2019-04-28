import React, { Component } from 'react';
import Profile from './components/profile';
import { Route, Switch } from 'react-router-dom'
import Repos from './components/repositories';




class GitHubApp extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      user: [{}],
      msgInfo: false,
      msgBox: false,
      showRep: false,
      value: '',
      search: true
    }
    this.fetchData = this.fetchData.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount(){
    if(this.state.username === undefined) return false;
    this.fetchData();
  }
  
  backToDefault(){this.setState({user:[{}], value: ''}) }
  
  msgFunction(mensagem){
    this.setState({
      msgBox: true,
      msgInfo: `${mensagem}`,
      value: '',
    })
  }
  fetchData(){
    const controller = new AbortController();
    this.msgFunction('Carregando...')
    if(this.state.value === ""){
      this.msgFunction('O campo não pode estar vazio')
      controller.abort()
      return false
    }
    const urlTofetch = `https://api.github.com/users/${this.state.value}`
    fetch(urlTofetch)
    .catch(err => {this.msgFunction(err)})
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
  
  handleChange(event){
    this.setState({
      value: event.target.value.trim(),
      username: event.target.value.trim(),
      msgBox: false,
    })
  }
  
  changeView = () => {
    this.setState(search => ({ search: !search }))
  }


      render() {
          return (
              <React.Fragment> 
                 {
                  this.state.search ? 
                    (
                      <Profile setView={this.changeView} state={this.state}  handleChange={this.handleChange}  fetchData={this.fetchData} />
                    ) : (
                      <Repos state={this.state} />
                    )
                 }
              </React.Fragment>
        );
    }
}

export default GitHubApp;
