import React, { Component } from 'react'
import Container from './container';

class Repos extends Component {
    constructor(props){
        super(props)
        this.state = {
            repos: [],
            showSearch: false,
            error: false,
            maiorQueSeis: false
        }
        this.FetchRepositories = this.FetchRepositories.bind(this);
    }
    componentDidMount(){
         this.FetchRepositories()
    }
    FetchRepositories(){
        const controller = new AbortController()
        const urlTofetch = `https://api.github.com/users/${this.props.state.username}/repos?sort=created`
        console.log(this.props.state)
        if(this.props.state.username === undefined){
            controller.abort()
            this.setState({error: true})
        }
        fetch(urlTofetch)
        .then(response => response.json()) 
        .then(data => {
            if(data.length > 4){
                data.length = Math.min(data.length, 6)
                this.setState({
                    maiorQueSeis: true
                })
            }
            this.setState({repos:data})})
        }
    render(){
        return(
               <Container state={this.props.state} estado={this.state}>
                    <div id="repoInfos">
                        {
                            this.state.error === true ? (
                                <h2>Você precisa retornar a pagina inicial</h2>
                            ) : (
                                this.state.repos.map((repositorio) => (
                                    <a key={repositorio.id} href={repositorio.html_url} rel="noopener noreferrer">
                                        <h4><span>Nome: </span>{repositorio.name}</h4>
                                        <h4><span>Linguagem: </span>{repositorio.language}</h4>
                                        <h4>Mais detalhes no github</h4>
                                    </a>
                                ))
                            )
                        }  
                    </div>
                        {
                            this.state.maiorQueSeis 
                            ? ( 
                                <div id="toMoreRepos">
                                    <a id="callToAction" href={`https://github.com/${this.props.state.username}?tab=repositories`}  target="_blank" >
                                    {this.props.state.user.map(user =>  `Veja todos os repositórios de ${user.name === null ? user.login : user.name} no Github`)}
                                    </a>
                                </div>
                              ) : ('') 
                    
                    }
                </Container>
        )
    }
}

export default Repos