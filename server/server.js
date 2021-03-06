const express = require("express");
const cors = require('cors')
require("./db.js");
const quizRoutes = require('./api/routes/quiz-routes');
const authRoutes = require('./api/routes/auth-routes')
const { requireAuth } = require('./api/middleware/authMiddleware')
const cookieParser = require('cookie-parser')


const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
  // optionsSuccessStatus: 200 
}));
app.use(cookieParser());

// app.get('*', checkUser)
app.use("/quizzes", requireAuth, quizRoutes);
app.use("/", authRoutes)

const port = 5000;

app.listen(
  port,
  () => console.log(`Server runnning on port: ${port}`));
