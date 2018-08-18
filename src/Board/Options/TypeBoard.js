import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";
import { Container, Head, Title, Close } from "../../UI/TitlePopup";
import Submit from "../../UI/Submit";
import OptionBtn from "../../UI/OptionBtn";

const options = [
  { value: "first", label: "First" },
  { value: "second", label: "Second" },
  { value: "third", label: "Third" }
];

const TypeInfo = styled(OptionBtn)`
  font-size: 14px;
  font-weight: 400;
`;

const ContainerType = styled(Container)`
  min-width: 280px;
  min-height: 130px;
  left: 0;
  top: 40px;
`;

const Body = styled.div`
  padding: 0 14px;
`;

const Text = styled.span`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  display: block;
  margin-top: 12px;
  margin-bottom: 4px;
`;

const SelectType = styled(Select)`
  margin: 5px 0 15px 0;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Add = styled(Submit)`
  min-width: 100px;
`;

const AddNew = styled(Link)`
  color: #8c8c8c;

  &:hover {
    color: #444;
  }
`;

class TypeBoard extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  handleClickOutside = () => {
    this.setState({ isActive: false });
  };

  typeToggle = () => {
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  submitType = () => {
    // some post
    this.typeToggle();
  };

  render() {
    const { isActive } = this.state;
    return (
      <div>
        <TypeInfo onClick={this.typeToggle}> Персональная </TypeInfo>
        {isActive ? (
          <ContainerType>
            <Head>
              <Title> Добавить в команду </Title>
              <Close onClick={this.typeToggle}>
                <i className="fas fa-times close" />
              </Close>
            </Head>
            <Body>
              <Text> Это доска является частью </Text>
              <SelectType options={options} />
              <Footer>
                <Add onClick={this.submitType}> Добавить </Add>
                <AddNew to="/add-new"> Добавить команду </AddNew>
              </Footer>
            </Body>
          </ContainerType>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(TypeBoard);
