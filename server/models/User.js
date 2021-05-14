const mongoose = require("mongoose");
const uuid = require('uuid');
const Schema = mongoose.Schema;


const User = new Schema({
  id: { type: String, required: true, default: uuid.v4 },
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: [
    "ADMIN",
    "READ_ONLY_USER",
    "LIMITED_USER",
]}
}, {timestamps: true});

module.exports = mongoose.model("User", User, "users");
