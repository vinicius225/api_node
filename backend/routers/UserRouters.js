const express = require("express");
const router = express.Router();

//Controllers

const { register } = require("../controllers/UserController");


//Middlewares
const validate = require("../middlewares/handleValidation");
const {userCreateValidator} = require("../middlewares/userValidation")
// routers

router.post("/register", userCreateValidator(), validate, register);



module.exports =router;
