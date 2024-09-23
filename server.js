const express = require("express");
const app = express();
const dbCon = require("./config/db");
const Projects = require("./routes/projectRoute")

require("dotenv").config();

const port = process.env.PORT || 8888;
app.use("/projects",Projects)

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Heyy heyy" });
});

app.listen(port, () => {
  console.log(`Server running in : ${port}`);
});
