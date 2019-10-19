import React, {Component} from 'react';
import uuid from 'uuid';

const stateInicial = { 
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }, 
    error: false
 };

class NuevaCita extends Component {

    state = stateInicial;

    handleChange = (element) => {
        this.setState({cita: {
            ...this.state.cita,
            [element.target.name]: element.target.value
        }})
    }

    // cuando el usuario envia el formulario
    handleSubmit = (form) => {
        form.preventDefault()
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita

        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '')
        {
            this.setState({ error: true})
            return;
        }

        // generar objeto con los datos y el id unico
        const nuevaCita = {
                ...this.state.cita,
                id: uuid() 
            };
        // agregar la cita al state de la App
        this.props.crearNuevaCita(nuevaCita)

        // colocar en el state el state inicial
        this.setState(stateInicial);
    }


    render() {
        return (
            <div className='card mt-5 py-5'>
                <div className='card-body'>
                    <h2 className='card-title text-center mb-5'>Llene el formulario para crear una nueva cita</h2>

                    {this.state.error ? <div className='alert alert-danger mt-2 mb-5 text-center'>ERROR: Debe llenar todos los campos.</div> : null}
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Nombre de mascota</label>
                            <div className='col-sm-8 col-lg-4'>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Firulais' 
                                    name='mascota' 
                                    onChange={this.handleChange} 
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Nombre del duenio</label>
                            <div className='col-sm-8 col-lg-4'>
                                <input 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Pedro' 
                                    name='propietario' 
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Fecha</label>
                            <div className='col-sm-8 col-lg-4'>
                                <input 
                                    type='date' 
                                    className='form-control' 
                                    name='fecha' 
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                        </div>

                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Hora</label>
                            <div className='col-sm-8 col-lg-4'>
                                <input 
                                    type='time' 
                                    className='form-control' 
                                    name='hora' 
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Sintomas</label>
                            <div className='col-sm-8 col-lg-4'>
                                <textarea 
                                    type='text' 
                                    className='form-control' 
                                    placeholder='Dolor de panza' 
                                    name='sintomas' 
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                />    
                            </div>
                        </div>

                        <input type='submit' className='py-3 mt-2 btn btn-success btn-block' value='AGREGAR NUEVA CITA'/>
                    </form> {/* Form group */}
                    {/*
                    <form>
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Nombre del duenio</label>
                            <div className='col-sm-8 col-lg-10'>
                                <input type='text' className='form-control' placeholder='Pedro' name='mascota'/>
                            </div>
                        </div>
                    </form> 

                    <form>
                        <div className='form-group row'>
                            <label className='col-sm-4 col-lg-2 col-form-label'>Fecha</label>
                            <div className='col-sm-8 col-lg-10'>
                                <input type='date' className='form-control' name='mascota'/>
                            </div>
                        </div>
                    </form>  Form group 
                    */}
                </div>
            </div>
        );
    }
}

export default NuevaCita;