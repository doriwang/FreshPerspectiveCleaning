import React from "react"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { Col, Icon } from "react-materialize"
// datepicker localization
import { registerLocale } from "react-datepicker"
import us from "date-fns/locale/en-US"
registerLocale("us", us);


class BookingForm extends React.Component {

    state = {
        morning: 0,
        afternoon: 0,
        render: 0
    }

    componentDidUpdate(prevProps) {
        const propsChanged = this.props.morningDisabled !== prevProps.morningDisabled || this.props.afternoonDisabled !== prevProps.afternoonDisabled;

        if (propsChanged) {
            this.setState({
                render: 1
            })
        }
    }
    handleArrivalTimeClick = (event) => {
        this.setState({
            afternoon: true
        })

        this.props.handleFormInputChange(event)
    }

    render() {
        const morningOnly = !this.props.morningDisabled && this.props.afternoonDisabled
        const afternoonOnly = this.props.morningDisabled && !this.props.afternoonDisabled
        const fullDay = !this.props.morningDisabled && !this.props.afternoonDisabled

        return (
            <form onSubmit={ this.props.handleFormSubmit } className="bookingForm row">
                <Col className="card" l={ 8 } s={ 12 }>
                    <Col l={ 12 } s={ 12 }><h5>1. ENTER YOUR PROPERTY INFO</h5></Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <select name="bedNum" value={ this.props.bedNum }
                            onChange={ this.props.handleFormInputChange } >
                            <option disabled value="">Choose your option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6+">6+</option>
                        </select>
                        <label>How many bedrooms do you have?</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <select name="bathNum" value={ this.props.bathNum } onChange={ this.props.handleFormInputChange }>
                            <option disabled value="">Choose your option</option>
                            <option>1</option>
                            <option>1.5</option>
                            <option>2</option>
                            <option>2.5</option>
                            <option>3</option>
                            <option>3.5</option>
                            <option>4</option>
                            <option>4.5</option>
                            <option>5+</option>
                        </select>
                        <label>How many bathrooms do you have?</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input placeholder=" " name="footageNum" type="text"
                            value={ this.props.footageNum }
                            onChange={ this.props.handleFormInputChange }
                        />
                        <label>What’s your approximate square footage?</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <select name="frequency" value={ this.props.frequency } onChange={ this.props.frequencyChange }>
                            <option disabled value="">Choose your option</option>
                            <option>One Time</option>
                            <option>Every Week</option>
                            <option>Every 2 Weeks</option>
                            <option>Every 3 Weeks</option>
                            <option>Every 4 Weeks</option>
                        </select>
                        <label>How often would you like us to clean?</label>
                    </Col>
                    <h5>2. CHOOSE A SERVICE DATE</h5>
                    <Col className="validate input-field" l={ 6 } s={ 12 } >
                        <input placeholder=" " name="date" type="text"
                            value={ this.props.selectedDate }
                            onClick={ this.props.handleDateInputClick }
                        />
                        <label>Date</label>
                    </Col>
                    <div style={ this.props.calendarStyle }>
                        <DatePicker
                            selected={ this.props.selected }
                            onChange={ this.props.handleDateChange }
                            excludeDates={ this.props.excludeDates }
                            filterDate={ this.props.isWeekday }
                            monthsShown={ 2 }
                            minDate={ new Date() }
                            locale="us"
                            inline
                        />
                    </div>
                    <Col className="validate input-field" l={ 6 } s={ 12 } style={ morningOnly ? { display: "block" } : { display: "none" } }>
                        <select value={ this.props.arrivalTime } name="arrivalTime" onChange={ this.handleArrivalTimeClick } >
                            <option disabled value="" >Choose your option</option>
                            <option>Morning Arrival between 8AM - 9AM</option>
                        </select>
                        <label>Arrival Time</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 } style={ afternoonOnly ? { display: "block" } : { display: "none" } }>
                        <select value={ this.props.arrivalTime } name="arrivalTime" onChange={ this.handleArrivalTimeClick } >
                            <option disabled value="" >Choose your option</option>
                            <option>Afternoon Arrival between 12PM - 1PM</option>
                        </select>
                        <label>Arrival Time</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 } style={ fullDay ? { display: "block" } : { display: "none" } }>
                        <select value={ this.props.arrivalTime } name="arrivalTime" onChange={ this.handleArrivalTimeClick } >
                            <option disabled value="" >Choose your option</option>
                            <option>Morning Arrival between 8AM - 9AM</option>
                            <option>Afternoon Arrival between 12PM - 1PM</option>
                        </select>
                        <label>Arrival Time</label>
                    </Col>
                    <h5>3. ENTER YOUR CONTACT INFO</h5>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input name="firstName" type="text"
                            value={ this.props.firstName }
                            onChange={ this.props.handleFormInputChange }
                        />
                        <label>First Name</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input name="lastName" type="text"
                            value={ this.props.lastName }
                            onChange={ this.props.handleFormInputChange }
                        />
                        <label>Last Name</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input name="phone" type="tel"
                            value={ this.props.phone }
                            onChange={ this.props.handleFormInputChange }
                        />
                        <label>Phone</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input name="email" type="email"
                            value={ this.props.email }
                            onChange={ this.props.handleFormInputChange }
                        />
                        <label>Email</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input name="address1" type="text"
                            value={ this.props.address1 }
                            onChange={ this.props.handleFormInputChange }
                        />
                        <label>Service Street Address</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input name="address2" type="text"
                            value={ this.props.address2 }
                            onChange={ this.props.handleFormInputChange }
                        />
                        <label>Address 2</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input name="city" type="text"
                            value={ this.props.city }
                            onChange={ this.props.handleFormInputChange }
                        />
                        <label>City</label>
                    </Col>
                    <Col className="validate input-field" l={ 6 } s={ 12 }>
                        <input name="zipCode" type="text"
                            value={ this.props.zipCode } onChange={ this.props.handleFormInputChange } />
                        <label>Zip Code</label>
                    </Col>
                    <Col className="input-field" l={ 12 } s={ 12 }>
                        <textarea name="notes" className="materialize-textarea" data-length="120"
                            value={ this.props.notes }
                            onChange={ this.props.handleFormInputChange }></textarea>
                        <label>Special Request/Instruction</label>
                    </Col>
                </Col>
                <Col className="card price-card" l={ 4 } s={ 12 } >
                    <h5 id="estimate">ESTIMATE</h5>
                    <div className="container" style={ this.props.estimateStyle }>
                        <h6><Icon small>home </Icon>{ this.props.bedNum } beds / { this.props.bathNum } baths / { this.props.footageNum } ft² </h6>
                        <h6><Icon className="estimate-icon" small>event </Icon>Clean { this.props.frequency }</h6>
                    </div>
                    <div className="container" style={ this.props.preEstimateStyle }>
                        <h6>Your estimate will display below after you enter your property info.</h6>
                    </div>
                    <h5 id="total">TOTAL: <span id="price">$ { this.props.estimate }</span></h5>
                </Col>
                <Col l={ 8 } s={ 12 } className="bookNow-div">
                    <button className="btn btn-bookNow" type="submit" name="action">BOOK NOW</button>
                </Col>
            </form>
        )
    }

}
export default BookingForm