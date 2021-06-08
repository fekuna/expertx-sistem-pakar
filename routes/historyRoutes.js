const express = require("express");

const router = express.Router();

// Controllers
const historyControllers = require("../controllers/historyControllers");

router.get("/user/:userId", historyControllers.getHistoryByUserId);

module.exports = router;
