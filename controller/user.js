const userController = require('../services/user');

const signUp = async (req, res) => {
  try {
    const { email, password, sex, age, phone } = req.body;
    await userController.signUp(email, password, sex, age, phone);
    return res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { signUp };
