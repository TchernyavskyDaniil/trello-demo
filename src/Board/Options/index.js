import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import UserName from "./User/UserName";
import TypeBoard from "./TypeBoard";
import Visibility from "./Visibility";
import Menu from "./Menu";
import CountUsers from "./User/CountUsers";
import User from "./User/User";
import Add from "./User/Add";
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

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 70px;
  position: relative;
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
      isActivePin: false,
      img: "/img/profile-avatar.png"
    };
  }

  setPin = () => {
    this.setState(prevState => ({ isActivePin: !prevState.isActivePin }));
  };

  render() {
    const { isActivePin, img } = this.state;
    return (
      <ContainerBoard>
        <BtnWrapper>
          <UserName />
          {isActivePin ? (
            <Pin onClick={this.setPin} pinned>
              <i className="far fa-star star" />
            </Pin>
          ) : (
            <Pin onClick={this.setPin}>
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
            <User img={img} />
          </Users>
          <UserInfo>
            <CountUsers img={img} />
          </UserInfo>
          <Add />
        </UserContainer>
        <Menu />
      </ContainerBoard>
    );
  }
}

export default Index;
