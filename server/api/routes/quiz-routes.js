const express = require("express");

const router = express.Router();
const {getQuizzes,createQuiz, getQuizById} = require('../controllers/quizzes')


router.get('/', getQuizzes )
router.post('/', createQuiz)
router.get('/:id', getQuizById)


module.exports = router;