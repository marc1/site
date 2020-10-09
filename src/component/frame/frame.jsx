import React from 'react'
import * as routes from 'src/const/routes.js'

import style from './frame.module.scss'

import Nav from 'src/component/nav/nav.jsx'

class Frame extends React.Component {
    render() {
        const options = {
        
        };

        return (
            <main className={style.Frame} style={options}>
                <aside className={style.aside}>
                    <Nav vertical={true} align='end' routes={routes.ROUTES}/>
                </aside>

                <span className={style.content}>
                    {this.props.children}
                </span>
            </main>
        )
    }
}

export default Frame;

