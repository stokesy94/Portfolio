import React, { Component } from "react";
import "./Page2.css";
import logo from "../assets/logo.png";
import Quiz from "../assets/Quiz.jpg";
import Calc from "../assets/calc.jpg";
import Mac from "../assets/mac.jpg";
import Google from "../assets/google.jpg";
import { Button } from "react-bootstrap";

export default class Page2 extends Component {
    render() {
            return (

                <div className="about">

                    <div>
                        <a id="about" href="#projects #class #main1 #animateArrow "></a>
                    </div>

                    <div className="b1">
                        <h1>About Me</h1>
                        <p className="b1a">I am proficient at HTML, CSS and JavaScript and have a good understanding of various
                            different frameworks and tools used in the modern workplace.</p>
                        <p className="b1a">Actively searching for front end opportunities.</p>
                        <p className="b1a">Outside of work and development I spend the weekends with my other half, usually finding a
                            new restaurant or researching a new destination to travel too!</p>
                    </div>

                    <div className="b2">
                        <h1>Portfolio</h1>
                        <div className="b2a">
                            <img src={Quiz} className="pic"/>
                            <h3>Quiz App</h3>
                            <a href="https://github.com/stokesy94/quiz-application" target="_blank"><button className="buttons">View Code</button></a>
                            <a href="https://stokesy94.github.io/quiz-application/" target="_blank"><button className="buttons">View Live</button></a>
                            <p>Create, Save, Load and Play a Quiz!</p>
                            <p>Challenges I Faced:</p>
                            <ul>
                                <li>Learning new technologies! XMLHttpRequests and JSON... I had not worked with either of these before and so researching, implementing and debugging took a lot longer than anticipated! </li>
                                <li>CORS - Figuring out how to disable this to allow cross-origin access to my local server.  </li>
                            </ul>
                            <p>Solutions: <br/> Just keep trying different solutions found on StackOverflow and the likes.</p>
                        </div>
                        <div className="b2b">
                            <img src={Calc} className="pic"/>
                            <h3>Simple Calculator</h3>
                            <a href="https://github.com/stokesy94/calculator" target="_blank"><button className="buttons">View Code</button></a>
                            <a href="https://stokesy94.github.io/calculator/" target="_blank"><button className="buttons">View Live</button></a>
                            <p>Simple Division, Multiplication, Addition and Subtraction</p>
                            <p>Challenges I Faced:</p>
                            <ul>
                                <li>Figuring out the best and most efficient way of writing the code</li>
                            </ul>
                        </div>
                        <div className="b2c">
                            <img src={Mac} className="pic"/>
                            <h3>Mac Recreation</h3>
                            <a href="https://github.com/stokesy94/mac" target="_blank"><button className="buttons">View Code</button></a>
                            <a href="https://stokesy94.github.io/mac/" target="_blank"><button className="buttons">View Live</button></a>
                            <p>Improving design skills</p>
                            <p>Challenges I Faced:</p>
                            <ul>
                                <li>Positioning</li>
                            </ul>
                            <p>Solutions: <br/> This was my first attempt at creating a website with multiple elements in and so figuring out how all elements interact with each other was a learning experience, achieved through many failures.</p>
                        </div>
                        <div className="b2d">
                            <img src={Google} className="pic"/>
                            <h3>Google Recreation</h3>
                            <a href="https://github.com/stokesy94/google" target="_blank"><button className="buttons">View Code</button></a>
                            <a href="https://stokesy94.github.io/google/" target="_blank"><button className="buttons">View Live</button></a>
                            <p>Improving design skills</p>
                            <p>Challenges I Faced:</p>
                            <ul>
                                <li>How to build a basic website</li>
                            </ul>
                            <p>Solutions: <br/> My first adventure into HTMl and CSS. This was an enjoyable experience and though it didn't take long, I learned a lot of the basic skills through this. </p>
                        </div>
                    </div>

                    <a href="#contact" className="b1downicon"><img src={logo}/></a>

                </div>


            )
        }
    }
