import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});