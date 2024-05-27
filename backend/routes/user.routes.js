const express = require("express");
const { registeruser, loginuser, logoutuser } = require("../controllers/user.controller");
const { auth } = require("../middleware/auth.middleware");

const userRouter = express.Router();

userRouter.post("/register",registeruser)

userRouter.post("/login",loginuser)

userRouter.post("/logout",auth,logoutuser);


module.exports={
    userRouter
}