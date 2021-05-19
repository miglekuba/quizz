const express = require("express");
require("./db.js");
const quizRoute = require("./api/routes/quiz-routes");
const mockQuestions = require("./mock.js");

const app = express();
app.use(express.json());

app.use("/quizzes", quizRoute);

app.get("/", (req, res) => {
  res.send("hey!");
});

const port = 5000;

app.listen(
  port,
  async () => {
    await mockQuestions();
	console.log(`Server runnning on port: ${port}`)
  },
);
