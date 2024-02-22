const express = require("express");
const router = express.Router();

//Controllers

const { register } = require("../controllers/UserController");

// routers

router.post("/register", register);

module.exports = router;
