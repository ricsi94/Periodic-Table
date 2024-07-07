// Modules
import { createSlice } from "@reduxjs/toolkit"

const initState = {
	filter: [],
}

const filterSlice = createSlice({
	name: "filter",
	initialState: initState,
	reducers: {
		alkalimetal(state) {
			if (state.filter.includes("alkali-metals")) {
				state.filter = state.filter.filter((item) => item !== "alkali-metals")
			} else {
				state.filter.push("alkali-metals")
			}
		},
		nonmetal(state) {
			if (state.filter.includes("nonmetals")) {
				state.filter = state.filter.filter((item) => item !== "nonmetals")
			} else {
				state.filter.push("nonmetals")
			}
		},
		halogen(state) {
			if (state.filter.includes("halogens")) {
				state.filter = state.filter.filter((item) => item !== "halogens")
			} else {
				state.filter.push("halogens")
			}
		},
		noblegas(state) {
			if (state.filter.includes("noble-gases")) {
				state.filter = state.filter.filter((item) => item !== "noble-gases")
			} else {
				state.filter.push("noble-gases")
			}
		},
	},
})

export const filterActions = filterSlice.actions

export default filterSlice.reducer
