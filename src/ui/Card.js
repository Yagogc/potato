import styled from "styled-components";

export const Card = styled.article`
  width: 100%;
  background: white;
  display: flex;
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

export const CardImg = styled.div`
  background-image: url(${props => (props.bg ? props.bg : "")});
  min-width: 100px;
  min-height: 100%;
  background-size: cover;
  background-position: center;
  @media (min-width: 800px) {
    min-width: 150px;
  }
`;

export const CardDetails = styled.div`
  flex-grow: 1;
  padding: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
  }
`;

export const CardTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
  order: 1;
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
  }
`;

export const CardLinks = styled.a`
  margin-right: 10px;
  font-size: 12px;
  order: 3;
  @media (min-width: 800px) {
    order: auto;
  }
`;
