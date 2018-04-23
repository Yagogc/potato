import React, { Component } from "react";
import Container from "./../ui/Container";
import Item from "../components/Item";

class Home extends Component {
  render() {
    const { items } = this.props;
    return (
      <main>
        <Container>
          {items && items.map((item, i) => <Item item={item} id={i} key={i} />)}
        </Container>
      </main>
    );
  }
}

export default Home;
