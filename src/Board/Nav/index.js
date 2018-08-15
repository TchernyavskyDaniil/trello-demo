import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Boards from "./Board";
import Search from "./Search";
import ActionButtons from "./ActionButtons";

const Container = styled.nav`
  min-height: 40px;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const OptionsBoard = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 10px 5px 10px;
`;

const Img = styled.img`
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 80px 30px;
  height: 30px;
  width: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.6;
  cursor: pointer;
  transition: 0.1s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export default () => (
  <Container>
    <OptionsBoard>
      <Boards />
      <Search />
    </OptionsBoard>
    <Link to="/">
      <Img src="/img/trello-logo.png" />
    </Link>
    <ActionButtons />
  </Container>
);
