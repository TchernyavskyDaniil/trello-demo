import React, { Component } from "react";
import OptionBtn from "../OptionBtn";
import onClickOutside from "react-onclickoutside";
import styled from "styled-components";
import { trelloDefault } from "../../../utils";
import Input from "../../../UI/Input";

const Container = styled.div`
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 290px;
  top: 44px;
  z-index: 60;
  padding: 10px 0 10px 6px;
  margin: 0;
  left: 10px;
  border-radius: 3px;
`;

const TypeBoard = styled.div`
  margin: 15px 10px 0 10px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 2px 5px 2px;
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

const BoardContainer = styled.div`
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
  margin: 20px 12px 20px 8px;
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

class Board extends Component {
  constructor() {
    super();
    this.state = {
      outsideClick: false
    };
  }

  toggleBoard = () => {
    this.setState(prevState => ({ outsideClick: !prevState.outsideClick }));
  };

  handleClickOutside = () => {
    this.setState({ outsideClick: false });
  };

  render() {
    const { outsideClick } = this.state;
    return (
      <div>
        <OptionBtn onClick={this.toggleBoard}>
          <i className="fas fa-clipboard-list icon-board" />
          Доски{" "}
        </OptionBtn>
        {outsideClick ? (
          <Container>
            <Input placeholder="Поиск по названию" type="text" />
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
              <BoardContainer>
                <Img src={trelloDefault} />
                <Name>Текст доски заголовок</Name>
              </BoardContainer>
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
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(Board);
