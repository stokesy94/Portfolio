import React, { Component, useRef } from "react";
import "./Page2.scss";
import logo from "../assets/logo.png";
import Quiz from "../assets/Quiz.jpg";
import Calc from "../assets/calc.jpg";
import Mac from "../assets/mac.jpg";
import me from "../assets/me.jpg";
import CV from "../assets/CV.pdf";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/fontawesome-free-solid";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Compound from "../assets/compound.jpg";
import { useIntersection} from "react-use"
import gsap from "gsap";


const Page2 = () => {
    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: document.querySelector("main1"),
        rootMargin: "-100px",
        threshold: 1,
    });

    const fadeIn = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            y: -20,
            ease: "power4.out",
            stagger: {
                amount: .3
            }
        })
    };

    const fadeOut = (element) => {
        gsap.to(element, 1, {
            opacity: 1,
            y: -100,
            ease: "power4.out",

        })
    };



    intersection && intersection.intersectionRatio < 1 ?
        fadeOut(".b2a")
        :
        fadeIn(".b2a")

    intersection && intersection.intersectionRatio < 1 ?
        fadeOut(".b1element")
        :
        fadeIn(".b1element")

    intersection && intersection.intersectionRatio < 1 ?
        fadeOut(".b1b")
        :
        fadeIn(".b1b")





    return (

        <div className="about">

            <div ref={sectionRef}>
                <a id="about" href="#projects #class #main1 #animateArrow "></a>
            </div>

            <h1 className="b1a">About</h1><br/>

            <div  className="b1">

                <div className="b1element">
                    <img src={me} className="pics" alt="A pic of me"/>
                </div>

                <div><p className="b1b">I have a passion for creating fast, responsive and dynamic websites. I am
                    proficient at HTML, CSS and JavaScript and have a good understanding of various
                    different frameworks and tools used in modern web design. </p>
                </div>

                <div className="b1element">
                    <a href={CV} target="_blank"><FontAwesomeIcon icon={faFile} className="cv" size="5x"/></a>
                </div>
                <div className="b1element">
                    <a href="https://www.linkedin.com/in/matthew-stokes-077414b7/" target="_blank"><FontAwesomeIcon
                        icon={faLinkedin} className="linkedin" size="5x"/></a><br/>
                </div>
                <div className="b1element">
                    <a href="https://github.com/stokesy94" target="_blank"><FontAwesomeIcon icon={faGithub} className="github" size="5x"/></a>
                </div>

            </div>

            <h1 className="b2h1">Portfolio</h1>

            <div className="b2">

                <div className="b2a">
                    <img src={Quiz} className="pic"/>
                    <h3>Quiz App</h3>
                    <a href="https://github.com/stokesy94/quiz-application" target="_blank">
                        <button className="buttons">View Code</button>
                    </a>
                    <a href="https://stokesy94.github.io/quiz-application/" target="_blank">
                        <button className="buttons">View Live</button>
                    </a>

                </div>

                <div className="b2a">
                    <img src={Compound} className="pic"/><h3>CI Calculator</h3>
                    <a href="https://github.com/stokesy94/CompoundCalc" target="_blank">
                        <button className="buttons">View Code</button>
                    </a>
                    <a href="https://stokesy94.github.io/CompoundCalc/" target="_blank">
                        <button className="buttons">View Live</button>
                    </a>
                </div>


                <div className="b2a">
                    <img src={Calc} className="pic"/>
                    <h3>Simple Calculator</h3>
                    <a href="https://github.com/stokesy94/calculator" target="_blank">
                        <button className="buttons">View Code</button>
                    </a>
                    <a href="https://stokesy94.github.io/calculator/" target="_blank">
                        <button className="buttons">View Live</button>
                    </a>

                </div>
                <div className="b2a">
                    <img src={Mac} className="pic"/>
                    <h3>Mac Recreation</h3>
                    <a href="https://github.com/stokesy94/mac" target="_blank">
                        <button className="buttons">View Code</button>
                    </a>
                    <a href="https://stokesy94.github.io/mac/" target="_blank">
                        <button className="buttons">View Live</button>
                    </a>

                </div>

            </div>

            <div className="down">
                <a id="animateArrow" href="#contact"><img src={logo} className="b1downicon" /></a>
            </div>


        </div>


    )
}

export default Page2




