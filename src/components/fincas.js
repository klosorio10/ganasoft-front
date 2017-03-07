/**
 * Created by Juan on 06/03/2017.
 */
/**
 * Created by Juan on 05/03/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';

import Finca from './finca';
const ROOT_URL = "https://ganasoft-api.herokuapp.com/";

class Fincas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fincas: [],
            nombre: '',
            codigo: '',
            nota: ''
        }
    }

    getFincas() {
        axios.get(ROOT_URL + "farms")
            .then(response => {
                this.setState({
                    fincas: response.data
                })
            })
    }

    deleteFinca(finca) {
        axios.delete(ROOT_URL + "farms/" + finca._id).then(response => {
            console.log(response);
            console.log(finca);
            this.getFincas();
        })

    }

    componentDidMount() {
        console.log("hola");
        this.getFincas();
    }

    render() {
        return (
            <div className="container-fluid col-md-10">
                <div className="row placeholders">
                    {this.state.fincas.map((finca, index)=>
                    <Finca key={index} finca={finca}/>
                    )}
                </div>

            </div>

        );
    }


}
export default Fincas;
