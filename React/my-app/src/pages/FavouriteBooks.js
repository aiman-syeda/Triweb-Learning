import { useContext } from "react";
import FavouriteContext from "../components/store/ContextFavourite";
import Product_List from "../components/products/Product_List";


function FavouriteBooks() {
    const favouriteContext = useContext(FavouriteContext);
    return <div>
        <h1>My Favourite Books</h1>
        <Product_List products={favouriteContext.favouritebooks} />
    </div>

}

export default FavouriteBooks;