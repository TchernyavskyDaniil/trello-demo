import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

const ListCard = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CardContainer = styled.li`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  cursor: pointer;
  display: block;
  max-width: 240px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  padding: 6px 8px 2px;
  z-index: 10;
  margin: 8px auto 4px auto;

  &:hover {
    background-color: #edeff0;
  }
`;

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      cards: []
    };
  }

  componentDidUpdate(prevProps) {
    const { card, id } = this.props;
    if (prevProps.id !== id) {
      this.getNewCards(card, id);
    }
  }

  getNewCards = (card, id) => {
    this.setState(prevState => ({
      cards: [...prevState.cards, { title: card, id: id }]
    }));
  };

  render() {
    const { cards } = this.state;
    return (
      <ListCard>
        {cards.map(card => (
          <CardContainer key={card.id}>
            <Card>{card.title}</Card>
          </CardContainer>
        ))}
      </ListCard>
    );
  }
}

export default Cards;
