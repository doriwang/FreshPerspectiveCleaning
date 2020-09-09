import React, { Component } from "react"
import BookingForm from "../components/BookingForm"
import axios from "axios"
import M from "materialize-css"
import { calculatePrice } from "../utils/calculatePrice"
import { findBlockDates } from "../utils/findBlockDates"
class Booking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // simon start
            // calendar state, simon codes here
            showCalendar: false,
            selectedDate: "",
            startDate: new Date(),
            blockedDate: [],
            // simon end
            // dori codes here
            // form states 
            showEstimate: false,
            showPreEstimate: true,
            bedNum: "",
            bathNum: "",
            footageNum: "",
            frequency: "",
            arrivalTime: "",
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            zipCode: "",
            notes: "",
            estimate: 0.00
        }
    }
    // simon start calendar method
    handleDateInputClick = () => {
        this.setState({ showCalendar: true })
    }
    handleDateChange = date => {
        this.setState({
            startDate: date,
            selectedDate: date.toString().slice(0,15),
            showCalendar: false,
        });
    };
    isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };
    getJobs = () => {
        axios.get("/api/getjobs")
            .then(res => {
                console.log(res.data)
                const blockDates = findBlockDates(res.data)
                console.log("block", blockDates);
                this.setState({
                    blockedDate: blockDates,
                })
            }).catch(err => console.log(err))
    }
    // simon end
    // dori starts form methods
    handleFormInputChange = event => {
        let value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value,
        })
    }
    getEstimate = () => {
        this.setState({
            estimate: calculatePrice(this.state.bathNum, this.state.frequency).toFixed(2)
        })
    }
    frequencyChange = (event) => {
        let value = event.target.value
        this.setState({
            frequency: value,
            showEstimate: true,
            showPreEstimate: false,
            estimate: calculatePrice(this.state.bathNum, value)
        })
    }
    handleFormSubmit = (event) => {
        // event.preventDefault()
        // collecting form data
        const { selectedDate,
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
            zipCode,
            notes, estimate } = this.state
        const formData = {
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
            zipCode,
            notes,
            estimate
        }
        axios.post("/api/booknow", formData)
            .then(res => {
                console.log(res)
                this.setState({
                    selectedDate: "",
                    bedNum: "",
                    bathNum: "",
                    footageNum: "",
                    frequency: "",
                    arrivalTime: "",
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address1: "",
                    address2: "",
                    city: "",
                    zipCode: "",
                    notes: "",
                    estimate: 0.00
                })
            }).catch(err => console.log(err))
    }
    // get route 
    // pullJobs = () => {
    //     axios.get("/api/getjobs")
    //         .then(res => {
    //             console.log(res)
    //         })
    // }
    componentDidMount() {
        M.AutoInit();
        this.getJobs();
    }
    render() {
        return (
            <div className="container app-content">
                    <BookingForm
                        // calendar simon codes
                        selectedDate={ this.state.selectedDate }
                        calendarStyle={ this.state.showCalendar ? { display: "block" } : { display: "none" } }
                        isWeekday={ this.isWeekday }
                        excludeDates={ this.state.blockedDate }
                        selected={ this.state.startDate }
                        handleDateInputClick={ this.handleDateInputClick }
                        handleDateChange={ date => this.handleDateChange(date) }
                        // form dori codes here
                        handleFormInputChange={ this.handleFormInputChange }
                        handleFormSubmit={ this.handleFormSubmit }
                        bedNum={ this.state.bedNum }
                        bathNum={ this.state.bathNum }
                        footageNum={ this.state.footageNum }
                        frequency={ this.state.frequency }
                        arrivalTime={ this.state.arrivalTime }
                        firstName={ this.state.firstName }
                        lastName={ this.state.lastName }
                        phone={ this.state.phone }
                        email={ this.state.email }
                        address1={ this.state.address1 }
                        address2={ this.state.address2 }
                        city={ this.state.city }
                        zipCode={ this.state.zipCode }
                        notes={ this.state.notes }
                        estimate={ this.state.estimate }
                        getEstimate={ this.getEstimate }
                        frequencyChange={ this.frequencyChange }
                        preEstimateStyle={ this.state.showPreEstimate ? { display: "block" } : { display: "none" } }
                        estimateStyle={ this.state.showEstimate ? { display: "block" } : { display: "none" } }
                    />
                {/* <BookingForm
                    // calendar simon codes
                    date={ this.state.selectedDate.toString().slice(0, 15) }
                    calendarStyle={ this.state.showCalendar ? { display: "block" } : { display: "none" } }
                    isWeekday={ this.isWeekday }
                    excludeDates={ this.state.blockedDate }
                    selected={ this.state.startDate }
                    handleDateInputClick={ this.handleDateInputClick }
                    handleDateChange={ date => this.handleDateChange(date) }
                    // form dori codes here
                    handleFormInputChange={ this.handleFormInputChange }
                    handleFormSubmit={ this.handleFormSubmit }
                    bedNum={ this.state.bedNum }
                    bathNum={ this.state.bathNum }
                    footageNum={ this.state.footageNum }
                    frequency={ this.state.frequency }
                    arrivalTime={ this.state.arrivalTime }
                    firstName={ this.state.firstName }
                    lastName={ this.state.lastName }
                    phone={ this.state.phone }
                    email={ this.state.email }
                    address1={ this.state.address1 }
                    address2={ this.state.address2 }
                    city={ this.state.city }
                    zipCode={ this.state.zipCode }
                    notes={ this.state.notes }
                    estimate={ this.state.estimate.toFixed(2) }
                    getEstimate={ this.getEstimate }
                    frequencyChange={ this.frequencyChange }
                    preEstimateStyle={ this.state.showPreEstimate ? { display: "block" } : { display: "none" } }
                    estimateStyle={ this.state.showEstimate ? { display: "block" } : { display: "none" } }
                /> */}
            </div>
        )
    }
}
export default Booking