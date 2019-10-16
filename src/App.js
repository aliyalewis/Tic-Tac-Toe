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
    winner: null
  }

  updateBaord = (location) => {
    if(this.state.board[location] === 'X' || this.state.board[location] === "O") {
      return 
    }

    let firstRow = this.state.board[0] + this.state.board[1] + this.state.board[2];
    if(firstRow.match(/XXX | OOO/)) {
      this.setState({
        winner: this.state.turn
      });
      return
    }

    let secondRow = this.state.board[3] + this.state.board[4] + this.state.board[5];
     if (secondRow.match(/XXX | OOO/)) {
       this.setState({
         winner: this.state.turn
       });
       return;
     }

    let thirdRow = this.state.board[6] + this.state.board[7] + this.state.board[8];
     if (third.match(/XXX | OOO/)) {
       this.setState({
         winner: this.state.turn
       });
       return;
     }

     let firstColumn = this.state.board[0] + this.state.board[3] + this.state.board[6];
      if (firstColumn.match(/XXX | OOO/)) {
        this.setState({
          winner: this.state.turn
        });
        return;
      }

       let secondColumn = this.state.board[1] + this.state.board[4] + this.state.board[7];
       if (secondColumn.match(/XXX | OOO/)) {
         this.setState({
           winner: this.state.turn
         });
         return;
       }

        let thirdColumn = this.state.board[2] + this.state.board[5] + this.state.board[8];
        if (thirdColumn.match(/XXX | OOO/)) {
          this.setState({
            winner: this.state.turn
          });
          return;
        }

        let leftRight = this.state.board[0] + this.state.board[4] + this.state.board[8];
        if (leftRight.match(/XXX | OOO/)) {
          this.setState({
            winner: this.state.turn
          });
        }

        let rightLeft = this.state.board[2] + this.state.board[4] + this.state.board[6];
        if (leftRight.match(/XXX | OOO/)) {
          this.setState({
            winner: this.state.turn
          });
        }

  }

  clearBoard = () => {
    this.setState({
      board: [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " "
      ],
      turn: "X",
      winner: null
    });
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
