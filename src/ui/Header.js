import styled, { keyframes } from "styled-components";
import Container from "./Container";

const logoAnim = keyframes`
  0 {
    transform: rotate(-25deg);
  }
  50% {
    transform: rotate(25deg);
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
  margin-right: 10px;
  animation: ${logoAnim} 3s linear infinite;
`;
