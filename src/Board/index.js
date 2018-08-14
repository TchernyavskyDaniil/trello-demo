import React from "react";
import styled from "styled-components";
import trelloDefault from "../utils";
import BoardOptions from "./BoardOptions";
import Card from "./Card";

const Board = styled.div`
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
`;

export default () => (
  <Board>
    <BoardOptions />
    <Cards>
      <Card title="Имя карточки" />
      <Card title="Имя карточки 2" />
      <Card title="Имя карточки 3" />
      <Card title="Имя карточки 4" />
    </Cards>
  </Board>
);
