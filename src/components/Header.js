import React, { Component } from "react";
import Container from "./../ui/Container";
import {
  Header as HeaderWrapper,
  HeaderLogo,
  HeaderTitle
} from "./../ui/Header";
import logo from "../potato.svg";
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <HeaderLogo src={logo} alt="logo" />{" "}
          <HeaderTitle>Potato Gallery</HeaderTitle>
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;
