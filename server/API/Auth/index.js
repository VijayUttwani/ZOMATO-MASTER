import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

// Models
import { UserModel } from "../../database/user";

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
		await UserModel.findByEmailAndPhone(req.body.credentials);

		// DB
		const newUser = await UserModel.create(req.body.credentials);

		// JWT Auth token
		const token = newUser.generateJwtToken();

		return res.status(200).json({ token, status: "success" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

/*
Route : /signin
Descrip : Signin with email and password
params : None
Access : Public
Method : POST
*/

Router.post("/signin", async (req, res) => {
	try {
		const user = await UserModel.findByEmailAndPassword(
			req.body.credentials
		);

		// JWT Auth token
		const token = user.generateJwtToken();

		return res.status(200).json({ token, status: "success" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

/*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  
*/
Router.get(
	"/google",
	passport.authenticate("google", {
	  scope: [
		"https://www.googleapis.com/auth/userinfo.profile",
		"https://www.googleapis.com/auth/userinfo.email",
	  ],
	})
  );
  
  /*
  Route     /google/callback
  Des       Google Signin Callback
  Params    none
  Access    Public
  Method    GET  
  */
  Router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	(req, res) => {
	  return res.json({ token: req.session.passport.user.token });
	}
  );

export default Router;
