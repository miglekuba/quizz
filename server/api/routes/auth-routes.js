const express = require("express");

const router = express.Router()

const authController = require('../controllers/authController')

router.get('/', authController.login_get)
router.post('/', authController.login_post)
router.get('/signup', authController.signup_get)
router.post('/signup', authController.signup_post)

module.exports = router;