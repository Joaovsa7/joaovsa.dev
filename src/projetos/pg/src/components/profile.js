import React, { Component } from 'react'
import CardUser from './cardUser'
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