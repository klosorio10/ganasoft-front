/**
 * Created by Juan on 06/03/2017.
 */
/**
 * Created by Juan on 05/03/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
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
        axios.delete(ROOT_URL+"farms/"+finca._id).then(response => {
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
            <div>
                {this.state.fincas.map((finca, index)=>
                    <div key={index} className="panel panel-info col-md-3">
                        <div className="panel-heading">
                            <h3 className="panel-title">{finca.name}</h3>
                        </div>
                        <div className="col-md-4">
                            <img alt="User Pic" src="https://i.ytimg.com/vi/KHS-s_m5GRQ/hqdefault.jpg"
                                 className="img-circle img-responsive"/>
                        </div>
                        <div className="col-md-9">
                            <div className=" col-md-9 col-lg-9 ">
                                <table className="table table-user-information">
                                    <tbody>
                                    <tr>
                                        <button onClick={this.deleteFinca(finca).bind(this)}>Borrar</button>
                                    </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>)}
            </div>

        );
    }


}
export default Fincas;
