import React, { Component } from "react";
import Container from "./../ui/Container";

import { Link } from "react-router-dom";
import {
  Photo as PhotoWrapper,
  PhotoTitle,
  PhotoLinks,
  PhotoDate
} from "../ui/Photo";
import formatedDate from "../utils/date";
class Photo extends Component {
  render() {
    const { id } = this.props.match.params;
    const item = this.props.items[id];

    console.log(this.props);
    console.log(item);
    return (
      <main>
        <Container>
          {item && (
            <PhotoWrapper>
              <PhotoTitle> {item.title}</PhotoTitle>
              <PhotoLinks href={"//www.flickr.com/people/" + item.author_id}>
                View Author
              </PhotoLinks>
              Photo {id}
              <PhotoDate>Published: {formatedDate(item.published)}</PhotoDate>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
              <Link to="/">Back</Link>
            </PhotoWrapper>
          )}
        </Container>
      </main>
    );
  }
}

export default Photo;
