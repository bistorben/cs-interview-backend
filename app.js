import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import albumRouter from "./routes/albumRouter.js";

const app = express();
const PORT = process.env.PORT;

// MongoDB connection

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => console.log("Connected with MongoDB"))
  .catch((error) => console.log(error, " - Database did not connected!"));

mongoose.connection.on("error", () => console.log("Database connection error"));

// middlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/album", albumRouter);

// error handling middleware

app.use((req, res, next) => {
  const err = new Error("This endpoint does not exist");
  err.status = 404;
  next(err);
});

app.listen(PORT, () => {
  console.log("server is running");
});
