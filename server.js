import express from "express";
const app = express();

import cors from "cors";

//routes
import authRoute from "./routes/auth.js";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.use("/api/v1/auth", authRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Running on port : ${port}...`));
