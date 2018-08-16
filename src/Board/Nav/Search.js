import React, { Component } from "react";
import styled from "styled-components";
import styledMap from "styled-map";
import onClickOutside from "react-onclickoutside";

const SearchContainer = styled.div`
  position: relative;

  .icon-search {
    display: inline-flex;
    cursor: pointer;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 20px;
    padding: 0 4px;
    right: 0;
    color: ${styledMap({
      default: "white",
      searchHover: "rgba(0, 0, 0, 0.4)"
    })};
    
    &:hover {
      color: ${styledMap({
        searchHover: "rgba(0,0,0,.7)",
        default: "current"
      })}
  }
`;

const SearchField = styled.input`
  min-width: ${styledMap({
    default: "180px",
    searchHover: "400px"
  })};
  background: ${styledMap({
    default: "hsla(0, 0%, 100%, 0.3)",
    searchHover: "white"
  })};
  border-radius: 3px;
  font-weight: 400;
  line-height: 32px;
  user-select: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  color: ${styledMap({
    default: "white",
    searchHover: "#444"
  })};
  height: 32px;
  border: none;
  box-sizing: border-box;
  padding: 5px 25px 5px 5px;
  transition: width 0.15s;

  &:hover {
    opacity: ${styledMap({
      default: "0.8",
      searchHover: "1"
    })};
  }
`;

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: false
    };
  }

  handleClickOutside = () => {
    this.setState({ search: false });
  };

  toggleSearch = () => {
    this.setState({ search: true });
  };

  closeSearchMode = () => {
    this.setState({ search: false });
  };

  render() {
    const { search } = this.state;
    return (
      <React.Fragment>
        {search ? (
          <SearchContainer searchHover>
            <SearchField type="text" searchHover />
            <i
              className="fas fa-times icon-search close"
              onClick={this.closeSearchMode}
            />
          </SearchContainer>
        ) : (
          <SearchContainer onClick={this.toggleSearch}>
            <SearchField type="text" />
            <i className="fas fa-search icon-search" />
          </SearchContainer>
        )}
      </React.Fragment>
    );
  }
}

export default onClickOutside(Search);
