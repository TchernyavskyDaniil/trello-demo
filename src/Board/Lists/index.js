import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import List from "./List";
import AddNewList from "./AddNewList";
import axios from "../../axios";
import getLists from "../../actions/listsAction";

const ListCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding-bottom: 8px;
  margin-bottom: 8px;
  height: 95%;
`;

const ContainerCard = styled.div`
  position: relative;
  height: 100%;
`;

class Lists extends Component {
  constructor() {
    super();
    this.state = {
      listsLocal: []
    };
  }

  componentDidMount() {
    const { getListsActions, id } = this.props;
    getListsActions(id);
  }

  componentDidUpdate(prevProps) {
    const { listsLocal } = this.state;
    if (prevProps.lists !== listsLocal) {
      this.scrollToLastPosition();
    }
  }

  setNewList = newValue => {
    const { id, lists } = this.props;
    const newLists = lists;

    newLists[newLists.length] = {
      id: newLists.length + 1,
      title: newValue,
      cards: []
    };

    this.setState({ listsLocal: newLists }); // ????

    axios.patch(`/options/${id}`, {
      lists: newLists
    });
  };

  scrollToLastPosition = () => {
    if (this.node) {
      this.node.scrollIntoView({ behavior: "auto", block: "end" });
    }
  };

  render() {
    const { id, lists } = this.props;

    return (
      <ContainerCard>
        <ListCard>
          {lists.map(list => (
            <div
              ref={node => {
                this.node = node;
              }}
              key={list.id}
            >
              <List list={list} lists={lists} idUser={id} />
            </div>
          ))}
          <AddNewList setNewList={this.setNewList} />
        </ListCard>
      </ContainerCard>
    );
  }
}

const mapStateToProps = store => ({
  lists: store.lists.lists
});

const mapDispatchToProps = dispatch => ({
  getListsActions: id => dispatch(getLists(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
