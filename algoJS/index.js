function getValue() {
  const teamX = document.getElementById("team-x").value;
  const teamY = document.getElementById("team-y").value;

  const touchDown = (teamX && teamY) % 6 == 0;
  const fieldGoal = (teamX && teamY) % 3 == 0;
  const pat = ((teamX && teamY) - touchDown) % 7 == 0;

  if (pat) {
    console.log(
      "Team X : " +
        (teamX - (teamX % 6)) / 6 +
        " Touchdown et " +
        teamX / 7 +
        " Point After TouchDown"
    );
    console.log(
      "Team Y : " +
        (teamY - (teamY % 6)) / 6 +
        " Touchdown et " +
        teamY / 7 +
        " Point After TouchDown"
    );
  }
  // if (touchDown + pat) {
  //   console.log(
  //     "Team X : " +
  //       (teamX % 6) +
  //       " Touchdown et " +
  //       teamX / 7 +
  //       " Point After TouchDown"
  //   );
  //   console.log(
  //     "Team Y : " +
  //       (teamY % 6) +
  //       " Touchdown et " +
  //       teamY / 7 +
  //       " Point After TouchDown"
  //   );
  // }

  // for (let i = 0; i <= teamX && teamY; i++) {
  if (touchDown) {
    console.log("Team X : " + teamX / 6 + " Touchdown");
    console.log("Team Y : " + teamY / 6 + " Touchdown");
  }
  if (fieldGoal) {
    console.log("Team X : " + teamX / 3 + " Field Goal");
    console.log("Team Y : " + teamY / 3 + " Field Goal");
  }
  // }

  /************************
   * Approche différente
   ***********************/

  // if (pat) {
  //   console.log(pat / 7 + "  touchdown et " + pat / 7 + " PAT");
  // }

  //   if ((teamX - pat) % 3 == 0) {
  //     console.log(
  //       pat / 7 +
  //         "  touchdown et " +
  //         (teamX - pat) / 3 +
  //         " fieldgoal et " +
  //         pat / 7 +
  //         " PAT"
  //     );
  //   }

  //   if (teamX % 6 == 0) {
  //     console.log(teamX / 6 + " touchdown");
  //   }

  //   if (teamX % 3 == 0) {
  //     console.log(teamX / 3 + " fieldgoal");
  //   }

  //   if (teamX % 7 == 0 && teamX % 3 == 0) {
  //     if (teamX > 14) {
  //       for (i = 1; i <= teamX / 6; i++) {
  //         let z = parseInt((i % 3) + 1);
  //         if (i > 2 && (teamX - 6 * i) / 3 - 1 > 0) {
  //           console.log(
  //             i + "  touchdown et " + (teamX - 6 * i) / 3 + " fieldgoal"
  //           );
  //           console.log(
  //             "Tu as fait " +
  //               i +
  //               ((teamX - 6 * i) / 3 - 1) +
  //               " fieldgoal et " +
  //               z * 3 +
  //               " PAT"
  //           );
  //         }
  //         if (i < 3)
  //           console.log(
  //             i + "  touchdown et " + (teamX - 6 * i) / 3 + " fieldgoal"
  //           );
  //       }
  //     }
  //   }
}
