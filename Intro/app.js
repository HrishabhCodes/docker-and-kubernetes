const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("<h1>Hey There!</h1>");
});

app.listen(3000, () => {
  console.log("Listening on PORT 3000!");
});
