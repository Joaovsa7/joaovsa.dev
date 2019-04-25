import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ themeColor }){
        return (
                <header className="home_header" style={{backgroundColor: themeColor}}>
                    <nav>
                        <Link to="/"><h1>joaovsa</h1></Link>
                        <ul>
                            <li><Link to="/projetos">Projetos</Link></li>
                        </ul>
                    </nav>
                </header>
            )
    }