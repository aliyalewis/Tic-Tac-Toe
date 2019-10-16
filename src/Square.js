import React, { Component } from "react";

class Square extends Component {

    handleClick = (props) => {
        props.updateBoard(props.location, props.turn);
    }

    render() {
        return (
            <div onClick={() => this.handleClick(this.props)}>
                <p>{this.props.value}</p>
            </div>
        )
    }
}

export default Square; 