import api from './api';

const getRecentThreads = async () => {
	try {
		const {data} = await api.get('/threads');
		return data;
	} catch (e) {
		return e;
	}
};

export {getRecentThreads};
