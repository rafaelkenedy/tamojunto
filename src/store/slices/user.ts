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
} = user.actions;
export default user.reducer;
