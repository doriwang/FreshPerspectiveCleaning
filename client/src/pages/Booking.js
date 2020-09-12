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
            date: new Date(),
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
            estimate: 0.00.toFixed(2),
            morningDisabled: false,
            afternoonDisabled: false,
        }
    }

    // simon start calendar method
    handleDateInputClick = () => {
        this.setState({ showCalendar: true })
    }
    handleDateChange = date => {
        const displayDate = date.toString().slice(0, 15)
        this.setState({
            startDate: date,
            selectedDate: displayDate,
            date: new Date(displayDate),
            showCalendar: false,
        });


        axios.get(`/api/selected/${date.toString().slice(0, 15)}`)
            .then(res => {
                if (res.data.length === 0) {
                    this.setState({
                        afternoonDisabled: false,
                        morningDisabled: false
                    })
                } else if (res.data[0].arrivalTime === "Morning Arrival between 8AM - 9AM") {
                    this.setState({
                        morningDisabled: true,
                        afternoonDisabled: false
                    })
                } else if (res.data[0].arrivalTime === "Afternoon Arrival between 12PM - 1PM") {
                    this.setState({
                        afternoonDisabled: true,
                        morningDisabled: false
                    })
                }
            })
            .catch(err => console.log(err))

    };
    isWeekday = date => {
        const day = date.getDay();
        return day !== 0 && day !== 6;
    };
    getJobs = () => {
        axios.get("/api/getjobs")
            .then(res => {
                // console.log(res.data)
                const blockDates = findBlockDates(res.data)
                // console.log("block", blockDates);
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
    handleFormSubmit = async (event) => {
        event.preventDefault()
        this.setState({ showPreEstimate: true, showEstimate: false, bedNum: "" })
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
            notes, estimate, date } = this.state

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
            estimate,
            date
        }
        try {
            const res = await axios.post("/api/booknow", formData)
            const { success } = res.data;

            if (success) {
                M.toast({ html: "Booking Successful!", displayLength: 6000, classes: "green" })
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
                    estimate: 0.00.toFixed(2),
                    date: new Date()
                });
            } else {
                M.toast({ html: "Booking Unsuccessful, information may have been missing. :(", displayLength: 6000, classes: "red" })
            }
        } catch (err) {
            console.log(err)
            M.toast({ html: "Booking Unsuccessful, information may have been missing. :(", displayLength: 6000, classes: "red" })
        }
    }

    componentDidMount() {
        M.AutoInit();
        this.getJobs();
    }
    render() {
        console.log(this.state.bedNum)
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
                    morningDisabled={ this.state.morningDisabled }
                    afternoonDisabled={ this.state.afternoonDisabled }
                />
            </div>
        )
    }
}
export default Booking