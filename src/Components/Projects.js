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
const ProjDescription = styled.div`
  width: 70%;
  p {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: grey;
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
                <a href="www.manofwar.xyz">MANOFWAR.XYZ</a>
                <img src={mow} />
              </ProjNames>
              <ProjDescription>
                <p>
                  A minimalistic e-commerce website, designed with a
                  minimalsitic theme. Equipped both login and payment
                  functionality.
                </p>
                <ul>
                  <li>
                    Created a sleek, minimalistic design which keeps in mind the
                    ease of user access.
                  </li>
                  <li>Utilizes Auth0 for login functionality</li>
                  <li>Utilizes Stripe for payment functionality</li>
                  <li>
                    Planned updates include order confirmation sent to user's
                    email via nodemailer, added admin access, and mobile
                    responsiveness.
                  </li>
                </ul>
              </ProjDescription>
            </PastThings>
            <PastThings>
              <ProjNames>
                <a href="www.qode.club">QODE.CLUB</a>
                <img src={qode} />
              </ProjNames>
              <ProjDescription>
                <p>
                  Qode is a web application aimed at teaching beginners the
                  basics of html and css.
                </p>
                <ul>
                  <li>
                    Positioned on the front-end within the team, tasked with
                    functionality and design.
                  </li>
                  <li>
                    Created structure of the website utilizing Styled Components
                  </li>
                  <li>
                    Rendered proper information to their matching components
                  </li>
                  <li>Developed page routes and re-directs</li>
                </ul>
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
