import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"

import Home from './pages/Home'
import NewUser from './pages/NewUser'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={NewUser} />
        </Switch>
    </BrowserRouter>
)

export default Routes;