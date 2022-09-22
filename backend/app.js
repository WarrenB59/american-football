const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
const { scoreResult } = require("./controller/scoreResult");

// npm init
// npm i express cors nodemon
// they add a handy req.body object to our req,
// containing a Javascript
//  object representing the payload sent with the request

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
