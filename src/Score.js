import React, { Component } from "react";

class Score extends Component {

    render() {
        return (
          <div>
            <button
              onClick={() => this.props.calculateScore(this.props.winner)}
            >
              See Score!
            </button>
            <h3>User Score:</h3>
            <p>Wins: {this.props.userWins}</p>
            <p>Losses: {this.props.userLosses}</p>
            {console.log(this.props.userWins, this.props.userLosses)}
          </div>
        );
    }
}

export default Score;