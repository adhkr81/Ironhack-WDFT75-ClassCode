const { Schema, Types, model } = require("mongoose");

const albumSchema = new Schema({
  owner: { type: Types.ObjectId, ref: "User" },
  title: { type: String, required: true, trim: true, maxLength: 64 },
  description: { type: String, maxLength: 144 },
  memories: [{ type: Types.ObjectId, ref: "Memory" }],
});

const AlbumModel = model("Album", albumSchema);

module.exports = AlbumModel;
