import React, { Component } from 'react';
import Form from '../../Components/Form/Form';

import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Container">
         <div className="row">
            <div><Form/></div>
         </div>
      </div>
    );
  }
}

export default Login;
