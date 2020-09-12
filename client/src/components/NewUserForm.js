import React, { useState } from "react"
import axios from "axios"
import M from "materialize-css";
import { Col } from "react-materialize"

function NewUserForm() {
	const [state, setState] = useState({
		username: "",
		firstName: "",
		lastName: "",
		password: "",
		confirmPassword: "",
		role: "employee",
	});

	const { username, firstName, lastName, password, confirmPassword, role } = state

	function captureInput(event) {
		const payload = { ...state }
		payload[event.target.id] = event.target.value;
		setState(payload);
	}

	async function onSubmit(event) {
		event.preventDefault();
		const { username, firstName, lastName, password, confirmPassword, role } = state;

		if (password !== confirmPassword) {
			M.toast({ html: `Passwords do not match`, classes: "red" });
			return;
		}

		const result = await axios.post("/login/newUser", {
			username, firstName, lastName, password, role, token: localStorage.userLogin
		});

		const { success, message } = result.data;

		if (success) {
			M.toast({ html: `User Created Successfully`, classes: "green" });
			setState({
				username: "",
				firstName: "",
				lastName: "",
				password: "",
				confirmPassword: "",
				role: "employee",
			})
		} else {
			M.toast({ html: `Failure! Reason: ${message}`, classes: "red" });
		}
	}
	return (
		<div className="container app-content row">
			<Col l={ 8 } s={ 12 } className="card offset-l2">
				<h5 className="center newUserHeader">New User Form</h5>
				<Col l={ 6 } s={ 12 } className="center">
					<label>
						<input name="role" type="radio" id="role" value="employee" onChange={ captureInput } checked={ state.role === "employee" } />
						<span>Employee</span>
					</label>
				</Col>
				<Col l={ 6 } s={ 12 } className="center">
					<label>
						<input name="role" type="radio" id="role" value="admin" onChange={ captureInput } checked={ state.role === "admin" } />
						<span>Admin</span>
					</label>
				</Col>
				<Col l={ 6 } s={ 12 } className="input-field">
					<input id="firstName" onChange={ captureInput } type="text" value={ firstName } />
					<label htmlFor="firstName">First Name</label>
				</Col>
				<Col l={ 6 } s={ 12 } className="input-field ">
					<input id="lastName" onChange={ captureInput } type="text" value={ lastName } />
					<label htmlFor="lastName">Last Name</label>
				</Col>
				<Col className="input-field col l12">
					<input id="username" onChange={ captureInput } type="text" value={ username } />
					<label htmlFor="username">User Name</label>
				</Col>

				<Col className="input-field col s12">
					<input id="password" onChange={ captureInput } type="password" value={ password } />
					<label htmlFor="password">Password</label>
				</Col>
				<Col className="input-field col s12">
					<input id="confirmPassword" onChange={ captureInput } type="password" value={ confirmPassword } />
					<label htmlFor="confirmPassword">Confirm Password</label>
				</Col>
				<div className="col l12"><a href=" " className="btn btn-login" onClick={ onSubmit }>Create User</a></div>
			</Col>
		</div>
	)
}

export default NewUserForm