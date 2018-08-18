import React from "react";
import styled from "styled-components";
import { trelloDefault } from "../utils";
import Index from "./Options";
import Nav from "./Nav";
import Cards from "./Cards";

const BoardContainer = styled.div`
  background-image: url(${trelloDefault});
  padding-top: 50px;
  padding-bottom: 50px;
  height: 100%;
  background-size: cover;
  overflow: hidden;
`;

const BoardWrapper = styled.div`
  height: 100%;
`;

export default () => (
  <BoardWrapper>
    <Nav />
    <BoardContainer>
      <Index />
      <Cards />
    </BoardContainer>
  </BoardWrapper>
);
