import React, { useState } from "react";
import AboutMe from '/components/AboutMe.js';
import Education from '/components/Education.js';
import Experience from '/components/Experience.js';


function RightSection(props) {
    return(
        <>
            <AboutMe />
            <Education />
            <Experience />
        </>
    )
}

export default RightSection;