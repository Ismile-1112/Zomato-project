// libraries
import express from "express";
import passport from "passport";

// database model
import { UserModel } from "../../database/allModels";

// Validations
import { ValidateUserId, ValidateUserData } from "../../validation/user";

const Router = express.Router();

/*
Route          /
Description    Get User Data
Params         _id
Body           none
Access         public
Method         GET
*/

Router.get("/:_id", async (req, res) => {
    try{
        await ValidateUserId(req.params);
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({ user: getUser });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route          /update
Description    update user id
Params         _id
Body           user data
Access         public
Method         PUT
*/

Router.put("/update/:userID", async (req, res) => {
    try{
        await ValidateUserId(req.params);
        await ValidateUserData(req.body);
        const{ userID } = req.params;
        const{ userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(userID, {
            $set: userData
        }, { new: true });

        return res.json({user: updateUserData});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;