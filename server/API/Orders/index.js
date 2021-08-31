// libraries
import express from "express";
import passport from "passport";

// database model
import { OrderModel } from "../../database/allModels";

// Validation
import { ValidateOrderId, ValidateOrderNewId } from "../../validation/order";

const Router = express.Router();

/*
Route          /
Description    get all orders based on id
Params         _id
Access         public
Method         GET
*/

Router.get("/:_id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try{
        await ValidateOrderId(req.params);
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });

        if(!getOrders) {
            return res.status(404).json({ error: "User not found" });
        }

        return res.status(200).json({ orders: getOrders });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /new
Description    Add new order
Params         _id
Access         public
Method         POST
*/

Router.post("/new/:_id", async (req, res) => {
    try{
        await ValidateOrderNewId(req.params);
        const { _id } = req.params;
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
              user: _id
            },
            {
                $push: { orderDetails },
            }, 
            { new: true }
        );

        return res.json({ order: addNewOrder });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;