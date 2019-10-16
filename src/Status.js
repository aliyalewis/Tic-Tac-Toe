import React, { Component } from "react";
import "./Status.css"

class Status extends Component {
    render() {
        return(
            <div className={this.props.winner ? "visible" : "hidden"}>
                <h2>Game Status:</h2>
            </div>
        )
    }

}

export default Status;