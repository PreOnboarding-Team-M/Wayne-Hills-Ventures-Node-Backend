

const signUp = async (req, res) => {
  try {
    const createUser = await signUp();
    res.status(201).json(createUser);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = { signUp };
