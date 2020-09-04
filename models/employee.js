const mongoose = require("mongoose")
const Schema = mongoose.Schema

const employeeSchema = new Schema({
	firstName: { type: String },
	lastName: { type: String },
	username: { type: String },
	role: {enum: ["admin", "employee"] }
})

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee