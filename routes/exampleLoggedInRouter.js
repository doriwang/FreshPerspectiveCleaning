const router = require("express").Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const login = require("./login");

router.post("/", async (req, res) => {
	const { testData, token } = req.body;
	
	if (!testData || !token) {
		res.json({success: false, message: "Missing information"});
		return;
	}
	
	const userData = login.unpackToken(token);
	console.log(`Unpacked user data!`, userData);
	
	const employee = await db.Employee.findOne(userData);
	if (!employee) {
		console.log(`did not find user!`)
		res.json({success: false, message: "User does not exist!"});
		return;
	}
	
	console.log(`Found user! ${employee.username}, ${employee.firstName} ${employee.lastName}`	);
	console.log(`Echoing testData: ${testData}`)
	
	res.json({success: true, testData});
	
});

module.exports = router;
