export default {

	getBars: async () => {
		let response = await fetch(
			process.env.REACT_APP_REST_API
		);
		let json = await response.json();
		return json;
	}

}