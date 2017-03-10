import React from 'react';
import App from './components/app';
import {render} from 'react-dom'
import {Router, Route, hashHistory,IndexRoute} from 'react-router'
import Finca from './components/finca';
import Fincas from './components/fincas';
import Animal from './components/animal';
import Home from './components/home'


render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/fincas" component={Fincas}/>
            <Route path="/:idfinca/animales" component={Animal}/>
        </Route>
    </Router>
), document.getElementById('app'))



