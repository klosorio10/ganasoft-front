import React, {Component} from 'react';
import axios from 'axios';
import NavLink from './NavLink'

const ROOT_URL = "https://ganasoft-api.herokuapp.com/";

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
        axios.post(ROOT_URL + "/fincas", {
            nombre: this.state.nombre,
            codigo: this.state.codigo,
            nota: this.state.nota
        })
            .then(response => {
                this.getFincas();
            })
    }

    getFincas() {
        axios.get(ROOT_URL + "farms")
            .then(response => {
                this.setState({
                    fincas: response.data
                })
            })
    }

    componentDidMount() {


    }

    render() {
        return (
            <div>


                <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">GanaSoft</a>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li> <NavLink to="/fincas">Fincas</NavLink></li>
                                <li><a href="#">Settings</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Help</a></li>
                            </ul>
                            <form className="navbar-form navbar-right">
                                <input type="text" className="form-control" placeholder="Search..."/>
                            </form>
                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
                <div>
                    {this.props.children}
                </div>




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
        );
    }
}

export default App;
