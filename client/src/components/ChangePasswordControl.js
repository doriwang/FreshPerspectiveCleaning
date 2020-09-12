import React from "react"
import axios from "axios"
import M from "materialize-css";
import { Col } from "react-materialize"


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
		this.setState({ [event.target.id]: event.target.value });
	}

	onSubmit = async (event) => {
		event.preventDefault();
		const { oldPassword, newPassword, confirmPassword } = this.state
		const result = await axios.post("/login/changePassword", {
			oldPassword,
			newPassword,
			confirmPassword,
			token: localStorage.userLogin
		});

		const { success, message } = result.data;

		if (success) {
			M.toast({ html: "Password Changed Successfully!", classes: "green" })
			this.setState({
				oldPassword: "",
				newPassword: "",
				confirmPassword: "",
			})
		} else {
			M.toast({ html: "Password Changed Failed!" + message, classes: "red" })
		}
	}

	render() {

		return (
			<div>
				{/* <div style={ empty ? { display: "none" } : { display: "block" } }></div> */ }
				<div className="container app-content row">
					<Col l={ 6 } s={ 12 } className="card offset-l3">
						<h5 className="center">Change Password Form</h5>
						<Col className="input-field col s12">
							<input id="oldPassword" onChange={ this.captureInput } type="password" value={ this.state.oldPassword } />
							<label htmlFor="oldPassword">Old Password</label>
						</Col>
						<Col className="input-field col s12">
							<input id="newPassword" onChange={ this.captureInput } type="password" value={ this.state.newPassword } />
							<label htmlFor="newPassword">New Password</label>
						</Col>
						<Col className="input-field col s12">
							<input id="confirmPassword" onChange={ this.captureInput } type="password" value={ this.state.confirmPassword } />
							<label htmlFor="confirmPassword">Confirm Password</label>
						</Col>
						<div className="col l12"><a href=" " className="btn btn-small btn-login" onClick={ this.onSubmit }>Change Password</a></div>
					</Col>
				</div>
			</div>
		)
	}
}

export default ChangePasswordControl;