import React from 'react'
import { Link } from 'react-router-dom'

import style from './nav.module.scss'

class Nav extends React.Component {
    render() {
        return (
            <nav className={style.Nav}>
                <Link to='/about'>ABOUT</Link>
                <a href="https://github.com/marc1" target="_blank" rel="noopener noreferrer">GITHUB</a>
                <Link to='/'>CONTACT</Link>
            </nav>
        )
    }
}
export default Nav;
