import React, { Component, Fragment } from 'react'
import CardUser from './cardUser'
import * as Style from '../styles/style.scss'
import Repos from './repositories';
import Container from './container'
class Profile extends Component {
    constructor(props){
        super(props)
            this.state = {
        showSearch: true
    }
    }

    render(){
        return(
               <Container state={this.props.state} estado={this.state} handleChange={this.props.handleChange} toConcat={this.props.toConcat}  fetchData={this.props.fetchData} >
                   <CardUser state={this.props.state}  />
                </Container>
            )
        }
    }

export default Profile