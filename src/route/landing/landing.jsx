import React from 'react'
import * as routes from 'src/const/routes.js'

import style from './landing.module.scss'

import Logo from 'src/component/logo/logo.jsx'
import Nav from 'src/component/nav/nav.jsx'

const Landing = () => (
    <main className={style.Landing}>
        <span className={style.Logo}><Logo/></span>
        <span className={style.Nav}><Nav routes={routes.ROUTES}/></span>
    </main>
);

export default Landing;
