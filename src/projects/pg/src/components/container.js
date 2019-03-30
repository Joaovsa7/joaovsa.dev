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
                        <Link to="/projects/git_app/home">Perfil</Link>
                    </div>
                    <div className={`${props.state.showRep === false ? 'hide' : ''}`}>
                        <Link to="/projects/git_app/repos">Repositórios</Link>
                    </div>
                </nav>
            </div>
            <Link to="/" style={{margin: 10}}>Voltar </Link>
       </div>
    )
}

export default Container;