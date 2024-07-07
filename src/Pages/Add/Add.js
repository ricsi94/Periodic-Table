// Modules
import { useSelector } from "react-redux"
import { motion } from "framer-motion"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import useAPI from "../../hooks/use-api"
// CSS
import "./Add.css"

const isTextBetween = (input, min, max) =>
	/^([a-zA-Z]{1,10})$/.test(input.trim()) &&
	input.trim().length <= max &&
	input.trim().length >= min
const isNumberBetween = (input, min, max) => isFinite(input) && input <= max && input >= min

export default function Add() {
	const theme = useSelector((state) => state.theme.theme)
	const { isLoading: isSending, isLoaded: isSent, RequestHandler: AddElement } = useAPI()

	const [eSymbol, setESymbol] = useState("")
	const [eName, setEName] = useState("")
	const [eNumber, setENumber] = useState("")
	const [eWeight, setEWeight] = useState("")
	const [eGroup, setEGroup] = useState("")

	const [formValidity, setFormValidity] = useState({
		symbol: true,
		name: true,
		number: true,
		weight: true,
		group: true,
	})

	async function SubmitHandler(e) {
		e.preventDefault()

		const isSymbolValid = isTextBetween(eSymbol, 1, 2)
		const isNameValid = isTextBetween(eName, 1, 10)
		const isNumberValid = isNumberBetween(eNumber, 1, 100)
		const isWeightValid = isNumberBetween(eWeight, 1, 200)
		const isGroupValid =
			eGroup == "alkali-metals" ||
			eGroup == "nonmetals" ||
			eGroup == "halogens" ||
			eGroup == "noble-gases"

		setFormValidity({
			symbol: isSymbolValid,
			name: isNameValid,
			number: isNumberValid,
			weight: isWeightValid,
			group: isGroupValid,
		})

		const isFormValid =
			isSymbolValid && isNameValid && isNumberValid && isWeightValid && isGroupValid

		if (!isFormValid) {
			return
		}

		AddElement({
			url: "http://localhost:3000/elements",
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: {
				symbol: eSymbol,
				name: eName,
				number: eNumber,
				weight: eWeight,
				group: eGroup,
				id: eNumber,
			},
		})
	}

	return (
		<motion.section
			className="centered-form"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.75 }}
		>
			{!isSending && !isSent && (
				<form onSubmit={SubmitHandler}>
					<label className={`input-label ${theme ? "" : " dark"}`} htmlFor="symbol-of-element">
						Symbol
					</label>
					<input
						type="text"
						value={eSymbol}
						onChange={(e) => setESymbol(e.target.value)}
						className={`${theme ? "" : " dark"}`}
						id="symbol-of-element"
						placeholder="Symbol of element"
					/>
					{!formValidity.symbol && (
						<p className={`invalid-input ${theme ? "" : " dark"}`}>
							Please input 1 - 2 character long text !
						</p>
					)}

					<label className={`input-label ${theme ? "" : " dark"}`} htmlFor="name-of-element">
						Name
					</label>
					<input
						type="text"
						value={eName}
						onChange={(e) => setEName(e.target.value)}
						className={`${theme ? "" : " dark"}`}
						id="name-of-element"
						placeholder="Name of element"
					/>
					{!formValidity.name && (
						<p className={`invalid-input ${theme ? "" : " dark"}`}>
							Please input 1 - 10 character long text !
						</p>
					)}

					<label
						className={`input-label ${theme ? "" : " dark"}`}
						htmlFor="atomicnumber-of-element"
					>
						Atomic Number
					</label>
					<input
						type="number"
						min="1"
						max="100"
						value={eNumber}
						onChange={(e) => setENumber(e.target.value)}
						className={`${theme ? "" : " dark"}`}
						id="atomicnumber-of-element"
						placeholder="Atomic number of element"
					/>
					{!formValidity.number && (
						<p className={`invalid-input ${theme ? "" : " dark"}`}>
							Please input number between 1 - 100 !
						</p>
					)}

					<label
						className={`input-label ${theme ? "" : " dark"}`}
						htmlFor="atomicweight-of-element"
					>
						Atomic Weight
					</label>
					<input
						type="number"
						min="1"
						max="200"
						value={eWeight}
						onChange={(e) => setEWeight(e.target.value)}
						className={`${theme ? "" : " dark"}`}
						id="atomicweight-of-element"
						placeholder="Atomic weight of element"
					/>
					{!formValidity.weight && (
						<p className={`invalid-input ${theme ? "" : " dark"}`}>
							Please input number between 1 - 200 !
						</p>
					)}

					<label className={`input-label ${theme ? "" : " dark"}`} htmlFor="group-of-element">
						Group
					</label>
					<select
						value={eGroup}
						onChange={(e) => setEGroup(e.target.value)}
						className={`${theme ? "" : " dark"}`}
						id="group-of-element"
					>
						<option>Please choose one</option>
						<option value="alkali-metals">Alkali metal</option>
						<option value="nonmetals">Nonmetal</option>
						<option value="halogens">Halogen</option>
						<option value="noble-gases">Noble gas</option>
					</select>
					{!formValidity.group && (
						<p className={`invalid-input ${theme ? "" : " dark"}`}>
							Please choose one of the given group !
						</p>
					)}

					<input type="submit" className={`${theme ? "" : " dark"}`} value="Submit" />
				</form>
			)}
			{isSending && !isSent && <p>Loading...</p>}
			{!isSending && isSent && (
				<div className="successfully-added-div">
					<p>Successfully added !</p>
					<NavLink to="/">Back to Home</NavLink>
				</div>
			)}
		</motion.section>
	)
}
