import React from "react";
import Container from "./../ui/Container";

import { Link } from "react-router-dom";

const NotFound = props => {
  const url = props.match.url;
  return (
    <main>
      <Container>
        We are sorry, but we didn't find <b>{url}</b>.{" "}
        <Link to="/">Go to Homepage</Link>
      </Container>
    </main>
  );
};

export default NotFound;
