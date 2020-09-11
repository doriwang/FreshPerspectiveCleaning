import React from "react"
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom"
import ChangePasswordControl from "../components/ChangePasswordControl"
import LogoutButton from "../components/LogoutButton"
import EmployeeNav from "../components/EmployeeNav"
import EmployeeJobContainer from "../components/EmployeeJobContainer"

const EmployeeControls = () => {

	return (
		<div className="container control-page">
			<Router>
				<EmployeeNav />
				<Switch>
					<Route exact path="/employee" component={ EmployeeJobContainer } />
					<Route exact path="/changepassword" component={ ChangePasswordControl } />
					<Route exact path="/logout" component={ LogoutButton } />
				</Switch>
			</Router>
		</div>
	)
}

export default EmployeeControls;