const express = require("express");
const { fetchAllUsers } = require("../controllers/index");
const router = express.Router();

//GET route to fetch list of users except current login user.
router.get("/", async (req, res) => {
  try {
    const { currentUser } = req.query;
    const allUsers = await fetchAllUsers(currentUser);
    if (allUsers.message) return res.status(404).json(allUsers);
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;
