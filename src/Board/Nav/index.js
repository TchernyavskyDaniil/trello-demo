import React, { Component } from "react";
import styled from "styled-components";
import Boards from "./Boards";
import Search from "./Search";

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

const BoardsBtn = styled.button`
  transition: 0.1s ease;
  background: hsla(0, 0%, 100%, 0.3);
  border-radius: 3px;
  font-weight: 400;
  line-height: 32px;
  margin-right: 8px;
  min-width: 32px;
  user-select: none;
  color: white;
  cursor: pointer;
  height: 32px;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  .icon-board {
    padding-right: 10px;
  }
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

const ActionsBoard = styled(OptionsBoard)``;

const Add = styled(BoardsBtn)``;

const Info = styled(BoardsBtn)``;

const Notification = styled(BoardsBtn)``;

const User = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 25em;
  cursor: pointer;
`;

class Nav extends Component {
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
      <Container>
        <OptionsBoard>
          <BoardsBtn onClick={this.toggleBoard}>
            <i className="fas fa-clipboard-list icon-board" />
            Доски{" "}
          </BoardsBtn>
          {board ? <Boards /> : null}
          <Search />
        </OptionsBoard>
        <Img src="/img/trello-logo.png" />
        <ActionsBoard>
          <Add>
            <i className="fas fa-plus" />
          </Add>
          <Info>
            <i className="fas fa-info" />
          </Info>
          <Notification>
            <i className="far fa-bell" />
          </Notification>
          <User src="/img/profile-avatar.png" />
        </ActionsBoard>
      </Container>
    );
  }
}

export default Nav;
