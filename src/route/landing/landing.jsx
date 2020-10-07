import React from 'react'

import style from './landing.module.scss'

import Logo from 'src/component/logo/logo.jsx'
import Nav from 'src/component/nav/nav.jsx'

const Landing = () => (
    <main className={style.Landing}>
        <span className={style.Logo}><Logo/></span>
        <span className={style.Nav}><Nav/></span>
    </main>
);

export default Landing;
