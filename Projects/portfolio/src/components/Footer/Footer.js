import React from 'react';
import gitimg from '../../assets/github (2).png';
import inimg from '../../assets/linkedin (1).png';
import twitterimg from '../../assets/twitter (1).png';

const Footer = () => {
  return (
    <div className='h-24 w-full bg-light'>
    <footer className='flex w-3/6 mx-28 ml-96 justify-between' >
      <a href='https://github.com/aiman-syeda'><img className='object-cover w-20 h-20 my-2 ml-24' src={gitimg} alt='' /></a>
        
      <a href='https://www.linkedin.com/in/syeda-aiman-791188268/'><img className='object-cover w-20 h-20 my-2' src={inimg} alt='' /></a>
      <a href='https://twitter.com/SyedaAiman81647'><img className='object-cover w-20 h-20 my-2 ' src={twitterimg} alt='' /></a>
    </footer>
    </div>
  )
}

export default Footer;