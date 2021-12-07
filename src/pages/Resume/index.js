import React from 'react';
import ResumeImg from '/Users/juvoros/Code/Bootcamp/homework/react-portfolio/src/images/Screen Shot 2021-11-23 at 9.22.07 PM.png'
import './style.css';

const Resume = () => {
    return (
        <div className="RContainer">
            

        <header className="RTitle">
            <h1>Resume</h1>
        </header> 
        <div className="ResumeContainer">
            <img src={ResumeImg} className="ResumeImage" alt="Screenshot of my Resume"/>
            <a href="https://docs.google.com/document/d/1RsMz7dd9sjEmR6G27yDbI-Ag7fitZISxhYvhjVYt_ds/edit?usp=sharing" download= "newfilename" className="ResumeBtn">Resume</a>
            </div>
        </div>
    );
}


export default Resume;