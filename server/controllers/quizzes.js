const Question = require("../models/Question.js");

const getQuizzes = async (req, res) => {
  try {
    const createQuiz = await Question.find();

    res.status(200).json(createQuiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createQuiz = (req, res) => {
  res.send("quiz creation");
};

module.exports = { getQuizzes, createQuiz };
