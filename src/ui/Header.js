import styled, { keyframes } from "styled-components";
import Container from "./Container";

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
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  max-height: 50px;
  ${Container} {
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  display: inline-block;
  height: 30px;
  margin-right: 15px;
  animation: ${logoAnim} 5s linear infinite;
  transform-origin: bottom;
`;
