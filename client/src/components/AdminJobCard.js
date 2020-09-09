import React, { useState } from "react"
import axios from "axios"
import { Col, Button, Icon, TextInput, Textarea } from "react-materialize"

export const AdminJobCard = ({ job }) => {

    const [formDisplay, setFormDisplay] = useState(false)

    const displayForm = () => {
        setFormDisplay(true)
    }

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
        estimate, _id } = job

    const updateJob = () => {
        axios.put(`/api/updatejob/${_id}`)
            .then(res => console.log(res))
    }

    const deleteJob = () => {
        axios.delete(`/api/deletejob/${_id}`)
            .then(res => console.log(res))
    }

    const emptyValue = (event) => {
        event.target.value = ("")
        console.log(event.target.value)
    }

    return (
        <div>
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
                    <Button
                        floating
                        icon={ <Icon>delete_forever</Icon> }
                        medium="true"
                        node="button"
                        waves="light"
                        onClick={ deleteJob }
                    />
                </div>
                <p>Date: { new Intl.DateTimeFormat('en-US').format(new Date(selectedDate.split("T")[0])) } { arrivalTime } </p>
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
                    <TextInput l={ 3 } s={ 12 } label="First Name" value={ firstName } name="firstName" onClick={ emptyValue } />
                    <TextInput l={ 3 } s={ 12 } label="Last Name" value={ lastName } name="lastName" onClick={ emptyValue } />
                    <TextInput l={ 3 } s={ 12 } label="Phone" value={ phone } name="phone" />
                    <TextInput l={ 3 } s={ 12 } label="Email" value={ email } name="email" />
                    <h5>Job Summary:</h5>
                    <TextInput l={ 2 } s={ 12 } label="Date" value={ new Intl.DateTimeFormat('en-US').format(new Date(selectedDate.split("T")[0])) } name="selectedDate" />
                    <TextInput l={ 4 } s={ 12 } label="Arrival Time" value={ arrivalTime } name="arrivalTime" />
                    <TextInput className="input-field" l={ 4 } s={ 12 } label="Job Assigned To" value={ jobAssignedTo } name="jobAssignedTo" onClick={ () => emptyValue } />
                    <TextInput l={ 2 } s={ 12 } label="Estimate" value={ `${estimate}` } name="estimate" />
                    <TextInput l={ 3 } s={ 12 } label="# of Bedrooms" value={ bedNum } name="bedNum" />
                    <TextInput l={ 3 } s={ 12 } label="# of Bathroom" value={ bathNum } name="bathNum" />
                    <TextInput l={ 3 } s={ 12 } label="# of Square Footage" value={ footageNum } name="footageNum" />
                    <TextInput l={ 3 } s={ 12 } label="Frequency" value={ frequency } name="frequency" />
                    <TextInput l={ 3 } s={ 12 } label="Address 1" value={ address1 } name="address1" />
                    <TextInput l={ 3 } s={ 12 } label="Address 2" value={ address2 } name="address2" />
                    <TextInput l={ 3 } s={ 12 } label="City" value={ city } name="city" />
                    <TextInput l={ 3 } s={ 12 } label="Zip Code" value={ zipCode } name="zipCode" />
                    <Textarea l={ 12 } name="notes" className="materialize-textarea" label="Special Request/Instruction" value={ notes } name="notes" />
                    <Button
                        icon={ <Icon>update</Icon> }
                        medium="true"
                        left="true"
                        waves="light">UPDATE</Button>
                </Col>
            </form>
        </div>
    )
}