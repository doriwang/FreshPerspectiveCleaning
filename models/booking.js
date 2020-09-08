const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookingSchema = new Schema({
    bedNum: { type: String, required: true },
    bathNum: { type: String, required: true },
    footageNum: { type: String, required: true }, // Simon: footageNum might not be required
    frequency: { type: String, required: true },
    selectedDate: { type: Date, required: true }, // Simon modifies it to Date type form string type
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
    jobAssignedTo: { type: String, default: "", }
})

const Booking = mongoose.model("Booking", bookingSchema)

module.exports = Booking