const Quiz = require("./models/Quiz");
const connection = require("./db.js");

const setUpDatabase = async () => {
  try {
    await connection.dropCollection('quizzes')
  } catch (error) {
    console.log('error on dropping collection', error)
  }
  try {
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
                  title: "Asia",
                  isCorrect: false,
                },
                {
                  title: "Australia",
                  isCorrect: true,
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
    console.log("error on db seeding", error);
  }
};

module.exports = setUpDatabase;
