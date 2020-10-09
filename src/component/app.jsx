import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import * as routes from 'src/const/routes.js' 

import Landing from 'src/route/landing/landing.jsx'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={routes.ROUTE_LANDING} component={ Landing }/>
                </Switch>
            </Router>
        )
    }
}

export default App;

