import MainMenu from "./MainMenu";
import style from "./Layouts.module.css";

function Layouts(props) {
    return <div className={style.main}>
        <main><MainMenu /></main>
        {props.children}
    </div>
}

export default Layouts;