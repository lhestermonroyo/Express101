/**
  aboutRouter.js
**/
const express = require("express");
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require("simple-json-store");
const store = new SimpleJsonStore("./data.json", { notes: [] });
let cnt = 1;

router.get("/", (req, res) => {
  let viewModel = req.viewModel;
  viewModel.notes = store.get("notes");
  res.render("index.pug", viewModel);
});

router.post("/", (req, res) => {
  let notes = store.get("notes");
  notes.push({
    id: store.get("notes").length + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  });
  console.log(notes);
  store.set("notes", notes);
  res.redirect("/");
});

module.exports = router;
