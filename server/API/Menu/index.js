// Libraries
import express from "express";

// Database Models
import { MenuModel } from "../../database/menu";

const Router = express.Router();

/*
Route     /list
Des       Get the list of menu based on id
Params    _id
Access    Public
Method    GET  
*/
Router.get("/list/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const menus = await MenuModel.findOne(_id);
  
      return res.json({ menus });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
});

/*
Route     /image
Des       Get all menu images based on id
Params    _id
Access    Public
Method    GET  
*/
Router.get("/image/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const menus = await ImageModel.findOne(_id);
  
      return res.json({ menus });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
export default Router;