import React, { useState, useEffect } from "react"
import AdminJobCard from "./AdminJobCard"
import { Row } from "react-materialize"
import axios from "axios"

const AdminJobContainer = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get("/api/getjobs")
            .then(res => setJobs(res.data))
    }, [])

    return (
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
    )
}

export default AdminJobContainer


