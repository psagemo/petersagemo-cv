import React, { useState } from "react";
import '../App.css'

function ContactInfo(props) {
    if ( props.l.eng === true ){
        return (
            <div className="contact-info">
                <h3 className="main-title">Contact Info</h3>
                <ul>
                    <li>                    
                        <a className="phone-link" href="tel:+46768828195"><i className="fa fa-phone"></i>+46768828195</a>
                    </li>
                    <li>                    
                        <a className="email-link" href="mailto:psagemo@gmail.com"><i className="fa fa-envelope"></i>psagemo@gmail.com</a>
                    </li>
                    <li>                    
                        <a className="github-link" href="https://github.com/psagemo"><i className="fa fa-github"></i>https://github.com/psagemo</a>
                    </li>
                    <li>                    
                        <a className="map-link" href="https://www.google.se/maps/@55.5915048,13.00016,13z"><i className="fa fa-map-marker"></i> Malmö, Sweden</a>
                    </li>
                </ul>
            </div>
        )
    }
    else if ( props.l.eng === false ){
        return (
            <div className="contact-info">
                <h3 className="main-title">Kontakt</h3>
                <ul>
                    <li>                    
                        <a className="phone-link" href="tel:+46768828195"><i className="fa fa-phone"></i>+46768828195</a>
                    </li>
                    <li>                    
                        <a className="email-link" href="mailto:psagemo@gmail.com"><i className="fa fa-envelope"></i>psagemo@gmail.com</a>
                    </li>
                    <li>                    
                        <a className="github-link" href="https://github.com/psagemo"><i className="fa fa-github"></i>https://github.com/psagemo</a>
                    </li>
                    <li>                    
                        <a className="map-link" href="https://www.google.se/maps/@55.5915048,13.00016,13z"><i className="fa fa-map-marker"></i> Malmö, Sweden</a>
                    </li>
                </ul>
            </div>
        )
    }
}


export default ContactInfo;