// import React from "react"
// import ChangePasswordControl from "../components/ChangePasswordControl"
// import LoggedInControlExample from "../components/LoggedInControlExample"

// class AdminControls extends React.Component {
// 	render() {
// 		return <div className ="row container app-content">
// 			<h3>Admin Controls</h3>
// 			<ChangePasswordControl />
// 			<LoggedInControlExample />
// 		</div>
// 	}
// }

import React, { useState, useEffect } from "react"
import { Row } from "react-materialize"
import axios from "axios"
import { AdminJobCard } from "../components/AdminJobCard"

const AdminControls = () => {

	const [jobs, setJobs] = useState([])

	useEffect(() => {
		axios.get("/api/getjobs")
			.then(res => setJobs(res.data))
	}, [])

	return (
		<div className="container app-content">
			<h1>Admin Logged in</h1>
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