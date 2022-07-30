const router = require("express").Router();

const { response } = require("express");
const { STATES } = require("mongoose");
const BeerModel = require("../models/Beer.model");

// Create

router.post("/create-beer", async (req, res) => {
  try {
    const newBeer = await BeerModel.create(req.body);

    return res.status(201).json(newBeer);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// Read - Details

router.get("/:beerId", async (req, res) => {
  try {
    const { beerId } = req.params;

    const beer = await BeerModel.findOne({ _id: beerId }).populate("reviews");

    return res.status(200).json(beer);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
