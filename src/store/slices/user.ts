import {createSlice} from "@reduxjs/toolkit";

const user = createSlice({
	name: "handleUserChoices",
	initialState: {
		nightMode: false,
		loading: false,
		search: false,
		theme: "",
		register: {},
	},
	reducers: {
		changeTheme: (state) => {
			state.nightMode = !state.nightMode;
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
	},
});

export const {changeTheme, startLoading, searchAction, setTheme, setData} =
	user.actions;
export default user.reducer;
