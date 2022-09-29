import React, { useState } from "react";
import Profile from '/components/Profile.js';
import ContactInfo from '/components/ContactInfo.js';
import SkillSection from '/components/SkillSection.js';

function LeftSection(props) {
    return(
        <>
            <Profile />
            <ContactInfo />
            <SkillSection />
        </>
    )
}

export default LeftSection;