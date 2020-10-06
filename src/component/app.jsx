import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import * as constants from 'src/constants.js' 

import Landing from 'src/route/landing/landing.jsx'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path={constants.ROUTE_LANDING} component={ Landing }/>
            </Router>
        )
    }
}

export default App;

