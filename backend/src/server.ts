import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { sample_tags, sample_users, sample_verse } from "./data";
import jwt from "jsonwebtoken";
import verseRouter from "./routers/verse.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";

import { dbConnect } from "./configs/database.config";
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
app.use("/api/order", orderRouter);

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//Set the localhost port to 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://biverse.onrender.com");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});
