const express = require("express");

const router = express.Router();
const {getQuizzes,createQuiz, getQuizById, deleteQuiz,editQuiz, addQuiz} = require('../controllers/quizzes')


router.get('/', getQuizzes )
router.post('/', createQuiz)
router.post('/add', addQuiz);
router.get('/:id', getQuizById)
router.delete('/:id', deleteQuiz);
router.put('/:id/edit', editQuiz);


module.exports = router;