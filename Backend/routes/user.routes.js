const express =  require('express');
const router = express.Router();
const {body} = require("express-validator")

router.post('/register',[
    body('eamil').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').({min:3})withMessage
    ('First name must  be at least 3 characters long'),
    body('password'),isLength({min:6}).withMessage('Password must be at least 6 character long')
])



module.exports = routers;
