import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardDetails,
  CardTitle,
  CardDate,
  CardLinks
} from "./../ui/Card";

import formatedDate from "../utils/date";

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card>
        <CardImg bg={item.media.m} />
        <CardDetails>
          <CardTitle>{item.title}</CardTitle>
          <CardDate>Published: {formatedDate(item.published)}</CardDate>
          <CardLinks href={"//www.flickr.com/people/" + item.author_id}>
            View Author
          </CardLinks>
          <CardLinks href={item.link}>View in Flicker</CardLinks>
        </CardDetails>
      </Card>
    );
  }
}

export default Item;
