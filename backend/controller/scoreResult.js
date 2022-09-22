module.exports.scoreResult = (req, res) => {
  let { scoreX, scoreY } = req.body;
  let result = scoreX * scoreY;
  res.json({ scoreX: result, scoreY: result });
  console.log(
    "Score équipe X : " +
      scoreX +
      " points - " +
      "Score équipe Y : " +
      scoreY +
      " points"
  );
};
