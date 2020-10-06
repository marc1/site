import React from 'react'

import style from './landing.module.scss'

import Logo from 'src/component/logo/logo.jsx'
import Nav from 'src/component/nav/nav.jsx'

const Landing = () => (
    <main className={style.Landing}>
        <header>
            <Logo/>
        </header>
        <Nav/>
    </main>
);

export default Landing;
