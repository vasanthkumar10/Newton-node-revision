const express = require("express");
const router = express();

const Joi = require("joi");

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

  // define schema
  const schema = Joi.object({
    name: Joi.string().min(3).max(15).required(),
  });

  const result = schema.validate(req.body);
  // console.log(result);
  if (result.error)
    return res.status(400).send(result.error.details[0].message);
  return res.json({
    status: 200,
    data: cars,
  });
});

module.exports = router;
