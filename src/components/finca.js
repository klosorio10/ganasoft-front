import React, {Component} from 'react';
import axios from 'axios';
import Animal from './animal'
const ROOT_URL = "https://ganasoft-api.herokuapp.com/";

class Finca extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animales: [],
            nombre: '',
            codigo: '',
            nota: ''
        }
    }
    getAnimales() {
        axios.get(ROOT_URL+ "animals")
            .then(response => {
                this.setState({
                    animales: response.data
                })
            })
    }

    componentDidMount(){
        console.log("hola");
        this.getAnimales();
    }

    render() {
        return (
            <div>
                <div className="tab">
                    <a> {this.props.finca.name}</a>
                </div>
                <div className="tabcontent">
                    <h2>{this.props.finca.name}</h2>
                    <h3>Ganado Total: {this.state.animales.length} </h3>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {this.state.animales.map((animal,index)=>{
                                    return <Animal key= {index} animal ={animal} />
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Finca;
