const express = require("express");
const router = express();

router.get("/cars", (req, res) => {
  console.log("returning cars");
  let cars = ["audi", "bmw"];
  return res.json({
    status: 200,
    data: cars,
  });
});

router.post("/cars", (req, res) => {
  console.log("returning post cars");
  let cars = ["audi", "bmw"];
  return res.json({
    status: 200,
    data: cars,
  });
});

module.exports = router;
