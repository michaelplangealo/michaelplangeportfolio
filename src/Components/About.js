import React, { Component } from "react";
import styled from "styled-components";
import { AboutSide } from "../Styled/SideBar.js";
import "./About.css";

export const BetterPage = styled.body`
  display: flex;
`;

export const BetterBody = styled.div`
  width: 100%;
  height: 100%;
  background: aliceblue;
  display: flex;
  justify-content: center;
`;

export const PageContent = styled.div`
  margin: 3%;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 60px;
  background: white;
`;

export const Intro = styled.h1`
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 20px;
  width: 80%;
  padding-top: 20px;
`;
const Peekaboo = styled.div`
  color: white;
  &:hover {
    color: tomato;
  }
`;
const AboutContent = styled.article`
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 12px;
  width: 80%;
  color: grey;
`;
const LittleQuip = styled.div`
  letter-spacing: 0.2px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 12px;
  width: 80%;
  color: grey;
`;
const NotCute = styled.div`
  letter-spacing: 0.5px;
  text-rendering: optimizeLegibility;
  line-height: 36px;
  margin-bottom: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 15px;
  color: grey;
`;

const Interest = styled.section`
  width: 70%;
  display: flex;
`;
const Topics = styled.h1`
  width: 40%;
  height: 50%;
  & p {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: grey;
    text-decoration: underline;
  }
`;

const Examples = styled.div`
  width: 60%;
  height: 50%;
`;
const ExmpLinks = styled.div`
  height: 100%;
  margin-bottom: 30px;
  p {
    background: #e8e8e8;
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: black;
  }
  a {
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
    line-height: 36px;
    margin-bottom: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: grey;
    text-decoration: none;
    &:hover {
      color: tomato;
    }
  }
`;
const Line = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid white;
  border-bottom: 1px solid lightgrey;
  width: 30%;
`;

export default class About extends Component {
  render() {
    return (
      <BetterPage>
        <AboutSide />
        <BetterBody>
          <PageContent>
            <Intro>
              Hi there. I'm Michael Plange, a Front-End Web Developer based out
              of Dallas, Texas. <Peekaboo>yeehaw</Peekaboo>
            </Intro>
            <LittleQuip>
              Life is a long learning lesson. I try to laugh along the way.
            </LittleQuip>
            <AboutContent>
              I graduated from the University of Texas at Arlington in 2014 with
              a Bachelor of Science in Psychology. I participated in the
              research department during my time there, studying emotions and
              behavior as well as pharmaceutical medicine and it's effect on the
              brain. Lab rats and unwilling research participants were my best
              friends, but in the meantime I fostered my love for anything and
              everything creative. While I was wrapping up my undergrad, I had
              the choice of pursuing either my Masters or PhD, or applying for
              Pharamcy School. It was then I realized that I probably shouldn't
              do either of those things (the last thing the world needs is a bad
              therapist or a bad pharamcist) and decided to turn my attention
              elsewhere. I felt that the best field for me to work in would be a
              field in which I could explore creative possibilities while
              solving a problem, imbued with my own personality. After a bit of
              much needed soul-searching, I applied to DevMountain's Immersive
              Web Development program. And with that, I found myself in the
              field of Web Development, scratching my itch of being both
              creative and practical.
            </AboutContent>

            <NotCute>
              Art and design, and some animating, these are a few of my favorite
              things <span role="img">🎤🎶</span>
              <Peekaboo>Sung to the tune of "Favorite Things".</Peekaboo>
            </NotCute>
            <Interest>
              <Topics>
                <p>HOBBIES / INTEREST:</p>
              </Topics>
              <Examples>
                <ExmpLinks>
                  <p>Three.js</p>{" "}
                  <a href="https://threejs.org/">
                    A way to create high quality 3d animations using javascript
                  </a>
                  <Line />
                  <p>p5.js</p>{" "}
                  <a href="https://p5js.org/">An alternative to three.js</a>
                  <Line />
                  <p>Blender</p>
                  <a href="https://www.blender.org/">
                    An open source animations library
                  </a>
                </ExmpLinks>
              </Examples>
            </Interest>
            <Interest>
              <Topics>
                <p>VIDEOS / PODCAST</p>
              </Topics>
              <Examples>
                <ExmpLinks>
                  <p>The Coding Train</p>
                  <a href="https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw">
                    A channel aimed at creative coding, as well as p5.js
                  </a>
                  <Line />
                  <p>Fun Fun Function</p>
                  <a href="https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q/featured">
                    A lighthearted way to learn the heavy hitting parts of code
                  </a>
                  <Line />
                  <p>Blender Guru </p>
                  <a
                    href="
                  https://www.blenderguru.com/"
                  >
                    Incredibly informative tutorials and disucssion using
                    Blender.
                  </a>
                  <Line />
                  <p>How I Built This</p>
                  <a href="https://www.npr.org/podcasts/510313/how-i-built-this">
                    Informative series discussing the origins of many companies,
                    and how the people behind the scenes started.
                  </a>
                  <Line />
                  <p>NPR Tiny Desk Concerts</p>
                  <a href="https://www.npr.org/series/tiny-desk-concerts/">
                    If you don't like music, not sure if we can be friends.
                  </a>
                </ExmpLinks>
              </Examples>
            </Interest>
          </PageContent>
        </BetterBody>
      </BetterPage>
    );
  }
}
