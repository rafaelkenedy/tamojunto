import api from "./api";
import {PostUserType} from "../@types/types";

const postUser = async (data: PostUserType) => {
	try {
		const response = await api.post("/users", data);
		return response.data;
	} catch (e) {
		return e.response;
	}
};

export {postUser};
