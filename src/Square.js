import React, { Component } from "react";
import "./Square.css";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

class Square extends Component {

    handleClick = (props, value) => {
        console.log(value)
        props.gameLoop(props.location);
    }

    render() {
        return (
          <div
            className="square"
            onClick={() => this.handleClick(this.props, this.props.value)}
          >
            <p>
              {this.props.value}
              {console.log(this.props.value)}
            </p>
          </div>
        );
    }
}

export default Square; 