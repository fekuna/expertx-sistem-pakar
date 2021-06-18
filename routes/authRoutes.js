const express = require("express");
const { check } = require("express-validator");

const { User } = require("../models");

const router = express.Router();

// Controllers
const authController = require("../controllers/authControllers");

// Signup route
router.post(
  "/signup",
  check("email")
    .notEmpty()
    .withMessage("Email is required")
    .custom((email) => {
      return User.findOne({ where: { email } }).then((user) => {
        if (user) {
          return Promise.reject("Email already in use");
        }
      });
    }),
  check("username")
    .notEmpty()
    .withMessage("username is required")
    .toLowerCase()
    .custom((username) => {
      return User.findOne({ where: { username } }).then((user) => {
        if (user) {
          return Promise.reject("userame already in use");
        }
      });
    }),
  authController.signup
);

// Login route
router.post("/login", authController.login);

// getUsers route
router.get("/", authController.getUsers);

module.exports = router;
