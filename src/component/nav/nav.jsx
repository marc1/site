import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './nav.module.scss'

import * as constants from 'src/constants.js'

class Nav extends React.Component {

    render() {
        return (
            <nav className={style.Nav}>
                <NavLink to={constants.ROUTE_ABOUT}>ABOUT</NavLink>
                <a href={constants.GITHUB} target="_blank" rel="noopener noreferrer">GITHUB</a>
                <NavLink to={constants.ROUTE_CONTACT}>CONTACT</NavLink>
            </nav>
        )
    }
}
export default Nav;
