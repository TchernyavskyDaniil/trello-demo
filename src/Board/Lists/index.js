import React, { Component } from "react";
import styled from "styled-components";
import List from "./List";
import AddNewList from "./AddNewList";
import axios from "../../axios";

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
      lists: []
    };
  }

  componentDidMount() {
    this.getDataLists();
  }

  componentDidUpdate(prevState) {
    const { lists } = this.state;
    if (prevState.lists !== lists) {
      this.scrollToLastPosition();
    }
  }

  setNewList = newValue => {
    const { lists } = this.state;
    const { id } = this.props;
    const newLists = lists;
    newLists[newLists.length] = { id: newLists.length + 1, title: newValue };
    this.setState({ lists: newLists });
    axios.patch(`/options/${id}`, {
      lists: newLists
    });
  };

  getDataLists = () => {
    const { id } = this.props;
    axios.get(`/options/${id}`).then(response => {
      this.setState({ lists: response.data.lists });
    });
  };

  scrollToLastPosition = () => {
    this.node.scrollIntoView({ behavior: "auto", block: "end" });
  };

  render() {
    const { lists } = this.state;
    const { id } = this.props;

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
              <List list={list} idUser={id} />
            </div>
          ))}
          <AddNewList setNewList={this.setNewList} />
        </ListCard>
      </ContainerCard>
    );
  }
}

export default Lists;
