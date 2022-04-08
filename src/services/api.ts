import axios from 'axios';

const api = axios.create({
	baseURL: 'https://camp-tamojunto.herokuapp.com/',
});

export default api;
