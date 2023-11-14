import React from 'react';
import './About.css';
import UIdesign from '../../assets/mortarboard.gif';
import pucimg from '../../assets/diploma (1).gif';
import internshipimg from '../../assets/workplace.gif';


const About = () => {
    return (
        <section id='about-section'>
            <span className='about'>About</span>
            <span className='aboutme'>My journey into web development and design was sparked by an innate curiosity.
                With prior coding experience in Python, C-programming, and SQL, I embarked on a transformative
                three-month MERN Stack development internship at TriwebGenesis. This experience exposed me to
                the world of web programming, core programming concepts, and the tools of the MERN stack. It's here
                that I honed my skills and crafted this portfolio, a testament to my passion for creating meaningful
                and visually captivating web experiences.</span>
            <div className='educationBars'>

                <div className='educationBar'>
                    <img className='eduBarImg' src={internshipimg} alt='Internship-icon' />
                    <div className='eduBarText'>
                        <h3>Internship at TRI-WEB GENESIS Private Limited </h3>
                        <p>I completed a 3-month MERN Stack development internship where I gained proficiency in
                            MERN Stack technologies. I also honed my teamwork skills, learned to use Git and GitHub effectively,
                            collaborated with a diverse team, and used Jira for project management.</p>
                    </div>
                </div>
                
                <div className='educationBar'>
                    <img className='eduBarImg' src={UIdesign} alt='ui-design' />
                    <div className='eduBarText'>
                        <h3>H.K.E Society's S.L.N College of Engineering, Raichur, Karnatak </h3>
                        <p>I graduated in Electronics and Communication Engineering with a CGPA of 8.41 in 2021.</p>
                    </div>
                </div>

                <div className='educationBar'>
                    <img className='eduBarImg' src={pucimg} alt='diploma icon' />
                    <div className='eduBarText'>
                        <h3>Pre University course at Sarvajnya Institute, Raichur </h3>
                        <p>I completed my PUC in 2017 with an 84% score. </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;