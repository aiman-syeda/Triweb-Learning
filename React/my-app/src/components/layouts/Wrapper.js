import style from './Wrapper.module.css';

function Wrapper(props) {
    return <div className={style.customWrapper}>
        {props.children}
    </div>
}

export default Wrapper;