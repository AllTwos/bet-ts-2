const express = require("express");

const app = express();

const PORT = process.env.PORT || 5003;

app.get("/", (req, res) => {
  res.send("You got it");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

//test3