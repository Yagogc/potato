import React from "react";

import {
  Photo as PhotoWrapper,
  PhotoTitle,
  PhotoLinks,
  PhotoDate,
  PhotoHeader,
  PhotoBack,
  PhotoImg,
  PhotoDesc
} from "../ui/Photo";
import formatedDate from "../utils/date";
import { PhotoDetails } from "./../ui/Photo";
import Tags from "./../components/Tags";
import Lorem from "react-lorem-component";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const Photo = props => {
  const item = props.item;

  return (
    <React.Fragment>
      <PhotoWrapper>
        <PhotoHeader>
          <PhotoTitle href={item.link}>{item.title}</PhotoTitle>
          <PhotoBack to="/">
            <FontAwesomeIcon icon="chevron-left" /> Back
          </PhotoBack>
        </PhotoHeader>
        <PhotoLinks href={"//www.flickr.com/people/" + item.author_id}>
          View Author <FontAwesomeIcon icon="external-link-alt" />
        </PhotoLinks>
        <PhotoDate>Published: {formatedDate(item.published)}</PhotoDate>
        <PhotoDetails>
          <PhotoImg src={item.media.m} />
          <PhotoDesc>
            <Lorem count="2" />
            <Tags tags={item.tags} />
          </PhotoDesc>
        </PhotoDetails>
      </PhotoWrapper>
    </React.Fragment>
  );
};

export default Photo;
