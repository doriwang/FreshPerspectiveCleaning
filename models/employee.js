const mongoose = require("mongoose")
const Schema = mongoose.Schema

const employeeSchema = new Schema({
	firstName: { type: String },
	lastName: { type: String },
	username: { type: String },
	role: { type: String, enum: ["admin", "employee"] },
	hash: { type: String },
})

const Employee = mongoose.model("Employee", employeeSchema)

module.exports = Employee