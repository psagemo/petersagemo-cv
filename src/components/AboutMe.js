import React, { useState } from "react";
import '../App.css'

// Populates About Me section based on language
function AboutMe(props) {
    if ( props.l.eng === true ) {
        return (
            <div className="about sect">
                <h2 className="right-title">About Me</h2>
                {/* Jag är en junior webbutvecklare som letar efter första jobbet efter praktiken. 
                Jag har för närvarande praktik hos Inka Interactive där jag sysslar med frontend-utveckling i Umbraco CMS. 
                Före praktiken gick jag en intensivutbildning i .NET-utveckling hos Lexicon Malmö och innan dess har jag läst 
                olika programmeringskurser och testat på olika programmeringsspråk och verktyg på egen hand. */}
                <p className="para">
                    I am a junior web developer in search of my first job after finishing my internship. If you are willing to invest in me, in return you will get a positive team player who is hungry to hone my skills and prove my worth. I am of course ready and willing to learn new languages, frameworks and skills and also to hone and develop what I already know in order to adapt to the workplace and deliver great products.
                </p>
                <br />
                <p className="para">
                    Currently I am an intern at INKA INTERACTIVE working with web development in Umbraco CMS. Prior to my internship I studied .NET-development at Lexicon Malmö and before that I took different programming and computer science courses online as well as studying diffrent programming languages and frameworks on my own.                    
                </p>
            </div>   
        )
    }
    else if ( props.l.eng === false ) {
        return (
            <div className="about sect">
                <h2 className="right-title">Om mig</h2>
                <p className="para">
                    Jag är en junior webbutvecklare som letar efter första jobbet efter praktiken. Om ni är villiga att satsa på mig så kommer ni få en positiv, utvecklingshungrig lagspelare som brinner för att finslipa mina kunskaper och visa vad jag kan. Jag är självklart beredd och intresserad av att lära mig nya språk, verktyg och färdigheter samt att slipa och utveckla de färdigheter jag redan har för att anpassa mig till arbetsplatsen leverera bra produkter.
                    
                    {/* Jag har för närvarande praktik hos Inka Interactive där jag sysslar med frontend-utveckling i Umbraco CMS. 
                    Före praktiken gick jag en intensivutbildning i .NET-utveckling hos Lexicon Malmö och innan dess har jag 
                    läst olika programmeringskurser och testat på olika programmeringsspråk och verktyg på egen hand. */}

                    {/* I am a junior web developer in search of my first job after finishing my internship. 
                    If you are willing to invest in me, in return you will get a positive team player who is 
                    hungry to hone my skills and prove my worth. I am of course ready and willing to learn new 
                    languages, frameworks and skills and also to hone and develop what I already know in order 
                    to adapt to the workplace and deliver great products. */}
                      
                </p>
                <br />
                <p className="para">
                    I nuläget praktiserar jag hos INKA INTERACTIVE där jag jobbar med webbutveckling i Umbraco CMS. Före min praktik studerade jag .NET-utveckling hos Lexicon Malmö och innan dess läste jag olika kurser i programmering och datavetenskap samtidigt som jag lärde mig olika programmeringsspråk och verktyg på egen hand.
                </p>
            </div>   
        )
    }
    
}


export default AboutMe;