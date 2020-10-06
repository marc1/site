import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import * as constants from 'src/constants.js' 

import Landing from 'src/route/landing/landing.jsx'
import About from 'src/route/about/about.jsx'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={constants.ROUTE_LANDING} component={ Landing }/>
                    <Route path={constants.ROUTE_ABOUT} component={ About }/>
                </Switch>
            </Router>
        )
    }
}

export default App;

