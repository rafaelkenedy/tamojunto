import api from "./api";
import {AuthType} from "../@types/types";

const postLogin = async (data: AuthType) => {
	try {
		const response = await api.post("/auth/login", data);
		return {
			user: response.data.user,
			token: response.headers.authorization,
		};
	} catch (e) {
		return false;
	}
};

export {postLogin};
