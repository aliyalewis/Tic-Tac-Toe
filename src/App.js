import React, { Component } from 'react';
import './App.css';
import Status from "./Status";
import NewGame from "./NewGame";
import Square from "./Square";

class App extends Component {

  state = {
    board: [
      " ", " ", " ",
      " ", " ", " ",
      " ", " ", " "
    ],
    turn: "X",
    winner: null,
    maxPlayer: "X",
    minPlayer: "O"
  }

  winner = (board, player) => {
    if(
      (board[0] === player && board[1] === player && board[2] === player) || 
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) ||
      (board[1] === player && board[4] === player && board[7] === player) ||
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)
     ) {
        return true;
      } else {
        return null;
      }
  }

  copyBoard = (board) => {
    return board.slice(0);
  }

  validMove = (move, player, board) => {
    //checks if move is valid and if it is places move on board
    let newBoard = this.copyBoard(board);
    if (newBoard[move] === " ") {
      newBoard[move] = player;
      return newBoard;
    } else {
      return null;
    }
  }

  findMove = (board) => {
    let bestMoveScore = 100;
    let move = null; 
    // test all possible moves if game is not over
    if(this.winner(board, "X") || this.winner(board, "O") || this.tie(board)) {
      return null;
    }

    //iterates through the whole board and finds all valid moves
    //saves scores that are better than the bestMoveScore
    for(let i =0; i < board.length; i++) {
      //check every possible AI move and check if valid
      // if yes, return the board and call the function again on the board if it's vaild
      let newBoard = this.validMove(i, this.state.minPlayer, board);
      if(newBoard) {
        //assign a move score which needs to be the maximum of all positions

        let moveScore = this.maxScore(newBoard);
        if (moveScore < bestMoveScore) {
          bestMoveScore = moveScore;
          move = i;
        }
      }
    }
    return move;
  }

  render() {
    return (
      <div>
        <div className="menu">
          <h1>Tic-Tac-Toe</h1>
          <Status winner={this.state.winner} />
          <NewGame clearBoard={this.clearBoard}/>
        </div>
        {this.state.board.map((value, index )=> {
           return <Square key={index} location={index} value={value} updateBoard={this.updateBoard} turn={this.state.turn} />
        })}
      </div>
    );
  }
  
}

export default App;
