import React from 'react';
import Logo from '../Logo/Logo';

export default function Footer(){
    return ( 
            <footer>
                 <Logo logoPath={require("../../static/img/logo.png")} target={"_blank"} href={"http://jobs.webedia.group/frontend"} />
            </footer>   
        );
    }