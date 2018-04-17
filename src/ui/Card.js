import styled from "styled-components";
import { Link } from "react-router-dom";
import { PhotoLinks } from "./Photo";

export const Card = styled.article`
  width: 100%;
  background: white;
  display: flex;
  margin: 15px 0;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 4px;
  transition: all 0.2s ease-in-out;
  @media (min-width: 800px) {
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 4px;
    }
  }
`;

export const CardImg = styled(Link)`
  background-image: url(${props => (props.bg ? props.bg : "")});
  min-width: 100px;
  min-height: 100%;
  background-size: cover;
  background-position: center;
  box-shadow: inset rgba(0, 0, 0, 0.5) -5px 0 4px -3px;
  @media (min-width: 800px) {
    min-width: 150px;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: color 0.2s ease;
  overflow: hidden;
  &:hover {
    color: rebeccapurple;
  }
`;

export const CardDetails = styled.div`
  flex-grow: 1;
  padding: 15px;
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
    background: #f4ebff;
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
  margin-bottom: 15px;
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
  font-size: 12px;
  order: 3;
  text-decoration: none;
  position: relative;
  color: rebeccapurple;
  font-weight: bold;

  @media (min-width: 800px) {
    order: auto;
    &:after {
      content: "";
      position: absolute;
      background: rebeccapurple;
      width: 100%;
      max-width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      transition: max-width 0.2s ease-in-out;
    }
    &:hover {
      &:after {
        max-width: 100%;
      }
    }
  }
`;
