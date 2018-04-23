import React from "react";
import Container from "./../ui/Container";
import Item from "../components/Item";

const Home = props => {
  const { items } = props;
  return (
    <main>
      <Container>
        {items && items.map((item, i) => <Item item={item} id={i} key={i} />)}
      </Container>
    </main>
  );
};

export default Home;
