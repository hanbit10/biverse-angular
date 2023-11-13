import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { sample_tags, sample_users, sample_verse } from "./data";
import jwt from "jsonwebtoken";
import verseRouter from "./routers/verse.router";
import userRouter from "./routers/user.router";

import { dbConnect } from "../configs/database.config";
dbConnect();

const app = express();
//Cors the local host of front end

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  }),
  express.json()
);

//Instead of writing all the apis in a file organize it in the order routers
app.use("/api/verses", verseRouter);
app.use("/api/users", userRouter);

//Set the localhost port to 5000
const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
