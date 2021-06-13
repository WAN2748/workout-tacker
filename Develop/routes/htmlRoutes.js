const path = require("path");
const html = require("express").Router();


html.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  });

html.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

module.exports = html;