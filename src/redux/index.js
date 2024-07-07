// Modules
import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./filter"
import themeReducer from "./theme"

const store = configureStore({
	reducer: { filter: filterReducer, theme: themeReducer },
})

export default store
