const express = require("express");

const router = express.Router();
const {getQuizzes,createQuiz, getQuizById, getQuestionById} = require('../controllers/quizzes')


router.get('/', getQuizzes )
router.post('/', createQuiz)
router.get('/:id', getQuizById)
// router.get('/question/:questionId', getQuestion)


module.exports = router;