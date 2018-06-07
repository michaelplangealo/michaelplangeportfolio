import styled from "styled-components";
import React, { Component } from "react";
import ContactInfo from "../Styled/Contacts.js";

const BasicSide = styled.div`
  width: 25vw;
  min-height: 100%;
  background: black;
  color: white;
  display: flex;
  flex-direction: columm;
  justify-content: center;
`;
const BasicSideContainer = styled.div`
  height: 70%;
  width: 100%;
  padding: 20px 20px 20px 20px;
  text-align: center;
`;

// BAR CONTENT
const SideHi = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 69px;
  padding-top: 50px;
`;
const HomeIsDifferent = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 50px;
  padding-top: 50px;
`;

const Hidden = styled.div`
  color: black;
  font-family: "Roboto", sans-serif;
  &:hover {
    color: tomato;
  }
`;
const WhereRU = styled.h2`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

export class HomeSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <HomeIsDifferent>
            hi, i'm michael plange, a front-end web developer in dallas, tx
          </HomeIsDifferent>
          <Hidden>yoo-hoo</Hidden>
          <WhereRU>& this is my website.</WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
          <ContactInfo />
        </BasicSideContainer>
      </BasicSide>
    );
  }
}

export class AboutSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <SideHi>i'm michael plange here too.</SideHi>
          <Hidden>michael plange i am.</Hidden>
          <WhereRU>
            i'm made up of 90% hard work & 10% spongebob quotes.
          </WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
          <ContactInfo />
        </BasicSideContainer>
      </BasicSide>
    );
  }
}

export class WriteSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <SideHi>still michael plange,</SideHi>
          <Hidden>mmmhmm</Hidden>
          <WhereRU>& sometimes i write.</WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
          <ContactInfo />
        </BasicSideContainer>
      </BasicSide>
    );
  }
}

export class CodeSide extends Component {
  render() {
    return (
      <BasicSide>
        <BasicSideContainer>
          <SideHi>i am not not michael plange,</SideHi>
          <Hidden>mmmhmm</Hidden>
          <WhereRU> and this is a bit of my work.</WhereRU>
          <Hidden>please enjoy your stay.</Hidden>
          <ContactInfo />
        </BasicSideContainer>
      </BasicSide>
    );
  }
}
