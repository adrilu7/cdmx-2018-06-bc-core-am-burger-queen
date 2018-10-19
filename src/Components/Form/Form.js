import React, { Component } from 'react';
import firebase from '../../Firebase/Firebase';
import { Redirect } from 'react-router-dom';
import logo from '../Images/F2.jpg';

import './Form.css';

class Form extends Component {
  constructor (props){
  super(props)
  this.singIn = this.singIn.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.state = {
     email: '',
     password: ''
    }
 }

 componentWillMount(){
  firebase.auth().onAuthStateChanged(user => {
    this.setState({user});
  })
}

 singIn(e){
  e.preventDefault();
  firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => {
  }).catch((error)=>{

      alert('E-mail incorrecto');
      alert('Contraseña incorrecto');
      })
 }

   handleChange(e){
     this.setState({[e.target.name]: e.target.value});
      }


  render () {
    if (this.state.user){
      return (
        <Redirect to = '/Pedido'/>
      )
    }else {
   return (
     <div className="Form-Container">
     <h1 className="Logo-title">Burger Queen</h1>
        <img src={logo} className="Logo-Logo" alt="Logo" />
       <h3  className="Form-title">Entrar</h3>
       <input type="email" name="email" placeholder="Ingresa tu email" onChange={this.handleChange} value={this.state.email}  className="Form-input" />
       <input type="password" name="password" placeholder="Ingresa tu contraseña" onChange={this.handleChange} value={this.state.password}  className="Form-input" />
       <button className="BtnD-entrar" onClick={this.singIn} >Enviar</button>
       </div>
     )
   }
 }

}

export default Form;
