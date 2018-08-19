import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";

const ListCard = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
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
      cards: [...prevState.cards, { title: card, key: id }]
    }));
  };

  render() {
    const { cards } = this.state;
    return (
      <ListCard>
        {cards.map(card => (
          <Card key={card.key} text={card.title} />
        ))}
      </ListCard>
    );
  }
}

export default Cards;
