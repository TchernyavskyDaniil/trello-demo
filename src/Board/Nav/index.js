import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Boards from "./Boards";
import Search from "./Search";
import OptionBtn from "./OptionBtn";
import ActionButtons from "./ActionButtons";

const Container = styled.nav`
  min-height: 40px;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OptionsBoard = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 10px 5px 10px;
`;

const Img = styled.img`
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 80px 30px;
  height: 30px;
  width: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    opacity: 0.8;
  }
`;

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      board: false
    };
  }

  toggleBoard = () => {
    const { board } = this.state;
    if (!board) {
      document.addEventListener("click", this.handleClick, false);
    } else {
      document.removeEventListener("click", this.handleClick, false);
    }

    this.setState(prevState => ({ board: !prevState.board }));
  };

  handleClick = e => {
    if (this.node === null) {
      return null;
    }

    if (this.node.contains(e.target)) {
      return null;
    }

    return this.toggleBoard();
  };

  render() {
    const { board } = this.state;
    return (
      <Container>
        <OptionsBoard>
          <div
            ref={node => {
              this.node = node;
            }}
          >
            <OptionBtn onClick={this.toggleBoard}>
              <i className="fas fa-clipboard-list icon-board" />
              Доски{" "}
            </OptionBtn>
            {board ? <Boards /> : null}
          </div>
          <Search />
        </OptionsBoard>
        <Link to="/">
          <Img src="/img/trello-logo.png" />
        </Link>
        <ActionButtons />
      </Container>
    );
  }
}

export default Nav;
