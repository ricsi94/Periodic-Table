// Modules
import { createSlice } from "@reduxjs/toolkit"

const initState = {
	theme: true,
}

const themeSlice = createSlice({
	name: "theme",
	initialState: initState,
	reducers: {
		SwitchTheme(state) {
			if (state.theme == true) {
				state.theme = false
			} else {
				state.theme = true
			}
		},
	},
})

export const themeActions = themeSlice.actions

export default themeSlice.reducer
