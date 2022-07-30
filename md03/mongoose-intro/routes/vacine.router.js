const router = require("express").Router();

const VacineModel = require("../models/Vacine.model");

//C

router.post("/create-vacine", async (req, res) => {
  try {
    const newVacine = await VacineModel.create(req.body);

    return res.status(201).json(newVacine);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// R - All

router.get("/all-vacines", async (req, res) => {
  try {
    const allVacines = await VacineModel.find();

    return res.status(200).json(allVacines);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

// R - Detail
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const vacine = await VacineModel.findOne({ _id: id });

    return res.status(200).json(vacine);
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});

// E

router.patch("/edit/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const editedVacine = await VacineModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json(editedVacine);
  } catch (err) {
    console.error(err);

    return res.status(500).json(err);
  }
});

// D

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedVacine = await VacineModel.deleteOne({ _id: id });

    return res.status(200).json(deletedVacine);
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
