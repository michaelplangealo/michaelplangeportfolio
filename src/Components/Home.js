import React, { Component } from "react";
import styled from "styled-components";
import { HomeSide } from "../Styled/SideBar.js";
import { BodyParty, PageBody, Content } from "../Styled/Pages.js";
import "./Home.css";

const KeepMeClose = styled.div`
  height: 90%;
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const HomeHi = styled.h1`
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  line-height: 50px;
  margin-bottom: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 50px;
  width: 80%;
  a {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 50px;
    width: 80%;
    color: tomato;
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }
`;

export default class Home extends Component {
  render() {
    return (
      <PageBody>
        <HomeSide />
        <BodyParty>
          <Content>
            <KeepMeClose>
              <HomeHi>
                my skills include:<br />{" "}
                <a href="https://reactjs.org/">reactJS</a> <br />
                <a href="https://redux.js.org/">reduxJS</a> <br />
                <a href="https://nodejs.org/en/">nodeJS</a>
                <br />
                <a href="https://expressjs.com/">expressJS</a> <br />
                <a href="https://www.postgresql.org/">postgreSQL</a>
              </HomeHi>
              <HomeHi>
                & i am currently learning/practicing: <br />
                <a href="https://threejs.org/">three.js</a> &
                <a href="https://www.blender.org/">blender</a>
              </HomeHi>
            </KeepMeClose>
          </Content>
        </BodyParty>
      </PageBody>
    );
  }
}
