import styled from "styled-components";
import { spacing } from "./variables";

const Container = styled.div`
  margin: 0 auto;
  padding: ${spacing.padding};
  width: 100%;

  @media (min-width: 800px) {
    max-width: 800px;
  }
`;

export default Container;
