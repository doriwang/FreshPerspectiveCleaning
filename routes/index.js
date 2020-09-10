const router = require("express").Router()

router.use("/api", require("./apiRoutes"))
router.use("/login", require("./login"))
router.use("/example", require ("./exampleLoggedInRouter"))

module.exports = router