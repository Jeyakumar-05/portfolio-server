const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGOURL ||
    "mongodb+srv://jeyakumar1442:9jQOPBwgQGrsFanP@in-aws.j2ept.mongodb.net/?retryWrites=true&w=majority&appName=In-AWS"
);

const connection = mongoose.connection;

connection.on("connected", () => console.log("DB connected"));
connection.on("error", () => console.log("DB error"));

module.exports = mongoose;
