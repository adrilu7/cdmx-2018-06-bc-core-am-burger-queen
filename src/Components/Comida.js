import React, { Component } from 'react';

class Comida extends Component {
    render() {
  return (
    <div className="comida">
    <button type="button" className="btn-primary btn-lg Desayuno">Desayuno</button>
    <button type="button" className="btn-primary btn-lg Comida">Comida</button>

    <input type="Text" className="cliente"  placeholder="Nombre de cliente"  aria-label="Default" aria-describedby="inputGroup-sizing-default"/ >
          <p>Total $00.00</p>
    </div>
   )
 }
}
export default Comida;
