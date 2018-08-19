import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import {
  Close,
  Container,
  Head,
  Title,
  Actions,
  Action
} from "../../UI/TitlePopup";
import Hr from "../../UI/Hr";

const Options = styled.button`
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  width: 36px;
  background: transparent;
  font-size: 13px;
  border-radius: 4px;
  border-color: transparent;

  .dotted {
    color: #999;
  }

  &:hover {
    background: #cdd2d4;
  }
`;

const ActionsContainer = styled(Container)`
  top: 10px;
  left: 0;
  min-width: 300px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 100;
`;

const Body = styled(Actions)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 240px;
  justify-content: space-around;
`;

const ActionBtn = styled.button`
  cursor: pointer;
  color: #444;
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  border: transparent;
  background-color: transparent;
`;

const ActionCard = styled(Action)`
  width: 93%;

  &:hover {
    ${ActionBtn} {
      color: white;
    }
  }
`;

const CardHr = styled(Hr)`
  width: 92%;
  margin: 12px;
`;

class ListOptions extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  toggleOptions = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  addNewCard = () => {
    const { toggle } = this.props;
    this.setState({ isActive: false });
    toggle(true);
  };

  handleClickOutside = () => {
    this.setState({ isActive: false });
  };

  render() {
    const { isActive } = this.state;
    const { isSort } = this.props;
    return (
      <div>
        <Options onClick={this.toggleOptions}>
          <i className="fas fa-ellipsis-h dotted" />
        </Options>
        <Wrapper>
          {isActive ? (
            <ActionsContainer>
              <Head>
                <Title>Действия со списком</Title>
                <Close>
                  <i className="fas fa-times close" />
                </Close>
              </Head>
              <Body>
                <ActionCard onClick={this.addNewCard}>
                  <ActionBtn>Добавить карточку</ActionBtn>
                </ActionCard>
                <ActionCard>
                  <ActionBtn>Копировать список</ActionBtn>
                </ActionCard>
                <ActionCard>
                  <ActionBtn>Переместить список</ActionBtn>
                </ActionCard>
                <ActionCard>
                  <ActionBtn>Подписаться</ActionBtn>
                </ActionCard>
                <CardHr />
                {isSort ? (
                  <React.Fragment>
                    <ActionCard>
                      <ActionBtn>Сортировать по ... </ActionBtn>
                    </ActionCard>
                    <CardHr />
                  </React.Fragment>
                ) : null}
                <ActionCard>
                  <ActionBtn>Переместить все карточки списка</ActionBtn>
                </ActionCard>
                <ActionCard>
                  <ActionBtn>Архивировать все карточки списка</ActionBtn>
                </ActionCard>
                <CardHr />
                <ActionCard>
                  <ActionBtn>Архивировать список</ActionBtn>
                </ActionCard>
              </Body>
            </ActionsContainer>
          ) : null}
        </Wrapper>
      </div>
    );
  }
}

export default onClickOutside(ListOptions);
