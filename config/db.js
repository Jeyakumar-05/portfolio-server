const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL);

const connection = mongoose.connection;

connection.on("connected", () => console.log("DB connected"));
connection.on("error", () => console.log("DB error"));

module.exports = mongoose;
