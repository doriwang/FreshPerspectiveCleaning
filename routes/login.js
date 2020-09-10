const router = require("express").Router();
const db = require("../models")
const argon2 = require("argon2")
const jwt = require("jsonwebtoken")

// Provided via Heroku console
// If it does get leaked, it can be changed-
// the only problem will be any existing logins are invalidated.

const SECRET = process.env.JWT_SECRET || "DefaultSecretIsNotAGoodSecret"
const EXPIRY = process.env.JWT_EXPIRY || (60 * 60 * 24 * 7) // default is 1 week

function signToken(employee) {
	let token = { _id: employee.id, username: employee.username };

	return jwt.sign(token, SECRET, { expiresIn: EXPIRY})
}

function unpackToken(token) {
	try {
        // Makes sure the server issued the token, 
        // and unpacks the above data paylod (eg, {id, username} )
		const unpacked = jwt.verify(token, SECRET); 
		return { _id: unpacked._id, username: unpacked.username}
    } catch (err) {
        return null; // Return value if token is invalid
    }
}

router.post("/", async (req, res ) => {
	const { username, password } = req.body;

	if (!username || !password){
		res.json({ success: false, message: "Please provide username and password."});
		return;
	}

	const employee = await db.Employee.findOne({ username })
	if (!employee) {
		res.json({ success: false, message: "Bad username or password"} );
		return;
	}
	// securely verify password matches hash in database 
	if (!await argon2.verify(employee.hash, password)) {
		res.json({ success: false, message: "Bad username or password"} );
		return;
	}
	// Sign token, so that when we receive it again,
	// We know it originated from our server
	// whenever the logged in user wants to ask for our server to do something,
	// they must provide that token with the request.
    const token = signToken(employee)
	res.json({ success : true, token, role: employee.role })

});

router.post("/changePassword", async (req, res) => {
	const { oldPassword, newPassword, confirmPassword, token } = req.body
	if (!oldPassword || !newPassword || !confirmPassword || !token) {
        res.json({ success: false, message: "Missing information" });
        return;
	}
	
	const userData = unpackToken(token);
	if (!userData) {
		res.json({ success: false, message: "invalid token. Session may have expired." });
        return;
	}

	const employee = await db.Employee.findOne(userData);
	if (!employee) {
		res.json({ success: false, message: "User no longer exists." });
        return;
	}
	if(!await argon2.verify(employee.hash, oldPassword)) {
		res.json({ success: false, message: "old password does not match." });
        return;
	}
	if (newPassword !== confirmPassword) {
		res.json({ success: false, message: "New passwords do not match." });
        return;
	}

	employee.hash = await argon2.hash(newPassword);

	await employee.save();

	res.json({ success: true })
});

router.post("/newUser", async (req, res) => {
	const { username, firstName, lastName, password, role, token } = req.body;

	if (!username || !firstName || !lastName || !role || !password || !token) {
		res.json({ success: false, message: "Missing information." });
		return;
	}

	const userData = unpackToken(token);
	if (!userData) {
		res.json({ success: false, message: "Invalid token, login may have expired" });
		return;
	}

	const instigator = await db.Employee.findOne(userData);
	if (!instigator || instigator.role !== "admin") {
		res.json({ success: false, message: "Insufficient permissions." });
		return;
	}

	const check = await db.Employee.findOne({ username });
	if (check) {
		res.json({ success: false, message: "User with that username already exists." });
		return;
	} 

	const hash = await argon2.hash(password);
	const created = await db.Employee.create({
		username, firstName, lastName, hash, role
	})
	console.log(`new user created! ${created.username}, is a ${created.role}`)

	res.json({success: true});
	
});






router.unpackToken = unpackToken;
module.exports = router;