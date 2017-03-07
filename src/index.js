import React from 'react';
import App from './components/app';
import {render} from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Finca from './components/finca';
import Fincas from './components/fincas';
import Animal from './components/animal';


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/fincas" component={Fincas}>
                <Route path="/fincas/:idfinca" component={Finca}/>
            </Route>
            <Route path="/animal" component={Animal}/>
        </Route>
    </Router>
), document.getElementById('app'))



