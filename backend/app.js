const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
const { scoreResult } = require("./controller/scoreResult");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", cors(), async (req, res) => {
  res.send("American Football Backend Works!");
});
app.post("/score", scoreResult);
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
