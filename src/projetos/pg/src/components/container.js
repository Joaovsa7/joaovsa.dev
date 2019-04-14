import React from 'react'
import { Link } from 'react-router-dom'

const Container = (props) => {
    return(
        <div className="container">
            <div className={`${props.state.msgBox === false ? 'hide' : 'show toAnime'}`}>
                {<span>{props.state.msgInfo}</span> }
            </div>
            <div id="content">
                <div id="search" className={`${props.estado.showSearch === false ? 'hide' : ''}`}>
                    <input type="text" placeholder="Digite o seu usuário no Github" value={props.state.value}  onChange={props.handleChange} />
                    <button onClick={props.fetchData} onTouchStart={props.fetchData}>Buscar os dados</button>
                </div>     
                {props.children}
                <nav>
                    <div>
                        <Link to="/projetos/git_app">Perfil</Link>
                    </div>
                    <div className={`${props.state.showRep === false ? 'hide' : ''}`}>
                        <Link to="/projetos/git_app/repos">Repositórios</Link>
                    </div>
                </nav>
            </div>
            <Link to="/" style={{margin: 20}}>Voltar para a home </Link>
       </div>
    )
}

export default Container;