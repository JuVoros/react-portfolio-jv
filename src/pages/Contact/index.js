import React from 'react';
import Github from '/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/github.png';
import Email from '/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/email.png';
import Linked from '/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/linkedIn.png';
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
                <img src={Github} alt="GitHub Logo"/>
                <a href="https://github.com/JuVoros" className="ContactBtn">JuVoros</a>
            </section>
            <section className="ResumeCard">
                <h3 className="ContactTitle">Email</h3>
                <img src={Email} alt="Email Logo"/>
                <a href="mailto:JulianVoros@Hotmail.co," className="ContactBtn">JulianVoros@Hotmail.com</a>
            </section>
            <section className="PCard">
                <h3 className="ContactTitle">linkedIn</h3>
                <img src={Linked} alt="LinkedIn Logo"/>
                <a href="mailto:JulianVoros@Hotmail.co," className="ContactBtn">Julian Voros</a>
            </section>
            </div>
            </div>
    );
}


export default Contact;