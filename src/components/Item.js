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
import { Link } from "react-router-dom";

class Item extends Component {
  render() {
    const { item, id } = this.props;
    return (
      <Card>
        <CardImg bg={item.media.m} />
        <CardDetails>
          <Link to={`/photo/${id}`}>
            <CardTitle>{item.title}</CardTitle>
          </Link>
          <CardLinks href={"//www.flickr.com/people/" + item.author_id}>
            View Author
          </CardLinks>
          <CardDate>Published: {formatedDate(item.published)}</CardDate>
          <CardLinks href={item.link}>View in Flicker</CardLinks>
        </CardDetails>
      </Card>
    );
  }
}

export default Item;
