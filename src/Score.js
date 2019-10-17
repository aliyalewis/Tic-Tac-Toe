import React, { Component } from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

class Score extends Component {

    render() {
        return (
          <div className="score">
            <button className="score-button"
              onClick={() => this.props.calculateScore(this.props.winner)}
            >
              Update Score!
            </button>
            <h3 className="userScore">User Score:</h3>
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