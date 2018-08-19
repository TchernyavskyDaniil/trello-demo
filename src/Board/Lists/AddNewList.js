import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import Input from "../../UI/Input";
import { Close } from "../../UI/TitlePopup";
import Submit from "../../UI/Submit";

const AddCard = styled.div`
  background-color: rgba(0, 0, 0, 0.12);
  cursor: pointer;
  color: white;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  min-width: 264px;
  align-items: center;
  transition: background 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
  margin: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.span`
  padding: 7px;
  color: hsla(0, 0%, 100%, 0.7);
  transition: color 85ms ease-in;
`;

const Container = styled.div`
  height: auto;
  min-height: 70px;
  margin: 6px;
  padding: 4px;
  border-radius: 3px;
  background-color: #e2e4e6;
  transition: background 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
  display: flex;
  flex-direction: column;
  min-width: 260px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px;
  justify-content: flex-start;
`;

const CloseWindow = styled(Close)`
  position: relative;
`;

const InputAdd = styled(Input)`
  font-size: 14px;
  padding: 3px;
`;

const SubmitAdd = styled(Submit)`
  font-size: 14px;
  padding: 4px;
  margin-right: 10px;
`;

const EmptyField = styled.span`
  font-size: 12px;
  color: #eb5a46;
  margin: 0 6px;
`;

class AddNewList extends Component {
  constructor() {
    super();
    this.state = {
      isActiveAdd: false,
      newValue: "",
      isEmpty: false
    };
  }

  setValueList = event => {
    this.setState({
      newValue: event.target.value,
      isEmpty: false
    });
  };

  addNewList = () => {
    const { newValue } = this.state;
    const { setNewList } = this.props;
    if (newValue.length < 1) {
      this.setState({ isEmpty: true });
    } else {
      this.setState({ newValue: "" });
      setNewList(newValue);
    }
  };

  toggleCard = () => {
    this.setState(prevState => ({
      isActiveAdd: !prevState.isActiveAdd,
      isEmpty: false
    }));
  };

  handleClickOutside = () => {
    this.setState({ isActiveAdd: false, isEmpty: false });
  };

  render() {
    const { isActiveAdd, isEmpty, newValue } = this.state;
    return (
      <div>
        {isActiveAdd ? (
          <Container>
            <InputAdd
              placeholder="Введите заголовок списка"
              value={newValue}
              onChange={this.setValueList}
              required
            />
            {isEmpty ? <EmptyField> Заполните поле! </EmptyField> : null}
            <Footer>
              <SubmitAdd onClick={this.addNewList}> Добавить список </SubmitAdd>
              <CloseWindow onClick={this.toggleCard}>
                <i className="fas fa-times close" />
              </CloseWindow>
            </Footer>
          </Container>
        ) : (
          <AddCard onClick={this.toggleCard}>
            <Title> Добавить еще одну колонку </Title>{" "}
          </AddCard>
        )}
      </div>
    );
  }
}

export default onClickOutside(AddNewList);
