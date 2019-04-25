import React, { Fragment } from 'react';
import Header from '../Home/Header/Header';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Projetos(){
        return (
                <div className="page-container">
                    <Header /> 
                    <TransitionGroup>
                        <CSSTransition timeout={1000} in={true} appear={true} classNames="item">
                        <div className="main-content">
                            <h1 className="title"> Projetos </h1>
                            <div className="cards">
                                <div className="card-project">
                                    <Link to="/projetos/git-app/">GITHUB APP</Link>
                                </div>
                                <div className="card-project">
                                    <Link to="/projetos/todo-app/">TODO APP</Link>
                                </div>
                                <div className="card-project">
                                    <Link to="/projetos/portal-news/">PORTAL DE NOTÍCIAS</Link>
                                </div>
                            </div>
                        </div>
                        </CSSTransition>
                        </TransitionGroup>
                </div>
        )
}