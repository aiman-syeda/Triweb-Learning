import React from 'react';
import './Intro.css';
import Image from '../../assets/myimage.jpg';
import { Link  } from 'react-scroll';
import downloadiconbtn from '../../assets/-file-download_90117.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
         <span className='hello'>Hey,</span>
         <span className='introText' >This is <span className='introName'>Aiman Syeda,</span> <br /> MERN Stack Developer</span>
         <p className='introPara' >I am getting passionate about improving and growing <br />myself in the field of web development.
          I would <br />love to grab an opportunity 
          where I can apply my skills<br/> and dive deeper into this fantastic field.  </p>
         <Link><button className='hiremeBtn'><img src={downloadiconbtn} className='downloadImg' alt='download me'/>Resume</button></Link>
        </div>
        {/*<img src={Image} alt='' className='bg' />*/}
    </section>
  )
}

export default Intro;