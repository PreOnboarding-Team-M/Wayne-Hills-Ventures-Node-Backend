const db = require('../models/index');
const SQ = require('sequelize');
const Sequelize = SQ.Sequelize;
const sequelize = require('sequelize');
const user = require('../models/user');
const User = db.user;
const Op = sequelize.Op;

async function signUp(email, password, sex, age, phone) {
  return await User.create({
    email: email,
    password: password,
    sex: sex,
    age: age,
    phone: phone,
  });
}

module.exports = { signUp };
