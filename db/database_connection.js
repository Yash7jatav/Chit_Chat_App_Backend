const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoUri = process.env.MONGO_URI;

function connectDB() {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("Database connected.");
    })
    .catch((error) => {
      console.log("Unable to connect with database: ", error);
    });
}

module.exports = { connectDB };
