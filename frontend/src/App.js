import axios from "axios";
import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [resultX, setResultX] = useState("");
  const [resultY, setResultY] = useState("");
  const scoreXref = useRef();
  const scoreYref = useRef();

  async function postScore(e) {
    e.preventDefault();
    const scoreX = scoreXref.current.value;
    const scoreY = scoreYref.current.value;
    console.log(
      "Team X : " + scoreX + " points ",
      "Team Y : " + scoreY + " points "
    );
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
                ref={scoreXref}
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
                ref={scoreYref}
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
            <p>Pour le score donné, l'équipe X a potentiellement marqué</p>
            <h4>{resultX}</h4>
          </div>
          <div className="result-possibilities-teamY">
            <p>Pour le score donné, l'équipe Y a potentiellement marqué</p>
            <h4>{resultY}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
