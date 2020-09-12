import React, { useState } from "react"
import axios from "axios"
import { Col, Button, Icon, TextInput, Textarea } from "react-materialize"
import M from "materialize-css"

export const AdminJobCard = ({ job }) => {

    const[gone, setGone] = useState(false);

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
            _id: job._id,
            date: null,
            checkedIn: job.checkedIn.toString(),
            checkedOut: job.checkedOut.toString(),
            timeIn: job.checkInInfo.time,
            timeOut: job.checkOutInfo.time,
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
        estimate,
        _id,
        checkedIn,
        checkedOut,
        timeIn,
        timeOut } = jobDetails

    const displayForm = () => {
        setFormDisplay(true)
    }

    const updateJob = async (e) => {
        e.preventDefault()
        const date1 = new Date(selectedDate)
        const data = {
            selectedDate: selectedDate,
            bedNum: bedNum,
            bathNum: bathNum,
            footageNum: footageNum,
            frequency: frequency,
            arrivalTime: arrivalTime,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            address1: address1,
            address2: address2,
            city: city,
            state: state,
            zipCode: zipCode,
            notes: notes,
            jobAssignedTo: jobAssignedTo,
            estimate: estimate,
            _id: _id,
            date: date1,
            checkedIn: checkedIn,
            checkout: checkedOut
        }

        console.log(data)
        try {
            const res = await axios.put(`/api/updatejob/${_id}`, data)
            M.toast({ html: "Update Succeeded!", classes: "green"})
        } catch (err) {
            M.toast({ html: "Update Failed...", classes: "red"})
            console.log(err)
        } finally {
            setFormDisplay(false);
        }
            
    }

    const deleteJob = async () => {
        try {
            const res = await axios.delete(`/api/deletejob/${_id}`)
            M.toast({ html: "Delete Succeeded!", classes: "green"})
            setGone(true);
        } catch (err) {
            M.toast({ html: "Delete Failed...", classes: "red"})
            console.log(err)
        }
    }

    return gone ? <div style ={{display: "none"}}> </div> : (
        <div>
            <Col style={ formDisplay ? { display: "none" } : { display: "block" } } className="card" l={ 6 } s={ 12 }>
                <div className="job-button-div">
                    <h5 className="job-card">Job Details
                    <Button
                        id ="float-left"
                        className="in"
                        floating
                        icon={ <Icon>mode_edit</Icon> }
                        medium="true"
                        node="button"
                        waves="light"
                        onClick={ displayForm }
                    />
                    <Button
                        id ="float-right"
                        className="out"
                        floating
                        icon={ <Icon>delete_forever</Icon> }
                        medium="true"
                        node="button"
                        waves="light"
                        onClick={ deleteJob }
                    />

                    </h5>
                </div>
                <div>
                    <p><span className="job-card-title">Date: </span> { selectedDate } { arrivalTime } </p>
                    <p><span className="job-card-title">Client Name: </span> { firstName } { lastName }</p>
                    <p><span className="job-card-title">Client Contact: </span> { phone } | { email }</p>
                    <p><span className="job-card-title">House Summary: </span> { bedNum }beds | { bathNum }bath | { footageNum }ft² | Clean { frequency }</p>
                    <p><span className="job-card-title">Location: </span> { address1 }, { address2 } { city }, { state }{ zipCode }</p>
                    <p><span className="job-card-title">Special Requests: </span> { notes }</p>
                    <p><span className="job-card-title">Estimate: </span>${ estimate } </p>
                    <p><span className="job-card-title">Job Assigned To: </span>  { jobAssignedTo }</p>
                    <p><span className="job-card-title">Checked In: </span>  { checkedIn }
                        <span className="job-card-title"> TimeIn: </span>{ timeIn }
                    </p>
                    <p><span className="job-card-title">Checked Out: </span>  { checkedOut }
                        <span className="job-card-title"> TimeOut: </span>{ timeOut }</p>

                </div>
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
                    <TextInput l={ 2 } s={ 12 } label="Date" defaultValue={ selectedDate } name="selectedDate" onChange={ e => setJobDetails({ ...jobDetails, selectedDate: e.target.value }
                    ) } />
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
                    <Col l={ 12 }>
                        <Button
                            left="true"
                            waves="light"
                            className="btn-login"
                        >UPDATE
                    </Button>
                    </Col>
                </Col>
            </form>
        </div>
    )
}

export default AdminJobCard;