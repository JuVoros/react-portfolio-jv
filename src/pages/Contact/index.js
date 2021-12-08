import React from 'react';
import Github from "/Users/juvoros/Code/Bootcamp/react-portfolio-jv/src/images/github.png";
import Email from "/Users/juvoros/Code/Bootcamp/react-portfolio-jv/src/images/email.png";
import Linked from "/Users/juvoros/Code/Bootcamp/react-portfolio-jv/src/images/linkedIn.png";
import './style.css';

const Contact= () => {
    return (
        <div className="ContactContainer">
            <div>
                <h2 className="Contacts">
                    CONTACTS
                </h2>
            </div>

        <div className="ContactContainer2">
            <section className="PCard">
                <h3 className="ContactTitle">GitHub</h3>
                <img src="./images/github.png" alt="GitHub Logo"/>
                <a href="https://github.com/JuVoros" className="ContactBtn">JuVoros</a>
            </section>
            <section className="ResumeCard">
                <h3 className="ContactTitle">Email</h3>
                <img src="./images/email.png" alt="Email Logo"/>
                <a href="mailto:JulianVoros@Hotmail.com," className="ContactBtn">JulianVoros@Hotmail.com</a>
            </section>
            <section className="PCard">
                <h3 className="ContactTitle">linkedIn</h3>
                <img src="./images/linkedIn.png" alt="LinkedIn Logo"/>
                <a href="https://www.linkedin.com/in/julian-voros-061b08217/" className="ContactBtn">Julian Voros</a>
            </section>
            </div>
            </div>
    );
}


export default Contact;