import React, { Component } from "react";
import "./Page1.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/fontawesome-free-solid";
import me from "../assets/me.jpg";
import CV from "../assets/CV.pdf";
import background from "../assets/background.jpg";


export default class Page1 extends Component {
    render () {
        return (

            <div>
                <div className="overlay"></div>
                <div className="background"></div>
                <div className="Page1">
                    <nav>
                        <ul className="banner">
                            <a id="animateHome" className="a2" href="#main1"><li>Home</li></a>
                            <a id="animateAbout"  className="a3" href="#about"><li>About + Projects</li></a>
                           <a id="animateContact" className="a3" href="#contact"><li>Contact</li></a>
                        </ul>
                    </nav>
                    <div className="main1" id="main1">
                        <img src={me} className="self" alt="A pic of me" />
                        <p className="hi">Hello, I'm Matt, <br /> a <span>front-end developer with a passion for learning</span>.</p>
                    </div>

                    <div className="main2">
                        <a href={CV} target="_blank"><FontAwesomeIcon icon={faFile} className="cv" size="5x"/></a>
                        <a href="https://www.linkedin.com/in/matthew-stokes-077414b7/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="linked" size="5x"></FontAwesomeIcon></a>
                    </div>

                    <div className="down">
                        <a id="animateArrow" href="#about"><img src={logo} className="downicon" /></a>
                    </div>
                </div>
            </div>
        )
    }
}