import styled, { keyframes } from "styled-components";
import Container from "./Container";

import { spacing, fontSize, color } from "./variables";
import { Link } from "react-router-dom";

const logoAnim = keyframes`
  0 {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
`;

export const Header = styled.header`
  background-color: #2c242e;
  text-align: center;
  ${Container} {
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderLogo = styled.img`
  display: inline-block;
  height: 30px;
  margin-right: ${spacing.margin};
  animation: ${logoAnim} 5s linear infinite;
  transform-origin: bottom;
`;

export const HeaderTitle = styled(Link)`
  font-weight: bold;
  font-size: ${fontSize.big};
  max-height: 50px;
  color: ${color.brand01};
  text-decoration: none;
`;
