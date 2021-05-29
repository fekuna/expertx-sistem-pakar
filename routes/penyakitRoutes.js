const express = require("express");

const router = express.Router();

// Controllers
const penyakitControllers = require("../controllers/penyakitControllers");

router.get("/", penyakitControllers.getAllPenyakit);
router.post("/", penyakitControllers.createPenyakit);
router.patch("/:penyakitId", penyakitControllers.updatePenyakit);
router.delete("/:penyakitId", penyakitControllers.deletePenyakit);

// Relation between penyakit and gejala
router.post("/add/gejala", penyakitControllers.addGejalaToPenyakit);

// Calculation
router.post("/calculateCF", penyakitControllers.calculateCF);

module.exports = router;
