import React from "react"
import { Col, Button } from "react-materialize"

const EmployeeJobCard = ({ job }) => {

    const {
        selectedDate,
        bedNum,
        bathNum,
        footageNum,
        frequency,
        arrivalTime,
        firstName,
        lastName,
        phone,
        email,
        address1,
        address2,
        city,
        state,
        zipCode,
        notes,
        jobAssignedTo } = job

    return (
        <Col l={ 6 } s={ 12 } className="card">
            <div><h5 className="job-card">Job Details</h5></div>
            <p><span className="job-card-title">Date: </span>{ new Intl.DateTimeFormat('en-US').format(new Date(selectedDate.toString().slice(0, 15))) } { arrivalTime } </p>
            <p><span className="job-card-title">Job Assigned To: </span> { jobAssignedTo }</p>
            <p><span className="job-card-title">Client Name: </span> { firstName } { lastName }</p>
            <p><span className="job-card-title">Client Contact: </span> { phone } | { email }</p>
            <p><span className="job-card-title">House Summary: </span> { bedNum }beds | { bathNum }bath | { footageNum }ft² | Clean { frequency }</p>
            <p><span className="job-card-title">Location: </span> { address1 }, { address2 } { city }, { state }{ zipCode }</p>
            <p><span className="job-card-title">Special Requests: </span> { notes }</p>
            <Button className="check-btn in" small>Check-in</Button>
            <Button className="check-btn out" small>Check-out</Button>
        </Col>
    )
}

export default EmployeeJobCard
