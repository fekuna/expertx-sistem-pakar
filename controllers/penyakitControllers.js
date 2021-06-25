const { validationResult } = require("express-validator");
const { options } = require("../utils/optVal");
const {
  Penyakit,
  Penyakit_Gejala,
  Gejala,
  history_diagnosis,
} = require("../models");
const HttpError = require("../utils/httpError");

const allPenyakit = async () => {
  let penyakit;
  try {
    penyakit = await Penyakit.findAll({
      include: ["gejala"],
    });
  } catch (err) {
    const error = new HttpError(
      "Could not get penyakit, please try again later.",
      500
    );

    return next(error);
  }

  return penyakit;
};

exports.getAllPenyakit = async (req, res, next) => {
  const penyakit = await allPenyakit();
  // try {
  //   penyakit = await Penyakit.findAll({
  //     include: ["gejala"],
  //   });
  // } catch (err) {
  //   const error = new HttpError(
  //     "Could not get penyakit, please try again later.",
  //     500
  //   );

  //   return next(error);
  // }

  res.status(200).json(penyakit);
};

exports.createPenyakit = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { penyakitId, name, solusi, desc } = req.body;

  let penyakitCreated;
  try {
    penyakitCreated = await Penyakit.create({
      penyakitId: penyakitId.toUpperCase(),
      name,
      solusi,
      desc,
    });
  } catch (err) {
    const error = new HttpError(
      "Failed to add penyakit, try again later.",
      500
    );

    return next(error);
  }

  res
    .status(200)
    .json({ status: "success", msg: "Penyakit successfully created" });
};

exports.updatePenyakit = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const penyakitId = req.params.penyakitId;
  const { name, solusi, desc } = req.body;

  let penyakitUpdated;
  try {
    penyakitUpdated = await Penyakit.update(
      { name, solusi, desc },
      {
        where: {
          penyakitId,
        },
      }
    );
  } catch (err) {
    const error = new HttpError(
      "Failed to add penyakit, try again later.",
      500
    );

    return next(error);
  }

  res.status(200).json({ status: "success", msg: "Data updated successfully" });
};

exports.deletePenyakit = async (req, res, next) => {
  const penyakitId = req.params.penyakitId;

  let penyakitDeleted;
  try {
    penyakitDeleted = await Penyakit.destroy({
      where: {
        penyakitId,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "Failed to delete penyakit, try again later.",
      500
    );
    console.log(err);
    return next(error);
  }

  res.status(200).json(penyakitDeleted);
};

exports.addGejalaToPenyakit = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { penyakitId, gejalaId, cfp } = req.body;

  let gejalaPenyakitCreated;
  let penyakit;
  try {
    gejalaPenyakitCreated = await Penyakit_Gejala.create({
      penyakitId,
      gejalaId,
      cfp,
    });

    penyakit = await Penyakit.findOne({
      where: { penyakitId },
      include: ["gejala"],
    });
  } catch (err) {
    const error = new HttpError(
      "Failed to add gejala to penyakit, please try again later.",
      500
    );

    next(error);
  }

  res.status(200).json(penyakit);
};

exports.removeGejalaToPenyakit = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { penyakitId, gejalaId } = req.body;

  let gejalaRemovedFromPenyakit;
  try {
    gejalaRemovedFromPenyakit = await Penyakit_Gejala.destroy({
      where: {
        penyakitId,
        gejalaId,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "Failed to remove gejala to penyakit, please try again later.",
      500
    );

    next(error);
  }

  res.status(200).json(gejalaRemovedFromPenyakit);
};

const cfSekuensial = (penyakit, gejalaUser) => {
  let cfHE = {};
  // Add penyakitId and its gejala, cfp, cfu, cfpu(CF pakar x user)
  penyakit.map((p) => {
    cfHE[p.penyakitId] = {};
    p.gejala.map(({ Penyakit_Gejala }) => {
      // Init cfp and cfu
      cfHE[p.penyakitId][Penyakit_Gejala.gejalaId] = {
        cfp: Penyakit_Gejala.cfp,
        cfu: 0,
        cfpu: 0,
      };

      gejalaUser.map((gu) => {
        if (gu.gejalaId === Penyakit_Gejala.gejalaId) {
          cfHE[p.penyakitId][Penyakit_Gejala.gejalaId] = {
            ...cfHE[p.penyakitId][Penyakit_Gejala.gejalaId],
            cfu: gu.cfu,
            cfpu: parseFloat((gu.cfu * Penyakit_Gejala.cfp).toFixed(2)),
          };
        }
      });
    });
  });

  return cfHE;
};

const cfCombine = (cfHE) => {
  Object.entries(cfHE).map((cfhe) => {
    let cfOld;
    Object.values(cfhe[1]).map((cf, i) => {
      if (i === 0) {
        cfOld = cf.cfpu;
        return;
      }
      cfOld = cfOld + cf.cfpu * (1 - cfOld);
    });
    cfHE[cfhe[0]]["cfcombine"] = cfOld;
  });

  return cfHE;
};

const findMaxResult = (cfCombined) => {
  let result = [];
  let maxResult = {
    cfcombine: 0,
  };
  // get rid cfcombine with 0 value
  Object.entries(cfCombined).map((cfhe) => {
    if (cfhe[1].cfcombine > 0) {
      result = [
        ...result,
        {
          penyakitId: cfhe[0],
          cfcombine: cfhe[1].cfcombine,
        },
      ];
    }

    // Find max result
    if (cfhe[1].cfcombine > maxResult.cfcombine) {
      maxResult = {
        ...maxResult,
        penyakitId: cfhe[0],
        cfcombine: cfhe[1].cfcombine,
      };

      result = result.filter(
        (rslt) => rslt.penyakitId !== maxResult.penyakitId
      );
    }
  });

  return { maxResult, result };
};

exports.calculateCF = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const penyakit = await allPenyakit();
  const { userId, userGejala } = req.body;

  const cfHE = cfSekuensial(penyakit, userGejala);

  const cfCombined = cfCombine(cfHE);

  const result = findMaxResult(cfCombined);

  penyakit.map((p) => {
    // Find info for max result
    if (p.penyakitId === result.maxResult.penyakitId) {
      result.maxResult = {
        ...result.maxResult,
        name: p.name,
        solusi: p.solusi,
      };
    }

    // Find info for another result
    result.result.map((rslt, idx) => {
      if (rslt.penyakitId === p.penyakitId) {
        result.result[idx] = {
          ...result.result[idx],
          name: p.name,
          solusi: p.solusi,
        };
      }
    });
  });


  // INSERT MAX VALUE INTO DATABASE
  let historyDiagnosisCreated;
  try {
    historyDiagnosisCreated = await history_diagnosis.create({
      userId,
      penyakitName: result.maxResult.name,
      penyakitId: result.maxResult.penyakitId,
      hasil: result.maxResult.cfcombine,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Failed to add history_diagnosis, try again later.",
      500
    );

    return next(error);
  }

  res.status(200).json(result);
};
