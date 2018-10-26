import React, { Component } from 'react';
import firebase from '../Services/Firebase';
import { withRouter , Link} from 'react-router-dom';

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
    this.props.history.push('/Pedido')
  }).catch((error) => {
      alert('E-mail incorrecto');
      alert('Contraseña incorrecto');
      console.log(error);
      })
 }

   handleChange(e){
     this.setState({[e.target.name]: e.target.value});
      }

  Reset(){
      this.props.history.push('/Reset')
      }

  render () {
   return (
       <div className="Container">
         <div className="input-group mb-3">
             <input type="email" className="Form-input" name="email" placeholder="Ingresa tu email" onChange={this.handleChange} value={this.state.email} aria-label="Default" aria-describedby="inputGroup-sizing-default"/ >
           </div>
         <div className="input-group mb-3">
             <input type="password" className="Form-input" name="password" placeholder="Ingresa tu Contraseña" onChange={this.handleChange} value={this.state.password} aria-label="Default" aria-describedby="inputGroup-sizing-default"/ >
           </div>
<div className= "btn1">
       <button type="button" className="btn" onClick={this.singIn} >Entrar</button>
          <div>
          <Link to = '/Reset'>Restablecer Contraseña</Link>
          </div>
       </div>
       </div>
     )
 }
}

export default withRouter(Form);
