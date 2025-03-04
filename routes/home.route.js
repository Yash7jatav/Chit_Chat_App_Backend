const express = require("express");
const router = express.Router();

const homePageData = {
  projectTitle: "Real-Time Chat Application",
  description:
    "A real-time chat application that allows users to communicate instantly using WebSockets.",
  endpoints: [
    {
      method: "POST",
      endpoint: "/auth/register",
      description: "Register a new user",
    },
    {
      method: "POST",
      endpoint: "/auth/login",
      description: "User login and JWT authentication",
    },
    {
      method: "GET",
      endpoint: "/users",
      description: "Fetch all users except the current user",
    },
    {
      method: "GET",
      endpoint: "/messages",
      description: "Retrieve chat messages between two users",
    },
  ],
  technologyStack: [
    "Node.js",
    "Express.js",
    "Socket.io",
    "MongoDB",
    "JWT",
    "bcrypt",
  ],
  features: [
    "User authentication (JWT, bcrypt)",
    "Real-time messaging with Socket.io",
    "User list excluding current user",
    "Secure password storage",
    "RESTful API with Express.js",
  ],
};

router.get("/", (req, res) => {
  return res.status(200).json({ projectDetails: homePageData });
});

module.exports = router;
