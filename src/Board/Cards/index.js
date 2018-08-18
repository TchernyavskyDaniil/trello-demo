import React, { Component } from "react";
import styled from "styled-components";
import Card from "./Card";
import AddNewCard from "./AddNewCard";

const ListCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`;

class Cards extends Component {
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
      ]
    };
  }

  getNewCards = newCards => {
    this.setState({ cards: newCards });
  };

  render() {
    const { cards } = this.state;
    return (
      <ListCard>
        {cards.map(card => (
          <Card title={card.title} key={card.id} />
        ))}
        <AddNewCard
          length={cards.length}
          cards={cards}
          getNewCards={this.getNewCards}
        />
      </ListCard>
    );
  }
}

export default Cards;
