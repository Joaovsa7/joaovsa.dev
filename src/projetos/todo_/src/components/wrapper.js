import React from 'react';
import SimpleStorage from "react-simple-storage";
import { Link } from 'react-router-dom'

const WrapperComponent = (props) => {
    return ( 
        <div className="App">
            <SimpleStorage parent={props.this} />
            {props.error}
            <div id="container">
                {props.children}
            </div>
            <Link to="/" style={{textDecoration: 'none', margin: 20}} onClick={localStorage.clear()}>Voltar para a home</Link>
        </div>
     );
}
 
export default WrapperComponent;