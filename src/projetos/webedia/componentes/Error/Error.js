import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

export default function ErrorComponent({ message, timeToHide, reloadPage }){
        
        const [hideComponent, setHide] = useState(false)
        
        useEffect(() => {  
                   
                setTimeout(async () => { 
                        //caso a pesquisa não encontre nada, ativarei essa prop e a página deverá ser atualizada
                        if(await reloadPage){
                                window.location.href = "/"
                        }
                        setHide(true) 
                }, timeToHide);
        })

        return (
                <div className={`errorComponent ${hideComponent ? "hide" : ''}`}>
                        <h3>{ message }</h3>
                </div>
        )
}

ErrorComponent.propTypes = {
    message: PropTypes.string.isRequired,
    timeToHide: PropTypes.number,
    reloadPage: PropTypes.bool.isRequired
}

ErrorComponent.defaultProps = {
        timeToHide: 2500,
        reloadPage: false,
        message: 'Oops, algo de errado não está certo!'
}

