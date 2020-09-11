import React from "react"
import axios from "axios"
import M from "materialize-css";
import Config from "../Config"
const BACKEND_HOST = Config.BACKEND_HOST

class ChangePasswordControl extends React.Component {
	state = {
		oldPassword: "",
		newPassword: "",
		confirmPassword: "",
	}

	captureInput = (event) => {
		const payload = {}
		payload[event.target.id] = event.target.value;
		this.setState(payload);
	}

	onSubmit = async (event) => {
		event.preventDefault();

		const { oldPassword, newPassword, confirmPassword } = this.state
		const result = await axios.post(BACKEND_HOST + "/login/changePassword", {
			oldPassword,
			newPassword,
			confirmPassword,
			token: localStorage.userLogin
		});

		const { success, message } = result.data;

		if (success) {
			M.toast({ html: "Password Changed Successfully!", classes: "green" })
		} else {
			M.toast({ html: "Password Changed Failed!" + message, classes: "red" })
		}
	}

	render() {
		return <div className="col s6 row card">
			<h6 className="center">Change Password Form:</h6>
			<div className="input-field col s12">
				<input id="oldPassword" onChange={ this.captureInput } type="password" />
				<label htmlFor="oldPassword">Old Password</label>
			</div>
			<div className="input-field col s12">
				<input id="newPassword" onChange={ this.captureInput } type="password" />
				<label htmlFor="newPassword">New Password</label>
			</div>
			<div className="input-field col s12">
				<input id="confirmPassword" onChange={ this.captureInput } type="password" />
				<label htmlFor="confirmPassword">Confirm Password</label>
			</div>
			<a href=" " className="btn" onClick={ this.onSubmit }>Change Password</a>
		</div>
	}
}

export default ChangePasswordControl;