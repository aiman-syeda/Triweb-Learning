function FirstComponent(props) {
    return <div className="modal">
       <h1>
       {props.name} is learning {props.topic} now
        </h1> 
        <p>{props.sub}  is really fun</p>
        <button onClick={props.closeModal}>close</button>
    </div>
};

export default FirstComponent;