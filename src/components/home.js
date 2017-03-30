import React, {Component} from 'react';

class Home extends Component {


    render() {
        return (
            <div className="text-vertical-center container">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <h1 className="text-vertical-center">Welcome to GanaSoft</h1>
                <!-- debria mostrar un poco más de dinamicas si es la paguina principal, como descripciones de lo que puede hacer el usuario -->
                    <h2> GanaSoft is a Web Page where you can administrate your farms </h2>
                </div>

            </div>
        );
    }
}

export default Home;

