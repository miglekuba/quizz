const User = require("../../models/User.js");
const jwt = require('jsonwebtoken')

//handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { email: '', password: '' };

    //incorrect email

    if (err.message === 'incorrect email') {
        errors.email = 'that email is not registered'
    }
    //incorrect password
    if (err.message === 'incorrect password') {
        errors.password = 'that password is incorrect'
    }

    //duplicate error code
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    //validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        });
    }
    return errors;
}

maxAge = 3 * 24 * 60 * 60;
const createToken = (role) => {
    return jwt.sign({ role }, 'secret', {
        expiresIn: maxAge
    });
}

const signup_get = (req, res) => {
    res.sendStatus(204)
};

const login_get = (req, res) => {
    res.render('login')
};

const signup_post = async (req, res) => {
    const { email, password } = req.body;
    //create and instance of a user and save to db
    try {
        const user = await User.create({ email, password })
        const token = createToken(user._id);
        res.cookie('jwt', token, { domain: 'localhost', crossDomain: true, httpOnly: true, maxAge: maxAge * 1000 })
        return res.status(201).json({ user: user._id })
    } catch (err) {
        const errors = handleErrors(err)
        return res.status(400).json({ errors })
    }
}

const login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        const token = createToken(user.role);
        res.cookie('jwt', token, {domain: 'localhost',crossDomain: true, httpOnly: true, maxAge: maxAge * 1000 })
        return res.status(200).json({ user: user._id })
    } catch (err) {
        const errors = handleErrors(err)
        return res.status(400).json({ errors })
    }
};

module.exports = { signup_get, signup_post, login_get, login_post }