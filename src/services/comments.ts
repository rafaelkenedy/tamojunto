import api from "./api";

const postComment = async (data, token) => {
	try {
		const response = await api.post("/comments", data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response;
	} catch (e) {
		
		return false;
	}
};

export {postComment};
