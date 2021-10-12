import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Models
import { UserModel } from "../../database/user"

const Router = express.Router();

/*
Route : /signup
Descrip : Signup with email and password
params : None
Access : Public
Method : POST
*/

Router.post("/signup", async (req, res) => {
	try {
		const { fullName, email, password, phoneNumber } = req.body.credentials;

		// Check whether email or phone number already exists
		const checkUserByEmail = await UserModel.findOne({ email });
		const checkUserByPhone = await UserModel.findOne({ phoneNumber });

		if (checkUserByEmail || checkUserByPhone) {
			return res.json({ error: "User already Exists" });
		}

		// hashing and salting
		const bcryptSalt = await bcrypt.genSalt(8);

		const hashedPassword = await bcrypt.hash(password, bcryptSalt);

		await UserModel.create({
			...req.body.credentials,
			password: hashedPassword,
		});

		// JWT Auth Token
		const token = await jwt.sign({ user: { fullName, email } }, "ZomatoApp");

		return res.status(200).json({ token });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

export default Router;
