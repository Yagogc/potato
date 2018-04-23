import React from "react";
import { TagWrapper, TagItem, TagTitle } from "./../ui/Tags";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const Tags = props => {
  let { tags } = props;
  tags = tags.split(" ");
  return (
    <TagWrapper>
      <TagTitle>
        <FontAwesomeIcon icon="tags" /> Tags:
      </TagTitle>
      {tags.map((tag, i) => <TagItem key={i}>{tag}</TagItem>)}
    </TagWrapper>
  );
};

export default Tags;
