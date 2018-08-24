import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import onClickOutside from "react-onclickoutside";
import UserModal from "./UserModal";
import { admin } from "../../../utils";

const ListUsers = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Index = styled.li`
  width: 28px;
  height: 28px;
  cursor: pointer;
  border-radius: 25em;
  list-style: none;
  position: relative;

  &::before {
    display: ${styledMap({
      default: "none",
      admin: "block"
    })};
    content: "";
    background-image: url(${admin});
    width: 9px;
    height: 9px;
    background-position: center;
    background-size: 9px;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const UserImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 25em;
`;

const ContainerUsers = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserWrapper = styled.div`
  min-width: 30px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
  position: relative;
`;

class UserPreview extends Component {
  constructor() {
    super();
    this.state = {
      isActivePreview: false,
      userData: {
        picture: "/img/profile-avatar.png"
      }
    };
  }

  componentDidMount() {
    const { preview, user } = this.props;
    this.setState({ userData: user, isActivePreview: preview });
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;

    if (prevProps.user !== user) {
      this.setUserData(user);
    }
  }

  setUserData = data => {
    this.setState({ userData: data });
  };

  handleClickOutside = () => {
    this.setState({ isActivePreview: false });
  };

  showPreview = () => {
    this.setState(prevState => ({
      isActivePreview: !prevState.isActivePreview
    }));
  };

  render() {
    const { isActivePreview, userData } = this.state;
    const { adminUsers, updateData } = this.props;
    return (
      <UserWrapper>
        <ContainerUsers>
          <ListUsers>
            {adminUsers ? (
              <Index onClick={this.showPreview} admin>
                <UserImage src={userData.picture} />
              </Index>
            ) : (
              <Index onClick={this.showPreview}>
                <UserImage src={userData.picture} />
              </Index>
            )}
            {isActivePreview ? (
              <UserModal
                img={userData.picture}
                data={userData}
                preview={isActivePreview}
                updateData={updateData}
              />
            ) : null}
          </ListUsers>
        </ContainerUsers>
      </UserWrapper>
    );
  }
}

export default onClickOutside(UserPreview);
