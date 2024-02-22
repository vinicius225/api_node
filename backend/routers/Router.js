const express = require('express');
const router = express.Router();

router.use("/api/users", require("./UserRouters"))

router.get('/', (req, res) => {
    res.send("Welcome to the ");
});

module.exports = router;