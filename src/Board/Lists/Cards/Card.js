import React, { Component } from "react";
import styled from "styled-components";
import { PortalWithState } from "react-portal";
import Submit from "../../../UI/Submit";

const Text = styled.span`
  overflow: hidden;
  text-decoration: none;
  word-wrap: break-word;
  color: #444;
  clear: both;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
`;

const EditText = styled.textarea`
  resize: none;
  border: transparent;
  background-color: transparent;
  font-size: 13px;
  width: 100%;
  min-height: 140px;
  padding: 2px;
`;

const Edit = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  font-size: 12px;
  right: 4px;
  top: 4px;
  width: 20px;
  height: 20px;
  padding: 0;

  .pen {
    display: none;
    color: #ccc;
  }
`;

const CardContainer = styled.li`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  cursor: pointer;
  display: block;
  max-width: 240px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  padding: 6px 8px 2px;
  z-index: 10;
  margin: 8px auto 4px auto;

  &:hover {
    background-color: #edeff0;

    ${Edit} {
      .pen {
        display: block;

        &:hover {
          color: #4d4d4d;
          background-color: #d6dadc;
          opacity: 1;
          width: 20px;
          height: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
        }
      }
    }
  }
`;

const Modal = styled.div`
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  color: #fff;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
`;

const ModalText = styled.div`
  min-height: 120px;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  position: relative;
  text-decoration: none;
`;

const SubmitEdit = styled(Submit)`
  min-width: 110px;
  user-select: none;
`;

const ContainerModal = styled.div`
  width: 256px;
  left: 292px;
  top: 110px;
  z-index: 100;
  position: absolute;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ModalBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Back = styled(Submit)`
  min-width: 110px;
  user-select: none;
  border-color: #eb5a46;
  background: #eb5a46;
  box-shadow: 0 1px 0 #eb5a46;

  &:hover {
    background: #eb4433;
  }
`;

class Card extends Component {
  constructor() {
    super();
    this.state = {
      text: null,
      newText: null
    };
  }

  componentDidMount() {
    const { text } = this.props;
    this.setNewState(text);
  }

  componentDidUpdate(prevProps) {
    const { text } = this.props;
    if (prevProps.text !== text) {
      this.setNewState(text);
    }
  }

  setNewState = prop => {
    this.setState({ text: prop, newText: prop });
  };

  setNewValue = event => {
    this.setState({ newText: event.target.value });
  };

  setResult = () => {
    const { newText } = this.state;
    this.setState({ text: newText });
  };

  render() {
    const { text } = this.state;
    return (
      <CardContainer>
        <Text>{text}</Text>
        <PortalWithState closeOnOutsideClick closeOnEsc>
          {({ openPortal, closePortal, portal }) => (
            <React.Fragment>
              <Edit onClick={openPortal}>
                <i className="fas fa-pencil-alt pen" />
              </Edit>
              {portal(
                <Modal>
                  <ContainerModal>
                    <ModalText>
                      <EditText onChange={this.setNewValue}>{text}</EditText>
                    </ModalText>
                    <ModalBtns>
                      <SubmitEdit onClick={this.setResult}>
                        {" "}
                        Сохранить{" "}
                      </SubmitEdit>
                      <Back onClick={closePortal}> Назад </Back>
                    </ModalBtns>
                  </ContainerModal>
                </Modal>
              )}
            </React.Fragment>
          )}
        </PortalWithState>
      </CardContainer>
    );
  }
}

export default Card;
