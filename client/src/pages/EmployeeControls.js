import React, { useState, useEffect } from "react"
import { Row } from "react-materialize"
import axios from "axios"
import EmployeeJobCard from "../components/EmployeeJobCard"

// import ChangePasswordControl from "../components/ChangePasswordControl"
// import LoggedInControlExample from "../components/LoggedInControlExample"

// class EmployeeControls extends React.Component {
// 	render() {
// 		return <div className ="row container app-content">
// 			<h3>Employee Controls</h3>
// 			<ChangePasswordControl />
// 			<LoggedInControlExample />
// 		</div>
// 	}
// }

const EmployeeControls = () => {

	const [jobs, setJobs] = useState([])

	useEffect(() => {
		axios.get("/api/getjob/Jeff")
			.then(res => setJobs(res.data))
	}, [])

	return (
		<div className="container .app-content">
			<h1>Admin Logged in</h1>
			<Row>
				{ jobs.map((job, _id) => {
					return (
						<EmployeeJobCard
							key={ _id }
							job={ job }
						/>
					)
				}) }
			</Row>
		</div>
	)
}

export default EmployeeControls;