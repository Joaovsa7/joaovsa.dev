import React from 'react';
import Logo from '../Logo/Logo';

export default function BackToHome( { position } ){
    return (
        <nav className="back-to-home" style={{position: position ? position : 'relative'}}>
            <Logo />
        </nav>
    )
}