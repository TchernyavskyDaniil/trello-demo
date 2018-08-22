import React, { Component } from "react";
import styled from "styled-components";
import CardOptions from "./CardOptions";
import { Close } from "../../../UI/TitlePopup";
import Submit from "../../../UI/Submit";

const SubmitAdd = styled(Submit)`
  padding: 8px;
  font-size: 14px;
  user-select: none;
`;

const BodyAdd = styled.div`
  position: relative;
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const InputAdd = styled.textarea`
  line-height: 16px;
  padding: 6px;
  background-color: #fff;
  border: 1px solid #a5acb0;
  border-radius: 3px;
  box-shadow: 0 0 2px #298fca;
  margin: 6px 0;
  width: 95%;
  font-size: 14px;

  &:hover {
    border-color: #298fca;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CloseAdd = styled(Close)`
  position: relative;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100px;
  justify-content: space-between;
  position: relative;
`;

class AddNewCard extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
      isActiveAdd: false
    };
  }

  componentDidUpdate(prevProps) {
    const { isActive } = this.props;
    if (prevProps.isActive !== isActive) {
      this.setNewState(isActive);
    }
  }

  setNewState = prop => {
    this.setState({ isActiveAdd: prop });
  };

  setNewValue = event => {
    this.setState({ value: event.target.value });
  };

  toggleAdd = () => {
    const { toggle } = this.props;
    toggle();
  };

  addNewCard = () => {
    const { value } = this.state;
    const { addCard } = this.props;
    addCard(value);
  };

  render() {
    const { value, isActiveAdd } = this.state;
    return (
      <div>
        {!isActiveAdd ? (
          <BodyAdd>
            <InputAdd
              placeholder="Ввести заголовок для этой карточки"
              onChange={this.setNewValue}
              defaultValue={value}
            />
            <Footer>
              <SubmitAdd onClick={this.addNewCard}>
                {" "}
                Добавить карточку{" "}
              </SubmitAdd>
              <Buttons>
                <CloseAdd onClick={this.toggleAdd}>
                  <i className="fas fa-times close" />
                </CloseAdd>
                <CardOptions />
              </Buttons>
            </Footer>
          </BodyAdd>
        ) : null}
      </div>
    );
  }
}

export default AddNewCard;
