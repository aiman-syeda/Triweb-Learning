import { useRef } from 'react';
import style from './AddProductForm.module.css';
import Wrapper from '../layouts/Wrapper';


function AddProductForm(){
    const book_name_ref = useRef();
    const author_ref = useRef();
    const description_ref = useRef();
    const image_ref = useRef();
    const price_ref = useRef();
    const language_ref = useRef();
    
    function submitHandler(event){
        event.preventDefault();
        const book_name = book_name_ref.current.value;
        const author = author_ref.current.value;
        const description = description_ref.current.value;
        const image = image_ref.current.value;
        const price = price_ref.current.value;
        const language = language_ref.current.value;

        const product={
            book_name,
            author,
            description,
            image,
            price,
            language
        };
        console.log(product);
    }

    return <Wrapper>
        <form className={style.form} onSubmit={submitHandler}>
            <div className={style.groups}>
                <label htmlFor='book_title'>Book Title</label>
                <input type='text' placeholder='' id='book_title' ref={book_name_ref}/>
            </div>
            <div className={style.groups}>
                <label htmlFor='author'>Author</label>
                <input type='text' placeholder='' id='author' ref={author_ref}/>
            </div>
            <div className={style.groups}>
                <label htmlFor='description'>Description</label>
                <textarea rows={5}  id='description' ref={description_ref}/>
            </div>
            <div className={style.groups}>
                <label htmlFor='price'>Price</label>
                <input type='text' placeholder='' id='price' ref={price_ref}/>
            </div>
            <div className={style.groups}>
                <label htmlFor='image'>Image</label>
                <input type='text' placeholder='' id='image' ref={image_ref}/>
            </div>
            <div className={style.groups}>
                <label htmlFor='language'>Language</label>
                <input type='text' placeholder='' id='language' ref={language_ref}/>
            </div>
            <div className={style.btn}>
                <button>Add</button>
            </div>
        </form>
    </Wrapper>
}

export default AddProductForm;