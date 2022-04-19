import api from "./api";

const getSubjects = async () => {
	try {
		const {data} = await api.get("/subjects");
		return data;
	} catch (e) {
		return e;
	}
};

const getSubjectsById = async (id: string) => {
	try {
		const {data} = await api.get(`/subjects/${id}`);
		return data;
	} catch (e) {
		return e;
	}
};

const postSubjects = () => {};

export {getSubjects, getSubjectsById, postSubjects};
