const { validationResult } = require("express-validator");

const { Gejala } = require("../models");
const HttpError = require("../utils/httpError");

exports.getAllGejala = async (req, res, next) => {
  let gejala;
  try {
    gejala = await Gejala.findAll();
  } catch (err) {
    const error = new HttpError(
      "Fetching gejala failed, please try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json(gejala);
};

exports.createGejala = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("hehe", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }
  const { gejalaId, name, question } = req.body;

  let gejalaCreated;
  try {
    gejalaCreated = await Gejala.create({
      gejalaId: gejalaId.toUpperCase(),
      name,
      question,
    });
  } catch (err) {
    const error = new HttpError(
      "Failed to add gejala into database, try again later.",
      500
    );

    return next(error);
  }

  res.status(200).json({
    gejalaId: gejalaCreated.gejalaId,
    name: gejalaCreated.name,
    question: gejalaCreated.question,
  });
};

exports.updateGejala = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, question } = req.body;
  const { gejalaId } = req.params;

  let updatedGejala;
  try {
    updatedGejala = await Gejala.update(
      { name, question },
      {
        where: {
          gejalaId: gejalaId,
        },
      }
    );
  } catch (err) {
    const error = new HttpError(
      "Failed to update gejala, try agin later.",
      500
    );
    return next(error);
  }

  res.status(200).json({ status: "success", msg: "Data updated successfully" });
};

exports.deleteGejala = async (req, res, next) => {
  const gejalaId = req.params.gejalaId;

  let gejalaDeleted;
  try {
    gejalaDeleted = await Gejala.destroy({
      where: {
        gejalaId,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "Failed to delete gejala, try again later.",
      500
    );
    console.log(err);
    return next(error);
  }

  res.status(200).json(gejalaDeleted);
};
