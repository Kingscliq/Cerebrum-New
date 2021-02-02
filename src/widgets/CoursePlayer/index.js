import React from "react";
import ReactPlayer from "react-player";

const CoursePlayer = (props) => {
	// console.log(props.preview);
	return (
		<>
			<div className="main-view-img d-flex justify-content-center align-items-center">
				<div>
					<ReactPlayer
						className="react-player"
						url={`https://res.cloudinary.com/codeangelic/video/upload/v1611738487/cerebrum/lessons/ce7tmefwhlbaxc0udku0.mp4`}
						playing={true}
						controls={true}
						width="100%"
						height="100%"
					/>
				</div>
			</div>
		</>
	);
};

export { CoursePlayer };
