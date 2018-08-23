import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import UserModal from "./UserModal";
import { Container, Head, Title, Close } from "../../../UI/TitlePopup";

const Count = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 25em;
  position: absolute;
  left: -4px;
  user-select: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ContainerCount = styled(Container)`
  left: 0;
  min-height: 100px;
`;

const Body = styled.div`
  margin: 10px;
`;

const UserPreview = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: grey;
  cursor: pointer;
`;

const Users = styled.div``;

class CountUsers extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      preview: null,
      currentUser: null
    };
  }

  setUserMenu = user => {
    this.setState({ currentUser: user });
    this.toggleUserMenu();
  };

  toggleListUsers = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      preview: false
    }));
  };

  toggleUserMenu = () => {
    this.setState(prevState => ({ preview: !prevState.preview }));
  };

  handleClickOutside = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive, preview, currentUser } = this.state;
    const { users } = this.props;
    return (
      <div>
        <Count onClick={this.toggleListUsers}>{users.length}</Count>
        {isActive ? (
          <ContainerCount>
            <Head>
              <Title>Участники доски</Title>
              <Close onClick={this.toggleListUsers}>
                <i className="fas fa-times close" />{" "}
              </Close>
            </Head>
            <Body>
              <Users>
                {users.map(user => (
                  <UserPreview
                    src={user.picture}
                    onClick={() => this.setUserMenu(user)}
                    key={user.id}
                  />
                ))}
              </Users>
            </Body>
            {preview ? (
              <UserModal
                img={currentUser.picture}
                data={currentUser}
                preview={preview}
                close={this.toggleUserMenu}
                countUser
              />
            ) : null}
          </ContainerCount>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(CountUsers);
