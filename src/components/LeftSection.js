import React, { useState } from "react";
import '../App.css'
import Profile from './Profile';
import ContactInfo from './ContactInfo';
import SkillSection from './SkillsSection';

function LeftSection(props) {

// const [displayLang, setDisplayLang] = useState({ eng: true, swe: false })

//   let handleLang = (e) => {
//       e.preventDefault();
//       if( e.target.value == "eng" ){
//           setDisplayLang({ eng: true, swe: false })
//       }
//       else if( e.target.value == "swe" ){
//           setDisplayLang({ eng: false, swe: true })
//       }
//   }
    console.log("eng=" + props.l.eng + " , swe=" + props.l.swe);
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