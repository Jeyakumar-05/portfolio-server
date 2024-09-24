require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const dbConn = require("./config/db");
const Projects = require("./routes/projectRoute");
const User = require("./routes/userRoute");

const port = process.env.PORT || 8888;
app.use("/projects", Projects);
app.use("/user", User);

app.get("/", (req, res) => {
  res.status(400).json("Heyyy");
});

app.listen(port, () => {
  console.log(`Server running in : ${port}`);
});
