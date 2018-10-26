import React, { Component } from 'react';
import Form from '../../Components/Form';
import Header from '../../Components/Header';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Container1">
          <Header/>
          <Form/>
      </div>
    );
  }
}

export default Login;
