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
    res.send(quiz);
  } catch (error) {}
};

const deleteQuiz = async (req, res) => {
  try {
    const deleteQuiz = await Quiz.deleteOne({ _id: req.params.id });
    res.send("quiz deleted");
  } catch (error) {
    res.status(500);
  }
};

const editQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findOneAndReplace({ _id: req.params.id }, req.body);
    res.send("quiz sucessfully updated");
  } catch (error) {
    res.status(404).json({ error, message: "Update failed" });
  }
};

// const addQuiz = async (req, res) => {
//   const quiz = req.body;
//   const newQuiz = new Quiz(quiz)

//   try {
//     await newQuiz.save()
//     res.status(201).json(newPost)

//   } catch (error) {
//     res.status(409).json({message: error.message})

//   }
// }

module.exports = { getQuizzes, createQuiz, getQuizById, deleteQuiz, editQuiz };
