import React from 'react'
import style from './contentpage.module.scss'

import { Link } from 'react-router-dom'

import * as constants from 'src/constants.js'
import Nav from 'src/component/nav/nav.jsx'


class ContentPage extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", margin: 0, padding: 0 }}>
                <main className={style.ContentPage} style={{ maxWidth: this.props.width || "800px" }}> 
                    <header>
                        <figure className={style.title}><Link to={constants.ROUTE_LANDING}>MARC YEO</Link></figure>
                        <span className={style.Nav}><Nav/></span>
                    </header>
                    <div className={style.child}>
                        <span className={this.props.className}>{this.props.children}</span>
                    </div>
                </main>
            </div>
        )
    }
}

export default ContentPage;