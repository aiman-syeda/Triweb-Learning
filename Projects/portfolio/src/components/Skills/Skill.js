import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FilterSkills from './FilterSkills';

import { useState } from 'react';


import html from '../../assets/html (2).png';
import css from '../../assets/css.png';
import js from '../../assets/javascript (1).png';
import node from '../../assets/nodejs.png';
import exjs from '../../assets/express-js.png';
import mDB from '../../assets/mongodb.png';
import sql from '../../assets/mysql (1).png';
import retjs from '../../assets/react.png';
import xampp from '../../assets/download.jpeg';
import pman from '../../assets/Postman.gif';

import python from '../../assets/python (1).png';
import jva from '../../assets/java.png';
import cp from '../../assets/c.png';

import jira from '../../assets/jira.png';
import git from '../../assets/git (1).png';
import sdlc from '../../assets/big-icon-sldc-002.png';
import vs from '../../assets/visual-studio-code.png';



const Skill = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

const [items, setItems] = useState(Data);

const filterItems = (genr) => {
    const newItems = Data.filter((newval) => newval.genre === genr)
    setItems(newItems);
}
    return (
        <section className='w-3/4 m-auto mt-[105px]'>
            <div className='mb-[80px]' >
                <h1 className='text-3xl text-center font-semibold'>Skills</h1>
                <div className='mt-12 justify-contents text-lg font-light'>
                <p>I possess a diverse skill set that spans various aspects of web development, programming languages, and software development tools. Here's a snapshot:<br/><br/>
                In the realm of web development, I am proficient in HTML5, CSS3, and JavaScript, with hands-on experience in Node.js, Express.js, MongoDB, SQL, React.js, and related technologies.<br/><br/>
                My programming expertise extends to Python, Java, and C-Programming, allowing me to tackle a variety of projects.<br/><br/> 
                Additionally, I am well-versed in essential software development and collaboration tools, including Jira Software for project management, understanding the Software Development Life Cycle (SDLC), and utilizing Git for version control.<br/><br/>
                Familiarity with development environments such as Visual Studio Code and proficiency in database management tools like XAMPP, phpMyAdmin, SQLite, and Postman further enhance my capabilities. </p>

                </div>
            </div>
            <FilterSkills 
              FilterBtn={FilterBtn}
              filterItems={filterItems}
                            />
            <div className='w-3/4 m-auto m-5 '>
                    <Slider {...settings}>
                    {items.map((item) => 
                        <div className='mx-16 my-16 w-32 rounded-xl justify-center items-center bg-white' >
                            <h3 className='text-black text-center justify-center items-center text-base mt-4 text-xl'>
                                {item.title}
                            </h3>
                            <img src={item.image} alt='' className='object-cover mx-20 mb-7 justify-center items-center w-28 h-28' />
                        </div>
                    )}</Slider>
                </div>

        </section>
    )
}

const Data = [
    {
        genre: 'Web Development',
        image: html,
        title: 'HTML5'
    },
    {
        genre: 'Web Development',
        image: css,
        title: 'CSS3'
    },
    {
        genre: 'Web Development',
        image: js,
        title: 'JavaScript'
    },
    {
        genre: 'Web Development',
        image: node,
        title: 'NodeJS'
    },
    {
        genre: 'Web Development',
        image: exjs,
        title: 'ExpressJS'
    },
    {
        genre: 'Web Development',
        image: mDB,
        title: 'MongoDB'
    },
    {
        genre: 'Web Development',
        image: sql,
        title: 'SQL'
    },
    {
        genre: 'Web Development',
        image: retjs,
        title: 'ReactJS'},
    {
        genre: 'Web Development',
        image: xampp,
        title: 'XAMPP'},
    {
        genre: 'Web Development',
        image: pman,
        title: 'Postman'},
    {
        genre: 'Programming Languages',
        image: python,
        title: 'Python'}, 
    {
        genre: 'Programming Languages',
        image: jva,
        title: 'JAVA'}, 
    {
        genre: 'Programming Languages',
        image: cp,
        title: 'C-Programming'},
    {
        genre: 'Development Tools and Practices',
        image: git,
        title: 'Git'},
    {
        genre: 'Development Tools and Practices',
        image: jira,
        title: 'Jira'}, 
    {
        genre: 'Development Tools and Practices',
        image: sdlc,
        title: 'SDLC'}, 
    {
        genre: 'Development Tools and Practices',
        image: vs,
        title: 'VS-Code'}
    ]



const FilterBtn = [...new Set(Data.map((val)=> val.genre))]
export default Skill;