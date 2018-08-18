import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import {
  Container,
  Head,
  Title,
  Close,
  Action,
  Actions,
  ActionTitle,
  Text
} from "../../UI/TitlePopup";
import OptionBtn from "../../UI/OptionBtn";

const TypePrivacy = styled(OptionBtn)`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 110px;
  justify-content: space-between;
  font-weight: 400;

  .lock {
    font-size: 12px;
  }
`;

const VisibleContainer = styled(Container)`
  left: -10px;
`;

const Body = styled.div`
  padding: 0;
`;

const VisibleTitle = styled(ActionTitle)`
  .icon {
    padding-right: 6px;
    padding-left: 2px;
    color: #eb5a46;
  }

  .user {
    padding-right: 6px;
    padding-left: 2px;
    color: #999;
  }

  .global {
    padding-right: 6px;
    padding-left: 2px;
    color: #61bd4f;
  }
`;

class Visibility extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }

  handleClickOutside = () => {
    this.setState({ isVisible: false });
  };

  toggleVisible = () => {
    this.setState(prevState => ({ isVisible: !prevState.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div>
        <TypePrivacy onClick={this.toggleVisible}>
          {" "}
          <i className="fas fa-lock lock" />
          Приватная{" "}
        </TypePrivacy>
        {isVisible ? (
          <VisibleContainer>
            <Head>
              <Title> Изменение видимости </Title>
              <Close onClick={this.toggleVisible}>
                <i className="fas fa-times close" />
              </Close>
            </Head>
            <Body>
              <Actions>
                <Action>
                  <VisibleTitle>
                    {" "}
                    <i className="fas fa-lock icon" /> Приватная{" "}
                  </VisibleTitle>
                  <Text>
                    {" "}
                    Приватная доска. Просматривать и редактировать её могут
                    только добавленные к ней люди.{" "}
                  </Text>
                </Action>
                <Action>
                  <VisibleTitle>
                    {" "}
                    <i className="far fa-user user" /> Командная{" "}
                  </VisibleTitle>
                  <Text>
                    {" "}
                    Доска, видимая участникам команды. Редактировать её могут
                    только добавленные к ней люди. Доска должна быть добавлена к
                    команде.
                  </Text>
                </Action>
                <Action>
                  <VisibleTitle>
                    {" "}
                    <i className="fas fa-globe global" /> Публичная{" "}
                  </VisibleTitle>
                  <Text>
                    {" "}
                    Публичная доска. Видна всем, у кого есть ссылка, и
                    отображается в поисковых системах вроде Google.
                    Редактировать её могут только добавленные к ней люди.{" "}
                  </Text>
                </Action>
              </Actions>
            </Body>
          </VisibleContainer>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(Visibility);
