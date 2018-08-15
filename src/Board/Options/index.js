import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import UserName from "./UserName";
import TypeBoard from "./TypeBoard";
import Visibility from "./Visibility";
import OptionBtn from "../../UI/OptionBtn";

const ContainerBoard = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
  position: relative;
`;

const UserWrapper = styled(BtnWrapper)`
  min-width: 120px;
  justify-content: space-between;
  padding: 0 5px 0 5px;
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

const Users = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const User = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 25em;
  list-style: none;
`;

const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 25em;
`;

const CountUser = styled(User)`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ContainerUsers = styled.div`
  display: flex;
  flex-direction: row;
`;

const AddUser = styled(CountUser)`
  .add {
    font-size: 12px;
  }
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
        <UserWrapper>
          <ContainerUsers>
            <Users>
              <User>
                <UserImage src="/img/profile-avatar.png" />
              </User>
            </Users>
            <CountUser>1</CountUser>
          </ContainerUsers>
          <AddUser>
            <i className="fas fa-user-plus add" />
          </AddUser>
        </UserWrapper>
      </ContainerBoard>
    );
  }
}

export default Index;
