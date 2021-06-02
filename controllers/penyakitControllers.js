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
  const { id, name, solusi } = req.body;

  let penyakitCreated;
  try {
    penyakitCreated = await Penyakit.create({ id, name, solusi });
  } catch (err) {
    const error = new HttpError(
      "Failed to add penyakit, try again later.",
      500
    );

    return next(error);
  }

  res.status(200).json(penyakitCreated);
};

exports.updatePenyakit = async (req, res, next) => {
  const penyakitId = req.params.penyakitId;
  const { name, solusi } = req.body;

  let penyakitUpdated;
  try {
    penyakitUpdated = await Penyakit.update(
      { name, solusi },
      {
        where: {
          id: penyakitId,
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

  res.status(200).json(penyakitUpdated);
};

exports.deletePenyakit = async (req, res, next) => {
  const penyakitId = req.params.penyakitId;

  let penyakitDeleted;
  try {
    penyakitDeleted = await Penyakit.destroy({
      where: {
        id: penyakitId,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "Failed to delete gejal, try again later.",
      500
    );
    return next(error);
  }

  res.status(200).json(penyakitDeleted);
};

exports.addGejalaToPenyakit = async (req, res, next) => {
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
      where: { id: penyakitId },
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

exports.calculateCF = async (req, res, next) => {
  const penyakit = await allPenyakit();
  const { userId, gejala } = req.body;
  let cfHE = {};

  // Add penyakitId and its gejala, cfp, cfu, cfpu(CF pakar and user)
  penyakit.map((p) => {
    cfHE[p.id] = {};
    p.gejala.map(({ Penyakit_Gejala }) => {
      // Init cfp and cfu
      cfHE[p.id][Penyakit_Gejala.gejalaId] = {
        cfp: Penyakit_Gejala.cfp,
        cfu: 0,
        cfpu: 0,
      };

      userId,
        gejala.map((gu) => {
          if (gu.gejalaId === Penyakit_Gejala.gejalaId) {
            cfHE[p.id][Penyakit_Gejala.gejalaId] = {
              ...cfHE[p.id][Penyakit_Gejala.gejalaId],
              cfu: gu.cfu,
              cfpu: parseFloat((gu.cfu * Penyakit_Gejala.cfp).toFixed(2)),
            };
          }
        });
    });
  });

  // CFcombine
  Object.entries(cfHE).map((cfhe) => {
    // console.log(cfhe, 'ayee');

    let cfOld;
    Object.values(cfhe[1]).map((cf, i) => {
      if (i === 0) {
        // console.log("massookkk");
        cfOld = cf.cfpu;
        return;
      }
      cfOld = cfOld + cf.cfpu * (1 - cfOld);
      // console.log(cf);
    });
    cfHE[cfhe[0]]["cfcombine"] = cfOld;

    // let cfCombine = Object.values(cfhe[1]).reduce((cfOld, currentObj) => {
    //   // return cfOld.cfpu + currentObj.cfpu * (1 - cfOld.cfpu)
    //   console.log(currentObj, 'hehe');
    // });
    // console.log("\n");
    // console.log(cfhe[0], cfCombine);
    // test
    // check comment
  });

  let result = [];
  let maxResult = {
    cfcombine: 0,
  };
  // get rid cfcombine with 0 value
  Object.entries(cfHE).map((cfhe) => {
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
    }
  });

  // console.log(maxResult, "max nich");
  // console.log(result);
  const penyakitResult = penyakit.find((p) => p.id === maxResult.penyakitId);
  maxResult = {
    ...maxResult,
    name: penyakitResult.name,
    solusi: penyakitResult.solusi,
  };

  const data = {
    result,
    maxResult,
  };

  // INSERT TO DATABASE
  let historyDiagnosisCreated;
  try {
    historyDiagnosisCreated = await history_diagnosis.create({
      userId,
      penyakitId: maxResult.penyakitId,
      hasil: maxResult.cfcombine,
    });
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      "Failed to add history_diagnosis, try again later.",
      500
    );

    return next(error);
  }

  res.status(200).json(data);
};
