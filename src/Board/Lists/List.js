import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import ListOptions from "./ListOptions";
import Cards from "./Cards";
import AddNewCard from "./Cards/AddNewCard";

const Container = styled.div`
  margin: 6px;
  min-width: 275px;
  background: #e2e4e6;
  border-radius: 4px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
`;

const Title = styled.textarea`
  overflow: hidden;
  word-wrap: break-word;
  line-height: 20px;
  border: 1px solid transparent;
  background: transparent;
  border-radius: 3px;
  box-shadow: none;
  font-weight: 700;
  height: 20px;
  min-height: 20px;
  padding: 3px 6px;
  margin: 2px;
  resize: none;
  font-size: 14px;
  max-height: 256px;
  transition: background 85ms ease-in, border-color 85ms ease-in;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid #0079bf;
    box-shadow: 0 0 2px 0 #0284c6;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1px 2px 1px 10px;
  cursor: pointer;

  &:hover {
    background-color: #cdd2d4;
    color: #8c8c8c;
  }
`;

const AddCard = styled.button`
  border-radius: 0 0 3px 3px;
  color: #8c8c8c;
  padding: 8px 4px;
  border-color: transparent;
  background: transparent;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Plus = styled.span``;

class List extends Component {
  constructor() {
    super();
    this.state = {
      isActiveAdd: true,
      cards: [],
      isSort: false
    };
  }

  addCard = newCard => {
    const { cards } = this.state;
    this.setState(prevState => ({
      cards: [...prevState.cards, { title: newCard, id: cards.length + 1 }],
      isSort: true
    }));
  };

  toggleAdd = bool => {
    if (bool) {
      this.setState({ isActiveAdd: false });
    } else {
      this.setState(prevState => ({ isActiveAdd: !prevState.isActiveAdd }));
    }
  };

  handleClickOutside = () => {
    this.setState({ isActiveAdd: true });
  };

  render() {
    const { isActiveAdd, cards, isSort } = this.state;
    const { title } = this.props;

    return (
      <Container>
        <Header>
          <Title placeholder="Напишите что - то :)" defaultValue={title} />
          <ListOptions isSort={isSort} toggle={this.toggleAdd} />
        </Header>
        <Cards cards={cards} />
        {isActiveAdd ? (
          <Body onClick={this.toggleAdd}>
            <AddCard>
              <Plus>+</Plus> Добавить карточку
            </AddCard>
          </Body>
        ) : (
          <AddNewCard
            isActive={isActiveAdd}
            addCard={this.addCard}
            toggle={this.toggleAdd}
          />
        )}
      </Container>
    );
  }
}

export default onClickOutside(List);
