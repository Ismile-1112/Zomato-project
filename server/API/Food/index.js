// libraries
import express from "express";
import passport from "passport";

// database model
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route          /
Description    get all the restaurant details based on city
Params         none
Access         public
Method         GET
*/

