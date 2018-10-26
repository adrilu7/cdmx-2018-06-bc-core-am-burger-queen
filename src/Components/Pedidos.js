import React, { Component } from 'react';
import Menu from './Menu.json'
import Menus from './Menus'

class Lista extends Component{
    constructor(props) {
        super(props);
        this.state ={
         Menu : []
        }
    }

    desayuno= () => {
        const newArray = []
        console.log(newArray)
        const desayuno = Menu.desayuno
        for (let i in desayuno){
            const precio = (desayuno[i]);
            const newObject ={
                [i]: precio
            }
            newArray.push(newObject)
        }
        this.setState({Menu:newArray})
    }

    comida = () => {
        const newArray = []
        const comida = Menu.almuerzo
        for (let i in comida){
            const precio = (comida[i]);
            const newObject ={
                [i]: precio
            }
            newArray.push(newObject)
        }
        this.setState({Menu:newArray})
    }
    render(){
      return(
   <div className="Container">
 <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
  </div>
    <input type="text" className="Form-input" name="text" placeholder="Cliente"  aria-label="Default" aria-describedby="inputGroup-sizing-default"/ >
  </div>
<div>
<Menus Menu={this.state.Menu} />
<button type="button" clasNames="btn btn-warning Btn-entrar" onClick={this.desayuno} >Desayuno</button>
<button type="button" clasNames="btn btn-warning Btn-entrar" onClick={this.comida} >Comida</button>
 <div>

 </div>
</div>
</div>
)
    }
  }

export default Lista;
