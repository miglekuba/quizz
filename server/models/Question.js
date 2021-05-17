const mongoose = require("mongoose");
const uuid = require("uuid");

const Schema = mongoose.Schema;

const Answer = new Schema({
  id: { type: String, required: true, default: uuid.v4 },
  title: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
});

const Question = new Schema(
  {
    id: { type: String, required: true, default: uuid.v4 },
    title: { type: String, required: true },
    answers: [Answer],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", Question, "questions");
