import React, { useRef } from 'react';
import { firestore } from '../../Firebase';
import { addDoc, collection } from '@firebase/firestore';
import ReactDOM from 'react-dom/client';



const Contact = () => {

    const messageRef = useRef();
    const emailRef = useRef();
    const nameRef = useRef();

    const ref = collection(firestore, 'data')

    const handleSave = async (e) => {
        e.preventDefault();

        let data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }

        try {
            addDoc(ref, data);
            if (data) {
                const container = document.getElementById('root');
                const root = ReactDOM.createRoot(container);
                root.render(
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='mt-96 mb-8 text-center font-semibold text-4xl'>Thanks for Contacting</h1>
                        <p className='text-center text-xl'>You are form is submitted successfully! </p>
                        <button className="m-8 w-32 h-16 bg-white text-black p-3  rounded-lg"><a href='http://localhost:3000/'>Return</a></button>
                    </div>)
            }

        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div id='contactme' className='w-3/4 m-auto mt-[105px]'>
            <h1 className='text-3xl text-center font-semibold'>Contact me</h1>
            <p className='font-light text-xl ml- text-center mt-12'>Feel free to contact me, Kindly fill out the form!</p>
            <form onSubmit={handleSave} className='m-4 flex flex-col items-center justify-center'>
                <input required className='bg-light w-full max-w-2xl p-2  rounded-lg m-2' ref={nameRef} type='text' placeholder='Enter Your Name' />
                <input required className='bg-light w-full max-w-2xl p-2 rounded-lg m-2 text-white' ref={emailRef} type='email' placeholder='E-mail Address' />
                <textarea required className='bg-light w-full max-w-2xl p-2 rounded-lg m-2' name='message' rows='5' ref={messageRef} placeholder='Your Message'></textarea>
                <button className='bg-white text-black p-3  rounded-lg m-8' type='submit' value='send'>Submit</button>
            </form>
        </div>
    )
}

export default Contact