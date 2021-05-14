import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Register from './pages/Register'
import Details from './pages/Details'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/dados" component={Details}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;
