import React, {useRef} from "react";
import "./Page3.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub,  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/fontawesome-free-solid";
import gsap from "gsap";
import {useIntersection} from "react-use";



const Page3 = () => {

    const sectionRef = useRef(null);

    const intersection = useIntersection(sectionRef, {
        root: document.querySelector("contactmoi"),
        rootMargin: "0px",
        threshold: .8,
    });

    const leftIn = (element) => {
        gsap.to(element, 1, {
            opacity: 1,
            x: 0,
            ease: "power4.out",
            stagger: {
                amount: .3
            }
        })
    };

    const leftOut = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            x: -100,
            ease: "power4.out",
        })
    };

    const rightIn = (element) => {
        gsap.to(element, 1, {
            opacity: 1,
            x: 0,
            ease: "power4.out",
            stagger: {
                amount: .3
            }
        })
    };

    const rightOut = (element) => {
        gsap.to(element, 1, {
            opacity: 0,
            x: 100,
            ease: "power4.out",
        })
    };

    intersection && intersection.intersectionRatio < .8 ?
        leftOut(".contactmoi")
        :
        leftIn(".contactmoi")

    intersection && intersection.intersectionRatio < .8 ?
        leftOut(".contact-form")
        :
        leftIn(".contact-form")

    intersection && intersection.intersectionRatio < .8 ?
        rightOut(".contacticons")
        :
        rightIn(".contacticons")


        return (

            <div ref={sectionRef} className="contact">

                <a id="contact" href="#projects #about #main1"></a>

                <div class="contactmoi">
                    <h1>Contact Me</h1>
                </div>


                <div className="contact-section">
                    <form className="contact-form" action="index.html" method="post">
                        <input type="text" className="contact-form-text" placeholder="Your name" />
                        <input type="email" className="contact-form-text" placeholder="Your email" />
                        <input type="text" className="contact-form-text" placeholder="Your number" />
                        <textarea className="contact-form-text" placeholder="your message"></textarea>
                        <input type="submit" className="contact-form-btn" value="Send" />
                    </form>
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
 export default Page3;