import React from 'react'
import { Link } from 'react-router-dom'

import style from './nav.module.scss'

class Nav extends React.Component {
    render() {
        return (
            <nav className={style.Nav}>
                <Link to='/'>ABOUT</Link>
                <Link to='/'>GITHUB</Link>
                <Link to='/'>CONTACT</Link>
            </nav>
        )
    }
}
export default Nav;
