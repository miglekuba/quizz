const Quiz = require("./models/Quiz");
const connection = require("./db.js");

const setUpDatabase = async () => {
  try {
    await connection.dropCollection("quizzes");
    await Quiz.insertMany(
      [
        {
          name: "Oceanography",
          questionList: [
            {
              question: "Which ocean is the deepest?",
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
            {
              question: "Where is world's largest coral reef system?",
              answers: [
                {
                  title: "Australia",
                  isCorrect: true,
                },
                {
                  title: "Asia",
                  isCorrect: false,
                },
                {
                  title: "South America",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          name: "Ornithology",
          questionList: [
            {
              question: "Which bird has no feathers?",
              answers: [
                {
                  title: "Toucan",
                  isCorrect: false,
                },
                {
                  title: "Rhea",
                  isCorrect: true,
                },
                {
                  title: "Hummingbird",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
        {
          name: "Botany",
          questionList: [
            {
              question: "Which plant is carnivorous?",
              answers: [
                {
                  title: "Petunia",
                  isCorrect: false,
                },
                {
                  title: "Venus flytrap",
                  isCorrect: true,
                },
                {
                  title: "Hibiscus",
                  isCorrect: false,
                },
              ],
            },
          ],
        },
      ]
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = setUpDatabase;
