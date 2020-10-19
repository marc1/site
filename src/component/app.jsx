import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import * as routes from 'src/const/routes.js' 

import Landing from 'src/route/landing/landing.jsx'
import About from 'src/route/about/about.jsx'
import Contact from 'src/route/contact/contact.jsx'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={routes.ROUTE_LANDING} component={ Landing }/>
                    <Route path={routes.ROUTE_ABOUT} component={ About }/>
                    <Route path={routes.ROUTE_CONTACT} component={ Contact }/>
                </Switch>
            </Router>
        )
    }
}

export default App;

