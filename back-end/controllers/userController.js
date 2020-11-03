const { RegisterUser, UpdateUserName, LoginUser } = require('../services/userService');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const response = await LoginUser(email, password);
  return res.status(200).json(response);
};

const registerController = async (req, res) => {
  const { status, message, token } = await RegisterUser(req.body);
  if (status === 201) return res.status(status).json({ message, status, token });
  return res.status(status).json({ message, status });
};

const updateNameController = async (req, res) => {
  const { name, email } = req.body;
  const response = await UpdateUserName(name, email);
  return res.status(200).json(response);
};

module.exports = {
  loginController,
  registerController,
  updateNameController,
};
