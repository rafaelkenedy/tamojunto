import api from "./api";

const getRecentThreads = async (page) => {
	try {
		const {data} = await api.get(`/threads?order=ASC&page=${page}&take=50`);
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

const postThread = async (data, token) => {
	try {
		const response = await api.post("/threads", data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (e) {
		return false;
	}
};

export {getRecentThreads, getThreadsById, postThread};
