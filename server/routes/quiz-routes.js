const express = require("express");

const router = express.Router();
const {getQuizzes, createQuiz} = require('../controllers/quizzes')


router.get('/', getQuizzes )
router.post('/', createQuiz)

module.exports = router;