import style from './product_Item.module.css';
import Wrapper from '../layouts/Wrapper';


function Product_Item(props) {
    return <li key={props.item.id}>
        <Wrapper>
            <div className={style.grid}>
                <div>
                    <img src={props.item.image} alt='' />
                </div>
                <div>

                    <h2>{props.item.book_name}</h2>
                    <h3>Author:{props.item.author}</h3>
                    <p>Description:{props.item.description}</p>
                    <h4>Price:{props.item.price}/-</h4>
                    <button>Buy Now</button>

                </div>
            </div>
        </Wrapper>


    </li>;

}

export default Product_Item;