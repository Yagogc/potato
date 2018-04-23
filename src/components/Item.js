import React from "react";
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
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
const Item = props => {
  const { item, id } = props;
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
            View Author <FontAwesomeIcon icon="external-link-alt" />
          </CardLinks>
          <CardDate>Published: {formatedDate(item.published)}</CardDate>
          <CardLinks href={item.link}>
            View in Flicker <FontAwesomeIcon icon="external-link-alt" />
          </CardLinks>
        </div>
      </CardDetails>
    </Card>
  );
};

export default Item;
