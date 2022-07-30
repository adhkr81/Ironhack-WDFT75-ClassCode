const router = require("express").Router();

const ReviewModel = require("../models/Review.model");
const BeerModel = require("../models/Beer.model");

router.post("/create-review/:beerId", async (req, res) => {
  try {
    const { beerId } = req.params;

    const newReview = await ReviewModel.create({ ...req.body, beer: beerId });

    const editedBeer = await BeerModel.findOneAndUpdate(
      { _id: beerId },
      { $push: { reviews: newReview._id } },
      { new: true }
    );

    return res.status(201).json({ newReview, editedBeer });
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});

module.exports = router;
