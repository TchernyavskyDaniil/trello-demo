import React, { Component } from "react";
import styled from "styled-components";
import List from "./List";
import AddNewList from "./AddNewList";

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
      lists: [
        {
          id: 1,
          title: "Делаем шо - та"
        },
        {
          id: 2,
          title: "И тут тоже"
        },
        {
          id: 3,
          title: "А тут думаем что завершили"
        },
        {
          id: 4,
          title: "А тут продолжаем"
        }
      ]
    };
  }

  componentDidUpdate(prevState) {
    const { lists } = this.state;
    if (prevState.lists !== lists) {
      this.getLastPosition();
    }
  }

  getNewLists = newLists => {
    this.setState({ lists: newLists });
  };

  getLastPosition = () => {
    this.node.scrollIntoView({ behavior: "auto", block: "end" });
  };

  render() {
    const { lists } = this.state;
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
              <List title={list.title} />
            </div>
          ))}
          <AddNewList
            length={lists.length}
            lists={lists}
            getNewLists={this.getNewLists}
          />
        </ListCard>
      </ContainerCard>
    );
  }
}

export default Lists;
