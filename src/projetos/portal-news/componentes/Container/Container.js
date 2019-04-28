import React from 'react';

export default function Container(props){
    return ( 
        <div className="containerNewsApp">
            {props.children}
        </div>
     );
}
