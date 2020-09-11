import React from "react"
import AdminNav from "../components/AdminNav"
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom"
import ChangePasswordControl from "../components/ChangePasswordControl"
import NewUserForm from "../components/NewUserForm"
import LogoutButton from "../components/LogoutButton"
import AdminJobContainer from "../components/AdminJobContainer"

const AdminControls = () => {
	return (
		<div className="container control-page">
			<Router>
				<AdminNav />
				<Switch>
					<Route exact path="/admin" component={ AdminJobContainer } />
					<Route exact path="/createnewuser" component={ NewUserForm } />
					<Route exact path="/changepassword" component={ ChangePasswordControl } />
					<Route exact path="/logout" component={ LogoutButton } />
				</Switch>
			</Router>
		</div>
	)
}

export default AdminControls;