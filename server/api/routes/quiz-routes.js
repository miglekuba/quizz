const express = require("express");

const router = express.Router();
const quizController = require('../controllers/quizController')

router.get('/', quizController.getQuizzes )
router.post('/', quizController.createQuiz)
router.post('/add', quizController.addQuiz);
router.get('/:id', quizController.getQuizById)
router.delete('/:id', quizController.deleteQuiz);
router.put('/:id/edit', quizController.editQuiz);


module.exports = router;