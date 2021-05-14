const mongoose = require("mongoose");
const uuid = require('uuid');
const Schema = mongoose.Schema;


const Quiz = new Schema({
  id: { type: String, required: true, default: uuid.v4 },
  name: { type: String, required: true },
  questionsList: [{ type: String, required: true }],
}, {timestamps: true});

module.exports = mongoose.model("Quiz", Quiz, "quizzes");


