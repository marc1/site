import React from 'react'
import * as routes from 'src/const/routes.js'

import Frame from 'src/component/frame/frame.jsx'

const Contact = () => (
    <Frame>
        <h1>Contact</h1>
        <p>
            <span style={{ fontWeight: "500" }}>Email: <a>m@marc.rs</a></span>
            <br/>
            <span style={{ fontWeight: "500" }}>GitHub: <a href={routes.GITHUB} target="_blank" rel="noopener noreferrer">www.github.com/marc1</a></span>
        </p>
    </Frame>
);

export default Contact;
