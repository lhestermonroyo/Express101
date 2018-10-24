/**
 * @description
 * Entry file for The Province Man's Web App
 */
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const indexRouter = require("./server/routers/indexRouter");
const notesRouter = require("./server/routers/notesRouter");
const aboutRouter = require("./server/routers/aboutRouter");
const app = express();
const port = 3300;

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.viewModel = {
    title: "Lhester - Note Taking App"
  };
  next();
});

app.use(express.static("public"));

// NOTE: The __dirname is important for setting up the directory of the views
app.set("views", path.join(__dirname, "server/views"));
app.set("view engine", "pug");

app.use("/", indexRouter);
app.use("/about", aboutRouter);

// app.get('/about', (req, res) => {
//   res.send('What about us?');
// });

app.use("/api/notes", notesRouter);

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log(`Listening to ${port}...`);
});
