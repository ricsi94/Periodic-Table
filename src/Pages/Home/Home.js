// Modules
import React, { useEffect, useState } from "react"
import useAPI from "../../hooks/use-api"
import { motion } from "framer-motion"
// Pages and Components
import ElementsList from "../../Components/ElementsList/ElementsList"
import Filterbar from "../../Components/Filterbar/Filterbar"

export default function Home() {
	const [elements, setElements] = useState([])
	const { isLoading, error, RequestHandler: fetchElements } = useAPI()
	const { RequestHandler: DeleteElement } = useAPI()

	function Delete(element) {
		DeleteElement({
			url: `http://localhost:3000/elements/${element}`,
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		})

		const getElements = (elems) => {
			setElements(elems)
		}
		fetchElements({ url: "http://localhost:3000/elements" }, getElements)
	}

	useEffect(() => {
		const getElements = (elems) => {
			setElements(elems)
		}

		fetchElements({ url: "http://localhost:3000/elements" }, getElements)
	}, [])

	return (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
			<Filterbar />

			<ElementsList
				elements={elements}
				isLoading={isLoading}
				error={error}
				fetchElements={fetchElements}
				delete={Delete}
			/>
		</motion.div>
	)
}
