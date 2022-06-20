const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server Running!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port : ${port}...`));
