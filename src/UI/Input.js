import styled from "styled-components";

const Input = styled.input`
  width: 90%;
  margin: 2px 4px 6px 4px;
  padding: 6px;
  background-color: #e2e4e6;
  border: 1px solid #a5acb0;
  border-radius: 3px;
  font-size: 16px;
  line-height: 20px;

  &:hover {
    border-color: #a5acb0;
  }

  &:focus {
    outline: none;
    background: #fff;
    border-color: #298fca;
    box-shadow: 0 0 2px #298fca;
  }
`;

export default Input;
