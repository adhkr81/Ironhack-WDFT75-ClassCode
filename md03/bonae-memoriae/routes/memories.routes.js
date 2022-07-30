const router = require("express").Router();
const MemoryModel = require("../models/Memory.model");
const AlbumModel = require("../models/Album.model");

// CREATE
router.post("/create-memory", async (req, res) => {
  try {
    // Se a gente quiser que toda memoria tenha que está em um album, podemos fazer algo assim
    // Ia ter que receber o id do album ou no body ou como parametro de rota, de seus pulos
    // if (!req.body.albuns || req.body.albuns === []) {
    //   return res.status(400).json({ message: "A memoria precisa de um album" });
    // }

    const createdMemory = await MemoryModel.create(req.body);

    return res.status(201).json(createdMemory);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

// READ ALL
router.get("/my-memories", async (req, res) => {
  try {
    const myMemories = await MemoryModel.find(
      {},
      { feeling: 0, creationDate: 0, albuns: 0 }
    );

    // const mappedMemories = myMemories.map((currentElement) => {
    //   return {
    //     _id: currentElement._id,
    //     title: currentElement.title,
    //     date: currentElement.date,
    //     location: currentElement.location,
    //   };
    // });

    return res.status(200).json(myMemories);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

// READ - DETAILS

router.get("/:memoryId", async (req, res) => {
  try {
    const { memoryId } = req.params;
    const foundedMemory = await MemoryModel.findOne({ _id: memoryId }).populate(
      "albuns"
    );

    return res.status(200).json(foundedMemory);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

// UPDATE

router.patch("/edit/:memoryId", async (req, res) => {
  try {
    const { memoryId } = req.params;

    const body = { ...req.body };

    delete body.albuns;
    delete body.creationDate;

    const updatedMemory = await MemoryModel.findOneAndUpdate(
      { _id: memoryId },
      { ...body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedMemory);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

// DELETE

router.delete("/delete/:memoryId", async (req, res) => {
  try {
    const { memoryId } = req.params;
    const deletedMemory = await MemoryModel.deleteOne({
      _id: req.params.memoryId,
    });

    const albuns = await AlbumModel.updateMany(
      { memories: memoryId },
      { $pull: { memories: memoryId } }
    );

    return res.status(200).json(deletedMemory);
  } catch (err) {
    console.log(err);

    return res.status(500).json(err);
  }
});

// Add a memoria ao album espeficicado

router.post("/add-memory/:memoryId/:albumId", async (req, res) => {
  try {
    const { memoryId, albumId } = req.params;

    await AlbumModel.findOneAndUpdate(
      { _id: albumId },
      { $push: { memories: memoryId } },
      { runValidators: true }
    );

    await MemoryModel.findOneAndUpdate(
      { _id: memoryId },
      { $push: { albuns: albumId } },
      { runValidators: true }
    );

    return res
      .status(200)
      .json({ message: "Memoria add ao album com sucesso!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

module.exports = router;
