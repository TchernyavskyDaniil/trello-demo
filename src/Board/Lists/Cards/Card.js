import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.span`
  overflow: hidden;
  text-decoration: none;
  word-wrap: break-word;
  color: #444;
  clear: both;
  width: 100%;
  font-size: 14px;
  line-height: 16px;
`;

const Edit = styled.button`
  border: transparent;
  background-color: transparent;
  cursor: pointer;
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

  ${Edit} {
    .pen {
      display: none;
      color: #ccc;
    }
  }

  &:hover {
    background-color: #edeff0;

    ${Edit} {
      .pen {
        display: block;
        position: absolute;
        font-size: 12px;
        right: 8px;
        top: 8px;

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
          top: 4px;
          border-radius: 4px;
          right: 4px;
        }
      }
    }
  }
`;

// const Modal = styled.div`
//   background: rgba(0, 0, 0, 0.6);
//   bottom: 0;
//   color: #fff;
//   left: 0;
//   position: fixed;
//   right: 0;
//   top: 0;
//   z-index: 10;
// `;

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isActiveModal: false
    };
  }

  openChangeModal = () => {
    this.setState(prevState => ({ isActiveModal: !prevState.isActiveModal }));
  };

  render() {
    const { children } = this.props;
    return (
      <CardContainer>
        <Container>{children}</Container>
        <Edit onClick={this.openChangeModal}>
          <i className="fas fa-pencil-alt pen" />
        </Edit>
      </CardContainer>
    );
  }
}

export default Card;
