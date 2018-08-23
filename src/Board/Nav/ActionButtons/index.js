import React from "react";
import styled from "styled-components";
import Add from "./Add";
import Info from "./Info";
import Notification from "./Notification";
import User from "./User";

const ActionsBoard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 5px 10px 5px 10px;
`;

export default props => {
  const { id } = props;
  return (
    <ActionsBoard>
      <Add />
      <Info />
      <Notification />
      <User id={id} />
    </ActionsBoard>
  );
};
