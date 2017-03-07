import React, {Component} from 'react';
import axios from 'axios';
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

        axios.get(ROOT_URL + "animals/" + this.props.fincas.id)
            .then(response => {
                this.setState({
                    animales: response.data
                })
            })
    }

    componentDidMount() {
        console.log("hola");
        this.getAnimales();
    }

    render() {
        return (
            <div>
                <ul className="nav nav-sidebar">
                    <li>
                        <a> {this.props.finca.name}</a>
                    </li>
                </ul>


            </div>
        );
    }
}

export default Finca;
