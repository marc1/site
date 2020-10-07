import React from 'react'

import style from './contact.module.scss'

import * as constants from 'src/constants.js'

import ContentPage from 'src/component/contentpage/contentpage.jsx'

const Contact = () => (
    <ContentPage>
        <article className={style.article}>
            <p>
                <h2>Contact</h2>
                <span style={{ fontWeight: "500" }}>Email: <a>m@marc.rs</a></span>
                <br/>
                <span style={{ fontWeight: "500" }}>GitHub: <a href={constants.GITHUB} target="_blank" rel="noopener noreferrer">www.github.com/marc1</a></span>
            </p>
        </article>
    </ContentPage>
);

export default Contact;
