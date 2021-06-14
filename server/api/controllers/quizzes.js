const Quiz = require("../../models/Quiz.js");

const getQuizzes = async (req, res) => {
  try {
    const createQuiz = await Quiz.find();
    res.status(200).json(createQuiz);
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createQuiz = (req, res) => {
  res.send("quiz creation");
};

const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.send(quiz)
  
  } catch (error) {
    
  }
}
module.exports = { getQuizzes, createQuiz, getQuizById};
