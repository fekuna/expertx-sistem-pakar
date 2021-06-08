const { history_diagnosis } = require("../models");

exports.getHistoryByUserId = async (req, res, next) => {
  const userId = req.params.userId;
  let history;
  try {
    history = await history_diagnosis.findAll({
      where: {
        userId,
      },
    });
  } catch (err) {
    const error = new HttpError(
      "Could not get history, please try again later.",
      500
    );

    return next(error);
  }

  //   Descending History
  history = history.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  res.status(200).json(history);
};
