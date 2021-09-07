const jwt = require('jsonwebtoken');

// used to protect sensitive routes
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.sendStatus(401)
            } else {
                console.log(decodedToken);
                next();
            }
        })
    }
    else {
        res.sendStatus(401)
    }
}

module.exports = { requireAuth }