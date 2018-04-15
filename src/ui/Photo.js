import styled from "styled-components";
import { Link } from "react-router-dom";

export const Photo = styled.article`
  width: 100%;
  background: white;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px 0px;
  transition: all 0.2s ease-in-out;
  @media (min-width: 800px) {
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 6px 2px;
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
  @media (min-width: 800px) {
    order: auto;
  }
`;
