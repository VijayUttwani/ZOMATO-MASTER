require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// Configs
import googleAuthConfig from "./config/google.config";

// API
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant"
import Food from "./API/Food"

// Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));

zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Passport configuration
googleAuthConfig(passport);

// For Application Routes
// Example Route: localhost:4000/auth/signup
zomato.use("/auth", Auth);
zomato.use("./restaurant", Restaurant);
zomato.use("./food", Food);


zomato.get("/", (req, res) => res.json({ message: "SetUp Success🎉" }));

zomato.listen(4000, () =>
	ConnectDB()
		.then(() => console.log("Server is up and running🚀"))
		.catch(() => console.log("DB Connection Failed"))
);
