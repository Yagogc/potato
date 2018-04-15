import React, { Component } from "react";
import Container from "./../ui/Container";

import { Link } from "react-router-dom";

class Photo extends Component {
  render() {
    const { id } = this.props.match.params;
    const item = this.props.items[id];
    console.log(this.props);
    console.log(item);
    return (
      <main>
        <Container>
          Photo {id}
          <Link to="/">Back</Link>
        </Container>
      </main>
    );
  }
}

export default Photo;
