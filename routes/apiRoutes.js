const router = require("express").Router();
const db = require("../models");

router.post("/booknow", (req, res) => {
    db.Booking.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

router.get("/getjobs", (req, res) => {
    db.Booking.find({})
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

router.put("/updatejob/:id", (req, res) => {
    db.Booking.findOneAndUpdate({ id_: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

router.delete("/deletejob/:id", (req, res) => {
    db.Booking.findOneAndDelete({ id_: req.params.id })
        .then(data => res.json(data))
        .catch(err => res.status(500).json(err));
})

module.exports = router;