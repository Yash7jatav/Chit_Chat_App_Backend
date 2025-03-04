const express = require("express");
const { validateRegistration, validateLogin } = require("../validations/index");
const { registerNewUser, loginUser } = require("../controllers/index");
const router = express.Router();

//POST route to register a user.
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const error = await validateRegistration(username, password);
    if (error) return res.status(400).json({ error });
    const newUser = await registerNewUser(username, password);
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

//POST route to login a user.
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const error = await validateLogin(username, password);
    if (error) return res.status(400).json({ error });
    const logUser = await loginUser(username);
    return res.status(200).json(logUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
