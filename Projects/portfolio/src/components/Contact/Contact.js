import React from 'react'

const Contact = () => {
    return (
        <div className='w-3/4 m-auto mt-[105px]'>
            <h1 className='text-3xl text-center font-semibold'>Contact me</h1>
            <p className='font-light text-xl ml- text-center mt-12'>Feel free to contact me, Kindly fill out the form!</p>
            <form className='m-4 flex flex-col items-center justify-center'>
                <input className='bg-light w-full max-w-2xl p-2  rounded-lg m-2' type='text' placeholder='Enter Your Name'/>
                <input className='bg-light w-full max-w-2xl p-2 rounded-lg m-2 text-white' type='email' placeholder='E-mail Address'/>
                <textarea className='bg-light w-full max-w-2xl p-2 rounded-lg m-2' name='message' rows='5' placeholder='Your Message'></textarea>
                <button className='bg-white text-black p-3  rounded-lg m-8' type='submit' value='send'>Submit</button>
            </form>
        </div>
    )
}

export default Contact