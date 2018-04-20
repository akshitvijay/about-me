import React from 'react';
import classes from './Body.css';
import About from './About/About';
import Projects from './Projects/Projects';

const Body = () => {

    return(
        <div className="body">  
               <About/>
                <div className="emptySpace"/>
               <Projects/>
        </div>
        
    );
}

export default Body;