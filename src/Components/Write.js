import styled from "styled-components";
import React, { Component } from "react";
import { WriteSide } from "../Styled/SideBar.js";
import { BodyParty, PageBody, Content } from "../Styled/Pages.js";
import "./Write.css";

export default class Write extends Component {
  render() {
    return (
      <PageBody>
        <WriteSide />
        <BodyParty>
          <Content>coming soon</Content>
        </BodyParty>
      </PageBody>
    );
  }
}
