const User = require("../../models/User.js");
//handle errirs
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { email: '', password: '' };

    //incorrect email

    if (err.message === 'incorrect email'){
        errors.email = 'that email is not registered'
    }
    //incorrect password
    if (err.message === 'incorrect password'){
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
        res.status(201).json(user)

    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })

    }
}
const login_post = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await User.login(email, password)    
    } catch (err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors }) 
    }
};

module.exports = { signup_get, login_get, signup_post, login_post }