import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, spacing, fontSize } from "./variables";

export const Card = styled.article`
  width: 100%;
  background: white;
  display: flex;
  margin: ${spacing.margin} 0;
  overflow: hidden;
  box-shadow: ${color.shadow01} 0 0 0 4px;
  transition: all 0.2s ease-in-out;
  @media (min-width: 800px) {
    &:hover {
      box-shadow: ${color.shadow02} 0 0 0 4px;
    }
  }
`;

export const CardImg = styled(Link)`
  background-image: url(${props => (props.bg ? props.bg : "")});
  min-width: 100px;
  min-height: 100%;
  background-size: cover;
  background-position: center;
  box-shadow: inset ${color.shadow03} -5px 0 4px -3px;
  @media (min-width: 800px) {
    min-width: 150px;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${color.text01};
  transition: color 0.2s ease;
  overflow: hidden;
  &:hover {
    color: ${color.text03};
  }
`;

export const CardDetails = styled.div`
  flex-grow: 1;
  padding: ${spacing.padding};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 800px) {
  }
`;

export const CardHeader = styled.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    background: ${color.ui02};
    width: calc(100% + 45px);
    height: calc(100% + 30px);
    top: -35px;
    left: -15px;
    transform: rotate(2deg);
    @media (min-width: 800px) {
      transform: rotate(2deg);
    }
  }
`;

export const CardTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: ${spacing.margin};
  position: relative;
  z-index: 2;
  @media (min-width: 800px) {
    order: auto;
  }
`;

export const CardDate = styled.span`
  width: 100%;
  display: block;
  margin-bottom: 10px;
  font-style: italic;
  font-size: 12px;
  margin-right: 10px;
  order: 2;
  @media (min-width: 800px) {
    display: inline-block;
    width: auto;
    order: auto;
    margin-bottom: 0;
  }
`;

export const CardLinks = styled.a`
  margin-right: 10px;
  font-size: ${fontSize.small};
  order: 3;
  text-decoration: none;
  position: relative;
  color: ${color.text01};
  font-weight: bold;

  @media (min-width: 800px) {
    order: auto;
    &:after {
      content: "";
      position: absolute;
      background: ${color.text03};
      width: 100%;
      max-width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      transition: max-width 0.2s ease-in-out;
    }
    &:hover {
      color: ${color.text03};
      &:after {
        max-width: 100%;
      }
    }
  }
`;
