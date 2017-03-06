import React, {Component} from 'react';
import axios from 'axios';
import Finca from './finca';

const ROOT_URL = "http://ganasoft-api.herokuapp.com/";

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fincas: [],
      nombre: '',
      codigo: '',
      nota: ''
    }
  }
  
  agregarEstudiante() {
    axios.post(ROOT_URL+ "/fincas", {
      nombre: this.state.nombre,
      codigo: this.state.codigo,
      nota: this.state.nota
    })
    .then(response => {
      this.getFincas();
    })
  }
  
  getFincas() {
    axios.get(ROOT_URL+ "farms")
    .then(response => {
      this.setState({
        fincas: response.data
      })
    })
  }

    componentDidMount(){
        console.log("hola");
        this.getFincas();
}
  
  render() {
    return(
      <div>
        {this.state.fincas.map((finca, index) => {
          return <Finca key={index} finca={finca} index ={index}  />
        })}

        {/*Nombre:*/}
        {/*<input type="text" value={this.state.nombre} onChange={(event) => {*/}
          {/*this.setState({nombre: event.target.value})*/}
        {/*}} />*/}
        
        {/*Codigo:*/}
        {/*<input type="text" value={this.state.codigo} onChange={(event) => {*/}
          {/*this.setState({codigo: event.target.value})*/}
        {/*}} />*/}
        {/*Nota:*/}
        {/*<input type="text" value={this.state.nota} onChange={(event) => {*/}
          {/*this.setState({nota: event.target.value})*/}
        {/*}} />*/}
        
        {/*<button onClick={this.agregarEstudiante.bind(this)}>Guardar estudiante</button>*/}
      </div>
    )
  }
}

export default App;
