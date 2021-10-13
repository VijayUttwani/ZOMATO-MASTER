// Libraries
import express from "express";
import passport from "passport";

// Database Model
import { FoodModel } from "../../database/food";

const Router = express.Router();

/*
Route     /
Des       Get all the food based on restaurants
Params    _id
Access    Public
Method    GET  
*/

Router.get("/restaurant:_id", async (req, res) => {
	try {
		const { _id } = req.params;
		const foods = await FoodModel.find({ restaurant: _id });

		return res.json({ foods });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

/*
Route     /category/:category
Des       Get all the food based on category
Params    category
Access    Public
Method    GET  
*/

Router.get("/category/:category", async (req, res) => {
	try {
		const { category } = req.params;
		const foods = await FoodModel.find({
			category: { $regex: category, $options: "i" },
		});

		return res.json({ foods });
	} catch (error) {
		return res.json(500).json({ error: error.message });
	}
});
export default Router;
