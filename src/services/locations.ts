import api from "./api";

const getCities = async (stateId: string) => {
	try {
		const response = await api.get(`/locations/${stateId}`);
		return response.data;
	} catch (e) {
		return false;
	}
};

export {getCities};
