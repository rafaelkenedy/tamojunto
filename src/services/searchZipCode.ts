import api from "./api";

const getZipCodeData = async (zipcode: string) => {
	try {
		const {data} = await api.get(`http://viacep.com.br/ws/${zipcode}/json/`);
		return data;
	} catch (e) {
		return false;
	}
};

export {getZipCodeData};
