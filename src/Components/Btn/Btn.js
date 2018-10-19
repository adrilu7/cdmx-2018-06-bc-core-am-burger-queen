import React, { Component } from 'react';
//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react'

import './Btn.css';

class Btn extends Component {
    render() {
  return (
    <div className="Btn">
      <Segment inverted>
          <Button inverted color='yellow'>Desayuno</Button>
          <Button inverted color='yellow'>comida</Button>
      </Segment>
    </div>
  )
 }
}
export default Btn;
