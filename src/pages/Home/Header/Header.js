import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

export default function Header({ themeColor }){
        return (
                <header className="home_header" style={{backgroundColor: themeColor}}>
                    <nav>
                        <Logo />
                        <ul>
                            <li><Link to="/projetos">Projetos</Link></li>
                        </ul>
                    </nav>
                </header>
            )
    }