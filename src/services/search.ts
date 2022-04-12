import api from './api';

const searchQuery = async (query: string) => {
	try {
		const {data} = await api.post(
			`/search?query=${query}&order=ASC&page=1&take=20`
		);
		return data;
	} catch (e) {
		return e;
	}
};

export {searchQuery};
