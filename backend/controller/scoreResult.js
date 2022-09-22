module.exports.scoreResult = (req, res) => {
  let { scoreX, scoreY } = req.body;
  let resultX = scoreX * 4;
  let resultY = scoreY * 8;

  // function getResult() {
  //   let resultX;
  //   let resultY;

  //   if (scoreX % 6 == 0) {
  //     resultX = scoreX + "touchdown";
  //   }
  // const teamX = resultX;
  // const teamY = resultY;
  // const pat = (teamX && teamY) % 7 == 0;
  // const fieldGoal = (teamX && teamY) % 3 == 0;
  // const touchDown = (teamX && teamY) % 6 == 0;
  // if (pat) {
  //   console.log(pat / 7 + "  touchdown et " + pat / 7 + " PAT");
  // }
  // if ((teamX - pat) % 3 == 0) {
  //   console.log(
  //     "Team X a potentiellement marqué " +
  //       pat / 7 +
  //       "  touchdown et " +
  //       (teamX - pat) / 3 +
  //       " fieldgoal et " +
  //       pat / 7 +
  //       " PAT"
  //   );
  // }
  // if ((teamY - pat) % 3 == 0) {
  //   console.log(
  //     "Team Y a potentiellement marqué " +
  //       pat / 7 +
  //       "  touchdown et " +
  //       (teamY - pat) / 3 +
  //       " fieldgoal et " +
  //       pat / 7 +
  //       " PAT"
  //   );
  // }
  // if (teamX % 6 == 0) {
  //   console.log(
  //     "Team X a potentiellement marqué " + teamX / 6 + " touchdown"
  //   );
  // }
  // if (teamY % 6 == 0) {
  //   console.log(
  //     "Team Y a potentiellement marqué " + teamY / 6 + " touchdown"
  //   );
  // }
  // if (teamX % 3 == 0) {
  //   console.log(
  //     "Team X a potentiellement marqué " +
  //       teamX / 6 +
  //       " touchdown" +
  //       teamX / 3 +
  //       " fieldgoal"
  //   );
  // }
  // if (teamY % 3 == 0) {
  //   console.log(
  //     "Team Y a potentiellement marqué " +
  //       teamY / 6 +
  //       " touchdown" +
  //       teamY / 3 +
  //       " fieldgoal"
  //   );
  // }
  // if (teamX % 7 == 0 && teamX % 3 == 0) {
  //   if (teamX > 14) {
  //     for (let i = 1; i <= teamX / 6; i++) {
  //       let z = parseInt((i % 3) + 1);
  //       if (i > 2 && (teamX - 6 * i) / 3 - 1 > 0) {
  //         console.log(
  //           "Team X a potentiellement marqué " +
  //             i +
  //             "  touchdown et " +
  //             (teamX - 6 * i) / 3 +
  //             " fieldgoal"
  //         );
  //         console.log(
  //           "Team X a potentiellement marqué " +
  //             i +
  //             ((teamX - 6 * i) / 3 - 1) +
  //             " fieldgoal et " +
  //             z * 3 +
  //             " PAT"
  //         );
  //       }
  //       if (i < 3) {
  //         console.log(
  //           "Team Y a potentiellement marqué " +
  //             i +
  //             "  touchdown et " +
  //             (teamX - 6 * i) / 3 +
  //             " fieldgoal"
  //         );
  //       }
  //     }
  //   }
  // }
  // if (teamY % 7 == 0 && teamY % 3 == 0) {
  //   if (teamY > 14) {
  //     for (let i = 1; i <= teamY / 6; i++) {
  //       let z = parseInt((i % 3) + 1);
  //       if (i > 2 && (teamY - 6 * i) / 3 - 1 > 0) {
  //         console.log(
  //           "Team Y a potentiellement marqué " +
  //             i +
  //             "  touchdown et " +
  //             (teamY - 6 * i) / 3 +
  //             " fieldgoal"
  //         );
  //         console.log(
  //           "Team X a potentiellement marqué " +
  //             i +
  //             ((teamY - 6 * i) / 3 - 1) +
  //             " fieldgoal et " +
  //             z * 3 +
  //             " PAT"
  //         );
  //       }
  //       if (i < 3) {
  //         console.log(
  //           "Team Y a potentiellement marqué " +
  //             i +
  //             "  touchdown et " +
  //             (teamY - 6 * i) / 3 +
  //             " fieldgoal"
  //         );
  //       }
  //     }
  //   }
  // }
  // }

  res.json({ scoreX: resultX, scoreY: resultY });
  console.log(
    "Score équipe X : " +
      scoreX +
      " points - " +
      "Score équipe Y : " +
      scoreY +
      " points"
  );
};
