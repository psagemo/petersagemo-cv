import React, { useState } from "react"
import '../App.css'
import AboutMe from './AboutMe'
import Education from './Education'
import Experience from './Experience'


function RightSection(props) {
    return(
        <section className="right-section">
            <div className="main-content">
                <div className="right-main-content">
                    <AboutMe l={props.l}/>
                    <Education l={props.l}/>
                    <Experience l={props.l}/>
                </div>                
            </div>            
        </section>        
    )
}

export default RightSection;