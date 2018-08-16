import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import {
  Container,
  Head,
  Title,
  Close,
  Actions,
  ActionTitle,
  Action,
  Text
} from "../../UI/TitlePopup";
import Input from "../../UI/Input";
import Submit from "../../UI/Submit";

const ListUsers = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const User = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 25em;
  list-style: none;
`;

const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 25em;
`;

const ContainerUsers = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserWrapper = styled.div`
  min-width: 30px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
  position: relative;
`;

const PreviewContainer = styled(Container)`
  min-height: 180px;
  left: 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 6px 0;
  justify-content: space-between;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 52px;
  max-width: 100%;
  height: 52px;
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameWrapper = styled.h3`
  margin: 0;
`;

const Name = styled(Link)`
  text-decoration: none;
  color: #444;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`;

const Hash = styled.span`
  line-height: 16px;
  color: #8c8c8c;
  padding: 2px 0;
  max-width: 170px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Change = styled.button`
  color: #8c8c8c;
  border: none;
  background: none;
  text-align: left;
  padding: 5px 0;
  cursor: pointer;
  width: 80%;

  &:hover {
    color: #444;
  }
`;

const CloseBtn = styled(Close)`
  height: 26px;
  width: 26px;
  top: 11px;
  right: 5px;
`;

const Body = styled.div``;

const BodyInputs = styled(Body)`
  margin: 0 12px;
`;

const Back = styled(Close)`
  left: 0;
`;

const CloseInfo = styled(Close)`
  right: 0;
`;

const UserEdit = styled(Container)`
  min-height: 500px;
  top: 0;
  border: 1px solid #d6dadc;
  border-bottom-color: #c4c9cc;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
  z-index: 100;
`;

const RootContainer = styled(Container)`
  min-height: 260px;
  top: 0;
  z-index: 100;
`;

const AboutYou = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  padding: 0;
  color: #8c8c8c;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const InputEdit = styled(Input)`
  margin: 0;
  width: 95%;
`;

const AboutYouArea = styled.textarea`
  width: 95%;
  margin: 0;
  padding: 6px;
  background-color: #e2e4e6;
  border: 1px solid #a5acb0;
  border-radius: 3px;
  font-size: 16px;
  line-height: 20px;

  &:hover {
    border-color: #a5acb0;
  }

  &:focus {
    outline: none;
    background: #fff;
    border-color: #298fca;
    box-shadow: 0 0 2px #298fca;
  }
`;

const Desc = styled.div`
  margin: 0 12px 6px 12px;
`;

const Hr = styled.hr`
  margin: 16px 12px;
  background: #d6dadc;
  border: 0;
  color: #d6dadc;
  height: 1px;
  padding: 0;
`;

const DescText = styled.p`
  margin: 0;
  padding: 0;
  color: #8c8c8c;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;

class UserPreview extends Component {
  constructor() {
    super();
    this.state = {
      userPreview: false,
      userInfo: false,
      name: "Daniil Tchernyavsky",
      desc: "DT",
      nickname: "daniiltchernyavsky",
      aboutYou: "123",
      newName: null,
      newDesc: null,
      newNick: null,
      newAbout: null,
      checkRoot: false
    };
  }

  componentDidMount() {
    const { name, desc, nickname, aboutYou } = this.state;
    this.setState({
      newName: name,
      newDesc: desc,
      newNick: nickname,
      newAbout: aboutYou
    });
  }

  getNewData = () => {
    const { newName, newDesc, newNick, newAbout } = this.state;
    this.setState({
      name: newName,
      desc: newDesc,
      nickname: newNick,
      aboutYou: newAbout,
      userInfo: false
    });
  };

  getNewName = event => {
    this.setState({ newName: event.target.value });
  };

  getNewDesc = event => {
    this.setState({ newDesc: event.target.value });
  };

  getNewNick = event => {
    this.setState({ newNick: event.target.value });
  };

  getNewAbout = event => {
    this.setState({ newAbout: event.target.value });
  };

  getRootUser = () => {
    this.setState(prevState => ({ checkRoot: !prevState.checkRoot }));
  };

  closePreview = () => {
    this.setState({ userPreview: false, userInfo: false });
  };

  closeRootPreview = () => {
    this.setState({ checkRoot: false, userPreview: false });
  };

  changeUserInfo = () => {
    this.setState(prevState => ({ userInfo: !prevState.userInfo }));
  };

  handleClickOutside = () => {
    this.setState({ userPreview: false });
  };

  showPreview = () => {
    this.setState(prevState => ({ userPreview: !prevState.userPreview }));
  };

  render() {
    const {
      userPreview,
      userInfo,
      name,
      desc,
      nickname,
      aboutYou,
      checkRoot
    } = this.state;
    return (
      <UserWrapper>
        <ContainerUsers>
          <ListUsers>
            <User onClick={this.showPreview}>
              <UserImage src="/img/profile-avatar.png" />
            </User>
            {userPreview ? (
              <PreviewContainer>
                <UserInfo>
                  <Avatar src="/img/profile-avatar.png" />
                  <ContainerInfo>
                    <NameWrapper>
                      <Name to="/tchernyavsky"> {name} </Name>
                      <CloseBtn onClick={this.showPreview}>
                        <i className="fas fa-times close" />{" "}
                      </CloseBtn>
                    </NameWrapper>
                    <Hash> {nickname} </Hash>
                    <AboutYou> {aboutYou} </AboutYou>
                    <Change onClick={this.changeUserInfo}>
                      {" "}
                      Изменить информацию профиля{" "}
                    </Change>
                    {userInfo ? (
                      <UserEdit>
                        <Head>
                          <Back onClick={this.changeUserInfo}>
                            {" "}
                            <i className="fas fa-arrow-left back" />{" "}
                          </Back>
                          <Title>Изменение информации</Title>
                          <CloseInfo onClick={this.closePreview}>
                            <i className="fas fa-times close" />{" "}
                          </CloseInfo>
                        </Head>
                        <BodyInputs>
                          <InputContainer>
                            <Text>Полное имя</Text>
                            <InputEdit
                              defaultValue={name}
                              onChange={this.getNewName}
                            />
                          </InputContainer>
                          <InputContainer>
                            <Text>Инициалы</Text>
                            <InputEdit
                              defaultValue={desc}
                              onChange={this.getNewDesc}
                            />
                          </InputContainer>
                          <InputContainer>
                            <Text>Имя пользователя</Text>
                            <InputEdit
                              defaultValue={nickname}
                              onChange={this.getNewNick}
                            />
                          </InputContainer>
                          <InputContainer>
                            <Text>О себе</Text>
                            <AboutYouArea
                              defaultValue={aboutYou}
                              onChange={this.getNewAbout}
                            />
                          </InputContainer>
                          <Submit onClick={this.getNewData}> Сохранить </Submit>
                        </BodyInputs>
                        <Hr />
                        <Desc>
                          <DescText>
                            Инициалы используются в качестве аватара, если он не
                            установлен. Имя пользователя должно содержать
                            минимум 3 символа (только буквы и цифры).
                          </DescText>
                        </Desc>
                      </UserEdit>
                    ) : null}
                  </ContainerInfo>
                </UserInfo>
                <Body>
                  <Actions>
                    <Action onClick={this.getRootUser}>
                      <ActionTitle>Изменить разрешения ...</ActionTitle>
                      <Text>(Администратор)</Text>
                    </Action>
                    <Action>
                      <ActionTitle>Посмотреть действия на доске</ActionTitle>
                    </Action>
                  </Actions>
                  {checkRoot ? (
                    <RootContainer>
                      <Head>
                        <Back onClick={this.getRootUser}>
                          {" "}
                          <i className="fas fa-arrow-left back" />{" "}
                        </Back>
                        <Title>Изменение прав доступа</Title>
                        <CloseInfo onClick={this.closeRootPreview}>
                          <i className="fas fa-times close" />{" "}
                        </CloseInfo>
                      </Head>
                      <Body>
                        <Actions>
                          <Action>
                            <ActionTitle> Администратор </ActionTitle>
                            <Text>
                              Может просматривать и изменять карточки, удалять
                              участников и изменять все настройки доски.
                            </Text>
                          </Action>
                          <Action>
                            <ActionTitle> Обычный </ActionTitle>
                            <Text>
                              Может просматривать и изменять карточки. Может
                              изменять некоторые настройки.
                            </Text>
                          </Action>
                        </Actions>
                        <Hr />
                        <Desc>
                          <DescText>
                            Вы не можете поменять статус, так как необходим
                            минимум один администратор.
                          </DescText>
                        </Desc>
                      </Body>
                    </RootContainer>
                  ) : null}
                </Body>
              </PreviewContainer>
            ) : null}
          </ListUsers>
        </ContainerUsers>
      </UserWrapper>
    );
  }
}

export default onClickOutside(UserPreview);
