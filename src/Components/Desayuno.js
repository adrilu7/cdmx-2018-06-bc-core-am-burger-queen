import React, { Component } from 'react';
import Data from './Menu.json';

 class Desayuno extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChangeDesayuno.bind(this);
    }

    handleChangeDesayuno(){
        const menu = (Data.Desayuno).map((item) => {
         console.log(Desayuno)
            return (
              <div className="Row">
                <button type="button" className="btn btn-primary btn-lg btn-Desayuno">{item.type}{item.price}</button>
                </div>
              );
        });
        return menu;

    }
    render(){
        return(
            <section className="button-breakfast">
                <this.handleChangeDesayuno/>
            </section>
        );
    }
}
export default Desayuno
