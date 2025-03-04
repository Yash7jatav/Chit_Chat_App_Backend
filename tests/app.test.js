const request = require("supertest");
const jwt = require("jsonwebtoken");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { registerNewUser, loginUser } = require("../controllers/index");
const { validateLogin } = require("../validations/index");
const { app } = require("../app");
dotenv.config();

jest.mock("../controllers/index", () => ({
  ...jest.requireActual("../controllers/index"),
  registerNewUser: jest.fn(),
  loginUser: jest.fn(),
}));

jest.mock("../validations/index", () => ({
  ...jest.requireActual("../validations/index"),
  validateLogin: jest.fn(),
}));

let token;
let server;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  server = app.listen(3001);
  token = jwt.sign({ id: 1, username: "testuser" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});

describe("CHATAPP ENDPOINTS", () => {
  it("/auth/register should register a new user", async () => {
    const mockResponse = {
      message: "User registered successfully.",
      userToken: token,
      username: "testUser1",
    };

    registerNewUser.mockResolvedValue(mockResponse);

    const response = await request(server).post("/auth/register").send({
      username: "testUser1",
      password: "testUser@123",
    });

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(mockResponse);
  });

  it("/auth/login should login a user", async () => {
    const mockResponse = {
      message: "User logged-in successfully.",
      username: "testUser1",
    };

    validateLogin.mockResolvedValue(null);
    loginUser.mockResolvedValue(mockResponse);

    const response = await request(server).post("/auth/login").send({
      username: "testUser1",
      password: "testUser@123",
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockResponse);
  });
});
