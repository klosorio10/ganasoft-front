/**
 * Created by Juan on 05/03/2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
const ROOT_URL = "http://localhost:5030";

class Animal extends Component {

    render() {
        return (
            <div className="panel panel-info col-md-3">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.animal.number}</h3>
                </div>
                <div className="col-md-4">
                    <img alt="User Pic" src={this.props.animal.foto}
                         className="img-circle img-responsive"/>
                </div>
                <div className="col-md-9">
                    <div className=" col-md-9 col-lg-9 ">
                        <table className="table table-user-information">
                            <tbody>
                            <tr>
                                <td>Finca: </td>
                                <td> Hola</td>
                            </tr>
                            <tr>
                                <td>Especie: </td>
                                <td> {this.props.animal.especie}</td>
                            </tr>
                            <tr>
                                <td>Raza: </td>
                                <td>{this.props.animal.raza}</td>
                            </tr>

                            <tr>
                                <td>Genero: </td>
                                <td>{this.props.animal.sexo}</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        );
    }


}
export default Animal;

