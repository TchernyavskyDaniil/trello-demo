import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Container,
  Head,
  Title,
  Close,
  Action,
  Actions,
  ActionTitle
} from "./Styled";

const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 25em;
  cursor: pointer;
`;

const UserContainer = styled(Container)`
  min-width: 300px;
  min-height: 270px;
`;

const ActionUser = styled(Action)`
  &:nth-child(3n) {
    padding-bottom: 10px;
    border-bottom: 1px solid #d6dadc;
  }
`;

const UserLink = styled(Link)`
  text-decoration: none;
`;

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: false
    };
  }

  toggleUser = () => {
    const { user } = this.state;
    if (!user) {
      document.addEventListener("click", this.handleClick, false);
    } else {
      document.removeEventListener("click", this.handleClick, false);
    }

    this.setState(prevState => ({ user: !prevState.user }));
  };

  handleClick = e => {
    if (this.node === null) {
      return null;
    }

    if (this.node.contains(e.target)) {
      return null;
    }

    return this.toggleUser();
  };

  render() {
    const { user } = this.state;
    return (
      <div
        ref={node => {
          this.node = node;
        }}
      >
        <Avatar src="/img/profile-avatar.png" onClick={this.toggleUser} />
        {user ? (
          <UserContainer>
            <Head>
              <Title> Name your profile here </Title>
              <Close onClick={this.toggleUser}>
                {" "}
                <i className="fas fa-times close" />
              </Close>
            </Head>
            <Actions>
              <ActionUser>
                <UserLink to="/profile">
                  <ActionTitle>Профиль</ActionTitle>
                </UserLink>
              </ActionUser>
              <ActionUser>
                <UserLink to="/cards">
                  <ActionTitle>Карточки</ActionTitle>
                </UserLink>
              </ActionUser>
              <ActionUser>
                <UserLink to="/settings">
                  <ActionTitle>Настройки</ActionTitle>
                </UserLink>
              </ActionUser>
              <ActionUser>
                <UserLink to="/help">
                  <ActionTitle>Помощь</ActionTitle>
                </UserLink>
              </ActionUser>
              <ActionUser>
                <UserLink to="/hotkeys">
                  <ActionTitle>Горячие клавиши</ActionTitle>
                </UserLink>
              </ActionUser>
              <ActionUser>
                <UserLink to="/languages">
                  <ActionTitle>Сменить язык ...</ActionTitle>
                </UserLink>
              </ActionUser>
              <ActionUser>
                <UserLink to="/exit">
                  <ActionTitle>Выйти</ActionTitle>
                </UserLink>
              </ActionUser>
            </Actions>
          </UserContainer>
        ) : null}
      </div>
    );
  }
}

export default User;
