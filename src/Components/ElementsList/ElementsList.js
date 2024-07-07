// Modules
import { useSelector, useDispatch } from "react-redux"
// CSS
import "./ElementsList.css"
// Pages and Components
import Element from "../Element/Element"

export default function ElementsList(props) {
	const filter = useSelector((state) => state.filter.filter)

	let content = <h2 className="centered">There are not any element on the site yet !</h2>

	if (props.elements.length > 0) {
		if (filter.length == 0 || filter.length == 4) {
			content = (
				<div className="elements">
					{props.elements.map((elem) => (
						<Element
							key={elem.number}
							symbol={elem.symbol}
							name={elem.name}
							number={elem.number}
							weight={elem.weight}
							group={elem.group}
							delete={props.delete}
						/>
					))}
				</div>
			)
		} else {
			content = (
				<div className="elements">
					{props.elements
						.filter((elem) => filter.includes(elem.group))
						.map((elem) => (
							<Element
								key={elem.number}
								symbol={elem.symbol}
								name={elem.name}
								number={elem.number}
								weight={elem.weight}
								group={elem.group}
								delete={props.delete}
							/>
						))}
				</div>
			)
		}
	}

	if (props.error) {
		content = (
			<div className="centered">
				<p>Failed to load</p>
				<button onClick={props.fetchElements}>Try again</button>
			</div>
		)
	}

	if (props.isLoading) {
		content = <p className="centered">Loading...</p>
	}

	return <>{content}</>
}
