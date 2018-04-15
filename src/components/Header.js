import React, { Component } from "react";
import Container from "./../ui/Container";
import { Header as HeaderWrapper, Logo } from "./../ui/Header";
import logo from "../potato.svg";
class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Container>
          <Logo src={logo} alt="logo" /> Potato Gallery
        </Container>
      </HeaderWrapper>
    );
  }
}

export default Header;
