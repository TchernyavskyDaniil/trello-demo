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

const AddBtn = styled(OptionBtn)``;

class Add extends Component {
  constructor() {
    super();
    this.state = {
      add: false
    };
  }

  handleClickOutside = () => {
    this.setState({ add: false });
  };

  toggleAdd = () => {
    this.setState(prevState => ({ add: !prevState.add }));
  };

  render() {
    const { add } = this.state;
    return (
      <div>
        <AddBtn onClick={this.toggleAdd}>
          <i className="fas fa-plus" />
        </AddBtn>
        {add ? (
          <Container>
            <Head>
              <Title> Создать </Title>
              <Close onClick={this.toggleAdd}>
                {" "}
                <i className="fas fa-times close" />{" "}
              </Close>
            </Head>
            <Actions>
              <Action>
                <ActionTitle>Создать доску</ActionTitle>
                <Text>
                  Доска представляет собой совокупность карточек, упорядоченных
                  в списках. Используйте её для управления проектом,
                  отслеживания или организации чего угодно.
                </Text>
              </Action>
              <Action>
                <ActionTitle>Создание команды</ActionTitle>
                <Text>
                  Команда представляет собой группу досок и людей. Используйте
                  ее для организации работы вашей компании, вашей подработки,
                  семейных дел или отдыха с друзьями.
                </Text>
              </Action>
              <Action>
                <ActionTitle>Создать бизнес-команду</ActionTitle>
                <Text>
                  Бизнес класс даёт вашей команде большую безопасность,
                  административный контроль и неограниченную суперсилу.{" "}
                </Text>
              </Action>
            </Actions>
          </Container>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(Add);
