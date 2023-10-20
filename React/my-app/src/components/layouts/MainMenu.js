import { Link } from "react-router-dom";
import MainMenuStyle from './MainMenu.module.css';
import FavouriteContext from '../store/ContextFavourite';
import { useContext } from 'react';



function MainMenu() {

    const favouriteContext = useContext(FavouriteContext);
    const countFav = favouriteContext.favouritebooks.length;

    return <header className={MainMenuStyle}>
        <nav>
            <ul>
                <li><a><Link to="/"> Home</Link></a></li>
                <li><a> <Link to="/about"> About</Link></a></li>
                <li><a> <Link to="/contact"> Contact</Link></a></li>
                <li><a> <Link to="/product"> Product</Link></a></li>
                <li><a> <Link to="/product/add">Add Product</Link></a></li>
                <li><a> <Link to="/product/favourites">{countFav}</Link></a></li>

            </ul>
        </nav>


    </header>
}

export default MainMenu;