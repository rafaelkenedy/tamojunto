import api from "./api";

const x = async (data: any) => {
	try {
		const response = await api.post("/x", data);
		return response;
	} catch (e) {
		return e;
	}
};

export {};
