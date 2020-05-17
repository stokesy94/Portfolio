import React, { Component } from "react";
import "./Page1.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import me from "../assets/me.jpg";
import CV from "../assets/CV.pdf";


export default class Page1 extends Component {
    render () {
        return (

            <div>
                <meta charSet="UTF-8" />
                <meta name="description" content="Where you can find out all about me" />
                <meta name="author" content="Matthew Stokes" />
                <link rel="stylesheet" href="LP.css" />
                <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet" />
                <title>MattStokesWD</title>

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
                        <p className="hi">Hello, I'm Matt. <br /> I'm a <span>front-end developer</span>.</p>
                    </div>

                    <div>
                        <a href={CV} target="_blank"><button className="cv">CV</button></a>
                        <a href="https://www.linkedin.com/in/matthew-stokes-077414b7/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="linked" size="5x" /></a>
                    </div>

                    <div className="down">
                        <a id="animateArrow" href="#about"><img src={logo} className="downicon" /></a>
                    </div>
                </div>
            </div>
        )
    }
}