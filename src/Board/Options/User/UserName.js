import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import { getData, setData } from "../../../fakeApi";
import { Container, Head, Title, Close } from "../../../UI/TitlePopup";
import Input from "../../../UI/Input";
import OptionBtn from "../../../UI/OptionBtn";
import Submit from "../../../UI/Submit";

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

class UserName extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      userName: "default_name",
      newName: null
    };
  }

  async componentDidMount() {
    const data = await getData("userName");
    this.setState({ userName: data });
  }

  handleClickOutside = () => {
    const { userName } = this.state;
    this.setState({ isActive: false, newName: userName });
  };

  toggleUser = () => {
    const { userName } = this.state;
    this.setState(prevState => ({
      isActive: !prevState.isActive,
      newName: userName
    }));
  };

  updateInput = event => {
    this.setState({ newName: event.target.value });
  };

  submitName = () => {
    const { newName } = this.state;
    setData("userName", newName);
    this.setState({ userName: newName });
    this.toggleUser();
  };

  render() {
    const { isActive, userName } = this.state;
    return (
      <div>
        <OptionBtn onClick={this.toggleUser}> {userName} </OptionBtn>
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
              <RenameBtn defaultValue={userName} onChange={this.updateInput} />
              <Submit onClick={this.submitName}> Переименовать </Submit>
            </Body>
          </ContainerUser>
        ) : null}
      </div>
    );
  }
}

export default onClickOutside(UserName);
