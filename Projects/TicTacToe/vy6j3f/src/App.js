import { useState } from "react";
import "./styles.css";
import GameState from "./components/GameState";
import GameOver from "./components/GameOver";
import Reset from "./components/Reset";
import CalculateWinner from "./components/CalculateWinner";

function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button>

}

function Board({ xIsNext, squares, onPlay, setGameState }) {

  function handleClick(i) {
    if (squares[i] || CalculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }
  /*let message;
  const winner = CalculateWinner(squares);
  if (winner) {
    message = 'Winner: ' + winner;
  } else {
    message = "Next player " + (xIsNext ? "X" : "O");
  }*/

  const onallSquares = squares.every((square) => square != null);
  if (onallSquares) {
    setGameState(GameState.draw);
  }

  const winner = CalculateWinner(squares);
  if (winner === 'X') {
    setGameState(GameState.playerXwins);
  }
  else if (winner === 'O') {
    setGameState(GameState.playerOwins);
  }




  return (
    <>
      <h1>Tic Tac Toe</h1>
      {/*<div className="status">{message}</div>*/}
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )

}

export default function Game() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [gamestate, setGameState] = useState(GameState.inProgress);

  function handlePlay(nextSquares) {

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }



  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} setGameState={setGameState} />
        <GameOver gamestate={gamestate} />
        <Reset />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}







