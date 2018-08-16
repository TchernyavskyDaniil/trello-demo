import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { trelloDefault } from "../utils";
import Index from "./Options";
import Card from "./Card";
import Nav from "./Nav";
import Input from "../UI/Input";
import Submit from "../UI/Submit";
import { Close } from "../UI/TitlePopup";

const BoardContainer = styled.div`
  background-image: url(${trelloDefault});
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const AddCard = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  cursor: pointer;
  color: white;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  min-width: 250px;
  align-items: center;
  transition: background 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
  margin: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.span`
  padding: 7px;
  color: hsla(0, 0%, 100%, 0.7);
  transition: color 85ms ease-in;
`;

const Container = styled.div`
  height: auto;
  min-height: 70px;
  margin: 6px;
  padding: 4px;
  border-radius: 3px;
  background-color: #e2e4e6;
  transition: background 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
  display: flex;
  flex-direction: column;
  min-width: 240px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px;
  justify-content: flex-start;
`;

const BoardWrapper = styled.div`
  height: 100%;
`;

const CloseWindow = styled(Close)`
  position: relative;
`;

const InputAdd = styled(Input)`
  font-size: 14px;
  padding: 3px;
`;

const SubmitAdd = styled(Submit)`
  font-size: 14px;
  padding: 4px;
  margin-right: 10px;
`;

const EmptyField = styled.span`
  font-size: 12px;
  color: #eb5a46;
  margin: 0 6px;
`;

class Board extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          title: "Делаем шо - та"
        },
        {
          id: 2,
          title: "И тут тоже"
        },
        {
          id: 3,
          title: "А тут думаем что завершили"
        },
        {
          id: 4,
          title: "А тут продолжаем"
        }
      ],
      add: false,
      valId: null,
      value: null,
      empty: false
    };
  }

  getValueList = event => {
    const { cards } = this.state;
    this.setState({ valId: cards.length + 1, value: event.target.value });
  };

  handleClickOutside = () => {
    this.setState({ add: false, empty: false });
  };

  toggleCard = () => {
    this.setState(prevState => ({ add: !prevState.add, empty: false }));
  };

  addNewList = () => {
    const { cards, valId, value } = this.state;
    if (value === null || value.length < 1) {
      this.setState({ empty: true });
    } else {
      const newCards = cards;
      newCards[valId - 1] = { id: valId, title: value };
      this.setState({ value: null, cards: newCards, empty: false });
    }
  };

  render() {
    const { cards, add, empty, value } = this.state;
    return (
      <BoardWrapper>
        <Nav />
        <BoardContainer>
          <Index />
          <Cards>
            {cards.map(card => (
              <Card title={card.title} key={card.id} />
            ))}
            {add ? (
              <Container>
                <InputAdd
                  placeholder="Введите заголовок списка"
                  defaultValue={value}
                  onChange={this.getValueList}
                  required
                />
                {empty ? <EmptyField> Заполните поле! </EmptyField> : null}
                <Footer>
                  <SubmitAdd onClick={this.addNewList}>
                    {" "}
                    Добавить список{" "}
                  </SubmitAdd>
                  <CloseWindow onClick={this.toggleCard}>
                    <i className="fas fa-times close" />
                  </CloseWindow>
                </Footer>
              </Container>
            ) : (
              <AddCard onClick={this.toggleCard}>
                <Title> Добавить еще одну колонку </Title>{" "}
              </AddCard>
            )}
          </Cards>
        </BoardContainer>
      </BoardWrapper>
    );
  }
}

export default onClickOutside(Board);
