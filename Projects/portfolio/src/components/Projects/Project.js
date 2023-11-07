import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import TicTacToe from '../../assets/Tic-Tac-Toe-img.png';
import BookStore from '../../assets/images_5.jpeg';
import QuizApp from '../../assets/quiz-app-high-resolution-logo.png';


const Project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
        <div className='w-3/4 m-auto'>
          
            <div>
                <h1 className='text-3xl text-center font-semibold'>Projects</h1>
                <p className='mt-12 font-extralight justify-center'>Here are some of my projects.These projects highlight my expertise in web development and programming,
                     covering a range of functionalities and applications.</p>
            </div>


            <div className='mt-20'>
                <Slider {...settings}>
                {Projects.map((item) =>
                    <div className='h-[300px] bg-light text-white rounded-xl m-4'>

                        <div className='text-center justify-center items-center text-base mt-4 text-xl'>
                            <p>{item.title}</p>
                        </div>
                    
                        <div className='h-56 rounded-t-xl flex justify-center items-center' >
                            <img src={item.image} alt='' className='h-44 w-44' />
                        </div>

                        <div className='flex flex-row justify-center items-center gap-4 p-2 text-xs'>
                            <a href={item.linkCode} target='_blank' rel='noreferrer'>Code</a>
                            <a href={item.linkHosted} target='_blank' rel='noreferrer'>Live</a>
                        </div>

                    </div>
                )}
                </Slider>
            </div>

        </div>
    )
}
const Projects = [
    {
        title: 'Tic-Tac-Toe',
        image: TicTacToe,
        linkCode: 'https://github.com/aiman-syeda/Triweb-Learning/tree/main/Projects/TicTacToe/vy6j3f',
        linkHosted: ''
    },
    {
        title: 'Online-Book-Store',
        image: BookStore,
        linkCode: 'https://github.com/aiman-syeda/Triweb-Learning/tree/main/React',
        linkHosted: ''
    },
    {
        title: 'Quiz-App',
        image: QuizApp,
        linkCode: 'https://github.com/aiman-syeda/Triweb-Learning/tree/main/Projects/Quiz_App',
        linkHosted: ''
    }
]
export default Project;