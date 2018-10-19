import React, { Component } from 'react';
import Btn from '../../Components/Btn/Btn';
import Nav from '../../Components/Nav/Nav';

import './Pedido.css';

class Pedido extends Component {
  render() {
    return (
      <div className="Pedido-cont">
      <Nav/>
      <Btn/>
      </div>
    );
  }
}
export default Pedido;
