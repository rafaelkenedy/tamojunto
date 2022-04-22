import api from "./api";

const getRecentThreads = async () => {
	try {
		const {data} = await api.get("/threads");
		return data;
	} catch (e) {
		return e;
	}
};

const getThreadsById = async (id: string) => {
	try {
		const {data} = await api.get(`/threads/${id}`);
		return data;
	} catch (e) {
		return e;
	}
};

const postThread = async (data) => {
	console.log(data);
	try {
		const response = await api.post("/threads", data);
		return response.data;
	} catch (e) {
		console.log(e.response.data);
		return false;
	}
};

export {getRecentThreads, getThreadsById, postThread};
