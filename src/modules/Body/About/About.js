import React from 'react';
import classes from './About.css';
import aboutData from '../../../assets/aboutText';

const About = () => {
    return(
        <div className="about">
            <div className="AboutHeader">
                <h2>About Me</h2>
            </div>
            <div className="aboutBody">
                <p> {aboutData.about}</p>
            </div>
            
            
        </div>
    );
}
export default About;