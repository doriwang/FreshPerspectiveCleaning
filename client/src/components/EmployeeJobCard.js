import React, { useEffect, useState } from "react"
import axios from "axios"
import { Col, Button } from "react-materialize"

const EmployeeJobCard = ({ job }) => {

    const [userPosition, setUserPosition] = useState({})

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

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position)
                setUserPosition(position)
            });
        } else {
            console.log("alert")
        }
    }, [])

    console.log(userPosition)
    // axios.get("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false", function (data) {
    //                 console.log(data);
    //             })

    const checkIn = () => {
        const checkInData = {
            jobDateAndTime: selectedDate + " " + arrivalTime,
            employee: jobAssignedTo,
            clientName: firstName + " " + lastName,
            jobLocation: address1 + " " + address2 + " " + city + " " + state + " " + zipCode,
            clientNotes: notes,
            checkInInfo: {
                location: userPosition.coords.latitude + " " + userPosition.coords.longitude,
                time: new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric"
                }).format(userPosition.timestamp)
            }
            // checkOutInfo:
        }
        axios.post("/api/joblogs", checkInData)
            .then(res => console.log(res))
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
            <Button className="check-btn in" small onClick={ checkIn }>Check-in</Button>
            <Button className="check-btn out" small>Check-out</Button>
        </Col>
    )
}

export default EmployeeJobCard
