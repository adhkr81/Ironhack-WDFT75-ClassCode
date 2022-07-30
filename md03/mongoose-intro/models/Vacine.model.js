const { Schema, model } = require("mongoose");

const vacineSchema = new Schema({
  lab: { type: String, required: true, trim: true },
  expiration: { type: String, required: true },
  type: { type: String, required: true },
  renovationDate: { type: Number, required: true },
  qtyOnStock: { type: Number, required: true },
});

const VacineModel = model("Vacine", vacineSchema);

module.exports = VacineModel;
