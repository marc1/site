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
                    <header className={style.header}>
                        MARC YEO
                    </header>

                    <span className={style.children}>{this.props.children}</span>
                </span>
            </main>
        )
    }
}

export default Frame;

