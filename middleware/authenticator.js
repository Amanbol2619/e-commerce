const jwt = require('jsonwebtoken');
const { jwtSecret} = require('../config/keys')


exports.authenticateJWT = (req, res, next) => {
 const token = req.cookies.token;
 console.log(token);
 if(!token) {
     return res.status(401).json({
         errorMessage: 'no token. Auth denied',
     });
 }
   
    try{
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded.user;
        next();

    } catch(err) {
        console.log('jwt error base: ', err);
        res.status(401).json({
            errorMessage: ' Invailed token aaaaaaaaaaaa'
        })

    }
};