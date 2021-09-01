const User = require("../../models/User.js");


const signup_get = (req, res) => {
    console.log("signup get blah")
    res.sendStatus(204)
};

const login_get = (req, res) => {
    console.log("login get blah")
    res.render('login')
};

const signup_post = (req, res) => {
    res.send('new sign up')
};

const login_post = (req, res) => {
    res.send('user login')
};

module.exports = { signup_get, login_get, signup_post, login_post }