import React, { Fragment } from 'react';
import MainView from './MainView/MainView';
import SiteWrapper from './siteWrapper/SiteWrapper'

//este componente é o "header" do meu site.
export default function Home(){

            return (
                <SiteWrapper bgColor={"black"}>
                    <MainView mainClass="main-content" cssClass="title" cssId="title-text">
                            <div id="title-text">
                                <h1>Desenvolvedor <br /> Front end</h1>
                                <span>Oi, seja bem vindo ao meu site.</span>
                           </div> 
                    </MainView>
                </SiteWrapper>
            )
}