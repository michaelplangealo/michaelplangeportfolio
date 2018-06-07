import React from "react";
import styled from "styled-components";

const ContactMe = styled.div`
  height: 15%;
  width: 100%;
  text-align: center;
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 12px;
  }
  a {
    color: white;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 12px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
      color: tomato;
    }
  }
  div {
    width: 73%;
    display: flex;
    justify-content: space-around;
  }
  span {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
`;

const ContactInfo = () => {
  return (
    <ContactMe>
      <div>
        <span className="fas fa-envelope-open" />
        <a href="mailto:michaelpplange@gmail.com">michaepplange@gmail.com</a>
      </div>
      <span>
        <span className="fab fa-linkedin" />
        <a href="https://www.linkedin.com/in/michaelplange/">
          /in/michaelplange
        </a>
      </span>
      <div>
        <i className="fab fa-github" />
        <a href="https://github.com/michaelplangealo">
          github.com/michaelplangealo
        </a>
      </div>
    </ContactMe>
  );
};

export default ContactInfo;
