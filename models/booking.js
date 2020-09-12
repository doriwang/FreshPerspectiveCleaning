const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    bedNum: { type: String, required: true },
    bathNum: { type: String, required: true },
    footageNum: { type: String, required: true }, // Simon: footageNum might not be required
    frequency: { type: String, required: true },
    selectedDate: { type: String, required: true }, // Simon modifies it to Date type form string type
    date: { type: Date },
    arrivalTime: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    city: { type: String, required: true },
    state: { type: String, default: "CO" },
    zipCode: { type: String, required: true },
    notes: { type: String, default: "", },
    estimate: { type: Number },
    jobAssignedTo: { type: String, default: "", },
    checkedIn: { type: Boolean, default: false },
    checkedOut: { type: Boolean, default: false },
    checkInInfo: {
        location: { type: String, default: "" },
        time: { type: String, default: "" }
    },
    checkOutInfo: {
        location: { type: String, default: "" },
        time: { type: String, default: "" }
    }
})

// Simon
bookingSchema.methods.setBookedDate = function () {
    this.bookedDate = this.selectedDate.toString().slice(0, 15);
    return this.bookedDate;
}

const Booking = mongoose.model("Booking", bookingSchema)

module.exports = Booking