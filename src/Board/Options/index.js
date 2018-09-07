import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import { connect } from "react-redux";
import BoardName from "./BoardName";
import TypeBoard from "./TypeBoard";
import Visibility from "./Visibility";
import Menu from "./Menu";
import CountUsers from "./User/CountUsers";
import User from "./User";
import Add from "./User/Add";
import OptionBtn from "../../UI/OptionBtn";
import getProfiles from "../../actions/profilesAction";

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
      isUpdateData: false
    };
  }

  componentDidMount() {
    const { getProfilesAction } = this.props;
    getProfilesAction();
  }

  componentDidUpdate() {
    const { isUpdateData } = this.state;
    const { getProfilesAction } = this.props;

    if (isUpdateData) {
      getProfilesAction();
      this.updateData();
    }
  }

  setPin = () => {
    this.setState(prevState => ({ isActivePin: !prevState.isActivePin }));
  };

  updateData = () => {
    this.setState(prevProps => ({ isUpdateData: !prevProps.isUpdateData }));
  };

  render() {
    const { isActivePin } = this.state;
    const { id, profiles } = this.props;
    return (
      <ContainerBoard>
        <BtnWrapper>
          <BoardName id={id} />
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
            {profiles.map(profile => (
              <React.Fragment key={profile.id}>
                {profile.accessLevel === "admin" ? (
                  <User
                    user={profile}
                    adminUsers
                    updateData={this.updateData}
                  />
                ) : (
                  <User user={profile} updateData={this.updateData} />
                )}
              </React.Fragment>
            ))}
          </Users>
          <UserInfo>
            <CountUsers users={profiles} updateData={this.updateData} />
          </UserInfo>
          <Add />
        </UserContainer>
        <Menu />
      </ContainerBoard>
    );
  }
}

const mapStateToProps = store => ({
  profiles: store.profiles.profiles
});

const mapDispatchToProps = dispatch => ({
  getProfilesAction: () => dispatch(getProfiles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
