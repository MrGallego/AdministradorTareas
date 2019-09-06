import React, { Component } from 'react';

class TodoFormulario extends Component {
    constructor() {
        super();
        this.state = {
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleInput(e) {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            titulo: '',
            responsable: '',
            descripcion: '',
            prioridad: 'low'
        });
    }


   
    render() {
        return (
            <div className="card formu">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group"  >
                        <input
                            type="text"
                            name="titulo"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Titulo" />
                    </div>
                    <div className="form-group">
                        <input
                            id ="responsab"
                            type="text"
                            name="responsable"
                            className="form-control"
                            placeholder="Responsable del trabajo"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            id="descrip"
                            type="text"
                            name="descripcion"
                            className="form-control"
                            placeholder="Descripcion de la Tarea "
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="prioridad"
                            className="form-control"
                            onChange={this.handleInput}
                        >
                            <option>Baja</option>
                            <option>Media</option>
                            <option>Alta</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Guardar
                    </button>
                </form>
            </div>
        )
    }

}



export default TodoFormulario;