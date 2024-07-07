// Modules
import { useSelector, useDispatch } from "react-redux"
import { filterActions } from "../../redux/filter"
// CSS
import "./Filterbar.css"

export default function Filterbar() {
	const filter = useSelector((state) => state.filter.filter)
	const dispatch = useDispatch()
	const theme = useSelector((state) => state.theme.theme)

	function filterHandler(e) {
		let classnames = e.target.className.split(" ")

		if (classnames.includes("alkali-filter")) {
			dispatch(filterActions.alkalimetal())
		}
		if (classnames.includes("nonmetal-filter")) {
			dispatch(filterActions.nonmetal())
		}
		if (classnames.includes("halogen-filter")) {
			dispatch(filterActions.halogen())
		}
		if (classnames.includes("noble-filter")) {
			dispatch(filterActions.noblegas())
		}
	}

	return (
		<div className={`filterbar ${theme ? "" : " dark"}`}>
			<div className="space">
				<button
					onClick={filterHandler}
					className={`alkali-filter filter-button-alkali ${
						filter.includes("alkali-metals") ? " active-filter" : ""
					}`}
				>
					Alkali metals <i className="bi bi-box alkali-filter"></i>
				</button>
				<button
					onClick={filterHandler}
					className={`nonmetal-filter filter-button-nonmetal ${
						filter.includes("nonmetals") ? " active-filter" : ""
					}`}
				>
					Nonmetals <i className="bi bi-puzzle nonmetal-filter"></i>
				</button>
				<button
					onClick={filterHandler}
					className={`halogen-filter filter-button-halogen ${
						filter.includes("halogens") ? " active-filter" : ""
					}`}
				>
					Halogens <i className="bi bi-lightbulb halogen-filter"></i>
				</button>
				<button
					onClick={filterHandler}
					className={`noble-filter filter-button-noble ${
						filter.includes("noble-gases") ? " active-filter" : ""
					}`}
				>
					Noble gases <i className="bi bi-cloud noble-filter"></i>
				</button>
			</div>
		</div>
	)
}
