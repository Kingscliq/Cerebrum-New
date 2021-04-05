/** @format */
import React, { useState } from "react";
import { addComment } from "../../api";
import { Button } from "../Button";
import { Loader } from "../Loader";

const Comments = ({ comment, handleCommentSubmit, handleCommentChange }) => {
  // const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  //   const [courseId, setCourseId] = useState('')

  let url_string = window.location.href;
  let url = new URL(url_string);
  var course_id = url.searchParams.get("id");

  return (
    <div style={{ padding: "20px", margin: "20px auto" }}>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          name='comment'
          id=''
          cols='30'
          rows='10'
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
        <br />
        <Button
          className='btn btn-primary'
          text='Add Comment'
          type='submit'
          loadingIcon={loading && <Loader />}
        />
      </form>
    </div>
  );
};

export { Comments };
