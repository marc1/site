import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import * as routes from 'src/const/routes.js' 

import Landing from 'src/route/landing/landing.jsx'
import About from 'src/route/about/about.jsx'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={routes.ROUTE_LANDING} component={ Landing }/>
                    <Route path={routes.ROUTE_ABOUT} component={ About }/>
                </Switch>
            </Router>
        )
    }
}

export default App;

