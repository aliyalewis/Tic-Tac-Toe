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
    turn: "X"
  }

  updateBaord = (location, turn) => {

  }

  render() {
    return (
      <div>
        <div className="menu">
          <h1>Tic-Tac-Toe</h1>
          <Status />
          <NewGame />
        </div>
        {this.state.board.map((value, index )=> {
           return <Square key={index} location={index} value={value} updateBoard={this.updateBoard} turn={this.state.turn} />
        })}
      </div>
    );
  }
  
}

export default App;
