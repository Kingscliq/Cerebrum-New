import axios from "axios";

//View Course Api
const paymentConfirmation = async (data, history, courseId, setWatchCourse) => {
	try {
		let runRequest = await axios.post(`/payment/confirm/`, data);

		let returnedData = await runRequest.data.data;

		return returnedData;
	} catch (err) {
		console.log(err.response.data.success);
		history.push(`/buycourse?id=${courseId}`);
		setWatchCourse(false);
	}
};

export { paymentConfirmation };
