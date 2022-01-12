import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Gallery from "../Pages/Gallery/Gallery"
import Team from "../Pages/Team/Team"
import Contact from "../Pages/Contact/Contact"

export default function Routes() {
    return (
        <>
            <Router>
                <Nav />
                <Switch>
                    <Route path="/"  exact={true}><Home /></Route>
                    <Route path="/about"><About /></Route>
                    <Route path="/gallery"><Gallery /></Route>
                    <Route path="/team"><Team /></Route>
                    <Route path="/contact"><Contact /></Route>
                </Switch>
            </Router>
        </>
    )
}
