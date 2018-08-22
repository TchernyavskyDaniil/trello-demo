import styled from "styled-components";

const OptionBtn = styled.button`
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  min-height: 20px;
  min-width: 20px;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default OptionBtn;
