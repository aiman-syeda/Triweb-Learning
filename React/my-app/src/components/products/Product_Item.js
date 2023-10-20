import style from './product_Item.module.css';
import Wrapper from '../layouts/Wrapper';
import FavouriteContext from '../store/ContextFavourite';
import { useContext } from 'react';



function Product_Item(props) {
    const favouriteContext = useContext(FavouriteContext);

    const isfavourite = favouriteContext.chectUserFavourite(props.item._id);

    const togglefavourite = () => {
        if (isfavourite) {
            favouriteContext.removeUserFavourite(props.item._id);
        } else {
            favouriteContext.addUserFavourite({ ...props.item });
        }
    }

    return <li key={props.item._id}>
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
                    <div>
                        <button className={isfavourite?style.heartFvrt:style.heartUnfvrt} onClick={togglefavourite}></button>
                    </div>

                </div>
            </div>
        </Wrapper>


    </li>;

}

export default Product_Item;