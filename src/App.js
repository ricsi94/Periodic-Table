// Modules
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
// CSS
import "./App.css"
// Pages and Components
import Home from "./Pages/Home/Home"
import Add from "./Pages/Add/Add"
import Navbar from "./Components/Navbar/Navbar"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/add" element={<Add />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
