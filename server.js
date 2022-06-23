import express from "express";

import dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";


import "express-async-errors";

//connect DB
import connectDB from "./db/connect.js";

import cors from "cors";

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

//routes
import authRoute from "./routes/auth.js";
import chatRoute from "./routes/chat.js";

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Running!");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/chat", authenticateUser, chatRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

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
