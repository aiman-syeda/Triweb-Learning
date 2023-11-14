import React from 'react';
import './Intro.css';
import downloadiconbtn from '../../assets/-file-download_90117.png';
import resume from '../../assets/CV_Aiman_Syeda_Word.docx';
import introgif from '../../assets/gifintro2.gif';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hey,</span>
        <span className='introText' >This is <span className='introName'>Aiman Syeda,</span> <br /> MERN Stack Developer</span>
        <p className='introPara' >I am getting passionate about improving and growing <br />myself in the field of web development.
          I would <br />love to grab an opportunity
          where I can apply my skills<br /> and dive deeper into this fantastic field.  </p>
        <a href={resume} download='Resume'><button className='hiremeBtn'><img src={downloadiconbtn} className='downloadImg' alt='' />Resume</button></a>
      </div>
      <div className='introimg'>
        <img src={introgif} alt='intro' />
      </div>
    </section>
  )
}

export default Intro;