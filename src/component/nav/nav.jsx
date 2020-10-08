import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './nav.module.scss'

class Nav extends React.Component {
    render() {
        const routes = this.props.routes.map(route =>
            route.external && 
                <a className={style.navLink} key={route.label} href={route.url} target="_blank" rel="noopener noreferrer">{route.label}</a>  
            ||
                <NavLink activeClassName={style.activeNavLink} key={route.label} to={route.url}>{route.label}</NavLink> 
        );

        return (
            <nav className={style.Nav}>
                {routes}
            </nav>
        )
    }
}

export default Nav;
