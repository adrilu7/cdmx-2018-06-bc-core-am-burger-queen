import React, { Component } from 'react';
import Logo from './hamburguesa.png';

class Header extends Component {
    render() {
  return (
    <div className="Header">
      <header className="Header-header">
      <img src={Logo} className="Header-logo" alt="logo" />
      <h1 className="Header-title">Burger Queen</h1>
      </header>
    </div>
   )
 }
}
export default Header;
//<img src={Logo1} className="Header-logo" alt="logo" />
