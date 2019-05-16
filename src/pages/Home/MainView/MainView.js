import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from '../Header/Header';

export default function MainView(props){

        return (
                  <React.Fragment>
                        <Header />
                        <main className={props.mainClass}>
                              <TransitionGroup>
                                    <CSSTransition id={props.cssId ? props.cssId : ''} timeout={1000} in={true} appear={true} classNames={props.cssClass ? props.cssClass : ''}>
                                          {props.children}
                                    </CSSTransition>
                              </TransitionGroup>
                        </main>
                  </React.Fragment>
        )
}