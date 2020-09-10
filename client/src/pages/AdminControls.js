import React, { useState, useEffect } from "react"
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
			
			<Row>
				{ jobs.map((job, _id) => {
					return (
						<AdminJobCard
							key={ _id }
							job={ job }
						/>
					)
				}) }

				<NewUserForm />
				<ChangePasswordControl />
				<LogoutButton />
			</Row>
		</div>
	)
}

export default AdminControls;