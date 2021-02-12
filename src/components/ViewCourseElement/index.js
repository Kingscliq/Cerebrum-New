/** @format */

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
      <div data-video-url={props["data-video-url"]}>
        <ReactPlayer
          data-video-url={props["data-video-url"]}
          url={props["data-video-url"]}
          playing={false}
          controls={false}
          playIcon={<button>Play</button>}
          width="150px"
          height="100px"
        />
      </div>
      <div>
        <h3 data-video-url={props["data-video-url"]}>{props.courseName}</h3>
        <p
          data-video-url={props["data-video-url"]}
        >{`${props.moduleName}: ${props.lessonName}`}</p>
      </div>
      {/* <span data-video-url={props["data-video-url"]}></span> */}
    </div>
  );
}

export { ViewCourseElement };
