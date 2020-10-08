import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from 'src/const/routes.js'

import style from './content_frame.module.scss'

import Nav from 'src/component/nav/nav.jsx'


class ContentFrame extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", justifyContent: "center", margin: 0, padding: 0}}>
                <main className={style.ContentFrame} style={{ maxWidth: this.props.width || "700px", width: "100%"}}> 
                    <header>
                        <figure className={style.title}><Link to={routes.ROUTE_LANDING}>MARC YEO</Link></figure>
                        <span className={style.Nav}><Nav routes={routes.ROUTES} highlight_active={true}/></span>
                    </header>
                    <div className={style.child} style={{ maxWidth: this.props.width || "700px", width: "100%"}}>
                        <span className={this.props.className}>{this.props.children}</span>
                    </div>
                </main>
            </div>
        )
    }
}

export default ContentFrame;
