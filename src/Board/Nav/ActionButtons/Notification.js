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
} from "../../../UI/TitlePopup";
import OptionBtn from "../OptionBtn";

const NotificationBtn = styled(OptionBtn)``;

const NotifContainer = styled(Container)`
  min-width: 410px;
  padding: 0;
`;

const ContainerMsg = styled(Container)`
  position: absolute;
  background: #fff;
  border-radius: 3px;
  border: 1px solid #d6dadc;
  border-bottom-color: #c4c9cc;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
  max-width: 300px;
  left: 10px;
  min-height: 200px;
  top: 220px;
`;

const NotifTitle = styled(Title)`
  margin: 0;
`;

const Body = styled.div`
  padding: 5px;
  position: relative;
`;

const CheckAll = styled.button`
  background: none;
  border: none;
  border-radius: 0;
  box-shadow: none;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  min-height: 0;
  text-align: left;
  color: #8c8c8c;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #444;
  }
`;

const InfoMsg = styled.div`
  margin: 20px 5px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  margin-bottom: 20px;
`;

const Sub = styled.p`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const CheckNotif = styled(Sub)`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  width: 100%;
`;

const BtnNotif = styled.button`
  cursor: pointer;
  display: block;
  font-weight: 700;
  position: relative;
  margin: 0;
  width: 100%;
  padding: 10px 5px 10px 5px;
  border-radius: 4px;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: #298fca;
    color: #fff;
  }
`;

const AllNotifications = styled.div`
  min-height: 120px;
`;

class Notification extends Component {
  constructor() {
    super();
    this.state = {
      notification: false,
      msg: false,
      checkNotifications: false
    };
  }

  handleClickOutside = () => {
    this.setState({ notification: false });
  };

  toggleNotification = () => {
    this.setState(prevState => ({ notification: !prevState.notification }));
  };

  toggleMsg = () => {
    this.setState(prevState => ({ msg: !prevState.msg }));
  };

  render() {
    const { notification, msg, checkNotifications } = this.state;
    return (
      <div
        ref={node => {
          this.node = node;
        }}
      >
        <NotificationBtn onClick={this.toggleNotification}>
          <i className="far fa-bell" />
        </NotificationBtn>
        {notification ? (
          <NotifContainer>
            <Head>
              <NotifTitle> Уведомления </NotifTitle>
              <Close onClick={this.toggleNotification}>
                {" "}
                <i className="fas fa-times close" />{" "}
              </Close>
            </Head>
            <Body>
              {checkNotifications ? (
                <CheckAll onClick={this.checkNotifications}>
                  {" "}
                  Фильтр по непрочитанным{" "}
                </CheckAll>
              ) : (
                <CheckAll onClick={this.checkNotifications}>
                  {" "}
                  Посмотреть все{" "}
                </CheckAll>
              )}
              <InfoMsg>
                <Img src="https://a.trellocdn.com/prgb/dist/images/taco-sleep.0582d9f3bdb5060e7285.svg" />
                {checkNotifications ? (
                  <React.Fragment>
                    <Sub> Нет уведомлений </Sub>
                    <AllNotifications />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Sub> Нет непрочитанных уведомлений </Sub>
                    <CheckNotif>
                      Нажмите{" "}
                      <CheckAll onClick={this.checkNotifications}>
                        {" "}
                        Посмотреть все{" "}
                      </CheckAll>
                      , чтобы посмотреть все уведомления
                    </CheckNotif>
                    <AllNotifications />
                  </React.Fragment>
                )}
              </InfoMsg>
              <BtnNotif onClick={this.toggleMsg}>
                Изменить частоту оповещений по электронной почте
              </BtnNotif>
              {msg ? (
                <ContainerMsg>
                  <Head>
                    <Title> Отправлять письма ... </Title>
                    <Close onClick={this.toggleMsg}>
                      {" "}
                      <i className="fas fa-times close" />{" "}
                    </Close>
                  </Head>
                  <Actions>
                    <Action onClick={this.toggleMsg}>
                      <ActionTitle>Никогда</ActionTitle>
                      <Text>Не отправлять письма</Text>
                    </Action>
                    <Action onClick={this.toggleMsg}>
                      <ActionTitle>Периодически</ActionTitle>
                      <Text>Отправлять письма примерно раз в час</Text>
                    </Action>
                    <Action onClick={this.toggleMsg}>
                      <ActionTitle>Мгновенно</ActionTitle>
                      <Text>Отправлять письма как можно скорее</Text>
                    </Action>
                  </Actions>
                </ContainerMsg>
              ) : null}
            </Body>
          </NotifContainer>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(Notification);
