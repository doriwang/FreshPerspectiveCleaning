import React, { useState, useEffect } from "react"
import ChangePasswordControl from "../components/ChangePasswordControl"
import NewUserForm from "../components/NewUserForm"
import LogoutButton from "../components/LogoutButton"
import { Row } from "react-materialize"
import axios from "axios"
import EmployeeJobCard from "../components/EmployeeJobCard"

const EmployeeControls = () => {

	const [jobs, setJobs] = useState([])

	useEffect(() => {
		axios.get("/api/getjob/Jeff")
			.then(res => setJobs(res.data))
	}, [])

	return (
		<div className="container app-content">
			<Row>
				{ jobs.map((job, _id) => {
					return (
						<EmployeeJobCard
							key={ _id }
							job={ job }
						/>
					)
				}) }
				<ChangePasswordControl />
				<LogoutButton />
			</Row>
		</div>
	)
}

export default EmployeeControls;