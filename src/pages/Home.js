import React, { Component } from "react";
import Container from "./../ui/Container";
import {
  Card,
  CardImg,
  CardDetails,
  CardTitle,
  CardDate,
  CardLinks
} from "./../ui/Card";
class Home extends Component {
  render() {
    console.log(this.props.items);
    const { items } = this.props;
    return (
      <main>
        <Container>
          {items &&
            items.map((item, i) => (
              <Card key={i}>
                <CardImg bg={item.media.m} />
                <CardDetails>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDate>Published: {item.published}</CardDate>
                  <CardLinks href={item.author_id}>View Author</CardLinks>
                  <CardLinks href={item.link}>View in Flicker</CardLinks>
                </CardDetails>
              </Card>
            ))}
        </Container>
      </main>
    );
  }
}

export default Home;
