import React, { Component } from 'react';
import './App.css';
import Status from "./Status";
import NewGame from "./NewGame";
import Square from "./Square";
import Score from "./Score";

class App extends Component {
  state = {
    board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    turn: "X",
    winner: null,
    maxPlayer: "X",
    minPlayer: "O",
    userWins: 0,
    userLosses: 0,
    computerWins: 0,
    computerLosses: 0
  };

  clearBoard = () => {
    this.setState({
      board: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      turn: "X",
      winner: null,
      maxPlayer: "X",
      minPlayer: "O"
    });
  };

  winner = (board, player) => {
    if (
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
      this.clearBoard();
    }
  };

  tie = board => {
    let moves = board.join("").replace(/ /g, "");
    if (moves.length === 9) {
      return true;
    } else {
      return false;
    }
  };

  copyBoard = board => {
    return board.slice(0);
  };

  validMove = (move, player, board,) => {
    if(this.winner(board, player)) {
      return;
    }

    let newBoard = this.copyBoard(board);
    if (newBoard[move] === " ") {
      newBoard[move] = player;
      return newBoard;
    } else {
      return;
    }
  };

  findMove = board => {
    let bestMoveScore = 100;
    let move = null;

    if (this.winner(board, "X") || this.winner(board, "O") || this.tie(board)) {
      return null;
    }

    //iterates through the whole board and finds all valid moves
    //saves scores that are better than the bestMoveScore
    for (let i = 0; i < board.length; i++) {
      //check every possible AI move and check if valid
      // if yes, return the board and call the function again on the board if it's vaild
      let newBoard = this.validMove(i, this.state.minPlayer, board);
      if (newBoard) {
        //assign a move score which needs to be the maximum of all positions

        let moveScore = this.maxScore(newBoard);
        if (moveScore < bestMoveScore) {
          bestMoveScore = moveScore;
          move = i;
        }
      }
    }
    return move;
  };

  minScore = board => {
    if (this.winner(board, "X")) {
      return 10;
    } else if (this.winner(board, "O")) {
      return -10;
    } else if (this.tie(board)) {
      return 0;
    } else {
      let bestMoveValue = 100;
      for (let i = 0; i < board.length; i++) {
        let newBoard = this.validMove(i, this.state.minPlayer, board);
        if (newBoard) {
          let predictedMoveValue = this.maxScore(newBoard);
          if (predictedMoveValue < bestMoveValue) {
            bestMoveValue = predictedMoveValue;
          }
        }
      }
      return bestMoveValue;
    }
  };

  maxScore = board => {
    if (this.winner(board, "X")) {
      return 10;
    } else if (this.winner(board, "O")) {
      return -10;
    } else if (this.tie(board)) {
      return 0;
    } else {
      let bestMoveValue = -100;
      for (let i = 0; i < board.length; i++) {
        let newBoard = this.validMove(i, this.state.maxPlayer, board);
        if (newBoard) {
          let predictedMoveValue = this.minScore(newBoard);
          if (predictedMoveValue > bestMoveValue) {
            bestMoveValue = predictedMoveValue;
          }
        }
      }
      return bestMoveValue;
    }
  };

  gameLoop = move => {
    let player = this.state.turn;
    let currentBoard = this.validMove(move, player, this.state.board);
    if (this.winner(currentBoard, player)) {
      this.setState({
        board: currentBoard,
        winner: player
      });
      return;
    }

    if (this.tie(currentBoard)) {
      this.setState({
        board: currentBoard,
        winner: "Tie"
      });
      return;
    }

    player = "O";
    currentBoard = this.validMove(
      this.findMove(currentBoard),
      player,
      currentBoard
    );

    if (this.winner(currentBoard, player)) {
      this.setState({
        board: currentBoard,
        winner: player
      });
      return;
    }

    if (this.tie(currentBoard)) {
      this.setState({
        board: currentBoard,
        winner: "Tie"
      });
      return;
    }

    this.setState({
      board: currentBoard
    });
  };

  calculateScore = (winner, board) => {
    if (winner === "X") {
      this.setState({
        userWins: this.state.userWins +1,
        userLosses: this.state.userLosses,
        computerWins: this.state.computerWins,
        computerLosses: this.state.computerLosses +1
      })
    } else if (winner === "O") {
      this.setState({
        userWins: this.state.userWins,
        userLosses: this.state.userLosses +1,
        computerWins: this.state.computerWins +1,
        computerLosses: this.state.computerLosses
      })
    } 
  };

  render() {
    return (
      <div>
        <div className="menu">
          <h1>Tic-Tac-Toe</h1>
          <Status winner={this.state.winner} />
          <NewGame clearBoard={this.clearBoard} />
          <Score winner={this.state.winner} calculateScore={this.calculateScore} userWins={this.state.userWins} computerWins={this.state.computerWins} userLosses={this.state.userLosses} computerLosses={this.state.computerLosses} />
        </div>
        {this.state.board.map((value, index) => {
          return (
            <Square
              key={index}
              location={index}
              value={value}
              gameLoop={this.gameLoop}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
