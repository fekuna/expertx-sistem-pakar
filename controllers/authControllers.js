const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

// Models
const { User } = require("../models");
const HttpError = require("../utils/httpError");

//
// SIGNIN UP
//
exports.signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("hehe", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password, role } = req.body;

  console.log(req.body);

  // Hash password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(password, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not create user, please try again.",
      500
    );
    return next(error);
  }
  console.log("hashedPassword: " + hashedPassword);

  // Save user
  let userCreated;
  try {
    console.log("oakwdoakwodkwaodko");
    userCreated = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again.", 500);
    return next(error);
  }

  // Generate token
  let token;
  try {
    token = jwt.sign(
      {
        userId: userCreated.id,
        email: userCreated.email,
        username: userCreated.username,
        name: userCreated.name,
        role: userCreated.role,
      },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again.", 500);
    return next(error);
  }

  res
    .status(200)
    .json({ userId: userCreated.id, username: userCreated.username, token });
};

//
// LOGIN
//
exports.login = async (req, res, next) => {
  const { username, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ where: { username } });
  } catch (err) {
    const error = new HttpError(
      "Invalid credentials, please input correct email and password",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Invalid credentials, please input correct email and password",
      500
    );
    return next(error);
  }

  let isValidPassword = false;

  try {
    isValidPassword = await bcrypt.compare(password, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Invalid credentials, please input correct email and password",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Invalid credentials, please input correct email and password",
      500
    );
    return next(error);
  }

  let token;

  try {
    token = jwt.sign(
      {
        userId: existingUser.id,
        email: existingUser.email,
        username: existingUser.username,
        name: existingUser.name,
        role: existingUser.role,
      },
      process.env.JWT_KEY,
      { expiresIn: "4h" }
    );
  } catch (err) {
    const error = new HttpError(
      "Invalid credentials, please try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json({ token });
};

//
// GET ALL USERS
//
exports.getUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.findAll({
      attributes: [
        "id",
        "username",
        "role",
        // [sequelize.fn("COUNT", sequelize.col("username")), "n_users"],
      ],
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching users failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json(users);
};

exports.getUserById = async (req, res, next) => {
  const { userId } = req.params;
  console.log(userId);

  let user;

  try {
    console.log('asodkosakd');
    user = await User.findByPk(userId, {
      attributes: [
        "id",
        "username",
        "name",
        "email",
        "role",
        // [sequelize.fn("COUNT", sequelize.col("username")), "n_users"],
      ],
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching user failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json(user);
};

exports.updateProfile = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email } = req.body;
  const { userId } = req.params;

  let userUpdated;
  try {
    userUpdated = await User.update(
      { name, email },
      {
        where: {
          id: userId,
        },
      }
    );
  } catch (e) {
    const error = new HttpError(
      "Failed to add penyakit, try again later.",
      500
    );

    return next(error);
  }

  res.status(200).json({ status: "success", msg: "Data updated successfully" });
};

exports.updatePassword = async (req, res, next) => {
  const { userId } = req.params;
  const { oldPassword, newPassword } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ where: { id: userId } });
  } catch (err) {
    const error = new HttpError(
      "Could not change password, please try again.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError(
      "Could not change password, please try again.",
      500
    );
    return next(error);
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(oldPassword, existingUser.password);
  } catch (err) {
    const error = new HttpError(
      "Could not change password, please try again.",
      500
    );
    return next(error);
  }

  if (!isValidPassword) {
    const error = new HttpError(
      "Old password is invalid, please try again.",
      500
    );
    return next(error);
  }

  // Hash password
  let hashedPassword;
  try {
    hashedPassword = await bcrypt.hash(newPassword, 12);
  } catch (err) {
    const error = new HttpError(
      "Could not change password, please try again.",
      500
    );
    return next(error);
  }

  let userUpdated;
  try {
    userUpdated = await User.update(
      { password: hashedPassword },
      {
        where: {
          id: userId,
        },
      }
    );
  } catch (e) {
    const error = new HttpError(
      "Failed to add penyakit, try again later.",
      500
    );

    return next(error);
  }

  res.status(200).json({ status: "success", msg: "Data updated successfully" });
};
