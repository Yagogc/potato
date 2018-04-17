import styled from "styled-components";
import { Link } from "react-router-dom";

export const TagWrapper = styled.div`
  width: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const TagTitle = styled.span`
  margin: 3px;
  padding: 2px 5px;
  flex: 1;
  display: inline-block;
  font-weight: bold;
  white-space: nowrap;
  color: rebeccapurple;
`;

export const TagItem = TagTitle.extend`
  background: transparent;
  text-align: center;
  border-radius: 2px;
  border: 1px solid rebeccapurple;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rebeccapurple;
    color: white;
  }
`;
