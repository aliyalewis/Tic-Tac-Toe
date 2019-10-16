import React, { Component } from "react";

class Score extends Component {

    render() {
        return (
          <div>
            <button
              onClick={() => this.props.calculateScore(this.props.winner)}
            >
              Update Score!
            </button>
            <h3>User Score:</h3>
            <p>Wins: {this.props.userWins}</p>
            <p>Losses: {this.props.userLosses}</p>
            <h3>Computer Score:</h3>
            <p>Wins: {this.props.computerWins}</p>
            <p>Losses: {this.props.computerLosses}</p>
          </div>
        );
    }
}

export default Score;