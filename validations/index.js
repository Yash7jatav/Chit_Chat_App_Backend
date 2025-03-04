const User = require("../models/user.model");
const bcrypt = require("bcrypt");

async function validateRegistration(username, password) {
  if (!username || typeof username !== "string") {
    return "Username is required and must be a string.";
  }
  if (!password || typeof password !== "string") {
    return "Password is required and must be a string.";
  }
  const existUser = await User.findOne({ username });
  if (existUser) {
    return "User already registered. Please login.";
  }
  return null;
}

async function validateLogin(username, password) {
  if (!username || typeof username !== "string") {
    return "Username is required and must be a string.";
  }
  if (!password || typeof password !== "string") {
    return "Password is required and must be a string.";
  }
  const existUser = await User.findOne({ username });
  if (!existUser) {
    return "User not found. Please register.";
  }
  const isPasswordMatch = await bcrypt.compare(password, existUser.password);
  if (!isPasswordMatch) {
    return "Invalid password. Please try again.";
  }
  return null;
}

module.exports = { validateRegistration, validateLogin };
