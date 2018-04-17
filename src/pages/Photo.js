import React, { Component } from "react";
import Container from "./../ui/Container";

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

import FontAwesomeIcon from "@fortawesome/react-fontawesome";

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
              <PhotoHeader>
                <PhotoTitle href={item.link}>
                  <FontAwesomeIcon icon="external-link-alt" /> {item.title}
                </PhotoTitle>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent mattis malesuada urna, a dignissim enim tempor
                    eget. Fusce quis purus sed elit ullamcorper blandit vitae ac
                    elit. Nunc et erat lobortis ex aliquam interdum ac id nisi.
                    Curabitur gravida, neque eu gravida placerat, erat quam
                    tempus sem, vel viverra lacus velit ac massa. Nulla laoreet
                    quis mauris eu venenatis. Sed sagittis sem id tellus
                    placerat, nec rutrum lacus volutpat. Nam id ultricies erat.
                    Curabitur molestie laoreet sapien et luctus. Nullam laoreet
                    ut magna sed commodo. Curabitur fermentum at magna et
                    condimentum. Cras elementum, tellus in sodales lobortis,
                    odio libero egestas metus, quis cursus orci erat tempor
                    odio. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Duis maximus consequat nunc non hendrerit. Praesent
                    tellus odio, dignissim sit amet nulla lacinia, pellentesque
                    elementum felis. Duis fringilla nunc nisi. Nulla nec aliquet
                    neque, et ultrices felis.
                  </p>
                  <Tags tags={item.tags} />
                </PhotoDesc>
              </PhotoDetails>
            </PhotoWrapper>
          )}
        </Container>
      </main>
    );
  }
}

export default Photo;
