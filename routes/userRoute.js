const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/getuser", async (req, res) => {
  try {
    const fetcheduser = await User.find();
    res.status(200).json(fetcheduser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/adduser", async (req, res) => {
  try {
    const newuserdata = new User(req.body);
    const { name, email, pass } = newuserdata;
    if (!name || !email || !pass) {
      res.status(400).json({ message: "Name/email/pass required" });
    }
    const saveuser = await newuserdata.save(); 
    res.status(201).json(saveuser);
  } catch (error) {
    res.status(500).json(error);
  }
});
