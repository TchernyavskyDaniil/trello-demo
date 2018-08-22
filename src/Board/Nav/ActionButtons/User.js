import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import {
  Container,
  Head,
  Title,
  Close,
  Action,
  Actions,
  ActionTitle
} from "../../../UI/TitlePopup";

const Avatar = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 25em;
  cursor: pointer;
  user-select: none;
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
      isActiveUser: false
    };
  }

  handleClickOutside = () => {
    this.setState({ isActiveUser: false });
  };

  toggleUser = () => {
    this.setState(prevState => ({ isActiveUser: !prevState.isActiveUser }));
  };

  render() {
    const { isActiveUser } = this.state;
    return (
      <div>
        <Avatar src="/img/profile-avatar.png" onClick={this.toggleUser} />
        {isActiveUser ? (
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

export default onClickOutside(User);
