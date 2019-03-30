import React, { Component, Fragment } from 'react'
import * as Style from '../styles/style.scss'

class CardUser extends Component {
    render(){
        return(
            <Fragment>
                {this.props.state.user.map((cardUser) => (
                <div id="info" key={cardUser.id}>
                    <div id="img">
                        <img src={cardUser.avatar_url === undefined ? require('../assets/default.jpg') : `${cardUser.avatar_url}`} alt="profile pic" />
                    </div>
                    <div id="description">
                        <h3>{cardUser.name === null || cardUser.name === undefined ? cardUser.login : cardUser.name}</h3>
                        <p>{cardUser.bio === undefined || cardUser.bio === null ? 'Este usuário não possui biografia no github, provavelmente esqueceu de por ou não se importa com isso' : cardUser.bio}</p>
                        <div id="boxInfos">
                            <div className="apiInfos">
                                <h3>Seguidores</h3>
                                <h4>{cardUser.followers === undefined || cardUser.followers === null ? '0' : cardUser.followers}</h4>
                            </div>
                            <div className="apiInfos">
                                <h3>Seguindo</h3>
                                <h4>{cardUser.following === undefined ? '0' : cardUser.following}</h4>
                            </div>
                            <div className="apiInfos">
                                <h3>Localização</h3>
                                <h4>{cardUser.location === undefined || cardUser.location === null ? 'Disneylândia - Brazil' : cardUser.location}</h4>
                            </div>
                        </div>
                    </div>
                    <div id="url">
                        <a href={cardUser.html_url === undefined ? '#' : cardUser.html_url} target={cardUser.html_url === undefined ? '' : '_blank'}>></a>
                    </div>
                </div>   
                ))}
            </Fragment>
        )
    }

}

export default CardUser;