import axios from "axios";

//All Courses Api
const getLessons = async (courseId) => {
	try {
		let runRequest = await axios.get(`/course/view/${courseId}`);

		let returnedData = await runRequest.data.data;

		console.log(returnedData);
		return returnedData;
	} catch (e) {
		console.log("Error:", e.response);
	}
};

export { getLessons };
