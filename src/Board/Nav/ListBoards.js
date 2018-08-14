import React from "react";
import styled from "styled-components";
import trelloDefault from "../../utils";

const Container = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  border-radius: 0 3px 3px 0;
  overflow: hidden;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 290px;
  top: 44px;
  z-index: 60;
  margin-left: 8px;
`;

const Search = styled.input`
  width: 90%;
  margin: 2px 4px 6px 4px;
  padding: 6px;
  background-color: #e2e4e6;
  border: 1px solid #cdd2d4;
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

const TypeBoard = styled.div`
  margin: 15px 10px 0 10px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.span`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  margin-top: 16px;
  text-transform: uppercase;
`;

const Hide = styled.button`
  border: none;
  background: none;
  color: #8c8c8c;
  cursor: pointer;
  height: 24px;
  width: 24px;
  padding: 0;

  &:hover {
    border-radius: 4px;
    background: #d6dadc;
  }
`;

const Board = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightgrey;
  border-radius: 4px;
`;

const Img = styled.img`
  height: 36px;
  width: 36px;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

const Name = styled.span`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 700;
`;

const Options = styled.ul`
  padding: 0;
  margin: 20px 8px 20px 8px;
  list-style: none;
`;

const Option = styled.li``;

const BtnOpt = styled.button`
  margin: 10px 4px 0 4px;
  border: none;
  background: none;
  text-decoration: underline;
  width: 100%;
  text-align: left;
  padding: 6px;
  font-size: 14px;
  color: #8c8c8c;
  cursor: pointer;
  min-height: 32px;
  border-radius: 4px;

  &:hover {
    background: #d6dadc;
    color: #444;
  }
`;

const TitleContainer = styled.div`
  .star {
    color: #8c8c8c;
    font-size: 12px;
    padding: 0 10px 0 10px;
  }
`;

export default () => (
  <Container>
    <Search placeholder="Поиск по названию" type="text" />
    <TypeBoard>
      <Title>
        <TitleContainer>
          <i className="far fa-star star" />
          <Text>Тест чета</Text>
        </TitleContainer>
        <Hide>
          <i className="fas fa-minus minus" />
        </Hide>
      </Title>
      <Board>
        <Img src={trelloDefault} />
        <Name>Текст доски заголовок</Name>
      </Board>
    </TypeBoard>
    <Options>
      <Option>
        {" "}
        <BtnOpt>Тест тест</BtnOpt>{" "}
      </Option>
      <Option>
        {" "}
        <BtnOpt>Тест тест</BtnOpt>{" "}
      </Option>
      <Option>
        {" "}
        <BtnOpt>Тест тест</BtnOpt>{" "}
      </Option>
    </Options>
  </Container>
);
