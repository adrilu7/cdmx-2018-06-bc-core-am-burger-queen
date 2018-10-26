import React, { Component } from 'react'
import firebase from '../Services/Firebase';
import Logout from './Logout';
import Logo from './hamburguesa.png';

class Nav extends Component {
  constructor (props) {
  super (props);
  this.state = {
    user: null ,
    email:null
  };
}

componentWillMount(){
  firebase.auth().onAuthStateChanged(user =>{
    this.setState({user});
    console.log(user);
  });
}

render() {
    return (

    <header>
         <nav className="navbar navbar-light bg-light nav-pills">
         <img src={Logo} width="60" height="auto" alt="Logo de una hamburguesa"/>
         <section>
         <p>Burger Queen</p>
         </section>
         <Logout/>
         </nav>
        </header>

    )
  }
}

export default Nav;


//<img src={Logo} width="60" height="auto" alt="Logo de una hamburguesa dice burger queen"/>
