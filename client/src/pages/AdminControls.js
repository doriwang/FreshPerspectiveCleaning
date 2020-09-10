import React, { useState, useEffect } from "react"
import AdminNav from "../components/AdminNav"
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom"
import ChangePasswordControl from "../components/ChangePasswordControl"
import NewUserForm from "../components/NewUserForm"
import LogoutButton from "../components/LogoutButton"
import { Row } from "react-materialize"
import axios from "axios"
import AdminJobCard from "../components/AdminJobCard"

const AdminControls = () => {

	const [jobs, setJobs] = useState([])

	useEffect(() => {
		axios.get("/api/getjobs")
			.then(res => setJobs(res.data))
	}, [])

	return (
		<div className="container app-content">
			<Router>
				<AdminNav />
				<Switch>
					{/* <Route exact path="/admin" component={ AdminJobCard } /> */ }
					<Route exact path="/createnewuser" component={ NewUserForm } />
					<Route exact path="/changepassword" component={ ChangePasswordControl } />
					<Route exact path="/logout" component={ LogoutButton } />
				</Switch>
			</Router>
			<Row>
				{ jobs.map((job, _id) => {
					return (
						<AdminJobCard
							key={ _id }
							job={ job }
						/>
					)
				}) }
			</Row>
		</div>
	)
}

export default AdminControls;