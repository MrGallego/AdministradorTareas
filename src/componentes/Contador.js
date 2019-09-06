import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Contador extends Component {
    constructor(){
        super();
        this.state = {minutos: 0, segundos:0};
    }
    componentDidMount(){
        setInterval(()=>{
            return this.setState((state, props)=>{
                return{
                    segundos: state.segundos == 59 ? 0 : state.segundos + 1,
                    minutos: state.segundos == 59 ? state.minutos + 1 : state.minutos
                    
                }
            });
          }, 1000);
        }
        render(){
            return(
                <h1>{this.state.minutos}:{this.state.segundos}</h1>             
            )
        }
      }
   
export default Contador;
