import React, { useState, useEffect } from "react"
import axios from "axios"
import { Col, Button, Icon, TextInput, Textarea, Row } from "react-materialize"

export const AdminJobCard = ({ job }) => {

    // const [jobs, setJobs] = useState([])

    // useEffect(() => {
    //     axios.get("/api/getjobs")
    //         .then(res => setJobs(res.data))
    // }, [])

    // console.log(jobs)

    const [formDisplay, setFormDisplay] = useState(false)

    const [jobDetails, setJobDetails] = useState(
        {
            selectedDate: job.selectedDate,
            bedNum: job.bedNum,
            bathNum: job.bathNum,
            footageNum: job.footageNum,
            frequency: job.frequency,
            arrivalTime: job.arrivalTime,
            firstName: job.firstName,
            lastName: job.lastName,
            phone: job.phone,
            email: job.email,
            address1: job.address1,
            address2: job.address2,
            city: job.city,
            state: job.state,
            zipCode: job.zipCode,
            notes: job.notes,
            jobAssignedTo: job.jobAssignedTo,
            estimate: job.estimate,
            _id: job._id
        }
    )

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
        jobAssignedTo,
        estimate, _id } = jobDetails

    const displayForm = () => {
        setFormDisplay(true)
    }

    const updateJob = () => {
        axios.put(`/api/updatejob/${_id}`, jobDetails)
            .then(res => console.log(res))
    }

    const deleteJob = () => {
        axios.delete(`/api/deletejob/${_id}`)
            .then(res => console.log(res))
    }

    return (
        <Row>
            <Col style={ formDisplay ? { display: "none" } : { display: "block" } } className="card" l={ 6 } s={ 12 }>
                <div>
                    <h5>Job Details</h5>
                    <Button
                        floating
                        icon={ <Icon>mode_edit</Icon> }
                        medium="true"
                        node="button"
                        waves="light"
                        onClick={ displayForm }
                    />
                    <form onSubmit={ deleteJob }>
                        <Button
                            floating
                            icon={ <Icon>delete_forever</Icon> }
                            medium="true"
                            node="button"
                            waves="light"
                        />
                    </form>
                </div>
                <p>Date: { selectedDate } { arrivalTime } </p>
                <p>Client Name: { firstName } { lastName }</p>
                <p>Client Contact: { phone } | { email }</p>
                <p>House Summary: { bedNum }beds | { bathNum }bath | { footageNum }ft² | Clean { frequency }</p>
                <p>Location: { address1 }, { address2 } { city }, { state }{ zipCode }</p>
                <p>Special Requests: { notes }</p>
                <p>Estimate: ${ estimate } </p>
                <p>Job Assigned To: { jobAssignedTo }</p>
            </Col>

            <form onSubmit={ updateJob }>
                <Col className="card" l={ 12 } s={ 12 } style={ formDisplay ? { display: "block" } : { display: "none" } }>
                    <h5>Client Summary:</h5>
                    <TextInput l={ 3 } s={ 12 } label="First Name" defaultValue={ firstName } name="firstName" onChange={ e => setJobDetails({ ...jobDetails, firstName: e.target.value }, console.log(e.target.value)) }
                    />
                    <TextInput l={ 3 } s={ 12 } label="Last Name" defaultValue={ lastName } name="lastName" onChange={ e => setJobDetails({ ...jobDetails, lastName: e.target.value }, console.log(e.target.value)) } />
                    <TextInput l={ 3 } s={ 12 } label="Phone" defaultValue={ phone } name="phone" onChange={ e => setJobDetails({ ...jobDetails, phone: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="Email" defaultValue={ email } name="email" onChange={ e => setJobDetails({ ...jobDetails, email: e.target.value }, console.log(e.target.value)) } />
                    <h5>Job Summary:</h5>
                    <TextInput l={ 2 } s={ 12 } label="Date" defaultValue={ selectedDate } name="selectedDate" onChange={ e => setJobDetails({ ...jobDetails, selectedDate: e.target.value }) } />
                    <TextInput l={ 4 } s={ 12 } label="Arrival Time" defaultValue={ arrivalTime } name="arrivalTime" onChange={ e => setJobDetails({ ...jobDetails, arrivalTime: e.target.value }) } />
                    <TextInput className="input-field" l={ 4 } s={ 12 } label="Job Assigned To" defaultValue={ jobAssignedTo } name="jobAssignedTo" onChange={ e => setJobDetails({ ...jobDetails, jobAssignedTo: e.target.value }) } />
                    <TextInput l={ 2 } s={ 12 } label="Estimate" defaultValue={ `${estimate}` } name="estimate" onChange={ e => setJobDetails({ ...jobDetails, arrivalTime: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="# of Bedrooms" defaultValue={ bedNum } name="bedNum" onChange={ e => setJobDetails({ ...jobDetails, estimate: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="# of Bathroom" defaultValue={ bathNum } name="bathNum" onChange={ e => setJobDetails({ ...jobDetails, bathNum: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="# of Square Footage" defaultValue={ footageNum } name="footageNum" onChange={ e => setJobDetails({ ...jobDetails, footageNum: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="Frequency" defaultValue={ frequency } name="frequency" onChange={ e => setJobDetails({ ...jobDetails, frequency: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="Address 1" defaultValue={ address1 } name="address1" onChange={ e => setJobDetails({ ...jobDetails, address1: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="Address 2" defaultValue={ address2 } name="address2" onChange={ e => setJobDetails({ ...jobDetails, address2: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="City" defaultValue={ city } name="city" onChange={ e => setJobDetails({ ...jobDetails, city: e.target.value }) } />
                    <TextInput l={ 3 } s={ 12 } label="Zip Code" defaultValue={ zipCode } name="zipCode" onChange={ e => setJobDetails({ ...jobDetails, zipCode: e.target.value }) } />
                    <Textarea l={ 12 } name="notes" className="materialize-textarea" label="Special Request/Instruction" defaultValue={ notes } onChange={ e => setJobDetails({ ...jobDetails, notes: e.target.value }) } />
                    <Button
                        icon={ <Icon>update</Icon> }
                        medium="true"
                        left="true"
                        waves="light">UPDATE</Button>
                </Col>
            </form>
        </Row>
    )
}

export default AdminJobCard;