const { Schema, model, Types } = require("mongoose");

const beerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 64,
    minLength: 2,
  },

  type: {
    type: String,
    enum: ["Pilsen", "Ipa", "Apa", "Stout", "Ale", "Weiss", "Outros"],
    required: true,
  },

  ibu: { type: Number, min: 0, max: 99, default: 12 },
  reviews: [{ type: Types.ObjectId, ref: "Review" }],
});

const BeerModel = model("Beer", beerSchema);

module.exports = BeerModel;
