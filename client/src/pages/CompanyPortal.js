import React from "react"
import axios from "axios"
import M from "materialize-css";
import Config from "../Config"
const BACKEND_HOST = Config.BACKEND_HOST



class EmployeePortal extends React.Component {
    state = {
        username: "",
        password: "",
    }

    onSubmit = async (event) => {
        event.preventDefault();

        const { username, password } = this.state;
        const result = await axios.post(BACKEND_HOST + "/login", { username, password })

        const { success, token, message, role } = result.data;

        if (success) {
			localStorage.userLogin = (token);
			localStorage.username = username;
			this.props.history.push("/" + role);
        } else {
            M.toast({ html: message, classes: "red" });
        }
    }

    captureInput = (event) => {
        const payload = {}
        payload[event.target.id] = event.target.value;
        this.setState(payload);
    }

    render() {
        // console.log("In Render:", this.state);
        return (
            <div className="container app-content row">
                <div className="card col l6 offset-l3">
                    <div className="input-field col s12">
                        <input id="username" onChange={ this.captureInput } type="email" />
                        <label>Username</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" onChange={ this.captureInput } type="password" />
                        <label>Password</label>
                    </div>
                    <div className="btn-login-div col s12"><a className="btn btn-login" href=" " onClick={ this.onSubmit }>Login</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeePortal