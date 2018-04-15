import React, { Component } from "react";
import Container from "./../ui/Container";

import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <main>
        <Container>
          Not Found <Link to="/">Back</Link>
        </Container>
      </main>
    );
  }
}

export default NotFound;
