/** @format */

import React from "react";

const CommentList = (props) => {
  return (
    <div>
      <ul>
        {props.comments.map((comment) => {
          <li>{comment.description}</li>;
        })}
      </ul>
    </div>
  );
};

export default CommentList;
