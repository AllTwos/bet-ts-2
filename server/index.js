const express = require("express");

const app = express();
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 5003;

app.use(express.json()); //get info from frontend json format
app.use(cors());

app.get("/", (req, res) => {
  res.send("You got it");
});

app.get("/test-get", (req, res) => {
  res.send({ test: "testyy", ham: "sammich" });
});

app.post("/test", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  console.log(name, age);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//on dev nov 2