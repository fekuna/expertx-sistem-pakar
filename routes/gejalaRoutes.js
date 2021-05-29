const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

// Controllers
const gejalaControllers = require("../controllers/gejalaControllers");

router.get("/", gejalaControllers.getAllGejala);

router.post("/", gejalaControllers.createGejala);

router.patch("/:gejalaId", gejalaControllers.updateGejala);

router.delete("/:gejalaId", gejalaControllers.deleteGejala);

module.exports = router;
