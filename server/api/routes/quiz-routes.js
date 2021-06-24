const express = require("express");

const router = express.Router();
const {getQuizzes,createQuiz, getQuizById, deleteQuiz} = require('../controllers/quizzes')


router.get('/', getQuizzes )
router.post('/', createQuiz)
router.get('/:id', getQuizById)
router.delete('/:id', deleteQuiz);
// router.put('/:id/edit', editQuiz);


module.exports = router;