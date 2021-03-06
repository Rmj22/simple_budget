const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));


app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://budget:juanita1@ds061787.mlab.com:61787/heroku_1v765r2w", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require('./routes/api'))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
