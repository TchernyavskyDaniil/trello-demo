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

class CountUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: false,
      preview: null
    };
  }

  getListUsers = () => {
    this.setState(prevState => ({ users: !prevState.users, preview: false }));
  };

  getUserMenu = () => {
    this.setState(prevState => ({ preview: !prevState.preview }));
  };

  handleClickOutside = () => {
    this.setState({ users: false });
  };

  render() {
    const { users, preview } = this.state;
    const { img } = this.props;
    return (
      <div>
        <Count onClick={this.getListUsers}>1</Count>
        {users ? (
          <ContainerCount>
            <Head>
              <Title>Участники доски</Title>
              <Close onClick={this.getListUsers}>
                <i className="fas fa-times close" />{" "}
              </Close>
            </Head>
            <Body>
              <UserPreview src={img} onClick={this.getUserMenu} />
            </Body>
            {preview ? (
              <UserModal
                img={img}
                preview={preview}
                close={this.getUserMenu}
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
