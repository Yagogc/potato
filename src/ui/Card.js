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
  min-width: 150px;
  background-size: cover;
  background-position: center;
  @media (min-width: 800px) {
  }
`;

export const CardDetails = styled.div`
  flex-grow: 1;
  padding: 5px;
  overflow: hidden;
  @media (min-width: 800px) {
  }
`;

export const CardTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 800px) {
  }
`;

export const CardDate = styled.span`
  width: 100%;
  display: block;
  @media (min-width: 800px) {
  }
`;

export const CardLinks = styled.a`
  @media (min-width: 800px) {
  }
`;
