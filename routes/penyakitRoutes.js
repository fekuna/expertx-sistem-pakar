const express = require("express");
const { check } = require("express-validator");

const { Penyakit, Gejala, User, Penyakit_Gejala } = require("../models");

const router = express.Router();

// Controllers
const penyakitControllers = require("../controllers/penyakitControllers");

router.get("/", penyakitControllers.getAllPenyakit);
router.post(
  "/",
  check("penyakitId")
    .notEmpty()
    .withMessage("Penyait ID is required")
    .custom((penyakitId) => {
      return Penyakit.findOne({ where: { penyakitId } }).then((penyakit) => {
        if (penyakit) {
          return Promise.reject("Penyakit ID already in use");
        }
      });
    }),
  check("name").notEmpty().withMessage("Penyakit Name is required"),
  check("desc").notEmpty().withMessage("Penyakit Description is required"),
  check("solusi").notEmpty().withMessage("Penyakit Solution is required"),
  penyakitControllers.createPenyakit
);
router.patch(
  "/:penyakitId",
  check("name").notEmpty().withMessage("Penyakit Name is required"),
  check("desc").notEmpty().withMessage("Penyakit Description is required"),
  check("solusi").notEmpty().withMessage("Penyakit Solution is required"),
  penyakitControllers.updatePenyakit
);
router.delete("/:penyakitId", penyakitControllers.deletePenyakit);

// Relation between penyakit and gejala
router.post(
  "/add/gejala",
  check("penyakitId")
    .notEmpty()
    .withMessage("Penyait ID is required")
    .custom(async (penyakitId) => {
      // console.log("heheh", gejalaId);
      const penyakit = await Penyakit.findOne({ where: { penyakitId } });
      if (!penyakit) {
        return Promise.reject("Penyakit ID is not found");
      }
    }),
  check("gejalaId")
    .notEmpty()
    .withMessage("Gejala ID is required")
    .custom(
      async (
        gejalaId,
        {
          req: {
            body: { penyakitId },
          },
        }
      ) => {
        const gejala = await Gejala.findOne({ where: { gejalaId } });
        if (!gejala) {
          return Promise.reject("Gejala ID is not found");
        }

        const penyakitInGejala = await Penyakit_Gejala.findOne({
          where: {
            penyakitId,
            gejalaId,
          },
        });

        if (penyakitInGejala) {
          return Promise.reject("Penyakit has gejala already.");
        }
      }
    ),
  check("cfp").notEmpty().withMessage("CF Pakar is required"),
  penyakitControllers.addGejalaToPenyakit
);
router.delete(
  "/remove/gejala",
  check("gejalaId").notEmpty().withMessage("Gejala ID is required"),
  check("penyakitId").notEmpty().withMessage("Penyakit ID is required"),
  penyakitControllers.removeGejalaToPenyakit
);

// Calculation
router.post(
  "/calculateCF",
  check("userId")
    .notEmpty()
    .withMessage("User ID is required")
    .custom((userId) => {
      return User.findOne({ where: { id: userId } }).then((user) => {
        if (!user) {
          return Promise.reject("User ID is not found");
        }
      });
    }),
  check("userGejala")
    .notEmpty()
    .withMessage("userGejala is required")
    .isArray()
    .withMessage("userGejala must to be array"),
  penyakitControllers.calculateCF
);

module.exports = router;
