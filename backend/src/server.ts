import express from "express";
import cors from "cors";
import { sample_tags, sample_users, sample_verse } from "./data";
import jwt from "jsonwebtoken";

const app = express();
//Cors the local host of front end

// app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  }),
  express.json()
);

//shows the text in URL: http://localhost:5000/api/verses
app.get("/api/verses", (req, res) => {
  res.send(sample_verse);
});

//This is the get api of search Term.
//It has the same built as in frontend
//cuz of :searchTerm use params
app.get("/api/verses/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const verses = sample_verse.filter((verse) =>
    verse.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(verses);
});

app.get("/api/verses/tags", (req, res) => {
  res.send(sample_tags);
});

app.get("/api/verses/tags/:tagNamee", (req, res) => {
  const tagName = req.params.tagNamee;
  const verses = sample_verse.filter((verse) => verse.tags?.includes(tagName));
  res.send(verses);
});

app.get("/api/verses/:verseIDD", (req, res) => {
  const verseId = req.params.verseIDD;
  const verses = sample_verse.find((verse) => verse.id == verseId);
  res.send(verses);
});

//after declaring the use express json it allows to post
app.post("/api/users/login", (req, res) => {
  // const body = req.body;
  const { email, password } = req.body;
  const user = sample_users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    res.send(generateTokenResponse(user));
  } else {
    res.status(400).send("User name or password is not valid!");
  }
});

const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );

  user.token = token;
  return user;
};
//Set the localhost port to 5000
const port = 5000;
app.listen(port, () => {
  console.log("Website served on http://localhost:" + port);
});
