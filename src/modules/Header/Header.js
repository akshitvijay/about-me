import React from 'react';
import Avatar from './Avatar/Avatar';
import Contact from './Contact/Contact';
import classes from './Header.css';

const Header = () => {

    return(
        <div className="header">
            <Avatar/> 
                  
                    <div className="title">
                        <h1>Akshit Vijay</h1>
                        <h5>Learn | Solve | Repeat </h5>
                    </div> 
             
                <div className="contacts">    
                    <Contact/>
                </div> 
        </div>
    );
}

export default Header;