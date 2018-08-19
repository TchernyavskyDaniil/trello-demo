import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ListCard = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export default props => {
  const { cards } = props;
  return (
    <ListCard>
      {cards.map(card => (
        <Card key={card.id} text={card.title} />
      ))}
    </ListCard>
  );
};
