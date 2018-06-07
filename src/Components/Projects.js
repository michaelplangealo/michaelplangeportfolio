import React, { Component } from "react";
import styled from "styled-components";
import { CodeSide } from "../Styled/SideBar";
import { Intro } from "../Components/About.js";
import { BetterPage, BetterBody, PageContent } from "./About.js";
import "./Projects.css";
import mow from "./mow.png";
import qode from "./qode.png";
import portfolio from "./portfolio.png";

const ProjCont = styled.div`
  margin: 3%;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 60px;
  background: white;
  width: 90%;
`;
const PastThings = styled.section`
  width: 85%;
  display: flex;
  flex-direction: column;
`;
const ProjNames = styled.h1`
  width: 40%;
  height: 50%;
  & p {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: white;
    text-decoration: underline;
  }
  a {
    background: lightgrey;
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: black;
    text-decoration: none;
    &:hover {
      color: tomato;
    }
  }
  img {
    height: 500px;
  }
`;
const Git = styled.a`
  a {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: black;
    text-decoration: none;
    &:hover {
      color: tomato;
    }
  }
`;
const ProjDescription = styled.div`
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: grey;

  h1 {
    font-size: 15px;
  }
  li {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: grey;
    width: 100%;
  }
`;

export default class Projects extends Component {
  render() {
    return (
      <BetterPage>
        <CodeSide />
        <BetterBody>
          <ProjCont>
            <Intro>These are a few things I've worked on:</Intro>
            <PastThings>
              <ProjNames>
                <a href="www.manofwar.xyz">MANOFWAR.XYZ</a>{" "}
                <Git href="https://github.com/michaelplangealo/persproj">
                  github link{" "}
                </Git>
                <img src={mow} />
              </ProjNames>
              <ProjDescription>
                <h1>
                  An e-commerce website, designed with a minimalsitic theme.
                  Equipped both login and payment functionality.
                </h1>
                <p>
                  This was the first capstone project I completed during my time
                  at DevMountain. It's a full scale web application, utilizing
                  React as the front-end framework, and a heroku hosted database
                  to hold all of the data. I designed it completely from
                  scratch, choosing to opt for a sleeker minimalistic style to
                  give users exactly what they're looking for. The theme is
                  based off of the portuguese man o' war, a member of the
                  Physalia family of organisms, known for being colonial
                  organisms, or organisms composed of many other organisms. I
                  picked this in correlation to React and component based
                  archeticture, seeing as how this app is composed of many other
                  components.
                </p>
                <p>
                  I plan on adding order confirmation via nodemailer, as well as
                  fixing the mobile responsiveness.
                </p>
              </ProjDescription>
            </PastThings>
            <PastThings>
              <ProjNames>
                <a href="www.qode.club">QODE.CLUB</a>
                <img src={qode} />
              </ProjNames>
              <ProjDescription>
                <h1>
                  Qode is a web application aimed at teaching beginners the
                  basics of html and css.
                </h1>
                {/* <h1>
                  Tools utilized : Javascript | React | Node | Express |
                  PostgreSQL | Massive | Lodash | Styled Components | Redux |
                  React-Router | Trello | RESTful APIs | Bcrypt
                </h1> */}
                <p>
                  A group project I was apart of during the tail end of my time
                  at DevMountain. I was posiitoned on the front-end and design.
                  The idea came about when a fellow classmate of mine were
                  reminicising about what our first (of many) problems were on
                  the path to learning code. We decided that we should create
                  the type of resource that we wish we had when we first started
                  out. Designed using purely styled components,
                </p>
              </ProjDescription>
            </PastThings>
            <PastThings>
              <ProjNames>
                <a>MICHAELPLANGE.COM</a>
                <img src={portfolio} />
              </ProjNames>
              <ProjDescription>
                <p>The website you're looking at right now.</p>
                <ul>
                  <li>Kind of like a "the brain named itself" situation.</li>
                </ul>
              </ProjDescription>
            </PastThings>
          </ProjCont>
        </BetterBody>
      </BetterPage>
    );
  }
}
