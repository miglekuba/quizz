const Question = require("./models/Question");
const Quiz = require("./models/Quiz");
const User = require("./models/User");
require("./db.js");


const mockQuestions = async () => {
  try {
    await Question.insertMany([
      {
        title: "What is the largest ocean in the world ",
        answers: [
          {
            title: "Pacific",
            isCorrect: true,
          },
          {
            title: "Indian",
            isCorrect: false,
          },
          {
            title: "Atlantic",
            isCorrect: false,
          },
        ],
      },
    ]);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

Quiz.insertMany([
  {
    name: "Quiz1",
    quostionsList: [
      { name: Question.title,

    }
  ]
  }
]);

module.exports = mockQuestions;
