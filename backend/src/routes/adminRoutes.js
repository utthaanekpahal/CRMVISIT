import express from "express";
import { createSubAdmin } from "../controllers/adminController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import superAdminMiddleware from "../middleware/superAdminMiddleware.js";

const router = express.Router();

router.post(
  "/create-subadmin",
  authMiddleware,
  superAdminMiddleware,
  createSubAdmin
);

export default router;