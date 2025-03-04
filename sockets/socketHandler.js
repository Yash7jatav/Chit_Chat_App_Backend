const { Server } = require("socket.io");
const Message = require("../models/message.model");

//Socket.io logic.
async function initializeSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "https://chit-chat-app-rho.vercel.app",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("User connected: ", socket.id);

    socket.on("send_message", async (data) => {
      const { sender, receiver, message } = data;
      const newMessage = new Message({ sender, receiver, message });
      await newMessage.save();

      socket.broadcast.emit("receive_message: ", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected: ", socket.id);
    });
  });

  return io;
}

module.exports = { initializeSocket };
