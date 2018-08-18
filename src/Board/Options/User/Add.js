import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { Container, Head, Title, Close } from "../../../UI/TitlePopup";
import Input from "../../../UI/Input";
import Hr from "../../../UI/Hr";

const AddUser = styled.div`
  position: relative;
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
  left: -4px;

  .add {
    font-size: 12px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Body = styled.div`
  margin: 10px;
`;

const SearchInput = styled(Input)`
  margin: 0 0 15px 0;
  width: 94%;
`;

const AddContainer = styled(Container)`
  min-height: 250px;
  min-width: 300px;
  left: 0;
`;

const Desc = styled.p`
  margin: 0;
  color: #8c8c8c;
  font-size: 14px;
  line-height: 16px;
`;

const InviteLink = styled.button`
  user-select: none;
  border-radius: 3px;
  color: #8c8c8c;
  display: block;
  width: 100%;
  border-color: transparent;
  padding: 6px 12px;
  cursor: pointer;

  &:hover {
    background-color: #d6dadc;
    color: #444;
  }
`;

const AddHr = styled(Hr)`
  margin: 13px 0;
`;

class Add extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  getModal = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  handleClickOutside = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive } = this.state;
    return (
      <div>
        <AddUser onClick={this.getModal}>
          <i className="fas fa-user-plus add" />
        </AddUser>
        {isActive ? (
          <AddContainer>
            <Head>
              <Title>Добавить участников</Title>
              <Close onClick={this.getModal}>
                <i className="fas fa-times close" />{" "}
              </Close>
            </Head>
            <Body>
              <SearchInput placeholder="Например, taco@mail.ru" />
              <Desc>
                Найдите человека в Trello по имени или адресу электронной почты
                или введите адрес электронной почты, чтобы добавить кого-то
                нового.
              </Desc>
              <AddHr />
              <InviteLink>Пригласить с помощью ссылки ...</InviteLink>
              <AddHr />
            </Body>
          </AddContainer>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(Add);
