import React, { Component } from 'react';
import firebase from 'firebase'
import { withRouter, Link } from 'react-router-dom';
import Header from '../../Components/Header';


class Reset extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
  }
      handleChange(e){
        this.setState({[e.target.name]: e.target.value});
         }

    Reset(e){
      e.preventDefault();
      firebase.auth().signInWithEmailAndPassword(this.state.email)
      .then(() => {
        alert('Te enviaremos un correo')
      }).catch((error) => {
          console.log(error);
          });

     }

    render(){
        return (
          <div className="Container1">
          <Header/>
          <p className="Rest">Restaurar contraseña</p>
           <div className="input-group mb-3">
               <input type="email" className="Form-input" name="email" placeholder="Ingresa email" onChange={this.handleChange.bind(this)} aria-label="Default" aria-describedby="inputGroup-sizing-default" />
             </div>
        <div>
         <button type="button" className="btn" disabled onClick={this.Reset.bind(this)}>Enviar</button>
         </div>
         <Link to = '/'>Regresar</Link>
        </div>
        )
    }
}

export default withRouter(Reset);
