import React, { useState } from "react";
import '../App.css'
import profilePicture from "./images/CV-img1.png"

// Populates profile section based on language
function Profile(props) {        
    if ( props.l.eng === true ) {
        return (
            <div className="profile">
                <div className="image">
                    <img src={profilePicture} alt="Profile Image" />
                </div>
                <h2 className="name">Peter Sagemo</h2>
                <p className="career">Web Developer</p>
            </div>        
        )
    }
    else if ( props.l.eng === false ) {
        return (
            <div className="profile">
                <div className="image">
                    <img src={profilePicture} alt="Profile Image" />
                </div>
                <h2 className="name">Peter Sagemo</h2>
                <p className="career">Webbutvecklare</p>
            </div>        
        )
    }
    
    
}

export default Profile;