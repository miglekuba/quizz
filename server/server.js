const express = require ("express");
require ("./db.js")
const quizRoute = require ("./routes/quiz-routes")


const app = express();
app.use(express.json());

app.use('/quizzes', quizRoute)

app.get("/", (req, res) => {
	res.send("hey!");
});

const port = 5000;

app.listen(port, () => console.log(`Server runnning on port: ${port}`))

