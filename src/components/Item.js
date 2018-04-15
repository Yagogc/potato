import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardDetails,
  CardTitle,
  CardDate,
  CardLinks
} from "./../ui/Card";

import moment from "moment";

class Item extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card>
        <CardImg bg={item.media.m} />
        <CardDetails>
          <CardTitle>{item.title}</CardTitle>
          <CardDate>
            Published:
            {moment(item.published).format(" Do MMMM YY [at] HH:MM")}
          </CardDate>
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
