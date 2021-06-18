const express = require("express");
const { check } = require("express-validator");

const { Gejala } = require("../models");

const router = express.Router();

// Controllers
const gejalaControllers = require("../controllers/gejalaControllers");

router.get("/", gejalaControllers.getAllGejala);

router.post(
  "/",
  check("gejalaId")
    .notEmpty()
    .withMessage("Gejala id is required")
    .custom((gejalaId) => {
      return Gejala.findOne({ where: { gejalaId } }).then((gejala) => {
        console.log("hello", gejala);
        if (gejala) {
          return Promise.reject("Gejala ID already in use");
        }
      });
    }),
  check("name").notEmpty().withMessage("Gejala Name is required"),
  check("question").notEmpty().withMessage("Question is required"),
  gejalaControllers.createGejala
);

router.patch(
  "/:gejalaId",
  check("name").notEmpty().withMessage("Gejala Name is required"),
  check("question").notEmpty().withMessage("Question is required"),
  gejalaControllers.updateGejala
);

router.delete("/:gejalaId", gejalaControllers.deleteGejala);

module.exports = router;
