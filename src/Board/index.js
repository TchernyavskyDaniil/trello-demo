import React from "react";
import styled from "styled-components";
import { trelloDefault } from "../utils";
import Options from "./Options";
import Nav from "./Nav";
import Lists from "./Lists";

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

export default props => {
  const { id, getLists, lists } = props;
  return (
    <BoardWrapper>
      <Nav id={id} />
      <BoardContainer>
        <Options id={id} />
        <Lists id={id} lists={lists} getLists={getLists} />
      </BoardContainer>
    </BoardWrapper>
  );
};
