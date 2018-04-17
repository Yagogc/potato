import React, { Component } from "react";
import { TagWrapper, TagItem, TagTitle } from "./../ui/Tags";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Tags extends Component {
  render() {
    let { tags } = this.props;
    tags = tags.split(" ");
    return (
      <TagWrapper>
        <TagTitle>
          <FontAwesomeIcon icon="tags" /> Tags:
        </TagTitle>
        {tags.map((tag, i) => <TagItem key={i}>{tag}</TagItem>)}
      </TagWrapper>
    );
  }
}

export default Tags;
