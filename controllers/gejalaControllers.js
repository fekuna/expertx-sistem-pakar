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
  const { id, name, desc } = req.body;

  let gejalaCreated;
  try {
    gejalaCreated = await Gejala.create({ id, name, desc });
  } catch (err) {
    const error = new HttpError(
      "Failed to add gejala into database, try again later.",
      500
    );

    return next(error);
  }

  res.status(200).json({
    id: gejalaCreated.id,
    name: gejalaCreated.name,
    desc: gejalaCreated.desc,
  });
};

exports.updateGejala = async (req, res, next) => {
  const { name, desc } = req.body;
  const gejalaId = req.params.gejalaId;

  console.log("gejalaId: " + gejalaId);
  let updatedGejala;
  try {
    updatedGejala = await Gejala.update(
      { name, desc },
      {
        where: {
          id: gejalaId,
        },
      }
    );
    console.log(updatedGejala);
  } catch (err) {
    const error = new HttpError(
      "Failed to update gejala, try agin later.",
      500
    );
    return next(error);
  }

  res.status(200).json(updatedGejala);
};

exports.deleteGejala = async (req, res, next) => {
  const gejalaId = req.params.gejalaId;

  let gejalaDeleted;
  try {
    gejalaDeleted = await Gejala.destroy({
      where: {
        id: gejalaId,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "Failed to delete gejal, try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json(gejalaDeleted);
};
