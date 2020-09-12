const router = require("express").Router();
const db = require("../models");

router.post("/booknow", (req, res) => {
    db.Booking.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

router.get("/getjobs", (req, res) => {
    db.Booking.find()
        .sort({ date: 1 })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

router.get("/getjob/:jobAssignedTo", (req, res) => {
    db.Booking.find({ jobAssignedTo: req.params.jobAssignedTo })
        .sort({ date: 1 })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

router.get("/selected/:selectedDate", (req, res) => {
    console.log(req.params)
    db.Booking.find({ selectedDate: req.params.selectedDate })
        .then(data => {

            res.json(data)
        })
        .catch(err => res.json(err));
})

router.put("/updatejob/:id", (req, res) => {
    db.Booking.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

router.delete("/deletejob/:id", (req, res) => {
    db.Booking.findOneAndDelete({ _id: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

router.put("/joblogs/:id", (req, res) => {
    db.Booking.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

module.exports = router;