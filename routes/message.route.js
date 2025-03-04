const express = require("express");
const { fetchMessages } = require("../controllers/index");
const router = express.Router();

//GET route to fetch messages.
router.get("/", async (req, res) => {
  try {
    const { sender, receiver } = req.query;
    const message = await fetchMessages(sender, receiver);
    if (message.error) return res.status(400).json(message);
    if (message.message) return res.status(404).json(message);
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
