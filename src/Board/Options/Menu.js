import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import {
  Close,
  Title,
  Head,
  Container,
  ActionTitle,
  Action,
  Actions
} from "../../UI/TitlePopup";
import Hr from "../../UI/Hr";

const PopUpContainer = styled(Container)`
  min-height: 350px;
  min-width: 310px;
  top: -5px;
  right: -5px;
`;

const MenuContainer = styled.div`
  margin: 0 0 0 auto;
  position: relative;
`;

const BtnMenu = styled.button`
  transition: 0.1s ease;
  border-radius: 4px;
  border-color: transparent;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  min-width: 90px;
  justify-content: space-around;
  margin: 0;
  min-height: 40px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const TitleMenu = styled(Title)`
  color: #333;
  line-height: 20px;
  padding: 14px 32px 12px;
  font-size: 16px;
  font-weight: 600;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Text = styled.span`
  color: rgba(0, 0, 0, 0.7);
`;

const MenuActions = styled(Actions)`
  padding: 8px;
`;

const MenuAction = styled(Action)`
  border-radius: 4px;
  margin: 0;
  padding: 8px;
  &:hover {
    background-color: #d6dadc;
    ${ActionTitle} {
      color: #111;
    }
  }
`;

const Body = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 500px;
`;

const MenuHr = styled(Hr)`
  margin: 5px 12px;
`;

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  handleClickOutside = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive } = this.state;
    return (
      <MenuContainer>
        <BtnMenu onClick={this.toggleMenu}>
          <i className="fas fa-ellipsis-h dot" />
          <Text>Меню</Text>
        </BtnMenu>
        {isActive ? (
          <PopUpContainer>
            <Head>
              <TitleMenu>Меню</TitleMenu>
              <Close onClick={this.toggleMenu}>
                <i className="fas fa-times close" />{" "}
              </Close>
            </Head>
            <Body>
              <MenuActions>
                <MenuAction>
                  <ActionTitle> Сменить фон </ActionTitle>
                </MenuAction>
                <MenuAction>
                  <ActionTitle> Фильтр карточек </ActionTitle>
                </MenuAction>
                <MenuAction>
                  <ActionTitle> Улучшения </ActionTitle>
                </MenuAction>
                <MenuAction>
                  <ActionTitle> Стикеры </ActionTitle>
                </MenuAction>
                <MenuAction>
                  <ActionTitle> Еще </ActionTitle>
                </MenuAction>
              </MenuActions>
              <MenuHr />
            </Body>
          </PopUpContainer>
        ) : null}
      </MenuContainer>
    );
  }
}

export default onClickOutside(Menu);
