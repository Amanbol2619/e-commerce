const { check, validationResult} = require('express-validator');
exports.signUpValidator = [
    check('username')
        .not()
        .isEmpty()
        .trim()
        .withMessage('All message required'),
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invailed email'),
    check('password')
        .isLength({ min: 6})

        .withMessage('Нууц үг 6 аас доошгүй байна')


];
exports.signinValidator = [
   
    check('email')
        .isEmail()
        .normalizeEmail()
        .withMessage('Invailed email'),
    check('password')
        .isLength({ min: 6})

        .withMessage('Нууц үг 6 аас доошгүй байна')


];

exports.validatorResult = (req, res, next) =>{
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();
    if(hasErrors){
        const firstError = result.array()[0].msg;
        return res.status(400).json({
            errorMessage:firstError,
            
        });
     //console.log('has errors', hasErrors);
    // console.log('result', result); 
    }
    next();
}