const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne({ burger_name: req.body.burger_name }, result => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.put("/api/burgers/:id/devoured", (req, res) => {
  const id = req.params.id
  const devoured = req.body.devoured

  burger.updateOne(devoured, id, (result) => {
    if (result.affectedRows === 0) {
      return res.sendStatus(404)
    }
    res.sendStatus(200)
  })
});

module.exports = router
