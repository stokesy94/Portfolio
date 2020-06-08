import React, { useRef } from "react";
import "./Page1.scss";
import logo from "../assets/logo.png";
import { useIntersection} from "react-use"
import gsap from "gsap";



const Page1 = () => {

    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: document.querySelector("main1"),
        rootMargin: "-100px",
        threshold: 1,
    });

    const fadeIn = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            x: -20,
            ease: "power4.out",
            stagger: {
                amount: .3
            }
        })
    };

    const fadeOut = (element) => {
        gsap.to(element, 1, {
            opacity: 1,
            x: -100,
            ease: "power4.out",

        })
    };



    intersection && intersection.intersectionRatio < 1 ?
        fadeOut(".banner")
        :
        fadeIn(".banner")

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

                <div ref={sectionRef} className="Page1">
                    <nav>
                        <ul className="banner">
                            <a id="animateHome" href="#main1">
                                <li>Home</li>
                            </a>
                            <a id="animateAbout" href="#about">
                                <li>Projects</li>
                            </a>
                            <a id="animateContact" href="#contact">
                                <li>Contact</li>
                            </a>
                        </ul>
                    </nav>
                    <div className="main1" id="main1">
                        <p className="hi">Hello, I'm Matt. <br/> I'm a <span>front-end developer.</span></p>
                    </div>

                    <div className="down">
                        <a id="animateArrow" href="#about"><img src={logo} className="downicon"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page1