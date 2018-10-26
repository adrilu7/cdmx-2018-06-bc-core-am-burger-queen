import React, { Component } from 'react';

import Nav from '../../Components/Nav';
import Desayuno from '../../Components/Desayuno';
import Comida from '../../Components/Comida';

import './Pedido.css';

class Pedido extends Component {
  render() {
    return (
      <div className="Container">
      <Nav/>
      <Comida/>
      <Desayuno/>
      </div>
    );
  }
}
export default Pedido;
