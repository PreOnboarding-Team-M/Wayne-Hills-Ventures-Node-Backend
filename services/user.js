const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRepository = require('../repository/user');
const { createError } = require('../err/createError');

const salt = bcrypt.genSaltSync();

const signUp = async (email, password, sex, age, phone) => {
  const existingUser = await userRepository.getUserByEmail(email);
  if (existingUser) {
    const error = createError('EXISTING_USER', 409);
    throw error;
  }

  password = await bcrypt.hash(password, salt);
  const userSignUpInfo = await userRepository.signUp(
    email,
    password,
    sex,
    age,
    phone,
  );
};

module.exports = { signUp };
