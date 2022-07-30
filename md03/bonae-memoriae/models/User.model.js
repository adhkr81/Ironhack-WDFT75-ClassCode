const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true, trim: true, match: /\s/gm },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
  },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
  memories: [{ type: Types.ObjectId, ref: "Memory" }],
  albuns: [{ type: Types.ObjectId, ref: "Album" }],
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
