import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, spacing, fontSize } from "./variables";

export const Photo = styled.article`
  width: 100%;
  background: white;
  padding: ${spacing.padding};
  margin-bottom: ${spacing.margin};
  overflow: hidden;
  box-shadow: ${color.shadow01} 0 0 0 4px;
  transition: all 0.2s ease-in-out;
  @media (min-width: 800px) {
    &:hover {
      box-shadow: ${color.shadow02} 0 0 0 4px;
    }
  }
`;

export const PhotoImg = styled.img`
  align-self: flex-start;
  max-width: 100%;
  margin: 0 auto ${spacing.margin};
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
    color: ${color.text01};
    margin-bottom: ${spacing.margin};
  }
  @media (min-width: 800px) {
    margin-left: ${spacing.margin};
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
  text-decoration: none;
  flex-grow: 1;
  margin-bottom: ${spacing.margin};
  color: black;
  font-size: ${fontSize.big};
  color: ${color.text01};
  &:hover {
    color: ${color.text03};
  }
  @media (min-width: 800px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    order: auto;
  }
`;
export const PhotoBack = styled(Link)`
  color: ${color.text01};
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: ${spacing.margin};
  margin-left: ${spacing.margin};
  font-size: ${fontSize.big};
  text-decoration: none;
  align-self: flex-end;
  @media (min-width: 800px) {
    order: auto;
    &:hover {
      color: ${color.text03};
    }
  }
`;

export const PhotoDate = styled.span`
  width: 100%;
  display: block;
  margin-bottom: ${spacing.margin};
  font-style: italic;
  font-size: ${fontSize.small};
  color: ${color.text01};
  @media (min-width: 800px) {
    display: inline-block;
    width: auto;
    order: auto;
  }
`;

export const PhotoLinks = styled.a`
  display: inline-block;
  margin-right: 20px;
  margin-bottom: ${spacing.margin};
  font-size: ${fontSize.small};
  position: relative;
  text-decoration: none;
  color: ${color.text01};

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
      &:before {
        max-width: 100%;
      }
    }
  }
`;
