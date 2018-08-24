import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { Link } from "react-router-dom";
import onClickOutside from "react-onclickoutside";
import axios from "../../../axios";
import {
  Container,
  Head,
  Title,
  Close,
  Actions,
  ActionTitle,
  Action,
  Text
} from "../../../UI/TitlePopup";
import Input from "../../../UI/Input";
import Submit from "../../../UI/Submit";
import Hr from "../../../UI/Hr";

const PreviewContainer = styled(Container)`
  min-height: 180px;
  left: 0;
  top: ${styledMap({
    default: "initial",
    countUser: "0"
  })};
  z-index: 100;
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
  max-width: 200px;
  display: inline-block;
  white-space: nowrap;
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
  max-width: 210px;
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

const DescText = styled.p`
  margin: 0;
  padding: 0;
  color: #8c8c8c;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
`;

class UserModal extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: false,
      name: "Daniil Tchernyavsky",
      desc: "DT",
      nickname: "daniiltchernyavsky",
      aboutYou: "123",
      newName: null,
      newDesc: null,
      newNick: null,
      newAbout: null,
      isActiveRoot: false,
      isActivePreview: true,
      isAdmin: false
    };
  }

  componentDidMount() {
    this.setUserData();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.preview) {
      this.setNewState(true);
    } else {
      this.setNewState(nextProps.preview);
    }
  }

  setUserData = () => {
    const { data } = this.props;
    this.setState({
      name: data.name,
      desc: data.desc,
      nickname: data.nickName,
      aboutYou: data.about
    });

    if (data.accessLevel === "admin") {
      this.setState({ isAdmin: true });
    }
  };

  setNewState = prop => {
    this.setState({ isActivePreview: prop });
  };

  setNewName = event => {
    this.setState({ newName: event.target.value });
  };

  setNewDesc = event => {
    this.setState({ newDesc: event.target.value });
  };

  setNewNick = event => {
    this.setState({ newNick: event.target.value });
  };

  setNewAbout = event => {
    this.setState({ newAbout: event.target.value });
  };

  saveNewData = async () => {
    const { newName, newDesc, newNick, newAbout } = this.state;
    const { data, updateData } = this.props;

    await axios.patch(`/profiles/${data.id}`, {
      name: newName,
      desc: newDesc,
      nickName: newNick,
      about: newAbout
    });

    await this.setState({
      userInfo: false,
      name: newName,
      desc: newDesc,
      nickname: newNick,
      aboutYou: newAbout
    });

    await updateData();
  };

  togglePreviewUser = () => {
    this.setState(prevState => ({
      isActivePreview: !prevState.isActivePreview
    }));
    this.closeParent();
  };

  changeUserInfo = () => {
    const { name, desc, nickname, aboutYou } = this.state;
    this.setState(prevState => ({
      userInfo: !prevState.userInfo,
      newName: name,
      newDesc: desc,
      newNick: nickname,
      newAbout: aboutYou
    }));
  };

  toggleRootModal = () => {
    this.setState(prevState => ({ isActiveRoot: !prevState.isActiveRoot }));
  };

  handleClickOutside = () => {
    this.setState({ isActivePreview: false });
    this.closeParent();
  };

  closeParent = () => {
    const { close } = this.props;
    if (close) {
      close();
    }
  };

  changeRootUser = async bool => {
    const { data, updateData } = this.props;
    let isAdmin;

    if (bool) {
      this.setState({ isAdmin: true, isActiveRoot: false });
      isAdmin = "admin";
    } else {
      this.setState({ isAdmin: false, isActiveRoot: false });
      isAdmin = "user";
    }

    await axios.patch(`/profiles/${data.id}`, {
      accessLevel: isAdmin
    });

    await updateData();
  };

  render() {
    const {
      userInfo,
      name,
      desc,
      nickname,
      aboutYou,
      isActiveRoot,
      isActivePreview,
      isAdmin
    } = this.state;
    const { img, countUser } = this.props;
    return (
      <div>
        {isActivePreview ? (
          <PreviewContainer countUser={countUser}>
            <UserInfo>
              <Avatar src={img} />
              <ContainerInfo>
                <NameWrapper>
                  <Name to="/tchernyavsky"> {name} </Name>
                  <CloseBtn onClick={this.togglePreviewUser}>
                    <i className="fas fa-times close" />{" "}
                  </CloseBtn>
                </NameWrapper>
                <Hash> @{nickname} </Hash>
                <AboutYou> {aboutYou} </AboutYou>
                <Change onClick={this.changeUserInfo}>
                  {" "}
                  Изменить информацию профиля{" "}
                </Change>
                {userInfo ? (
                  <UserEdit>
                    <Head>
                      <Title>Изменение информации</Title>
                      <CloseInfo onClick={this.changeUserInfo}>
                        <i className="fas fa-times close" />{" "}
                      </CloseInfo>
                    </Head>
                    <BodyInputs>
                      <InputContainer>
                        <Text>Полное имя</Text>
                        <InputEdit
                          defaultValue={name}
                          onChange={this.setNewName}
                        />
                      </InputContainer>
                      <InputContainer>
                        <Text>Инициалы</Text>
                        <InputEdit
                          defaultValue={desc}
                          onChange={this.setNewDesc}
                        />
                      </InputContainer>
                      <InputContainer>
                        <Text>Имя пользователя</Text>
                        <InputEdit
                          defaultValue={nickname}
                          onChange={this.setNewNick}
                        />
                      </InputContainer>
                      <InputContainer>
                        <Text>О себе</Text>
                        <AboutYouArea
                          defaultValue={aboutYou}
                          onChange={this.setNewAbout}
                        />
                      </InputContainer>
                      <Submit onClick={this.saveNewData}> Сохранить </Submit>
                    </BodyInputs>
                    <Hr />
                    <Desc>
                      <DescText>
                        Инициалы используются в качестве аватара, если он не
                        установлен. Имя пользователя должно содержать минимум 3
                        символа (только буквы и цифры).
                      </DescText>
                    </Desc>
                  </UserEdit>
                ) : null}
              </ContainerInfo>
            </UserInfo>
            <Body>
              <Actions>
                <Action onClick={this.toggleRootModal}>
                  <ActionTitle>Изменить разрешения ...</ActionTitle>
                  <Text>{isAdmin ? "(Администратор)" : "(Обычный)"}</Text>
                </Action>
                <Action>
                  <ActionTitle>Посмотреть действия на доске</ActionTitle>
                </Action>
              </Actions>
              {isActiveRoot ? (
                <RootContainer>
                  <Head>
                    <Title>Изменение прав доступа</Title>
                    <CloseInfo onClick={this.toggleRootModal}>
                      <i className="fas fa-times close" />{" "}
                    </CloseInfo>
                  </Head>
                  <Body>
                    <Actions>
                      {isAdmin ? (
                        <React.Fragment>
                          <Action onClick={() => this.changeRootUser(true)}>
                            <ActionTitle>
                              {" "}
                              Администратор <i className="fas fa-check check" />{" "}
                            </ActionTitle>
                            <Text>
                              Может просматривать и изменять карточки, удалять
                              участников и изменять все настройки доски.
                            </Text>
                          </Action>
                          <Action onClick={() => this.changeRootUser(false)}>
                            <ActionTitle> Обычный </ActionTitle>
                            <Text>
                              Может просматривать и изменять карточки. Может
                              изменять некоторые настройки.
                            </Text>
                          </Action>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          {" "}
                          <Action onClick={() => this.changeRootUser(true)}>
                            <ActionTitle> Администратор </ActionTitle>
                            <Text>
                              Может просматривать и изменять карточки, удалять
                              участников и изменять все настройки доски.
                            </Text>
                          </Action>
                          <Action onClick={() => this.changeRootUser(false)}>
                            <ActionTitle>
                              {" "}
                              Обычный <i className="fas fa-check check" />{" "}
                            </ActionTitle>
                            <Text>
                              Может просматривать и изменять карточки. Может
                              изменять некоторые настройки.
                            </Text>
                          </Action>
                        </React.Fragment>
                      )}
                    </Actions>
                    <Hr />
                    <Desc>
                      <DescText>
                        Вы не можете поменять статус, так как необходим минимум
                        один администратор.
                      </DescText>
                    </Desc>
                  </Body>
                </RootContainer>
              ) : null}
            </Body>
          </PreviewContainer>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(UserModal);
