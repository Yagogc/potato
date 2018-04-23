import styled from "styled-components";
import { Link } from "react-router-dom";
import { color, fontSize } from "./variables";

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
  color: ${color.text02};
  font-size: ${fontSize.small};
`;

export const TagItem = TagTitle.extend`
  background: transparent;
  text-align: center;
  border-radius: 2px;
  border: 1px solid ${color.text02};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: ${color.text03};
    border-color: ${color.text03};
    color: white;
  }
`;
