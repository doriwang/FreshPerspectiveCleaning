import React from "react"
import axios from "axios"
import Config from "../Config"
import M from "materialize-css";
const BACKEND_HOST = Config.BACKEND_HOST;

class LoggedInControlExample extends React.Component {
	state = {
		testData: "",
	}

	captureInput = (event) => {
		const payload = {}
		payload[event.target.id] = event.target.value;
		this.setState(payload);
	}

	onSubmit = async (event) => {
		event.preventDefault();
		const { testData } = this.state;

		const result = await axios.post(BACKEND_HOST + "/example", { testData, token: localStorage.userLogin });

		const { success, message } = result.data;

		if (success) {
			M.toast({ html: `Success! Echo: ${testData}`, classes: "green" });
		} else {
			M.toast({ html: `Failure! Reason: ${message}`, classes: "red" });
		}

	}

	render() {
		return <div className="col s6 row card">
			<h6 className = "center">Logged In Control Example:</h6>
			<div className="input-field col s12">
				<input id="testData" onChange={ this.captureInput } type="text" />
				<label for="testData">Test Data</label>
			</div>
			<a href=" " className="btn" onClick={ this.onSubmit }>Do Thing!</a>
		</div>
	}
}

export default LoggedInControlExample
