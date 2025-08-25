import React from "react";
import '../components/App.css'
//create your first component
const App = (props) => {

	let valor = props.valor
	let valor2 = props.valor2
	let valor3 = props.valor3
	let valor4 = props.valor4
	let valor5 = props.valor5
	let valor6 = props.valor6
	return (
		<div className="contenedor" >
			<div></div>
			<div className="Contador">
				<span class="fa-regular fa-clock"></span>
				<span>{valor6}</span>
				<span>{valor5}</span>
				<span>{valor4}</span>
				<span>{valor3}</span>
				<span>{valor2}</span>
				<span>{valor}</span>
			</div>
			<div></div>
		</div>
	);
};

export default App;