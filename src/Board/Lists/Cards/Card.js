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

class Card extends Component {
  constructor() {
    super();
  }

  render() {
    const { children } = this.props;
    return <Container>{children}</Container>;
  }
}

export default Card;
