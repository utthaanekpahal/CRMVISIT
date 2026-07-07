import express from "express";
import { login } from "../controllers/loginController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// LOGIN
router.post("/login", login);
console.log("Auth routes loaded");
// PROTECTED DASHBOARD API (optional use)
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin",
    user: req.user,
  });
});

// ✅ ADD THIS: CHECK AUTH (BEST FOR REACT PROTECTED ROUTE)
router.get("/check-auth", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: false, // production me true
    sameSite: "lax",
  });

  res.json({
    success: true,
    message: "Logged out successfully",
  });
});

export default router;