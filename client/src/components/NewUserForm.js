import React, { useState } from "react"
import axios from "axios"
import M from "materialize-css";

function NewUserForm() {
	const [state, setState] = useState({
		username: "",
		firstName: "",
		lastName: "",
		password: "",
		confirmPassword: "",
		role: "employee",
	});

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
		} else {
			M.toast({ html: `Failure! Reason: ${message}`, classes: "red" });
		}
	}

	return <div className="col s6 row card">
		<h6 className="center">New User Form:</h6>
		<div className="input-field col s12">
			<input id="username" onChange={ captureInput } type="text" />
			<label for="username">User Name</label>
		</div>
		<div className="input-field col s12">
			<input id="firstName" onChange={ captureInput } type="text" />
			<label for="firstName">First Name</label>
		</div>
		<div className="input-field col s12">
			<input id="lastName" onChange={ captureInput } type="text" />
			<label for="lastName">Last Name</label>
		</div>
		<div className="input-field col s12">
			<input id="password" onChange={ captureInput } type="password" />
			<label for="password">Password</label>
		</div>
		<div className="input-field col s12">
			<input id="confirmPassword" onChange={ captureInput } type="password" />
			<label for="confirmPassword">Confirm Password</label>
		</div>
		<div className="col s6">
			<label>
				<input name="role" type="radio" id="role" value="employee" onChange={ captureInput } checked={ state.role === "employee" } />
				<span>Employee</span>
			</label>
		</div>
		<div className="col s6">
			<label>
				<input name="role" type="radio" id="role" value="admin" onChange={ captureInput } checked={ state.role === "admin" } />
				<span>Admin</span>
			</label>
		</div>
		<a href=" " className="btn" onClick={ onSubmit }>Create User</a>
	</div>
}

export default NewUserForm