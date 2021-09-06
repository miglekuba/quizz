const express = require("express");
const cors = require('cors')
require("./db.js");
const quizRoutes = require("./api/routes/quiz-routes");
const authRoutes = require("./api/routes/auth-routes")
const cookieParser = require('cookie-parser')
const setUpDatabase = require("./setup-db.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// app.get('*', checkUser)
app.use("/quizzes", quizRoutes);
app.use("/", authRoutes)

const port = 5000;

app.listen(
  port,
  async () => {
    await setUpDatabase();
	console.log(`Server runnning on port: ${port}`)
  },
);
