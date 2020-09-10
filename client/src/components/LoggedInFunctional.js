import React, { useState } from "react"
import axios from "axios"
import Config from "../Config"
import M from "materialize-css";
const BACKEND_HOST = Config.BACKEND_HOST;

function LoggedInControlFunctionalExample() {
	const [ state, setState ] = useState( { testData: "" } );
	
	function captureInput(event) {
		const payload = {...state }
		payload[event.target.id] = event.target.value;
		setState(payload);
	}
	
	async function onSubmit(event) {
		event.preventDefault();
		const { testData } = state;
		
		const result = await axios.post(BACKEND_HOST+"/example", { testData, token: localStorage.userLogin });
		
		const { success, message } = result.data;
		
		if (success) {
			M.toast({ html: `Success! Echo: ${testData}`, classes: "green"});
		} else {
			M.toast({ html: `Failure! Reason: ${message}`, classes: "red"});
		}
	}
		
	return <div className="col s6 row card">
		<h6 className="center">Functional Control Example:</h6>
		<div className="input-field col s12">
			<input id="testData" onChange={captureInput} type="text" />
			<label for="testData">Test Data</label>
		</div>
		<a href="" className="btn" onClick={onSubmit}>Do Thing!</a>
	</div>
}

export default LoggedInControlFunctionalExample