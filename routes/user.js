const express = require('express');
const body = require('express-validator');
const userController = require('../controller/user');
const validate = require('../middleware/validator');
// const isLogin = require('../middleware/auth');
const router = express.Router();

const validateCredential = [
  body('email')
    .notEmpty()
    .withMessage('이메일을 입력해주세요.')
    .trim()
    .isEmail()
    .withMessage('이메일을 올바른 형식으로 입력해주세요.'),
  body('password')
    .notEmpty()
    .withMessage('비밀번호를 입력해주세요.')
    .trim()
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/,
    )
    .withMessage('비밀번호를 올바른 형식으로 입력해주세요.'),
  validate,
];

router.post('/user/signUp', validateCredential, userController.signUp);

module.exports = router;
