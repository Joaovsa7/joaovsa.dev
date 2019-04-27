import React, { Fragment } from 'react';
import MainView from '../Home/MainView/MainView';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SiteWrapper from '../Home/siteWrapper/SiteWrapper';

export default function Projetos(){
    
    const projects = [
        {
            name: 'GITHUBAPP',
            link: '/projetos/git-app/',
            id: Math.random(100).toString(26)
        },
        {
            name: 'TODO APP',
            link: '/projetos/todo-app/',
            id: Math.random(100).toString(26)
        },
        {
            name: 'PORTAL DE NOTÍCIAS',
            link: '/projetos/portal-news/',
            id: Math.random(100).toString(26)
        }
    ]
        return (
              <SiteWrapper>
                  <MainView mainClass="main-content projects" id="" cssClass="projects-items">
                        <div className="wrapper">
                            <h1 className="title">Projetos</h1>
                            <p>Aqui estão algumas demonstrações do meu conhecimento na area.
                                Todos os projetos foram construídos com ReactJS juntamente com o
                                SASS (processador de CSS).
                            </p>
                            <div className="cards">
                                {
                                    projects.map(({ name, link }) => (
                                                <div className="card-project">
                                                    <Link to={link}>{name}</Link>
                                                </div>
                                    ))
                                }
                            </div>
                        </div>
                  </MainView>
              </SiteWrapper>
        )
}
