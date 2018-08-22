import React, { Component } from "react";
import styled from "styled-components";
import { getData, setData } from "../../fakeApi";
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
      lists: [],
      defaultLists: [
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

  componentDidMount() {
    this.updateData();
  }

  async componentDidUpdate(prevState) {
    const { lists } = this.state;
    if (prevState.lists !== lists) {
      this.scrollToLastPosition();
    }
  }

  setNewList = newValue => {
    const { lists } = this.state;
    const newLists = lists;
    newLists[newLists.length] = { id: newLists.length + 1, title: newValue };
    setData("lists", JSON.stringify(newLists));
    this.setState({ lists: newLists });
  };

  scrollToLastPosition = () => {
    this.node.scrollIntoView({ behavior: "auto", block: "end" });
  };

  updateData = async () => {
    const { defaultLists } = this.state;
    const listsData = await getData("lists");
    if (listsData !== null) {
      this.setState({ lists: listsData });
    } else {
      setData("lists", defaultLists);
    }
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
              <List
                title={list.title}
                id={list.id}
                updateData={this.updateData}
              />
            </div>
          ))}
          <AddNewList setNewList={this.setNewList} />
        </ListCard>
      </ContainerCard>
    );
  }
}

export default Lists;
