import api from "./api";

const getSubjects = async () => {
	try {
		const {data} = await api.get("/subjects");
		return data;
	} catch (e) {
		return e;
	}
};

const getSubjectsById = async (id: string, page: number) => {
	try {
		const {data} = await api.get(
			`/subjects/${id}?order=ASC&page=${page}&take=50`
		);
		return data;
	} catch (e) {
		return e;
	}
};

export {getSubjects, getSubjectsById};
