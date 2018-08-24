import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { Container, Head, Title, Close } from "../../UI/TitlePopup";
import Input from "../../UI/Input";
import OptionBtn from "../../UI/OptionBtn";
import Submit from "../../UI/Submit";
import axios from "../../axios";

const ContainerUser = styled(Container)`
  min-width: 270px;
  min-height: 150px;
  left: -2px;
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

const RenameBtn = styled(Input)`
  margin: 5px 0 20px 0;
`;

class BoardName extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      boardName: "",
      newName: ""
    };
  }

  componentDidMount() {
    const { id } = this.props;
    this.getBoardTitle(id);
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props;
    if (prevProps.id !== id) {
      this.getBoardTitle(id);
    }
  }

  getBoardTitle = id => {
    axios.get(`/options/${id}`).then(response => {
      this.setState({
        boardName: response.data.titleBoard
      });
    });
  };

  handleClickOutside = () => {
    this.setState({ isActive: false });
  };

  toggleUser = () => {
    const { boardName } = this.state;
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      newName: boardName
    }));
  };

  updateInput = event => {
    this.setState({ newName: event.target.value });
  };

  submitName = () => {
    const { id } = this.props;
    const { newName } = this.state;
    axios.patch(`/options/${id}`, {
      titleBoard: newName
    });
    this.setState({ boardName: newName, newName: "" });
    this.toggleUser();
  };

  render() {
    const { isActive, boardName } = this.state;
    return (
      <div>
        <OptionBtn onClick={this.toggleUser}> {boardName} </OptionBtn>
        {isActive ? (
          <ContainerUser>
            <Head>
              <Title> Переименование доски </Title>
              <Close onClick={this.toggleUser}>
                <i className="fas fa-times close" />
              </Close>
            </Head>
            <Body>
              <Text> Название </Text>
              <RenameBtn defaultValue={boardName} onChange={this.updateInput} />
              <Submit onClick={this.submitName}> Переименовать </Submit>
            </Body>
          </ContainerUser>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(BoardName);
