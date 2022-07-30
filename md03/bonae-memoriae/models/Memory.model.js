const { Schema, model, Types } = require("mongoose");

const memorySchema = new Schema({
  owner: { type: Types.ObjectId, ref: "User" },
  title: { type: String, required: true, trim: true, maxLength: 64 },
  description: { type: String, maxLength: 144 },
  date: { type: String },
  location: { type: String },
  feeling: {
    type: String,
    enum: [
      "Confused",
      "Happy",
      "Inspired",
      "Hungry",
      "Embarrassed",
      "Regret",
      "Frustrated",
      "Sextou",
    ],
    default: "Happy",
  },
  creationDate: { type: Date, default: Date.now() },
  albuns: [{ type: Types.ObjectId, ref: "Album" }],
});

const MemoryModel = model("Memory", memorySchema);

module.exports = MemoryModel;
