import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 200;
`;

const UserWrapper = styled(BtnWrapper)`
  min-width: 120px;
  justify-content: space-between;
  padding: 0 5px 0 5px;
`;

const Nick = styled.button`
  border: none;
  cursor: default;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.7);
`;

const Pin = styled(Nick)`
  font-size: 12px;
`;

const TypeInfo = styled(Nick)`
  font-size: 14px;
  font-weight: 400;
`;

const EndWrapper = styled.span`
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  height: 16px;
  padding-left: 5px;
  margin-right: 5px;
`;

const TypeBoard = styled(Nick)`
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 110px;
  justify-content: space-between;
  font-weight: 400;

  .lock {
    font-size: 12px;
  }
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

export default () => (
  <Container>
    <BtnWrapper>
      <Nick> Some nick </Nick>
      <Pin>
        <i className="far fa-star" />
      </Pin>
      <EndWrapper />
    </BtnWrapper>
    <BtnWrapper>
      <TypeInfo> Персональная </TypeInfo>
      <EndWrapper />
    </BtnWrapper>
    <BtnWrapper>
      <TypeBoard>
        {" "}
        <i className="fas fa-lock lock" />
        Приватная{" "}
      </TypeBoard>
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
  </Container>
);
