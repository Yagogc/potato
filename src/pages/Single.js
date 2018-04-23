import React from "react";
import Container from "./../ui/Container";

import Photo from "../components/Photo";

const Single = props => {
  const { id } = props.match.params;
  const item = props.items[id];

  return (
    <main>
      <Container>{item && <Photo item={item} />}</Container>
    </main>
  );
};

export default Single;
