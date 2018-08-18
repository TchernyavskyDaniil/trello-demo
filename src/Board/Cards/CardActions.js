import React, { Component } from "react";
import styled from "styled-components";

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

// TODO Доделать

class CardActions extends Component {
  constructor() {
    super();
    this.state = {
      options: false
    };
  }

  toggleOptions = () => {
    this.setState(prevState => ({ options: !prevState.options }));
  };

  render() {
    const { options } = this.state;
    return (
      <div>
        <Options onClick={this.toggleOptions}>
          <i className="fas fa-ellipsis-h dotted" />
        </Options>
        {options ? <span> Доделать </span> : null}
      </div>
    );
  }
}

export default CardActions;
