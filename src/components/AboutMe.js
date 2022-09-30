import React, { useState } from "react";
import '../App.css'

function AboutMe(props) {
    if ( props.l.eng === true ) {
        return (
            <div className="about sect">
                <h2 className="right-title">About Me</h2>
                <p className="para">
                    If you are willing to invest in me, in return you will get a positive team player who is hungry to develop skills and has a great interest in programming and technology.
                </p>
                <br />
                <p className="para">
                    I am currently studying to be a .NET-developer at Lexicon. I am of course ready and willing to learn new languages, frameworks and skills and also to hone and develop what I already know in order to adapt to the workplace.
                </p>
            </div>   
        )
    }
    else if ( props.l.eng === false ) {
        return (
            <div className="about sect">
                <h2 className="right-title">Om mig</h2>
                <p className="para">
                    Om ni är villiga att satsa på mig så kommer ni få en positiv, utvecklingshungrig lagspelare med ett stort intresse för programmering och teknik. 
                </p>
                <br />
                <p className="para">
                    I nuläget studerar jag för att bli en .NET-utvecklare hos Lexicon. Jag är självklart beredd och intresserad av att lära mig nya språk, verktyg och färdigheter samt att slipa och utveckla de färdigheter jag redan har för att anpassa mig till arbetsplatsens förväntningar.                     
                </p>
            </div>   
        )
    }
    
}


export default AboutMe;