import api from "./api";
import {PostUserType} from "../@types/types";

const postUser = async (data: PostUserType) => {
	console.log(data);
	try {
		const response = await api.post("/users", data);
		return response;
	} catch (e) {
		return e;
	}
};

export {postUser};
