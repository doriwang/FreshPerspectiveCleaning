import React, { useState, useEffect } from "react"
import axios from "axios"
import EmployeeJobCard from "./EmployeeJobCard"
import { Row } from "react-materialize"

const EmployeeJobContainer = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get("/api/getjob/" + localStorage.username)
            .then(res => setJobs(res.data))
    }, [])

    return (
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
    )
}

export default EmployeeJobContainer