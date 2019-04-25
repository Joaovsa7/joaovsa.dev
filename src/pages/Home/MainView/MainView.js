import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function MainView(){
      const [b, setB] = React.useState(true)
      const a = '#000'

        return (
                <main className="main-content">
                      <TransitionGroup>
                        <CSSTransition id="title-text" timeout={2000} in={true} appear={true} classNames="item">
                              <div id="title-text">
                                    <div>
                                          <h1>Seja bem vindo ao meu site</h1>
                                          <ReactTypingEffect speed={120} eraseDelay={70}  text={
                                          ["Sou apenas um garoto escrevendo códigos", "Tenho conhecimentos em", "HTML, CSS, SASS, JAVASCRIPT, REACT, NOÇÕES DE UX/UI"]
                                          } />
                                    </div>
                              </div>
                        </CSSTransition>
                      </TransitionGroup>
                </main>
        )
}