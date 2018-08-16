import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import UserName from "./UserName";
import TypeBoard from "./TypeBoard";
import Visibility from "./Visibility";
import User from "./User";
import OptionBtn from "../../UI/OptionBtn";

const ContainerBoard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
  position: relative;
`;

const Pin = styled(OptionBtn)`
  font-size: 12px;

  .star {
    color: ${styledMap({
      default: "rgba(0,0,0,.7)",
      pinned: "#f2d600"
    })};
  }
`;

const EndWrapper = styled.span`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  height: 16px;
  padding-left: 5px;
  margin-right: 5px;
`;

const CountUsers = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 25em;
  position: absolute;
  left: -4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const AddUser = styled(CountUsers)`
  margin-left: 20px;
  position: relative;

  .add {
    font-size: 12px;
  }
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 140px;
`;

const Users = styled.div`
  padding: 0 0 0 10px;
  display: flex;
  flex-direction: row;
  z-index: 10;
`;

const UserInfo = styled.div`
  position: relative;
  min-width: 70px;
  display: flex;
  justify-content: flex-end;
`;

class Index extends Component {
  constructor() {
    super();
    this.state = {
      pin: false
    };
  }

  getPin = () => {
    this.setState(prevState => ({ pin: !prevState.pin }));
  };

  render() {
    const { pin } = this.state;
    return (
      <ContainerBoard>
        <BtnWrapper>
          <UserName />
          {pin ? (
            <Pin onClick={this.getPin} pinned>
              <i className="far fa-star star" />
            </Pin>
          ) : (
            <Pin onClick={this.getPin}>
              <i className="far fa-star star" />
            </Pin>
          )}
          <EndWrapper />
        </BtnWrapper>
        <BtnWrapper>
          <TypeBoard />
          <EndWrapper />
        </BtnWrapper>
        <BtnWrapper>
          <Visibility />
          <EndWrapper />
        </BtnWrapper>
        <UserContainer>
          <Users>
            <User />
          </Users>
          <UserInfo>
            <CountUsers>1</CountUsers>
            <AddUser>
              <i className="fas fa-user-plus add" />
            </AddUser>
          </UserInfo>
        </UserContainer>
      </ContainerBoard>
    );
  }
}

export default Index;
