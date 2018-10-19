import React, { Component } from 'react'
//import firebase from '../../Firebase/Firebase';
//import { Redirect } from "react-router-dom";

import { Button, Segment } from 'semantic-ui-react'

import './Nav.css';

class Nav extends Component {
  render() {
    return (
    <div className="Btn">
      <Segment inverted>
          <Button inverted color='red'>Salir</Button>
      </Segment>
    </div>

    )
  }
}

export default Nav;
