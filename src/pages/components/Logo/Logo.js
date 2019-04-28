import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo( { link } ){
    return (
        <Link to={link ? link : '/'} className="logo"><h1>joaovsa</h1></Link>
    )
}