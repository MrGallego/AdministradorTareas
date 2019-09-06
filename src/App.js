import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './crono.css';
import TodoFormulario from './componentes/TodoFormulario';
import Contador from './componentes/Contador';


import { todos } from './todos.json';

console.log({ todos });

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos

    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  eliminarTarea(index) {
    if (window.confirm('Estas seguro de eliminar la tarea')) {
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  
  

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        
        <div className="col-md-6" key={i}>
          <div className="card mt-4 tarjet">
            <div className="card-header">
              <h3>{todo.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.prioridad}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.descripcion}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.eliminarTarea.bind(this, i)}>
                Eliminar
              </button>
            </div>
            
            <div id="buttons">
              <a id="change" href="#">Start/Stop </a>
              <a href="#" id="init">Reset</a>
            </div>
            <div id="chronometer">
              
              <span>00</span>:
              <span>00</span>:
              <span>00</span>: 
              <span>00</span>
            </div>
            <div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className="container">
          <div className="row mt-8" >
            <div className="row-md-4">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoFormulario onAddTodo={this.handleAddTodo} />
              
            </div>
            <div className="row mt-8 ml-4">
              {todos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
