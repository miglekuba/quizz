const jwt = require('jsonwebtoken');
const User = require('../../models/User.js');


// used to protect sensitive routes
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
                res.redirect('/')
            } else {
                console.log(decodedToken);
                next();
            }
        })

    }
    else {
        res.redirect('/')
    }
}

// // check current user
// const checkUser =  (req, res, next) => {
//     const token = req.cookies.jwt

//     if (token) {
//         jwt.verify(token, 'secret', async (err, decodedToken) => {
//             if (err) {
//                 console.log(err.message)
//                 res.locals.user = null
//                 next()
//             } else {
//                 console.log(decodedToken);
//                 let user = await User.findById(decodedToken.id)
//                 res.locals.user = user
//                 next();
//             }
//         })
//     }
//     else {
//         res.locals.user = null
//         next()
//     }
// }

module.exports = { requireAuth, checkUser }