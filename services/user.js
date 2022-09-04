const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRepository = require('../repository/user');

const signUp = async body => {
  try {
    const { email, password } = body;
    const userSignUpInfo = await userRepository.signUp(email, password);
    res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { signUp };
