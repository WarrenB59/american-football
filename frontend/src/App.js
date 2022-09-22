import axios from "axios";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [scoreX, setScoreX] = useState("");
  const [scoreY, setScoreY] = useState("");
  const [resultX, setResultX] = useState("");
  const [resultY, setResultY] = useState("");

  async function postScore(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:3000/score", {
          scoreX,
          scoreY,
        })
        .then((res) => {
          console.log(res.data);
          setResultX(res.data.scoreX);
          setResultY(res.data.scoreY);
        });
    } catch (error) {
      console.error(error);
    }
  }

  // function getResult() {
  //   console.log(scoreX + " " + scoreY);
  // }

  function getResult() {
    const teamX = resultX;
    const teamY = resultY;

    const pat = (teamX && teamY) % 7 == 0;
    const fieldGoal = (teamX && teamY) % 3 == 0;
    const touchDown = (teamX && teamY) % 6 == 0;

    if (pat) {
      console.log(pat / 7 + "  touchdown et " + pat / 7 + " PAT");
    }

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
  }

  return (
    <div className="App">
      <div className="header">
        <h1>American Football 🏈</h1>
      </div>
      <div className="form-component">
        <div className="input-container">
          <div className="score-input">
            <form>
              <h2>Score Team X</h2>
              <input
                type="number"
                placeholder="Entrez score"
                min={0}
                value={scoreX}
                onChange={(e) => setScoreX(e.target.value)}
              />
            </form>
          </div>
          <div className="score-input">
            <form>
              <h2>Score Team Y</h2>
              <input
                type="number"
                placeholder="Entrez score"
                min={0}
                value={scoreY}
                onChange={(e) => setScoreY(e.target.value)}
              />
            </form>
          </div>
        </div>
        <div className="submit-container">
          <form onSubmit={postScore}>
            <input
              id="submit-button"
              type="submit"
              value="Calcul des possibilités via l'API"
              onClick={
                // setResultX(scoreX.valueOf());
                // setResultY(scoreY.valueOf());
                // getResult();
                postScore
              }
            />
          </form>
        </div>
      </div>
      <div className="result">
        <div className="result-teams">
          <div className="result-teamX">
            <h4>Team X</h4>
          </div>
          <div className="result-teamY">
            <h4>Team Y</h4>
          </div>
        </div>
        <div className="result-possibilities">
          <div className="result-possibilities-teamX">
            {/* variable probabilités */}
            <p>{resultX}</p>
          </div>
          <div className="result-possibilities-teamY">
            {/* variable probabilités */}
            <p>{resultY}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
