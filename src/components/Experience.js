import React, { useState } from "react";
import '../App.css'

// Populates Experience section based on language
function Experience(props) {
    if ( props.l.eng === true ) {
        return (
            <div className="experience sect">
                <div className="developmentExperience">
                    <h2 className="right-title">Experience</h2>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Web Developer (Internship)</h5>
                                <p className="para">2023</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Inka Interactive</h5>
                                    <p className="para">
                                        Building websites in Umbraco CMS with C# .NET, Razor, HTML/CSS and JavaScript. 
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                {/* <div className="otherExperience">
                    <h2 className="right-title"><a>Other Experience</a></h2>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Shop Worker</h5>
                                <p className="para">2018</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Lilla Coop Malmö Central</h5>
                                    <p className="para">
                                        Shop worker in grocery store. Tasks: Manning register, reception of goods, display work, customer service and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Deckhand</h5>
                                <p className="para">2013 - 2014</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Västerviks Skärgårdsturer</h5>
                                    <p className="para">
                                        Deckhand on an archipelago ferry. Tasks: Mooring, Ticket Sales, Customer service, Sanitation and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Operator</h5>
                                <p className="para">2011 - 2012</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Nortura Gilde</h5>
                                    <p className="para">
                                        Operator in slaughterhouse. Tasks: Meat Cutting and Cleaning, Packaging and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Fastfood Restaurant Worker</h5>
                                <p className="para">2010</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Sibylla</h5>
                                    <p className="para">
                                        Fastfood Restaurant Worker. Tasks: Cooking, Manning Register, Drive-thru, Cleaning and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>                 */}
            </div>
        )
    }
     else if ( props.l.eng === false ) {
        return (
            <div className="experience sect">
                <div className="developmentExperience">
                    <h2 className="right-title">Erfarenhet</h2>
                        <div className="timeline">
                            <div className="left-tl-content">
                                <h5 className="tl-title">Webbutvecklare (Praktik)</h5>
                                <p className="para">2023</p>
                            </div>
                            <div className="right-tl-content">
                                <div className="tl-content">
                                    <h5 className="tl-title-2">Inka Interactive</h5>
                                    <p className="para">
                                        Bygger websidor i Umbraco CMS med C# .NET, Razor, HTML/CSS och JavaScript.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
                {/* <h2 className="right-title">Erfarenhet</h2>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Butikbiträde</h5>
                        <p className="para">2018</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Lilla Coop Malmö Central</h5>
                            <p className="para">
                                Butiksbiträde i mataffär. Uppgifter: Kassa-arbete, kundservice, godsmottagning, frontning med mera.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Däcksman</h5>
                        <p className="para">2013 - 2014</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Västerviks Skärgårdsturer</h5>
                            <p className="para">
                                Däcksman på skärgårdsfärja. Uppgifter: Angöring, biljettförsäljning, renhållning, kundservice med mera.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Operatör</h5>
                        <p className="para">2011 - 2012</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Nortura Gilde</h5>
                            <p className="para">
                                Operatör på slakteri. Uppgifter: Finstyckning, löpandebandsarbete, paketering med mera.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline">
                    <div className="left-tl-content">
                        <h5 className="tl-title">Restaurangbiträde</h5>
                        <p className="para">2010</p>
                    </div>
                    <div className="right-tl-content">
                        <div className="tl-content">
                            <h5 className="tl-title-2">Sibylla</h5>
                            <p className="para">
                                Restaurangbiträder på snabbmatsrestaurang. Uppgifter: Kassa-arbete, matlagning, renhållning, godsmottagning med mera.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div> 
        )
     }
}


export default Experience;