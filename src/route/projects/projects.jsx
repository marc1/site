import React from 'react'
import * as routes from 'src/const/routes.js'

import Frame from 'src/component/frame/frame.jsx'

const Projects = () => (
    <Frame>
        <h1>Projects</h1>
        <p>
            <b>WIP</b>
            <br/>
            For now, you can look on my <a href={routes.GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>.
            Even <a href='https://www.github.com/marc1/site' target="_blank" rel="noopener noreferrer">this site</a>'s on there!
        </p>
    </Frame>
);

export default Projects;
