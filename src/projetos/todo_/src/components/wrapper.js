import React from 'react';
import SimpleStorage from "react-simple-storage";

const WrapperComponent = (props) => {
    return ( 
        <div className="App">
            <SimpleStorage parent={props.this} />
            {props.error}
            <div id="container">
                {props.children}
            </div>
        </div>
     );
}
 
export default WrapperComponent;