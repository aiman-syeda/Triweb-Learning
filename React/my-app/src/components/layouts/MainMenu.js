import { Link } from "react-router-dom";
import MainMenuStyle from './MainMenu.module.css';


function MainMenu() {
    return <header className={MainMenuStyle.header}>
        <nav>
            <ul>
                <li><a><Link to="/"> Home</Link></a></li>
                <li><a> <Link to="/about"> About</Link></a></li>
                <li><a> <Link to="/contact"> Contact</Link></a></li>
                <li><a> <Link to="/product"> Product</Link></a></li>

            </ul>
        </nav>


    </header>
}

export default MainMenu;