const express = require("express");
const cors = require("cors");
const http = require("http");
const { connectDB } = require("./db/database_connection");
const { initializeSocket } = require("./sockets/socketHandler");
const homeRoutes = require("./routes/home.route");
const authRoutes = require("./routes/auth.route");
const messageRoutes = require("./routes/message.route");
const userRoutes = require("./routes/user.route");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://chit-chat-app-rho.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const server = http.createServer(app);

//Initialize Socket.io.
initializeSocket(server);

//Database connection.
connectDB();

//Routes.
app.use("/", homeRoutes);
app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);
app.use("/users", userRoutes);

module.exports = { app, server };
