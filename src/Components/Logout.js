import React, { Component } from 'react';
import firebase from '../Services/Firebase';
import { withRouter } from 'react-router-dom';

class Logout extends Component{
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            email: null,
            pass: '',
        };
    }

    handleLogout(e){
        e.preventDefault();
        firebase.auth()
                .signOut()
                .then(() =>{
                    this.props.history.push('/')
        }).catch(error => console.log(`Error ${error.code}`));
    }

    render(){
        return(
            <button type="button" className="btn btn-secondary btnLogout" onClick={this.handleLogout}>Cerrar sesión</button>
        );
    }
}
export default withRouter(Logout);
