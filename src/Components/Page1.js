import React, { Component } from "react";
import "./Page1.scss";
import logo from "../assets/logo.png";

export default class Page1 extends Component {
    render () {
        return (
        <section>
            <div>
                <div className="animation-area">
                    <ul className="box-area">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="Page1">
                    <nav>
                        <ul className="banner">
                            <a id="animateHome"  href="#main1"><li>Home</li></a>
                            <a id="animateAbout"  href="#about"><li>Projects</li></a>
                           <a id="animateContact"  href="#contact"><li>Contact</li></a>
                        </ul>
                    </nav>
                    <div className="main1" id="main1">
                        <p className="hi">Hello, I'm Matt, <br /> I'm a <span>front-end developer</span>.</p>
                    </div>

                    <div className="down">
                        <a id="animateArrow" href="#about"><img src={logo} className="downicon" /></a>
                    </div>

                </div>
            </div>
        </section>
        )
    }
}