import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render(){
        return (
            <div className="container">
                <div id="mainDiv">
                    <h1>joaovsa.</h1>
                    <p>Coming soon</p>
                    <div id="projects">
                        <p>Veja alguns projetos.</p>
                    </div>
                </div>
                    <div className="project">
                        <Link to="/projects/git_app/home">Github api</Link>
                    </div>
                    <div className="project">
                        <Link to="/projects/todo_/home">Todo_list (em construção)</Link>
                    </div>
            </div>
        )
    }
}