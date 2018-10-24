/**
  aboutRouter.js
**/
const express = require("express");
const router = express.Router(); //eslint-disable-line

router.get("/", (req, res) => {
  let viewModel = req.viewModel;
  res.render("index.pug", viewModel);
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
