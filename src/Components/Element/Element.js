// Modules
import { useSelector } from "react-redux"
// CSS
import "./Element.css"

export default function Element(props) {
	let BoxShadow = null

	const theme = useSelector((state) => state.theme.theme)

	switch (props.group) {
		case "alkali-metals":
			BoxShadow = "0px 0px 25px red"
			break
		case "nonmetals":
			BoxShadow = "0px 0px 25px blue"
			break
		case "halogens":
			BoxShadow = "0px 0px 25px yellow"
			break
		case "noble-gases":
			BoxShadow = "0px 0px 25px green"
			break
	}

	return (
		<div className={`element ${theme ? "" : " dark"}`} style={{ boxShadow: BoxShadow }}>
			<div className="elements-top">
				<p className="el-atomic-number">{props.number}</p>
				<p className="delete-button" onClick={() => props.delete(props.number)}>
					<i className="bi bi-trash"></i>
				</p>
			</div>
			<p className="el-symbol">{props.symbol}</p>
			<p className="el-name">{props.name}</p>
			<p className="el-weight">{props.weight}</p>
		</div>
	)
}
