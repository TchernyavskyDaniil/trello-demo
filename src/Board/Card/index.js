import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 6px;
  min-width: 280px;
  background: #e2e4e6;
  border-radius: 4px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  justify-content: space-between;
`;

const Title = styled.textarea`
  overflow: hidden;
  word-wrap: break-word;
  line-height: 20px;
  border: 1px solid transparent;
  background: transparent;
  border-radius: 3px;
  box-shadow: none;
  font-weight: 700;
  height: 20px;
  min-height: 20px;
  padding: 3px 6px;
  margin: 2px;
  resize: none;
  font-size: 14px;
  max-height: 256px;
  transition: background 85ms ease-in, border-color 85ms ease-in;
  width: 100%;
  cursor: pointer;

  &:focus {
    outline: none;
    background-color: white;
    border: 1px solid #0079bf;
    box-shadow: 0 0 2px 0 #0284c6;
  }
`;

const Options = styled.button`
  cursor: pointer;
  height: 32px;
  line-height: 32px;
  width: 36px;
  background: transparent;
  font-size: 13px;
  border-radius: 4px;
  border-color: transparent;

  .dotted {
    color: #999;
  }

  &:hover {
    background: #cdd2d4;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1px 2px 1px 10px;
  cursor: pointer;

  &:hover {
    background-color: #cdd2d4;
    color: #8c8c8c;
  }
`;

const AddCard = styled.button`
  border-radius: 0 0 3px 3px;
  color: #8c8c8c;
  padding: 8px 4px;
  border-color: transparent;
  background: transparent;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Plus = styled.span``;

export default props => {
  const { title } = props;
  return (
    <Container>
      <Header>
        <Title placeholder="Напишите что - то :)" defaultValue={title} />
        <Options>
          <i className="fas fa-ellipsis-h dotted" />
        </Options>
      </Header>
      <Body>
        <AddCard>
          <Plus>+</Plus> Добавить карточку
        </AddCard>
      </Body>
    </Container>
  );
};
