import React from 'react';

const Mensagem = (props) => {
    return ( 
            <div className="boxAviso">
                {props.texto}
            </div>
     );
}
 
export default Mensagem;