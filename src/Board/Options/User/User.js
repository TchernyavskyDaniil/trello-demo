import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import UserModal from "./UserModal";

const ListUsers = styled.ul`
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
      userPreview: false
    };
  }

  componentDidMount() {
    const { preview } = this.props;
    this.setState({ userPreview: preview });
  }

  handleClickOutside = () => {
    this.setState({ userPreview: false });
  };

  showPreview = () => {
    this.setState(prevState => ({ userPreview: !prevState.userPreview }));
  };

  render() {
    const { userPreview } = this.state;
    const { img } = this.props;
    return (
      <UserWrapper>
        <ContainerUsers>
          <ListUsers>
            <User onClick={this.showPreview}>
              <UserImage src={img} />
            </User>
            {userPreview ? <UserModal img={img} preview={userPreview} /> : null}
          </ListUsers>
        </ContainerUsers>
      </UserWrapper>
    );
  }
}

export default onClickOutside(UserPreview);
