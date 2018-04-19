import React from 'react';
import akshitAvatar from '../../../assets/akshit.jpeg';
import classes from './Avatar.css';

const Avatar = () => {
    return(
        <div className="image-cropper">
            <img src={akshitAvatar} className="App-logo" alt="logo" />
        </div>    
    );
}

export default Avatar;