import { Link } from "react-router-dom";


function MainMenu() {
    return <header>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact</Link>

    </header>
}

export default MainMenu;