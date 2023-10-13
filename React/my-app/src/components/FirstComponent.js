function FirstComponent(props) {
    return <div>
       <h1>
       {props.name} is learning {props.topic} now
        </h1> 
        <p>{props.sub} props are really fun</p>
    </div>
};

export default FirstComponent;