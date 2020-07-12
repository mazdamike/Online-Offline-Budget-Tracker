var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";
// mongoose.connect(MONGODB_URI);


const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

// const PORT = 3000;
var PORT = process.env.PORT || 8080;
const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});



// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});