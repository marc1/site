import React from 'react'
import Frame from 'src/component/frame/frame.jsx'

const About = () => (
    <Frame>
        <h1>About me</h1>
        <p>
            My name is Marc Yeo. I'm currently a second-year Software Engineering student
            at the <a href='https://www.uvic.ca/' target='_blank' rel='noopener noreferrer'>University of Victoria</a>,
            and I've been a hobbyist programmer since 2012. 
            My interests mainly lie in systems programming, but I also enjoy other areas such as web development. 
            Most recently, I've been learning <a href='https://rust-lang.org' target="_blank" rel='noopener noreferrer'>Rust</a>. 
            Aside from programming, I enjoy video games, photography/videography,
            working on cars, building computers and keyboards, and playing chess.
        </p>
    </Frame>
);

export default About;
