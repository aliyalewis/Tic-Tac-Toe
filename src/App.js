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
    ]
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
           return <Square />
        })}
      </div>
    );
  }
  
}

export default App;
