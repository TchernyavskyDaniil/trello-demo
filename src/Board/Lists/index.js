import React, { Component } from "react";
import styled from "styled-components";
import List from "./List";
import AddNewList from "./AddNewList";

const ListCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
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

  getNewLists = newLists => {
    this.setState({ lists: newLists });
  };

  render() {
    const { lists } = this.state;
    return (
      <ListCard>
        {lists.map(list => (
          <List title={list.title} key={list.id} />
        ))}
        <AddNewList
          length={lists.length}
          lists={lists}
          getNewLists={this.getNewLists}
        />
      </ListCard>
    );
  }
}

export default Lists;
