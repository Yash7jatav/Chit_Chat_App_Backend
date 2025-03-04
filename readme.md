# Real-Time Chat Application

## 📌 Overview

The **Real-Time Chat Application** enables instant messaging between users using WebSockets. This system allows users to register, log in, send and receive messages in real-time, and view a list of available users. The backend is built with **Node.js**, **Express.js**, and **Socket.io** for real-time communication.

## 🚀 Features

✅ **User Authentication**: Register and log in with secure authentication using **bcrypt** and **JWT**.  
✅ **Real-Time Messaging**: Send and receive messages instantly using **Socket.io**.  
✅ **User List**: Fetch a list of all registered users except the currently logged-in user.  
✅ **Secure Communication**: Encrypted password storage and JWT-based authentication.  
✅ **RESTful API**: Provides API endpoints for user management and message retrieval.  
✅ **Database Integration**: Uses **MongoDB** with **Mongoose** for efficient data handling.  
✅ **CORS Support**: Cross-origin requests handled using **CORS middleware**.

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js, Socket.io
- **Database:** MongoDB (Mongoose ORM)
- **Authentication & Security:** bcrypt, JWT
- **Testing:** Jest, Supertest
- **Deployment:** Render

---

## 📢 API Endpoints

### **Authentication Routes**

| Method   | Endpoint         | Description         |
| -------- | ---------------- | ------------------- |
| **POST** | `/auth/register` | Register a new user |
| **POST** | `/auth/login`    | Log in a user       |

### **User Routes**

| Method  | Endpoint | Description                                     |
| ------- | -------- | ----------------------------------------------- |
| **GET** | `/users` | Get a list of all users except the current user |

### **Message Routes**

| Method  | Endpoint    | Description                           |
| ------- | ----------- | ------------------------------------- |
| **GET** | `/messages` | Fetch chat messages between two users |

---

## 🔧 Installation & Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Yash7jatav/Chit_Chat_App.git
   cd RealTimeChatAppBackend
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Set up environment variables:**  
   Create a `.env` file in the root directory and add:

   ```sh
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the server:**

   ```sh
   npm start
   ```

   The API will be running on `http://localhost:5001`

5. **Run tests:**
   ```sh
   npm test
   ```

---

## 📌 Usage Instructions

- Use tools like **Postman** or **cURL** to test API endpoints.
- Ensure the server is running before making API calls.
- Include authentication tokens in headers for protected routes.

---

## 🌱 Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

✨ **Author**  
👨‍💻 Yash Jatav  
🔗 GitHub: [Yash7jatav](https://github.com/Yash7jatav)
