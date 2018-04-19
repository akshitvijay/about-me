import React from  'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaTwitter from 'react-icons/lib/fa/twitter';
import GoMail from 'react-icons/lib/go/mail';

import classes from './Contact.css';

const iconPanel = () => {
    return(
    <div >    
        <div className="contactRow" >
            <span className="contactIcons">
            <FaGithub/> 
            </span >
            <span className="contactIcons">
                <FaLinkedin/>
            </span >
            <span className="contactIcons">
                <FaTwitter/>
            </span>
        </div>
        <div className="contactRow">
            <span className="contactIcons">
                <GoMail/> 
            </span >
            <span className="phoneno">
                | +91 7559100994
            </span >

        </div>
    </div>
    );
}

export default iconPanel;