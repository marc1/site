import React from 'react'

import * as constants from 'src/constants.js'

import ContentFrame from 'src/component/content_frame/content_frame.jsx'

const Contact = () => (
    <ContentFrame>
        <article>
            <h1>Contact</h1>
            <p>
                <span style={{ fontWeight: "500" }}>Email: <a>m@marc.rs</a></span>
                <br/>
                <span style={{ fontWeight: "500" }}>GitHub: <a href={constants.GITHUB} target="_blank" rel="noopener noreferrer">www.github.com/marc1</a></span>
            </p>
        </article>
    </ContentFrame>
);

export default Contact;
