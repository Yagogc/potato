import React from "react";
import Container from "./../ui/Container";
import {
  Header as HeaderWrapper,
  HeaderLogo,
  HeaderTitle
} from "./../ui/Header";
import logo from "../potato.svg";
const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderLogo src={logo} alt="logo" />{" "}
        <HeaderTitle to="/" role="heading" aria-level="1">
          Potato Gallery
        </HeaderTitle>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
