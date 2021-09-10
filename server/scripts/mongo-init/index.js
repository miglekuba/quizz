db = db.getSiblingDB('quiz-app');
db.quizzes.insertMany([
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
    name: "James Quiz",
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
])

db.users.createIndex({ email: 1 }, { unique: true })
db.users.insertMany([
  {
    email: "admin@migle.com",
    password: "$2b$10$3cuNFPpRdxIbjZkb3P1BfeJAaHIRr6It8QoSGuD6tDJv0M9bj2tB.",
    role: "ADMIN",
  },
  {
    email: "mid@migle.com",
    password: "$2b$10$Tdlz3tXJp0WIeWcC.Hw8Ie0Wk9sFsgyTVbI2.Pygr6DOWpyJ2M1pK",
    role: "VIEW_USER",
  },
  {
    email: "peasant@migle.com",
    password: "$2b$10$ru3/zEQfJjjlC7C9AOuOGeEc1OOZkUwWQukJ0m/cgp5aH/D9g9brm",
    role: "LIMITED_USER",
  }
])
