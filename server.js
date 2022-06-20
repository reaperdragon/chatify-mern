import express from "express";

import dotenv from "dotenv";
dotenv.config();

//connect DB
import connectDB from "./db/connect.js";

import cors from "cors";

const app = express();

//routes
import authRoute from "./routes/auth.js";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.use("/api/v1/auth", authRoute);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Server Running on port : ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
