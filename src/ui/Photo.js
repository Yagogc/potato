import styled from "styled-components";
import { Link } from "react-router-dom";

export const Photo = styled.article`
  width: 100%;
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 4px;
  transition: all 0.2s ease-in-out;
  @media (min-width: 800px) {
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 0 0 0 4px;
    }
  }
`;

export const PhotoImg = styled.img`
  align-self: flex-start;
  max-width: 100%;
  margin: 0 auto 15px;
  @media (min-width: 800px) {
    max-width: 200px;
  }
`;

export const PhotoDetails = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
export const PhotoDesc = styled.div`
  p {
    margin-bottom: 15px;
  }
  @media (min-width: 800px) {
    margin-left: 15px;
  }
`;

export const PhotoHeader = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const PhotoTitle = styled.a`
  font-size: 20px;
  text-decoration: none;
  flex-grow: 1;
  margin-bottom: 15px;
  color: black;
  font-size: 1.5rem;
  &:hover {
    color: rebeccapurple;
  }
  @media (min-width: 800px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    order: auto;
  }
`;
export const PhotoBack = styled(Link)`
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 10px;
  font-size: 20px;
  text-decoration: none;
  align-self: flex-end;
  @media (min-width: 800px) {
    order: auto;
  }
`;

export const PhotoDate = styled.span`
  width: 100%;
  display: block;
  margin-bottom: 10px;
  font-style: italic;
  font-size: 12px;
  margin-right: 10px;
  @media (min-width: 800px) {
    display: inline-block;
    width: auto;
    order: auto;
  }
`;

export const PhotoLinks = styled.a`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 10px;
  font-size: 12px;
  position: relative;
  text-decoration: none;
  color: rebeccapurple;

  @media (min-width: 800px) {
    order: auto;
    &:after {
      content: "";
      position: absolute;
      right: -10px;
      top: 50%;
      height: 80%;
      transform: translateY(-50%);
      width: 1px;
      background: black;
      opacity: 0.3;
    }
    &:before {
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
      &:before {
        max-width: 100%;
      }
    }
  }
`;
