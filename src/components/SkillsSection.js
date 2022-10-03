import React, { useState } from "react";
import '../App.css'

// Populates Skill Section based on language
function SkillSection(props) {
    if ( props.l.eng === true ){
        return (
            <div className="skills-section">
                <h3 className="main-title">Skills</h3>
                <ul>
                    <li>
                        <p className="skill-title">C#</p>
                        <div className="progress-bar">
                            <div className="progress csharp-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">.NET</p>
                        <div className="progress-bar">
                            <div className="progress dotnet-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Javascript</p>
                        <div className="progress-bar">
                            <div className="progress js-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">React</p>
                        <div className="progress-bar">
                            <div className="progress react-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">HTML/CSS</p>
                        <div className="progress-bar">
                            <div className="progress hc-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Python</p>
                        <div className="progress-bar">
                            <div className="progress py-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Django</p>
                        <div className="progress-bar">
                            <div className="progress dj-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Flask</p>
                        <div className="progress-bar">
                            <div className="progress flask-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Java</p>
                        <div className="progress-bar">
                            <div className="progress java-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">C</p>
                        <div className="progress-bar">
                            <div className="progress c-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Photoshop</p>
                        <div className="progress-bar">
                            <div className="progress ps-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Illustrator</p>
                        <div className="progress-bar">
                            <div className="progress il-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Indesign</p>
                        <div className="progress-bar">
                            <div className="progress in-progress"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
    else if ( props.l.eng === false ){
        return (
            <div className="skills-section">
                <h3 className="main-title">Färdigheter</h3>
                <ul>
                    <li>
                        <p className="skill-title">C#</p>
                        <div className="progress-bar">
                            <div className="progress csharp-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">.NET</p>
                        <div className="progress-bar">
                            <div className="progress dotnet-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Javascript</p>
                        <div className="progress-bar">
                            <div className="progress js-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">React</p>
                        <div className="progress-bar">
                            <div className="progress react-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">HTML/CSS</p>
                        <div className="progress-bar">
                            <div className="progress hc-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Python</p>
                        <div className="progress-bar">
                            <div className="progress py-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Django</p>
                        <div className="progress-bar">
                            <div className="progress dj-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Flask</p>
                        <div className="progress-bar">
                            <div className="progress flask-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Java</p>
                        <div className="progress-bar">
                            <div className="progress java-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">C</p>
                        <div className="progress-bar">
                            <div className="progress c-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Photoshop</p>
                        <div className="progress-bar">
                            <div className="progress ps-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Illustrator</p>
                        <div className="progress-bar">
                            <div className="progress il-progress"></div>
                        </div>
                    </li>
                    <li>
                        <p className="skill-title">Indesign</p>
                        <div className="progress-bar">
                            <div className="progress in-progress"></div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}


export default SkillSection;