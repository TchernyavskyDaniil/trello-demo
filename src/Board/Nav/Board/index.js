import React, { Component } from "react";
import OptionBtn from "../OptionBtn";
import PopUp from "./PopUpBoard";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: false
    };
  }

  toggleBoard = () => {
    this.setState(prevState => ({ board: !prevState.board }));
  };

  render() {
    const { board } = this.state;
    return (
      <React.Fragment>
        <OptionBtn onClick={this.toggleBoard}>
          <i className="fas fa-clipboard-list icon-board" />
          Доски{" "}
        </OptionBtn>
        <PopUp outside={board} />
      </React.Fragment>
    );
  }
}

export default Board;
