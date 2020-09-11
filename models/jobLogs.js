const mongoose = require("mongoose")
const Schema = mongoose.Schema

const jobLogsSchema = new Schema({
    jobDateAndTime: { type: String, required: true },
    employee: { type: String, default: "" },
    clientName: { type: String, required: true },
    jobLocation: { type: String, required: true },
    clientNotes: { type: String },
    checkInInfo: {
        location: { type: String },
        time: { type: String }
    },
    checkOutInfo: { type: String, default: "" }
})

const JobLogs = mongoose.model("JobLogs", jobLogsSchema)

module.exports = JobLogs