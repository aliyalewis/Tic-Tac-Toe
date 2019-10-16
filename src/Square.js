import React, { Component } from "react";
import "./Square.css";

class Square extends Component {

    handleClick = (props) => {
        props.updateBoard(props.location);
    }

    render() {
        return (
            <div className="square" onClick={() => this.handleClick(this.props)}>
                <p>{this.props.value}</p>
            </div>
        )
    }
}

export default Square; 