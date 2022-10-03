import React, { useState } from "react";
import '../App.css'
import Profile from './Profile';
import ContactInfo from './ContactInfo';
import SkillSection from './SkillsSection';

// Initiates and calls components in left section with language state
function LeftSection(props) {
    return(
        <section className="left-section">
            <div className="left-content">
                <Profile l={props.l}/>
                <ContactInfo l={props.l}/>
                <SkillSection l={props.l}/>
            </div>            
        </section>        
    )
}

export default LeftSection;