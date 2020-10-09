import React from 'react'
import * as routes from 'src/const/routes.js'

import style from './landing.module.scss'

import Logo from 'src/component/logo/logo.jsx'
import Nav from 'src/component/nav/nav.jsx'

const Landing = () => (
    <main className={style.Landing}>
        <span className={style.header}>
            <Logo/>
        </span>

        <span className={style.navigation}>
            <Nav routes={routes.ROUTES} vertical={false} align='center'/>
        </span>
    </main>
);

export default Landing;
