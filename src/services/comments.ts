import api from './api';

const postComment = async (data: any) => {
	try {
		const response = await api.post('/comments', data);
		return response;
	} catch (e) {
		return e;
	}
};

export {postComment};
