// Modules
import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { themeActions } from "../../redux/theme"
// CSS
import "./Navbar.css"

export default function Navbar() {
	const theme = useSelector((state) => state.theme.theme)
	const dispatch = useDispatch()

	function ThemeSwitchHandler() {
		dispatch(themeActions.SwitchTheme())
		if (theme == true) {
			document.body.classList.add("dark")
		} else {
			document.body.classList.remove("dark")
		}
	}

	return (
		<>
			<div className={`navbar ${theme ? "" : " dark"}`}>
				<NavLink to="/" className="picture"></NavLink>
				<div className="navbar-left">
					<NavLink to="/add">
						<button to="/add">
							<i className="bi bi-plus-circle"></i>
						</button>
					</NavLink>
				</div>
				<div className="navbar-right">
					<button onClick={ThemeSwitchHandler}>
						<i className="bi bi-brightness-high"></i>
					</button>
				</div>
			</div>
		</>
	)
}
