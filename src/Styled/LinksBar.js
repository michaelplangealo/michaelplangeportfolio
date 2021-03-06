import styled from "styled-components";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const LinkMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 22%;
  position: fixed;
  right: 10vh;
  top: 5vh;
  box-sizing: border-box;
  background: white;
  opacity: 0.8;
  margin-right: 2px;
`;

const LinkContainer = styled.div`
  height: 3vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  & a {
    color: grey;
    font-size: 15px;
    text-decoration: none;
    &:hover {
      color: tomato;
      transition: all 0.1s ease-in-out;
      transform: scale(1.1);
      font-size: 17px;
    }
  }
  &.strikeMe {
    text-decoration: line-through;
  }
`;

export default class LinkedUp extends Component {
  render() {
    return (
      <LinkMe>
        <LinkContainer>
          <Link to="/">Home</Link>

          <Link to="/About">About</Link>

          <Link to="/Write" className="strikeMe">
            Write
          </Link>

          <Link to="/Projects">Projects</Link>
        </LinkContainer>
      </LinkMe>
    );
  }
}
