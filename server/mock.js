const Question = require("./models/Question");
const Quiz = require("./models/Quiz");
const User = require("./models/User");
require ("./db.js")

Question.insertMany([
  {
    title: "What Is ur name?",
    answers: [
      {
        title: "migle",
        isCorrect: true,
      }, 
      {
        title: "james",
        isCorrect: false,
      },
      {
        title: "ransome",
        isCorrect: false,
      },
    ],
  },
]);

