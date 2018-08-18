import styled from "styled-components";

const BoardsBtn = styled.button`
  transition: 0.1s ease;
  background: hsla(0, 0%, 100%, 0.3);
  border-radius: 3px;
  font-weight: 400;
  line-height: 32px;
  margin-right: 8px;
  min-width: 32px;
  user-select: none;
  color: white;
  cursor: pointer;
  height: 32px;
  border: none;

  &:hover {
    opacity: 0.8;
  }

  .icon-board {
    padding-right: 10px;
  }
`;

export default BoardsBtn;
