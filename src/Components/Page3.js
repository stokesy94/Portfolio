import React, { Component } from "react";
import "./Page3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub,  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";

export default class Page3 extends Component {
    render () {
        return (

            <div className="contact">

                <a id="contact" href="#projects #about #main1"></a>

                <div class="contactmoi">
                    <h1>Contact Me</h1>
                </div>


                <div className="contact-section">

                    <div className="border"></div>
                    <form className="contact-form" action="index.html" method="post"></form>
                        <input type="text" className="contact-form-text" placeholder="Your name" />
                        <input type="email" className="contact-form-text" placeholder="Your email" />
                        <input type="text" className="contact-form-text" placeholder="Your number" />
                        <textarea className="contact-form-text" placeholder="your message"></textarea>
                        <input type="submit" className="contact-form-btn" value="Send" />
                </div>

                <div className="contacticons">
                    <a href="mailto:mattstokes94@yahoo.co.uk" target="_blank"><p className="emailed"><FontAwesomeIcon icon={faEnvelope}  />mattstokes94@yahoo.co.uk</p></a><br/>
                    <a href="https://www.linkedin.com/in/matthew-stokes-077414b7/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="linkedin" size="5x" /></a><br/>
                    <a href="https://github.com/stokesy94" target="_blank"><FontAwesomeIcon icon={faGithub} className="github" size="5x" /></a>
                </div>

                    <footer className="footer">
                        <p>My Portfolio by Matthew Stokes</p>
                    </footer>

            </div>

        )
    }
}