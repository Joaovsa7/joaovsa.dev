import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render(){
        return (
            <div className="container">
                <div id="mainDiv">
                    <h1>joaovsa.</h1>
                    <p>Em breve</p>
                    <div id="projects">
                        <p>Enquanto isso, veja meu portfolio abaixo.</p>
                    </div>
                </div>
                <div className="project">
                    <Link to="/projetos/git-app">Github - consumindo API</Link>
                </div>
                <div className="project">
                    <Link to="/projetos/todo-app">Lista de Tarefas - APP</Link>
                </div>
                <p>Redes sociais</p>
                <div className="social">
                    <div className="project">
                        <a href="http://www.linkedin.com/in/jvsa7" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="project">
                        <a href="http://www.github.com/joaovsa7" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        )
    }
}