import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../styles/style.scss'

const Container = (props) => {
    return(
        <div className="container">
            <div className={`${props.state.msgBox === false ? 'hide' : 'show toAnime'}`}>
                {<span>{props.state.msgInfo}</span> }
            </div>
            <div id="content">
                <div id="search" className={`${props.estado.showSearch === false ? 'hide' : ''}`}>
                    <input type="text" placeholder="Digite o seu usuário no Github" value={props.state.value}  onChange={props.handleChange} />
                    <button onClick={props.fetchData}>Get user </button>
                </div>     
                {props.children}
                <nav>
                    <div>
                        <Link to="/">Perfil</Link>
                    </div>
                    <div className={`${props.state.showRep === false ? 'hide' : ''}`}>
                        <Link to="/repos">Repositórios</Link>
                    </div>
                </nav>
            </div>
       </div>
    )
}

export default Container;