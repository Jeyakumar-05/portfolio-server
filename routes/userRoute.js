const User = require("../models/userModel");
const express = require("express");
const router = express.Router();

router.get("/getuser", async (req, res) => {
  try {
    const fetchedusers = await User.find();
    res.status(200).json(fetchedusers);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/adduser", async (req, res) => {
  try {
    const newuserdata = new User(req.body);
    const { Name, email } = newuserdata;
    if (!name || !email || !pass) {
      res.status(400).json({ message: "Name/email/pass required" });
    }
    const savedata = await newuserdata.save();
    res.status(201).json(savedata);
  } catch (error) {
    res.status(500).json(error);
  }
});



module.exports = router;