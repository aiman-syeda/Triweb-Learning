import GameState from "./GameState";


function Reset({gamestate, onReset}) {
   
    if(gamestate === GameState.inProgress){
      return;
    }
    
    return ( <button className="reset-btn" onClick={onReset}>Reset</button>)
      
  }

  export default Reset;