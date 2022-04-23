import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
	name: "handleUserChoices",
	initialState: {
		nightMode: false,
		loading: false,
		search: false,
		theme: "",
		register: {},
		user: {},
		logged: false,
		token: "",
		owner: "",
	},
	reducers: {
		darkMode: (state, {payload}) => {
			state.nightMode = payload;
		},
		startLoading: (state, {payload}) => {
			state.loading = payload;
		},
		searchAction: (state, {payload}) => {
			state.search = payload;
		},
		setTheme: (state, {payload}) => {
			state.theme = payload;
		},
		setData: (state, {payload}) => {
			state.register = {...state.register, ...payload};
		},
		setUserData: (state, {payload}) => {
			state.user = payload;
		},
		setLogged: (state, {payload}) => {
			state.logged = payload;
		},
		setToken: (state, {payload}) => {
			state.token = payload;
		},
		setOwner: (state, {payload}) => {
			state.owner = payload;
		},
	},
});

export const {
	darkMode,
	startLoading,
	searchAction,
	setTheme,
	setData,
	setUserData,
	setLogged,
	setToken,
	setOwner,
} = user.actions;
export default user.reducer;
