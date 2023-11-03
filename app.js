const express = require("express");
const app = express();
const config = require("config");
const cars = require("./routes/cars");

// to load body
app.use(express.json());

require("dotenv").config();

console.log("config", config);

const PORT = config.get("port");

// custom middleware
app.use(function middleware(req, res, next) {
  console.log("in custom middleware");
  next();
});

app.get("/", (req, res) => {
  console.log("app running", req.body);
  res.send("home page");
});

app.use(cars);

app.listen(PORT, () => console.log(`listening to port ${PORT}....`));
