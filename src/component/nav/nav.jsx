import React from 'react'
import { Link } from 'react-router-dom'

import style from './nav.module.scss'

import * as constants from 'src/constants.js'

class Nav extends React.Component {
    render() {
        return (
            <nav className={style.Nav}>
                <Link to={constants.ROUTE_ABOUT}>ABOUT</Link>
                <a href={constants.GITHUB}target="_blank" rel="noopener noreferrer">GITHUB</a>
                <Link to={constants.ROUTE_CONTACT}>CONTACT</Link>
            </nav>
        )
    }
}
export default Nav;
