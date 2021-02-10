import React from "react";
import ReactPlayer from "react-player/lazy";
import "./ViewCourseElement.css";

function ViewCourseElement(props) {
  return (
    <div
      data-video-url={props["data-video-url"]}
      onClick={props.onClick}
      className="aside-video"
    >
      <div>
        <ReactPlayer
          url={props["data-video-url"]}
          playing={false}
          controls={false}
          playIcon={<button>Play</button>}
          width="150px"
          height="100px"
        />
      </div>
      <div>
        <h3>The Story of Art</h3>
        <p>Module 1: Basics</p>
      </div>
      <span></span>
    </div>
  );
}

export { ViewCourseElement };
