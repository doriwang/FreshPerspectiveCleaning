import React, { useState } from "react"
import axios from "axios"
import M from "materialize-css"
import { Col, Button } from "react-materialize"

function geolocation(options) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            function (position) { resolve(position); }, // success callback, resolve promise
            function (error) { reject(error); }, // error callback, reject promise
            options); // pass options on
    })
}

const EmployeeJobCard = ({ job }) => {

    const [userPosition, setUserPosition] = useState({})
    const [jobState, setJobState] = useState(job)

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
        _id,
    } = job

    const checkIn = async () => {
        try {
            const position = await geolocation();
            console.log(position);
            setUserPosition(position);

            const checkInData = {
                checkInInfo: {
                    location: position.coords.latitude + " " + position.coords.longitude,
                    time: new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "numeric"
                    }).format(position.timestamp)
                },
                checkedIn: true
            }

            const res = await axios.put(`/api/joblogs/${_id}`, checkInData)
            setJobState({ ...jobState, checkedIn: true, checkInInfo: { time: checkInData.checkInInfo.time } });
        } catch (err) {
            console.log(err);
            M.toast({ html: "error, could not check in", classes: "red" });
        }
    }

    const checkOut = async () => {
        try {
            const position = await geolocation();
            console.log(position);
            setUserPosition(position);

            const checkOutData = {
                checkOutInfo: {
                    location: position.coords.latitude + " " + position.coords.longitude,
                    time: new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                        hour: "numeric",
                        minute: "numeric"
                    }).format(position.timestamp)
                },
                checkedOut: true
            }

            const res = await axios.put(`/api/joblogs/${_id}`, checkOutData)
            console.log(res)

            setJobState({ ...jobState, checkedOut: true, checkOutInfo: { time: checkOutData.checkOutInfo.time } });

        } catch (err) {
            console.log(err);
            M.toast({ html: "error, could not check out", classes: "red" });
        }
    }

    return (
        <Col l={ 6 } s={ 12 } className="card">
            <div><h5 className="job-card">Job Details</h5></div>
            <p><span className="job-card-title">Date: </span>{ selectedDate } { arrivalTime } </p>
            <p><span className="job-card-title">Job Assigned To: </span> { jobAssignedTo }</p>
            <p><span className="job-card-title">Client Name: </span> { firstName } { lastName }</p>
            <p><span className="job-card-title">Client Contact: </span> { phone } | { email }</p>
            <p><span className="job-card-title">House Summary: </span> { bedNum }beds | { bathNum }bath | { footageNum }ft² | Clean { frequency }</p>
            <p><span className="job-card-title">Location: </span> { address1 }, { address2 } { city }, { state }{ zipCode }</p>
            <p><span className="job-card-title">Special Requests: </span> { notes }</p>
            <p><span className="job-card-title">Checked In: </span>  { jobState.checkedIn.toString() } { jobState.checkInInfo.time } </p>
            <p><span className="job-card-title">Checked Out: </span>  { jobState.checkedOut.toString() } { jobState.checkOutInfo.time } </p>
            <Button className="check-btn in" small onClick={ checkIn }>Check-in</Button>
            <Button className="check-btn out" small onClick={ checkOut }>Check-out</Button>
        </Col>
    )
}

export default EmployeeJobCard
