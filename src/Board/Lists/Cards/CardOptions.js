import React, { Component } from "react";
import onClickOutside from "react-onclickoutside";
import styled from "styled-components";
import {
  Close,
  Container,
  Head,
  Title,
  Actions,
  Action,
  ActionTitle
} from "../../../UI/TitlePopup";

const Options = styled(Close)`
  position: absolute;
  right: -5px;
  font-size: 16px;

  &:hover {
    .dotted {
      color: #4d4d4d;
    }
  }
`;

const OptionsContainer = styled(Container)`
  left: 70px;
  min-width: 280px;
  max-width: 320px;
  min-height: 140px;
  top: 20px;
`;

const Body = styled.div``;

class CardOptions extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  toggleActiveState = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  handleClickOutside = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive } = this.state;
    return (
      <div>
        <Options onClick={this.toggleActiveState}>
          <i className="fas fa-ellipsis-h dotted" />
        </Options>
        {isActive ? (
          <OptionsContainer>
            <Head>
              <Title>Параметры</Title>
              <Close onClick={this.toggleActiveState}>
                <i className="fas fa-times close" />
              </Close>
            </Head>
            <Body>
              <Actions>
                <Action>
                  <ActionTitle> Участники </ActionTitle>
                </Action>
                <Action>
                  <ActionTitle> Метки </ActionTitle>
                </Action>
                <Action>
                  <ActionTitle> Позиция </ActionTitle>
                </Action>
              </Actions>
            </Body>
          </OptionsContainer>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(CardOptions);
