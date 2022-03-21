const express = require('express');
const { signUpValidator, signinValidator, validatorResult } = require('../middleware/validator');
const router = express.Router();
const {signupController, signinController} = require('../controllers/auth');
 

router.post('/signup', signUpValidator,validatorResult, signupController);
router.post('/signin', signinValidator,validatorResult, signinController);

module.exports = router;
