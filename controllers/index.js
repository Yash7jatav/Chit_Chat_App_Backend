const User = require("../models/user.model");
const Message = require("../models/message.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//JWT_SECRET.
const jwtSecret = process.env.JWT_SECRET;

//Function to register a new user.
async function registerNewUser(username, password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();
  const token = jwt.sign({ id: newUser._id }, jwtSecret, { expiresIn: "1h" });
  return {
    message: "User registered successfully.",
    userToken: token,
    username: newUser.username,
  };
}

//Function to login a user.
async function loginUser(username) {
  const user = await User.findOne({ username });
  return { message: "User logged-in successfully.", username: user.username };
}

//Function to fetch messages.
async function fetchMessages(sender, receiver) {
  if (!sender || !receiver) {
    return { error: "Sender and receiver are required." };
  }
  const messages = await Message.find({
    $or: [
      { sender, receiver },
      { sender: receiver, receiver: sender },
    ],
  }).sort({ createdAt: 1 });
  if (messages.length === 0) {
    return { message: "No messages found", data: [] };
  }
  return messages;
}

//Function to fetch list of all users except current user.
async function fetchAllUsers(currentUser) {
  const users = await User.find({ username: { $ne: currentUser } });
  if (users.length === 0) {
    return {
      message: "No users are found for this current user.",
      usersList: [],
    };
  }
  return users;
}

module.exports = { registerNewUser, loginUser, fetchMessages, fetchAllUsers };
