import React from "react"
import { Col } from "react-materialize"

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
            <p>Date: { new Intl.DateTimeFormat('en-US').format(new Date(selectedDate.toString().slice(0, 15))) } { arrivalTime } </p>
            <p>Job Assigned To: { jobAssignedTo }</p>
            <p>Client Name: { firstName } { lastName }</p>
            <p>Client Contact: { phone } | { email }</p>
            <p>House Summary: { bedNum }beds | { bathNum }bath | { footageNum }ft² | Clean { frequency }</p>
            <p>Location: { address1 }, { address2 } { city }, { state }{ zipCode }</p>
            <p>Special Requests: { notes }</p>
        </Col>
    )
}

export default EmployeeJobCard
