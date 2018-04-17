import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardLink,
  CardDetails,
  CardTitle,
  CardDate,
  CardLinks,
  CardHeader
} from "./../ui/Card";

import formatedDate from "../utils/date";

class Item extends Component {
  render() {
    const { item, id } = this.props;
    return (
      <Card>
        <CardImg to={`/photo/${id}`} bg={item.media.m} />
        <CardDetails>
          <CardHeader>
            <CardLink to={`/photo/${id}`}>
              <CardTitle>{item.title}</CardTitle>
            </CardLink>
          </CardHeader>
          <div>
            <CardLinks href={"//www.flickr.com/people/" + item.author_id}>
              View Author
            </CardLinks>
            <CardDate>Published: {formatedDate(item.published)}</CardDate>
            <CardLinks href={item.link}>View in Flicker</CardLinks>
          </div>
        </CardDetails>
      </Card>
    );
  }
}

export default Item;
