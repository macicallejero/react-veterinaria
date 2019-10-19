import React, {Component} from 'react';
import './bootstrap.min.css'
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  }

  // Cuando se carga la app
  componentDidMount() {
  
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      this.setState({citas: JSON.parse(citasGuardadas)})
    }
    /*
    
    */
  }
  // Cuando se elimina o agrega una nueva cita (se llama cuando se actualiza el componente)
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }

  crearNuevaCita = datosCita => {
    const citas = [...this.state.citas, datosCita]
    this.setState({ citas: citas})
    console.log(this.state.citas);
  }

  eliminarCita = idCitaABorrar => {
    const citasSinLaBorrada = this.state.citas.filter(cita => cita.id !== idCitaABorrar)

    this.setState({citas : citasSinLaBorrada})
  }

  render () {
    return (
      <div className = "container">
        <Header 
          titulo = "Administrador de Pacientes Veterinaria"
        />
        <NuevaCita
        crearNuevaCita={this.crearNuevaCita}
        
        />
        <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita}></ListaCitas>
      </div>
    );
  }
}

export default App;
